import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Método de diagnóstico", description: "Conheça o método que mapeia operação, mensura custo oculto e prioriza decisões de benefícios antes de comparar soluções.", alternates: { canonical: "https://www.gestaobeneficios.com.br/sobre-o-metodo" } };

export default function MethodPage() {
  return <main><SiteHeader />
    <section className="inner-hero method-hero"><div className="inner-hero-copy"><p className="eyebrow"><span /> Nosso método</p><h1>A categoria só importa depois que o problema está claro.</h1><p>Uma leitura independente da rotina, da política e do perfil da empresa transforma “qual produto escolher?” em “qual decisão muda mais o resultado?”.</p></div><aside className="method-statement"><span>PRINCÍPIO 01</span><strong>Diagnóstico antes de produto.</strong><p>A recomendação começa no cenário e termina na ação — nunca o contrário.</p></aside></section>
    <section className="method-detail content-section"><div className="section-heading"><p className="kicker">TRÊS MOVIMENTOS</p><h2>Do sintoma à prioridade.</h2></div><div className="method-detail-list">
      <article><span>01</span><div><p>MAPEAR</p><h3>Onde o trabalho se dispersa?</h3><small>Inventário de fornecedores, portais, regras, movimentações, integrações e responsáveis. A leitura inclui o que está contratado e o que o RH precisa fazer para aquilo funcionar.</small></div></article>
      <article><span>02</span><div><p>MENSURAR</p><h3>O que essa dispersão custa?</h3><small>Horas operacionais, frequência de ajustes, risco de divergência e percepção de valor. Premissas ficam visíveis para que estimativa não vire verdade artificial.</small></div></article>
      <article><span>03</span><div><p>PRIORIZAR</p><h3>Qual decisão move o ponteiro agora?</h3><small>O resultado pode apontar integração, acesso à saúde, cuidado jurídico, saúde financeira ou uma frente especializada do ecossistema. A categoria vem antes da marca.</small></div></article>
    </div></section>
    <section className="principles-section"><div className="section-heading light-heading"><p className="kicker">O QUE PROTEGEMOS</p><h2>Independência na entrada.<br />Clareza na saída.</h2></div><div className="principles-grid"><article><b>01</b><h3>Sem catálogo disfarçado</h3><p>A home não organiza parceiros; organiza perguntas.</p></article><article><b>02</b><h3>Premissas transparentes</h3><p>Estimativas mostram como foram construídas.</p></article><article><b>03</b><h3>Escopo proporcional</h3><p>Porte, público e maturidade mudam a decisão.</p></article><article><b>04</b><h3>Intermediação responsável</h3><p>Qualquer solução depende de avaliação individual.</p></article></div></section>
    <section className="inline-cta"><p className="eyebrow"><span /> Aplique o método</p><h2>Comece pelo seu cenário.</h2><a className="button" href="/diagnostico">Fazer diagnóstico</a></section><SiteFooter /></main>;
}
