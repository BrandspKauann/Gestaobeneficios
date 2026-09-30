import { createSign } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { formspreeEndpoint } from "../../lib/formspree";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sheetId = process.env.FOLHA_SHEET_ID ?? "1MlzZOiqIcOCzTg-biUqJt-TYItNz85Hi37Jt00CtIDo";
const recipientEmails = [
  "ewerton@hirayamacorretora.com.br",
  "hirayama.ewerton@gmail.com",
];

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
      recipients: recipientEmails.join(", "),
      classification: submission.classification,
      attribution: submission.attribution,
      answers: submission.answers,
      contact: submission.contact,
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
  if (!answers.name || !answers.role || !answers.company || !answers.email || answers.lgpd !== "accepted") return null;
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
function classify(answers: Record<string, string>) {
  if (answers.major_implementation !== "Não" || answers.average_salary === "Acima de R$ 8.000") {
    return "Fique e renegocie";
  }
  if (
    answers.current_return === "Abaixo do esperado" ||
    answers.last_negotiation === "Há mais de 2 anos" ||
    answers.last_negotiation === "Nunca houve uma revisão formal"
  ) {
    return "Vale estudar uma mudança";
  }
  return "A mudança faz sentido agora";
}

export async function POST(request: NextRequest) {
  try {
    const submission = validate(await request.json());
    if (!submission) return NextResponse.json({ error: "Dados do diagnóstico incompletos." }, { status: 400 });
    await Promise.all([appendToSheet(submission), sendToFormspree(submission)]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível enviar o diagnóstico.";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
