"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { FaCheck, FaLock } from "react-icons/fa6";
import { formspreeEndpoint } from "../lib/formspree";

type Answers = Record<string, string>;

const questions = [
  { id: "employees", label: "Quantos colaboradores a empresa tem, somando todos os CNPJs do grupo?", options: ["Até 30", "31 a 150", "151 a 500", "501 a 1.500", "Acima de 1.500"] },
  { id: "average_salary", label: "Qual é a faixa de salário médio dos colaboradores?", options: ["Até 2 salários mínimos", "De 2 a 3 salários mínimos", "De 3 a 5 salários mínimos", "Acima de 5 salários mínimos"] },
  { id: "current_institution", label: "Qual instituição financeira processa a folha hoje?", placeholder: "Digite o nome, se souber" },
  { id: "current_return", label: "O que a empresa recebe hoje da instituição financeira pela folha?", options: ["Nada", "Somente isenção de tarifas", "Algum pagamento em dinheiro", "Não sei informar"] },
  { id: "last_negotiation", label: "Quando essa condição foi negociada pela última vez?", options: ["Nunca ou não sei", "Há mais de 3 anos", "Nos últimos 3 anos"] },
  { id: "payroll_file", label: "Quem gera o arquivo da folha?", options: ["Sistema de folha, como o Domínio", "Contabilidade externa", "Planilha", "Sistema próprio ou ERP"] },
  { id: "previous_change", label: "A empresa já trocou de instituição para a folha antes?", options: ["Nunca", "Sim, foi tranquilo", "Sim, foi difícil"] },
  { id: "major_implementation", label: "Existe alguma implantação grande acontecendo agora, como sistema novo, mudança de benefícios ou fusão?", options: ["Não", "Sim"] },
  { id: "cnpjs", label: "Quantos CNPJs ou unidades pagam folha separadamente?", options: ["Um", "De 2 a 5", "Mais de 5"] },
  { id: "rh_demand", label: "Com que frequência colaboradores procuram o RH por problemas com salário, conta ou Pix?", options: ["Raramente", "Algumas vezes por mês", "Toda semana", "Todos os dias"] },
  { id: "receipts", label: "Com que frequência o RH precisa buscar comprovantes de pagamento antigos?", options: ["Raramente", "Às vezes", "Com frequência"] },
  { id: "credit_position", label: "Qual é a posição da empresa sobre crédito oferecido aos colaboradores?", options: ["Preferimos evitar qualquer oferta", "Neutra", "Gostaríamos de uma opção com limites responsáveis"] },
  { id: "decision_maker", label: "Quem decide sobre a folha na empresa?", options: ["RH", "Financeiro", "Dono ou diretoria", "Decisão conjunta"] },
];

const blocks = [
  { label: "Valor atual", description: "Porte, salários e condições da operação", start: 0, end: 4 },
  { label: "Custo de mudar", description: "Sistemas, histórico e complexidade da implantação", start: 5, end: 8 },
  { label: "Rotina do RH", description: "Demandas, comprovantes e posição da empresa", start: 9, end: 12 },
  { label: "Contato", description: "Dados para receber a devolutiva", start: 13, end: 13 },
];

const contactFields = [
  { id: "name", label: "Seu nome", type: "text", required: true, autoComplete: "name" },
  { id: "role", label: "Seu cargo", type: "text", required: true, autoComplete: "organization-title" },
  { id: "company", label: "Empresa", type: "text", required: true, autoComplete: "organization" },
  { id: "email", label: "E-mail corporativo", type: "email", required: true, autoComplete: "email" },
  { id: "whatsapp", label: "WhatsApp (opcional)", type: "tel", required: false, autoComplete: "tel" },
];

function emitEvent(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}

export function FolhaDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [started, setStarted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const totalSteps = questions.length + 1;
  const currentQuestion = questions[step];
  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step, totalSteps]);
  const currentBlockIndex = step <= 4 ? 0 : step <= 8 ? 1 : step <= 12 ? 2 : 3;
  const currentBlock = blocks[currentBlockIndex];

  useEffect(() => {
    const handleClick = (event: Event) => {
      const placement = (event.currentTarget as HTMLElement).dataset.folhaStart || "page";
      emitEvent("diagnostico_cta_click", { form_id: "diagnostico_folha", placement });
    };
    const buttons = document.querySelectorAll<HTMLElement>("[data-folha-start]");
    buttons.forEach((button) => button.addEventListener("click", handleClick));
    return () => buttons.forEach((button) => button.removeEventListener("click", handleClick));
  }, []);

  useEffect(() => {
    if (done) {
      document.getElementById("iniciar-diagnostico")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [done]);

  function updateAnswer(key: string, value: string) {
    if (!started) {
      setStarted(true);
      emitEvent("diagnostico_start", { form_id: "diagnostico_folha" });
    }
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setError("");
  }

  function next() {
    const key = currentQuestion?.id;
    if (key && !answers[key]?.trim()) {
      setError("Escolha ou informe uma resposta para continuar.");
      return;
    }
    setError("");
    emitEvent("diagnostico_step_complete", { form_id: "diagnostico_folha", step_id: key, step_index: step + 1 });
    setStep((current) => Math.min(current + 1, totalSteps - 1));
  }

  function back() {
    setError("");
    setStep((current) => Math.max(0, current - 1));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!answers.name || !answers.role || !answers.company || !answers.email || !answers.return_preference || answers.lgpd !== "accepted") {
      setError("Preencha os dados obrigatórios, escolha como receber o retorno e aceite o tratamento dos dados.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/diagnostico-folha", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          utm: Object.fromEntries(new URLSearchParams(window.location.search).entries()),
          pagePath: window.location.pathname,
        }),
      });
      if (!response.ok) throw new Error("request_failed");
      emitEvent("diagnostico_step_complete", { form_id: "diagnostico_folha", step_id: "contact", step_index: totalSteps });
      emitEvent("diagnostic_complete", { form_id: "diagnostico_folha" });
      emitEvent("generate_lead", { form_id: "diagnostico_folha", form_name: "Diagnóstico de folha" });
      setDone(true);
    } catch {
      setError("Não foi possível enviar agora. Tente novamente em alguns instantes ou fale conosco pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    const firstName = answers.name?.trim().split(/\s+/)[0] || "";
    return <section className="folha-form folha-success" id="iniciar-diagnostico" aria-live="polite"><div className="folha-success-mark"><FaCheck aria-hidden="true" /></div><p className="folha-kicker">Diagnóstico recebido</p><h2>Obrigado, {firstName}.</h2><p>Em até dois dias úteis você recebe a devolutiva no contato informado. Se preferir conversar antes, é só chamar no WhatsApp.</p><a className="button folha-secondary-button" href="https://wa.me/5511938020789?text=Ol%C3%A1%2C%20enviei%20o%20diagn%C3%B3stico%20de%20folha%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noreferrer" onClick={() => emitEvent("whatsapp_click", { placement: "diagnostico_folha_obrigado" })}>Falar no WhatsApp</a></section>;
  }

  return <section className="folha-form" id="iniciar-diagnostico">
    <aside className="folha-form-aside">
      <p className="folha-kicker">Seu diagnóstico</p>
      <div className="folha-progress-copy"><strong>{step < questions.length ? `Pergunta ${step + 1} de ${questions.length}` : "Dados para devolutiva"}</strong><span>{progress}%</span></div>
      <div className="folha-progress" role="progressbar" aria-label="Progresso do diagnóstico" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ width: `${progress}%` }} /></div>
      <p className="folha-block-description">{currentBlock.description}</p>
      <ol className="folha-blocks">
        {blocks.map((block, index) => <li className={index === currentBlockIndex ? "current" : index < currentBlockIndex ? "complete" : ""} key={block.label}><span>{index < currentBlockIndex ? <FaCheck aria-hidden="true" /> : index + 1}</span><b>{block.label}</b></li>)}
      </ol>
      <div className="folha-form-security"><FaLock aria-hidden="true" /><span>Seus dados são usados somente para preparar a devolutiva.</span></div>
    </aside>

    <div className="folha-form-content">
      {step < questions.length ? <div className="folha-question">
        <p className="folha-step">{currentBlock.label}</p>
        <h2>{currentQuestion.label}</h2>
        {currentQuestion.options ? <div className="folha-options">{currentQuestion.options.map((option) => <button type="button" aria-pressed={answers[currentQuestion.id] === option} className={answers[currentQuestion.id] === option ? "selected" : ""} key={option} onClick={() => updateAnswer(currentQuestion.id, option)}><span>{answers[currentQuestion.id] === option ? <FaCheck aria-hidden="true" /> : null}</span>{option}</button>)}</div> : <label className="folha-open-answer"><span>Sua resposta</span><input name={currentQuestion.id} aria-label={currentQuestion.label} value={answers[currentQuestion.id] || ""} onChange={(event) => updateAnswer(currentQuestion.id, event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") next(); }} placeholder={currentQuestion.placeholder} autoComplete="organization" /></label>}
        {error && <p className="folha-error" role="alert">{error}</p>}
        <div className="folha-actions"><button type="button" className="text-button" onClick={back} disabled={step === 0}>Voltar</button><button type="button" className="button folha-form-next" onClick={next}>Continuar</button></div>
      </div> : <form action={formspreeEndpoint} method="POST" onSubmit={submit} className="folha-contact">
        <p className="folha-step">Contato somente no final</p>
        <h2>Para onde enviamos a devolutiva?</h2>
        <p>Usamos estes dados somente para preparar a análise e responder ao diagnóstico.</p>
        <div className="folha-contact-grid">{contactFields.map((field) => <label key={field.id}>{field.label}<input name={field.id} type={field.type} required={field.required} autoComplete={field.autoComplete} value={answers[field.id] || ""} onChange={(event) => updateAnswer(field.id, event.target.value)} /></label>)}</div>
        <fieldset><legend>Como prefere receber a devolutiva?</legend><label><input type="radio" name="return_preference" value="E-mail" required checked={answers.return_preference === "E-mail"} onChange={(event) => updateAnswer("return_preference", event.target.value)} /> Por e-mail</label><label><input type="radio" name="return_preference" value="Conversa de 20 minutos" required checked={answers.return_preference === "Conversa de 20 minutos"} onChange={(event) => updateAnswer("return_preference", event.target.value)} /> Em uma conversa de 20 minutos</label></fieldset>
        <label className="lgpd"><input type="checkbox" name="lgpd" value="accepted" required checked={answers.lgpd === "accepted"} onChange={(event) => updateAnswer("lgpd", event.target.checked ? "accepted" : "")} /><span>Autorizo a Hirayama Corretora &amp; Consultoria a usar estes dados para preparar a devolutiva do diagnóstico e entrar em contato sobre o tema. Posso pedir a exclusão a qualquer momento.</span></label>
        {error && <p className="folha-error" role="alert">{error}</p>}
        <div className="folha-actions"><button type="button" className="text-button" onClick={back}>Voltar</button><button type="submit" className="button folha-form-next" disabled={sending}>{sending ? "Enviando..." : "Enviar diagnóstico"}</button></div>
      </form>}
    </div>
  </section>;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, event: string, params?: Record<string, string | number>) => void;
  }
}
