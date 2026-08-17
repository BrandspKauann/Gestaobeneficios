import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { categories } from "./lib/category-data";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Inteligência para o RH</p>
          <h1>Benefícios não deveriam ser <em>um palpite.</em></h1>
          <p className="hero-lead">Descubra onde sua operação perde tempo, dinheiro e segurança. Um diagnóstico independente para organizar benefícios antes de escolher qualquer solução.</p>
          <div className="hero-actions"><Link className="button" href="/diagnostico">Diagnosticar minha gestão <span>↗</span></Link><Link className="text-link" href="/sobre-o-metodo"><i>▶</i> Entenda o método</Link></div>
          <div className="hero-proof"><span className="mini-seal">H</span><p><strong>Uma iniciativa Hirayama</strong><br />Decisões sem achismo.</p></div>
        </div>
        <div className="hero-visual" aria-label="Exemplo de diagnóstico de gestão de benefícios">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="diagnostic-card">
            <div className="card-topline"><span>DIAGNÓSTICO OPERACIONAL</span><b>AO VIVO</b></div>
            <div className="score-row"><div><strong>42</strong><span>/100</span></div><p>Nível de<br /><b>dispersão alto</b></p></div>
            <div className="score-track"><i /></div>
            <div className="metric-grid"><div><span>FORNECEDORES</span><strong>7</strong><small>↑ 3 acima do ideal</small></div><div><span>HORAS / MÊS</span><strong>32h</strong><small>Rotina manual do RH</small></div><div><span>RISCO DE ERRO</span><strong className="amber">18%</strong><small>Folha e conciliação</small></div><div><span>CUSTO OCULTO</span><strong>R$ 4,8k</strong><small>Estimativa mensal</small></div></div>
            <div className="card-insight"><span>◆</span><p><b>Primeiro insight</b>Centralizar a gestão pode devolver 21 horas por mês ao seu RH.</p></div>
          </div>
          <div className="floating-note"><span>✓</span><p><b>Diagnóstico independente</b>Sem indicação antes da análise</p></div>
        </div>
      </section>

      <section className="category-strip" aria-label="Categorias analisadas"><p>O QUE ANALISAMOS</p><div className="category-list">{categories.map((category) => <Link key={category.slug} href={`/categorias/${category.slug}`}><span>{category.index}</span>{category.shortTitle}<b>↗</b></Link>)}</div></section>

      <section className="problem-section content-section">
        <div className="section-heading split-heading"><div><p className="kicker">O CUSTO QUE NÃO APARECE NA FATURA</p><h2>Benefícios fragmentados consomem o RH em silêncio.</h2></div><p>Quando fornecedores, planilhas e regras não conversam, a empresa paga duas vezes: no contrato e no retrabalho.</p></div>
        <div className="audit-grid">
          <article><span>01</span><div className="audit-icon">↻</div><h3>Tempo operacional</h3><p>Movimentações repetidas, portais diferentes e conferências que começam de novo todo mês.</p></article>
          <article><span>02</span><div className="audit-icon">≠</div><h3>Risco de divergência</h3><p>Dados desencontrados entre fornecedor, elegibilidade e folha viram correção depois do fechamento.</p></article>
          <article><span>03</span><div className="audit-icon">⌁</div><h3>Baixa percepção de valor</h3><p>Mais itens no pacote não significam mais cuidado quando o colaborador não entende ou não consegue usar.</p></article>
        </div>
      </section>

      <section className="method-band">
        <div className="method-copy"><p className="kicker">DIAGNÓSTICO ANTES DE PRODUTO</p><h2>Uma decisão melhor começa com a pergunta certa.</h2><p>Nosso método organiza a conversa em três movimentos simples. Só depois o mercado entra na análise.</p><Link className="text-link dark-link" href="/sobre-o-metodo">Conhecer o método <span>↗</span></Link></div>
        <div className="method-steps"><article><span>1</span><div><h3>Mapear</h3><p>Benefícios, fornecedores, fluxos, regras e pontos de atrito.</p></div></article><article><span>2</span><div><h3>Mensurar</h3><p>Tempo, custo oculto, exposição a erro e valor percebido.</p></div></article><article><span>3</span><div><h3>Priorizar</h3><p>A frente que mais muda o resultado — sem começar por marca.</p></div></article></div>
      </section>

      <section className="category-showcase content-section">
        <div className="section-heading"><p className="kicker">QUATRO FRENTES DE DECISÃO</p><h2>Categoria por categoria.<br />Cenário por cenário.</h2><p>Conteúdo de auditoria para entender a dor, testar premissas e só então comparar caminhos.</p></div>
        <div className="showcase-grid">{categories.map((category) => <Link key={category.slug} href={`/categorias/${category.slug}`} className="showcase-card"><span>{category.index}</span><div className="category-glyph" aria-hidden="true">{category.index === "01" ? "+" : category.index === "02" ? "§" : category.index === "03" ? "↗" : "⌘"}</div><h3>{category.title}</h3><p>{category.description}</p><b>Explorar categoria ↗</b></Link>)}</div>
      </section>

      <section className="home-diagnostic">
        <div><p className="eyebrow"><span /> Diagnóstico interativo</p><h2>Descubra o custo escondido da sua operação.</h2><p>Em menos de três minutos, estime horas de RH, custo mensal, risco de divergência e a categoria que merece ser investigada primeiro.</p><ul><li>Premissas abertas</li><li>Resultado imediato</li><li>Sem indicação automática</li></ul><Link className="button" href="/diagnostico">Calcular agora <span>↗</span></Link></div>
        <aside><span className="mini-label">EXEMPLO DE RESULTADO</span><div className="big-score"><strong>42</strong><span>/100</span></div><p>Seu RH pode estar dedicando <b>32 horas por mês</b> a uma rotina que deveria estar integrada.</p><div className="mini-bars"><i style={{width:"74%"}}/><i style={{width:"58%"}}/><i style={{width:"86%"}}/></div><small>As estimativas mudam conforme suas respostas.</small></aside>
      </section>

      <section className="closing-section"><p className="kicker">DECISÕES SEM ACHISMO</p><h2>Antes de escolher o próximo benefício, entenda o que precisa mudar.</h2><Link className="button" href="/diagnostico">Começar pelo diagnóstico <span>↗</span></Link></section>
      <SiteFooter />
    </main>
  );
}
