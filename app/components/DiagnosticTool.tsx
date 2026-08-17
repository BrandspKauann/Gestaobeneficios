"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

type Answers = {
  employees: number;
  suppliers: number;
  hours: number;
  process: "manual" | "partial" | "integrated";
  errors: "rare" | "sometimes" | "frequent";
  pain: "operation" | "wellbeing" | "legal" | "finance" | "cards";
};

const initial: Answers = { employees: 80, suppliers: 5, hours: 7, process: "manual", errors: "sometimes", pain: "operation" };

const painRoutes = {
  operation: { label: "Gestão integrada à folha", href: "/categorias/gestao-integrada-folha", note: "A prioridade é reduzir portais, planilhas e conferências paralelas." },
  wellbeing: { label: "Saúde e bem-estar", href: "/categorias/vale-saude-bem-estar", note: "A prioridade é ampliar acesso ao cuidado com uma estrutura proporcional ao seu cenário." },
  legal: { label: "Cuidado jurídico", href: "/categorias/beneficio-juridico", note: "A prioridade é orientar questões pessoais antes que elas consumam foco e tempo de trabalho." },
  finance: { label: "Saúde financeira", href: "/categorias/antecipacao-salarial", note: "A prioridade é criar uma saída responsável para imprevistos financeiros." },
  cards: { label: "Cartões e vales", href: "https://www.consultoriavr.com.br", note: "Esta frente é analisada pela Consultoria VR, especialista do ecossistema Hirayama." },
};

export function DiagnosticTool() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const result = useMemo(() => {
    const processRisk = answers.process === "manual" ? 22 : answers.process === "partial" ? 11 : 3;
    const errorRisk = answers.errors === "frequent" ? 18 : answers.errors === "sometimes" ? 9 : 2;
    const score = Math.max(12, Math.min(96, Math.round(100 - answers.suppliers * 4.5 - answers.hours * 1.25 - processRisk - errorRisk)));
    const monthlyHours = Math.round(answers.hours * 4.33);
    const hiddenCost = Math.round((monthlyHours * 72 + answers.employees * (errorRisk / 100) * 18) / 100) * 100;
    const risk = Math.min(42, Math.round(answers.suppliers * 1.7 + processRisk * .55 + errorRisk * .55));
    const level = score < 40 ? "crítico" : score < 65 ? "atenção" : "controlado";
    return { score, monthlyHours, hiddenCost, risk, level, route: painRoutes[answers.pain] };
  }, [answers]);

  function update<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSending(true);
    const data = new FormData(event.currentTarget);
    data.append("diagnostico", `Índice ${result.score}/100; ${result.monthlyHours}h/mês; risco ${result.risk}%; prioridade ${result.route.label}`);
    try {
      const response = await fetch("https://formspree.io/f/mbdppnkr", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("submit");
      setSent(true);
    } catch {
      window.open("https://wa.link/3gwhbl", "_blank", "noopener,noreferrer");
    } finally { setSending(false); }
  }

  return (
    <section className="diagnostic-tool">
      <div className="tool-head">
        <div><span>DIAGNÓSTICO DE ENTRADA</span><h2>{step < 3 ? "Mapeie a operação em menos de 3 minutos." : "Seu mapa inicial está pronto."}</h2></div>
        <div className="step-status"><b>0{step}</b><span>/ 03</span></div>
      </div>
      <div className="progress-line"><i style={{ width: `${step * 33.333}%` }} /></div>

      {step === 1 && <div className="tool-grid">
        <div className="question-block">
          <label htmlFor="employees">Quantos colaboradores a empresa tem?</label>
          <div className="number-input"><input id="employees" type="number" min="1" max="100000" value={answers.employees} onChange={(e) => update("employees", Number(e.target.value))} /><span>pessoas</span></div>
        </div>
        <div className="question-block range-block">
          <label htmlFor="suppliers">Quantos fornecedores de benefícios são administrados?</label>
          <div className="range-value"><strong>{answers.suppliers}</strong><span>fornecedores</span></div>
          <input id="suppliers" type="range" min="1" max="15" value={answers.suppliers} onChange={(e) => update("suppliers", Number(e.target.value))} style={{ "--value": `${((answers.suppliers - 1) / 14) * 100}%` } as React.CSSProperties} />
          <div className="range-labels"><span>1</span><span>15+</span></div>
        </div>
        <div className="question-block range-block">
          <label htmlFor="hours">Horas semanais gastas em movimentação e conferência</label>
          <div className="range-value"><strong>{answers.hours}h</strong><span>por semana</span></div>
          <input id="hours" type="range" min="1" max="30" value={answers.hours} onChange={(e) => update("hours", Number(e.target.value))} style={{ "--value": `${((answers.hours - 1) / 29) * 100}%` } as React.CSSProperties} />
          <div className="range-labels"><span>1h</span><span>30h+</span></div>
        </div>
      </div>}

      {step === 2 && <div className="tool-grid choices-grid">
        <fieldset className="question-block"><legend>Como os dados chegam à folha?</legend>
          <Choice label="Planilhas e digitação manual" active={answers.process === "manual"} onClick={() => update("process", "manual")} />
          <Choice label="Parte integrada, parte manual" active={answers.process === "partial"} onClick={() => update("process", "partial")} />
          <Choice label="Fluxo majoritariamente integrado" active={answers.process === "integrated"} onClick={() => update("process", "integrated")} />
        </fieldset>
        <fieldset className="question-block"><legend>Com que frequência surgem ajustes?</legend>
          <Choice label="Raramente" active={answers.errors === "rare"} onClick={() => update("errors", "rare")} />
          <Choice label="Em alguns fechamentos" active={answers.errors === "sometimes"} onClick={() => update("errors", "sometimes")} />
          <Choice label="Quase todo mês" active={answers.errors === "frequent"} onClick={() => update("errors", "frequent")} />
        </fieldset>
        <fieldset className="question-block pain-choice"><legend>Qual dor mais pede atenção hoje?</legend>
          <Choice label="Operação e integração" active={answers.pain === "operation"} onClick={() => update("pain", "operation")} />
          <Choice label="Saúde e bem-estar" active={answers.pain === "wellbeing"} onClick={() => update("pain", "wellbeing")} />
          <Choice label="Questões jurídicas" active={answers.pain === "legal"} onClick={() => update("pain", "legal")} />
          <Choice label="Saúde financeira" active={answers.pain === "finance"} onClick={() => update("pain", "finance")} />
          <Choice label="Cartões, VA ou VR" active={answers.pain === "cards"} onClick={() => update("pain", "cards")} />
        </fieldset>
      </div>}

      {step === 3 && <div className="result-layout">
        <div className="result-score">
          <span>ÍNDICE DE MATURIDADE</span><div><strong>{result.score}</strong><small>/100</small></div>
          <b className={`level level-${result.level}`}>Nível {result.level}</b>
          <p>Este índice é uma estimativa inicial, não uma auditoria conclusiva.</p>
        </div>
        <div className="result-metrics">
          <article><span>ROTINA OPERACIONAL</span><strong>{result.monthlyHours}h</strong><p>estimadas por mês</p></article>
          <article><span>CUSTO OCULTO</span><strong>{result.hiddenCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}</strong><p>estimativa mensal</p></article>
          <article><span>RISCO DE DIVERGÊNCIA</span><strong>{result.risk}%</strong><p>exposição estimada</p></article>
          <article className="priority-card"><span>PRIORIDADE SUGERIDA</span><strong>{result.route.label}</strong><p>{result.route.note}</p><Link href={result.route.href} target={answers.pain === "cards" ? "_blank" : undefined}>Entender esta frente ↗</Link></article>
        </div>
        <div className="assumptions"><b>Premissas visíveis</b><p>4,33 semanas/mês · custo-hora de RH de R$ 72 · risco ponderado por fornecedores, nível de integração e frequência de ajustes. Ajuste estas premissas em uma conversa de diagnóstico.</p></div>
        <div className="lead-panel">
          {!sent ? <><div><span>RECEBA UMA LEITURA HUMANA</span><h3>Quer validar este resultado com um especialista?</h3><p>Envie seus dados. A conversa começa pelo cenário — sem indicação automática de fornecedor.</p></div>
          <form onSubmit={submitLead}><input name="nome" required placeholder="Seu nome" aria-label="Seu nome" /><input name="empresa" required placeholder="Empresa" aria-label="Empresa" /><input name="email" type="email" required placeholder="E-mail corporativo" aria-label="E-mail corporativo" /><button className="button" disabled={sending}>{sending ? "Enviando..." : "Quero validar o diagnóstico"} <span>↗</span></button></form></> :
          <div className="success-message"><span>✓</span><h3>Recebemos seu diagnóstico.</h3><p>O próximo contato partirá deste cenário, não de uma lista de produtos.</p></div>}
        </div>
      </div>}

      <div className="tool-actions">
        {step > 1 && <button className="back-button" onClick={() => setStep((current) => current - 1)}>← Voltar</button>}
        {step < 3 && <button className="button" onClick={() => setStep((current) => current + 1)}>{step === 1 ? "Continuar" : "Calcular diagnóstico"} <span>↗</span></button>}
      </div>
    </section>
  );
}

function Choice({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return <button type="button" className={`choice ${active ? "active" : ""}`} onClick={onClick}><span>{active ? "✓" : ""}</span>{label}</button>;
}
