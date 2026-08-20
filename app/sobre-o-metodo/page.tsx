import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Método de diagnóstico", description: "Conheça o método que mapeia operação, mensura custo oculto e prioriza decisões de benefícios antes de comparar soluções.", alternates: { canonical: "https://www.gestaobeneficios.com.br/sobre-o-metodo" } };

export default function MethodPage() {
  return <main><SiteHeader />
    <section className="inner-hero method-hero"><div className="inner-hero-copy"><p className="eyebrow"><span /> Nosso método</p><h1>Transforme gargalos da operação em um plano de ação claro.</h1><p>Mapeamos a rotina, calculamos o impacto e mostramos qual decisão pode gerar mais resultado — antes de comparar soluções.</p></div><aside className="method-statement"><span>PRINCÍPIO 01</span><strong>Diagnóstico antes de produto.</strong><p>Primeiro entendemos onde sua empresa perde. Depois mostramos onde vale investir.</p></aside></section>
    <section className="method-detail content-section"><div className="section-heading"><p className="kicker">TRÊS MOVIMENTOS</p><h2>Do problema ao próximo passo.</h2></div><div className="method-detail-list">
      <article><span>01</span><div><p>MAPEAR</p><h3>Onde sua empresa perde tempo e dinheiro?</h3><small>Mapeamos fornecedores, portais, regras, movimentações, integrações e responsáveis para revelar os gargalos que a rotina esconde.</small></div></article>
      <article><span>02</span><div><p>MENSURAR</p><h3>Qual é o impacto no resultado?</h3><small>Transformamos horas operacionais, ajustes e divergências em uma estimativa transparente de custo, risco e valor percebido.</small></div></article>
      <article><span>03</span><div><p>PRIORIZAR</p><h3>O que deve mudar primeiro?</h3><small>O resultado mostra a frente com maior potencial de impacto para que a empresa decida onde concentrar tempo e investimento.</small></div></article>
    </div></section>
    <section className="principles-section"><div className="section-heading light-heading"><p className="kicker">O QUE VOCÊ GANHA</p><h2>Mais segurança para decidir.<br />Mais clareza para investir.</h2></div><div className="principles-grid"><article><b>01</b><h3>Sem catálogo disfarçado</h3><p>Você recebe uma prioridade, não uma lista de parceiros.</p></article><article><b>02</b><h3>Números transparentes</h3><p>Você vê como cada estimativa foi construída.</p></article><article><b>03</b><h3>Recomendação proporcional</h3><p>Porte, público e maturidade orientam a decisão.</p></article><article><b>04</b><h3>Próximo passo responsável</h3><p>Cada solução depende da leitura individual do cenário.</p></article></div></section>
    <section className="inline-cta"><p className="eyebrow"><span /> Aplique o método</p><h2>Descubra a primeira ação que pode melhorar sua gestão.</h2><a className="button" href="/diagnostico">Fazer diagnóstico gratuito</a></section><SiteFooter /></main>;
}
