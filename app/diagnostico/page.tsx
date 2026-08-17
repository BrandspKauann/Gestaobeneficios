import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { DiagnosticTool } from "../components/DiagnosticTool";

export const metadata: Metadata = {
  title: "Diagnóstico de gestão de benefícios",
  description: "Estime horas operacionais, custo oculto, risco de divergência e a prioridade da sua gestão de benefícios com premissas visíveis.",
  alternates: { canonical: "https://www.gestaobeneficios.com.br/diagnostico" },
};

export default function DiagnosticPage() {
  return <main><SiteHeader />
    <section className="diagnostic-page-hero"><p className="eyebrow"><span /> Ferramenta gratuita</p><h1>Quanto a dispersão de benefícios custa ao seu RH?</h1><p>Responda seis perguntas. Você recebe uma estimativa inicial com premissas visíveis e uma prioridade de investigação — sem começar por fornecedor.</p></section>
    <DiagnosticTool />
    <section className="privacy-note"><b>Seus dados, com contexto.</b><p>As respostas ficam no seu navegador. Nome e contato só são enviados se você solicitar uma leitura humana ao final.</p></section>
    <SiteFooter />
  </main>;
}
