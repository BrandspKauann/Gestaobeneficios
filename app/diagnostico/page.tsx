import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { DiagnosticTool } from "../components/DiagnosticTool";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito de gestão de benefícios",
  description: "Descubra em menos de três minutos o custo oculto, o risco de divergência e a prioridade da sua gestão de benefícios.",
  alternates: { canonical: "https://www.gestaobeneficios.com.br/diagnostico" },
};

export default function DiagnosticPage() {
  return <main><SiteHeader />
    <section className="diagnostic-page-hero"><p className="eyebrow"><span /> Diagnóstico gratuito · Resultado imediato</p><h1>Descubra quanto sua gestão de benefícios pode estar custando.</h1><p>Responda seis perguntas e veja horas operacionais, custo oculto, risco de divergência e o caminho com maior potencial de impacto.</p></section>
    <DiagnosticTool />
    <section className="privacy-note"><b>Seus dados, com contexto.</b><p>As respostas ficam no seu navegador. Nome e contato só são enviados se você solicitar uma leitura humana ao final.</p></section>
    <SiteFooter />
  </main>;
}
