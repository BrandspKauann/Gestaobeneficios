import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { FolhaDiagnostic } from "../components/FolhaDiagnostic";

export const metadata: Metadata = {
  title: "Quanto vale a folha da sua empresa? Diagnóstico gratuito",
  description: "Em quatro minutos, entenda se vale a pena rever a estrutura de pagamento de salários da sua empresa. Diagnóstico independente e gratuito.",
  alternates: { canonical: "https://www.gestaobeneficios.com.br/diagnostico-folha" },
};

export default function DiagnosticoFolhaPage() {
  return <main className="folha-page"><SiteHeader />
    <section className="folha-hero"><p className="eyebrow"><span /> Diagnóstico independente</p><h1>Quanto vale a folha da sua empresa?</h1><p>Em cerca de quatro minutos, avalie como sua empresa paga salários e receba uma devolutiva humana para decidir com mais clareza.</p><a className="button" href="#diagnostico-folha">Fazer o diagnóstico</a><small>4 minutos. Sem custo. Uma das respostas possíveis é: fique onde está.</small></section>
    <section className="folha-section folha-problem"><p className="eyebrow"><span /> Antes de mudar</p><h2>Uma decisão grande, quase sempre tomada no automático.</h2><div className="folha-cards"><article><b>01</b><h3>Folha é uma decisão financeira</h3><p>Mesmo assim, muitas empresas recebem apenas isenção de tarifas em troca dessa operação.</p></article><article><b>02</b><h3>O RH absorve o impacto</h3><p>Comprovantes, acessos e conversas com a instituição podem consumir tempo estratégico.</p></article><article><b>03</b><h3>Mudança exige método</h3><p>Uma implantação mal planejada pode transformar uma decisão válida em uma dor operacional.</p></article></div></section>
    <section className="folha-section folha-process"><p className="eyebrow"><span /> Como funciona</p><h2>Você responde. Nós devolvemos uma leitura clara.</h2><ol><li><b>1.</b><span><strong>Você responde.</strong> Treze perguntas sobre porte, estrutura atual e rotina do RH.</span></li><li><b>2.</b><span><strong>Você recebe a devolutiva.</strong> Em até dois dias úteis, com a leitura do seu caso.</span></li><li><b>3.</b><span><strong>Se fizer sentido, conversamos.</strong> Uma conversa de 20 minutos, sem compromisso.</span></li></ol></section>
    <section className="folha-section folha-criteria"><p className="eyebrow"><span /> O que avaliamos</p><h2>Critérios que vêm antes de qualquer decisão.</h2><div className="folha-criteria-grid"><article><b>01</b><h3>Autorização</h3><p>A instituição é autorizada pelo Banco Central?</p></article><article><b>02</b><h3>Modelo de negócio</h3><p>Como a estrutura se sustenta e quais são seus limites?</p></article><article><b>03</b><h3>Atendimento</h3><p>Quem ajuda o colaborador quando há dificuldade de acesso?</p></article><article><b>04</b><h3>Implantação</h3><p>A transição pode acontecer por etapas, sem interromper salários?</p></article><article><b>05</b><h3>Comprovantes</h3><p>O RH acessa documentos históricos com autonomia?</p></article><article><b>06</b><h3>Retorno para a empresa</h3><p>Quais condições a empresa recebe pela operação atual?</p></article></div></section>
    <section className="folha-transparency"><p><strong>Transparência:</strong> A Hirayama pode ser remunerada por instituições financeiras eventualmente indicadas. Por isso, este diagnóstico pode recomendar permanecer onde está quando esse for o melhor caminho para a empresa.</p></section>
    <section id="diagnostico-folha" className="folha-tool-section"><FolhaDiagnostic /></section>
    <section className="folha-section folha-faq"><p className="eyebrow"><span /> Perguntas frequentes</p><h2>Decisão com contexto, não com pressão.</h2><details><summary>Vocês são um banco?<span>+</span></summary><p>Não. O diagnóstico é independente e avalia se faz sentido rever a estrutura atual.</p></details><details><summary>O diagnóstico tem custo?<span>+</span></summary><p>Não. A devolutiva inicial é gratuita.</p></details><details><summary>E se a recomendação for ficar onde estou?<span>+</span></summary><p>Você recebe argumentos para renegociar e evita uma mudança que não compensa.</p></details><details><summary>O que acontece com meus dados?<span>+</span></summary><p>São usados para preparar a devolutiva e realizar contato sobre o tema. Você pode solicitar exclusão a qualquer momento.</p></details></section>
    <SiteFooter />
  </main>;
}
