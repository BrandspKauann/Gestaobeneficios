import { createSign } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { formspreeEndpoint } from "../../lib/formspree";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sheetId = process.env.FOLHA_SHEET_ID ?? "1MlzZOiqIcOCzTg-biUqJt-TYItNz85Hi37Jt00CtIDo";

type ServiceAccount = { client_email: string; private_key: string };
type Submission = {
  answers: Record<string, string>;
  contact: Record<string, string>;
  attribution: Record<string, string>;
  classification: string;
};

const fields = [
  "submitted_at", "classification", "utm_source", "utm_medium", "utm_campaign", "page_path",
  "employees", "average_salary", "current_institution", "current_return", "last_negotiation",
  "payroll_file", "previous_change", "major_implementation", "cnpjs", "rh_demand",
  "receipts", "credit_position", "decision_maker", "name", "role", "company", "email",
  "whatsapp", "return_preference",
];

function credentials(): ServiceAccount {
  const raw = process.env.GOOGLE_SHEETS_CREDENTIALS ?? process.env.GOOGLE_ANALYTICS_CREDENTIALS;
  if (!raw) throw new Error("Credencial da planilha não configurada.");
  const parsed = JSON.parse(raw) as Partial<ServiceAccount>;
  if (!parsed.client_email || !parsed.private_key) throw new Error("Credencial da planilha incompleta.");
  return parsed as ServiceAccount;
}

function base64url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

async function googleAccessToken(serviceAccount: ServiceAccount) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: issuedAt,
    exp: issuedAt + 3600,
  }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const assertion = `${header}.${claim}.${signer.sign(serviceAccount.private_key).toString("base64url")}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
  });
  if (!response.ok) throw new Error("Não foi possível autenticar a planilha.");
  const body = await response.json() as { access_token?: string };
  if (!body.access_token) throw new Error("Token da planilha não retornado.");
  return body.access_token;
}

async function appendToSheet(submission: Submission) {
  const token = await googleAccessToken(credentials());
  const values = fields.map((field) => {
    if (field === "submitted_at") return new Date().toISOString();
    if (field === "classification") return submission.classification;
    if (field.startsWith("utm_") || field === "page_path") return submission.attribution[field] ?? "";
    return submission.answers[field] ?? submission.contact[field] ?? "";
  });
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent("Respostas!A:Y")}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [values] }),
    },
  );
  if (!response.ok) throw new Error("Não foi possível gravar a resposta na planilha.");
}

async function sendToFormspree(submission: Submission) {
  const response = await fetch(formspreeEndpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      _subject: "Novo diagnóstico de folha recebido",
      tipo_formulario: "Diagnóstico de folha",
      classificacao_interna: submission.classification,
      ...submission.attribution,
      ...submission.answers,
    }),
  });
  if (!response.ok) throw new Error("Não foi possível encaminhar o diagnóstico por e-mail.");
}

function validate(payload: unknown): Submission | null {
  if (!payload || typeof payload !== "object") return null;
  const candidate = payload as {
    answers?: Record<string, unknown>;
    utm?: Record<string, unknown>;
    pagePath?: unknown;
    classification?: unknown;
  };
  if (!candidate.answers || !candidate.utm || typeof candidate.pagePath !== "string") return null;
  const answers = Object.fromEntries(Object.entries(candidate.answers)
    .filter(([key, value]) => typeof key === "string" && typeof value === "string")
    .map(([key, value]) => [key, String(value).slice(0, 1000)]));
  if (!answers.name || !answers.role || !answers.company || !answers.email || !answers.return_preference || answers.lgpd !== "accepted") return null;
  const attribution = Object.fromEntries(Object.entries(candidate.utm)
    .filter(([key, value]) => typeof key === "string" && typeof value === "string")
    .map(([key, value]) => [key, String(value).slice(0, 300)]));
  return {
    answers,
    contact: { name: answers.name, role: answers.role, company: answers.company, email: answers.email, whatsapp: answers.whatsapp ?? "" },
    attribution: { ...attribution, page_path: candidate.pagePath.slice(0, 300) },
    classification: classify(answers),
  };
}

// Resultado interno: não é devolvido à pessoa que preenche o diagnóstico.
function points(values: Record<string, number>, answer: string) {
  return values[answer] ?? 0;
}

function classify(answers: Record<string, string>) {
  if (answers.employees === "Até 30" || answers.average_salary === "Acima de 5 salários mínimos") return "Fique onde está";
  if (answers.major_implementation === "Sim") return "Fique por agora e revise em 6 meses";
  if (answers.credit_position === "Preferimos evitar qualquer oferta") return "Revisão manual";

  const valueScore =
    points({ "31 a 150": 1, "151 a 500": 3, "501 a 1.500": 4, "Acima de 1.500": 4 }, answers.employees) +
    points({ "Até 2 salários mínimos": 3, "De 2 a 3 salários mínimos": 2, "De 3 a 5 salários mínimos": 1 }, answers.average_salary) +
    points({ "Nada": 3, "Somente isenção de tarifas": 2, "Algum pagamento em dinheiro": 0, "Não sei informar": 2 }, answers.current_return) +
    points({ "Nunca ou não sei": 2, "Há mais de 3 anos": 1, "Nos últimos 3 anos": 0 }, answers.last_negotiation);
  const changeCost =
    points({ "Sistema de folha, como o Domínio": 0, "Contabilidade externa": 1, "Planilha": 1, "Sistema próprio ou ERP": 2 }, answers.payroll_file) +
    points({ "Nunca": 1, "Sim, foi tranquilo": 0, "Sim, foi difícil": 2 }, answers.previous_change) +
    points({ "Um": 0, "De 2 a 5": 1, "Mais de 5": 2 }, answers.cnpjs);
  const operationalPressure =
    points({ "Raramente": 0, "Algumas vezes por mês": 1, "Toda semana": 2, "Todos os dias": 3 }, answers.rh_demand) +
    points({ "Raramente": 0, "Às vezes": 1, "Com frequência": 2 }, answers.receipts) +
    points({ "Neutra": 0, "Gostaríamos de uma opção com limites responsáveis": 1 }, answers.credit_position);

  if (valueScore >= 8 && operationalPressure >= 3 && changeCost <= 3) {
    return answers.current_return === "Algum pagamento em dinheiro" ? "Vale estudar uma mudança" : "A mudança faz sentido agora";
  }
  if (valueScore >= 5) return "Vale estudar uma mudança";
  return "Fique e renegocie";
}

export async function POST(request: NextRequest) {
  try {
    const submission = validate(await request.json());
    if (!submission) return NextResponse.json({ error: "Dados do diagnóstico incompletos." }, { status: 400 });
    await sendToFormspree(submission);
    let sheetSaved = false;
    try {
      await appendToSheet(submission);
      sheetSaved = true;
    } catch (sheetError) {
      console.error("Não foi possível gravar o diagnóstico na planilha.", sheetError);
    }
    return NextResponse.json({ ok: true, sheetSaved });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível enviar o diagnóstico.";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
