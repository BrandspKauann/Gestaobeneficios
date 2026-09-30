"use client";

import { FormEvent, useMemo, useState } from "react";
import { formspreeEndpoint } from "../lib/formspree";

type Answers = Record<string, string>;

const questions = [
  { id: "employees", label: "Quantas pessoas trabalham hoje na empresa?", options: ["Até 150", "151 a 300", "301 a 600", "601 a 1.000", "Acima de 1.000"] },
  { id: "average_salary", label: "Em qual faixa está a média salarial?", options: ["Até R$ 2.500", "R$ 2.501 a R$ 5.000", "R$ 5.001 a R$ 8.000", "Acima de R$ 8.000"] },
  { id: "current_institution", label: "Qual instituição opera hoje a folha de pagamento?", placeholder: "Digite o nome, se souber" },
  { id: "current_return", label: "Como você avalia as condições atuais da folha?", options: ["Não sei informar", "Abaixo do esperado", "Dentro do esperado", "Acima do esperado"] },
  { id: "last_negotiation", label: "Quando foi a última negociação dessa estrutura?", options: ["Nos últimos 12 meses", "Entre 1 e 2 anos", "Há mais de 2 anos", "Nunca houve uma revisão formal"] },
  { id: "payroll_file", label: "Como a empresa gera e envia o arquivo de folha?", options: ["Sistema integrado", "Arquivo manual", "Portal da instituição", "Não sei informar"] },
  { id: "previous_change", label: "A empresa já trocou de instituição para a folha antes?", options: ["Sim, sem dificuldades", "Sim, com dificuldades", "Não", "Não sei informar"] },
  { id: "major_implementation", label: "Há alguma implantação importante em curso neste momento?", options: ["Não", "Sim, de RH", "Sim, de tecnologia", "Sim, outra frente estratégica"] },
  { id: "cnpjs", label: "Quantos CNPJs participam da operação?", options: ["1", "2 a 3", "4 a 10", "Mais de 10"] },
  { id: "rh_demand", label: "Com que frequência pessoas procuram o RH por temas de pagamento, conta ou Pix?", options: ["Raramente", "Algumas vezes por mês", "Toda semana", "Todos os dias"] },
  { id: "receipts", label: "Com que frequência o RH precisa recuperar comprovantes antigos?", options: ["Raramente", "Algumas vezes por mês", "Toda semana", "Todos os dias"] },
  { id: "credit_position", label: "Como a empresa enxerga soluções de crédito para colaboradores?", options: ["Não é uma prioridade", "Pode ser relevante", "É uma demanda recorrente", "Prefiro não responder"] },
  { id: "decision_maker", label: "Quem participa da decisão sobre a folha?", options: ["RH", "Financeiro", "Diretoria", "RH e Financeiro", "Mais de uma área"] },
];

const contactFields = [
  { id: "name", label: "Seu nome", type: "text", required: true },
  { id: "role", label: "Seu cargo", type: "text", required: true },
  { id: "company", label: "Empresa", type: "text", required: true },
  { id: "email", label: "E-mail corporativo", type: "email", required: true },
  { id: "whatsapp", label: "WhatsApp (opcional)", type: "tel", required: false },
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
  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step]);

  function updateAnswer(key: string, value: string) {
    if (!started) {
      setStarted(true);
      emitEvent("diagnostico_start", { form_id: "diagnostico_folha" });
    }
    setAnswers((previous) => ({ ...previous, [key]: value }));
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
    if (!answers.name || !answers.role || !answers.company || !answers.email || !answers.lgpd) {
      setError("Preencha os dados obrigatórios e aceite o tratamento dos dados para enviar.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const data = new FormData(event.currentTarget);
      Object.entries(answers).forEach(([key, value]) => data.set(key, value));
      data.set("_subject", "Novo diagnóstico de folha recebido");
      data.set("tipo_formulario", "Diagnóstico de folha");
      data.set("pagina", window.location.pathname);
      new URLSearchParams(window.location.search).forEach((value, key) => data.set(key.startsWith("utm_") ? key : `utm_${key}`, value));
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("request_failed");
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
    return <section className="folha-form folha-success" aria-live="polite"><p className="eyebrow">Recebemos seu diagnóstico</p><h2>Obrigado por compartilhar o contexto da sua empresa.</h2><p>Uma pessoa da equipe fará a leitura e retornará em até dois dias úteis. Se preferir, você também pode iniciar uma conversa pelo WhatsApp.</p><a className="button button-secondary" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20enviei%20o%20diagn%C3%B3stico%20de%20folha%20e%20gostaria%20de%20falar%20com%20a%20equipe." onClick={() => emitEvent("whatsapp_click", { placement: "diagnostico_folha_obrigado" })}>Falar no WhatsApp</a></section>;
  }

  return <section className="folha-form" id="iniciar-diagnostico">
    <div className="folha-progress" aria-label={`Etapa ${step + 1} de ${totalSteps}`}><span style={{ width: `${progress}%` }} /></div>
    <p className="folha-step">Etapa {step + 1} de {totalSteps}</p>
    {step < questions.length ? <div className="folha-question">
      <h2>{currentQuestion.label}</h2>
      {currentQuestion.options ? <div className="folha-options">{currentQuestion.options.map((option) => <button type="button" className={answers[currentQuestion.id] === option ? "selected" : ""} key={option} onClick={() => updateAnswer(currentQuestion.id, option)}>{option}</button>)}</div> : <input aria-label={currentQuestion.label} value={answers[currentQuestion.id] || ""} onChange={(event) => updateAnswer(currentQuestion.id, event.target.value)} placeholder={currentQuestion.placeholder} />}
      {error && <p className="folha-error">{error}</p>}
      <div className="folha-actions"><button type="button" className="text-button" onClick={back} disabled={step === 0}>Voltar</button><button type="button" className="button" onClick={next}>Continuar</button></div>
    </div> : <form action={formspreeEndpoint} method="POST" onSubmit={submit} className="folha-contact">
      <h2>Para onde enviamos o retorno?</h2><p>Usamos estes dados somente para responder ao seu diagnóstico.</p>
      <div className="folha-contact-grid">{contactFields.map((field) => <label key={field.id}>{field.label}<input name={field.id} type={field.type} required={field.required} value={answers[field.id] || ""} onChange={(event) => updateAnswer(field.id, event.target.value)} /></label>)}</div>
      <fieldset><legend>Como prefere receber o retorno?</legend><label><input type="radio" name="return_preference" value="E-mail" checked={answers.return_preference === "E-mail"} onChange={(event) => updateAnswer("return_preference", event.target.value)} /> Por e-mail</label><label><input type="radio" name="return_preference" value="Conversa de 20 minutos" checked={answers.return_preference === "Conversa de 20 minutos"} onChange={(event) => updateAnswer("return_preference", event.target.value)} /> Em uma conversa de 20 minutos</label></fieldset>
      <label className="lgpd"><input type="checkbox" name="lgpd" value="accepted" checked={answers.lgpd === "accepted"} onChange={(event) => updateAnswer("lgpd", event.target.checked ? "accepted" : "")} /> Autorizo o tratamento dos meus dados para receber o retorno deste diagnóstico, conforme a política de privacidade.</label>
      {error && <p className="folha-error">{error}</p>}
      <div className="folha-actions"><button type="button" className="text-button" onClick={back}>Voltar</button><button className="button" disabled={sending}>{sending ? "Enviando…" : "Enviar diagnóstico"}</button></div>
    </form>}
  </section>;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, event: string, params?: Record<string, string | number>) => void;
  }
}
