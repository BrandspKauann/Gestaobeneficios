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
          <p className="eyebrow"><span /> Diagnóstico gratuito para o RH</p>
          <h1>Reduza o custo oculto da sua gestão de benefícios. <em>Veja onde agir primeiro.</em></h1>
          <p className="hero-lead">Descubra onde o RH perde tempo, dinheiro e segurança. Em menos de três minutos, identifique uma prioridade clara de ação a partir dos gargalos operacionais.</p>
          <div className="hero-actions"><a className="button" href="/diagnostico">Quero meu diagnóstico gratuito</a><a className="text-link" href="/sobre-o-metodo"><i>▶</i> Ver como funciona</a></div>
          <div className="hero-proof"><span className="mini-seal">H</span><p><strong>Resultado inicial em menos de 3 minutos</strong><br />Sem compromisso e sem indicação automática.</p></div>
        </div>
        <div className="hero-visual" aria-label="Exemplo de diagnóstico de gestão de benefícios">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="diagnostic-card">
            <div className="card-topline"><span>DIAGNÓSTICO OPERACIONAL</span><b>AO VIVO</b></div>
            <div className="score-row"><div><strong>42</strong><span>/100</span></div><p>Nível de<br /><b>dispersão alto</b></p></div>
            <div className="score-track"><i /></div>
            <div className="metric-grid"><div><span>FORNECEDORES</span><strong>7</strong><small>3 acima do ideal</small></div><div><span>HORAS / MÊS</span><strong>32h</strong><small>Rotina manual do RH</small></div><div><span>RISCO DE ERRO</span><strong className="amber">18%</strong><small>Folha e conciliação</small></div><div><span>CUSTO OCULTO</span><strong>R$ 4,8k</strong><small>Estimativa mensal</small></div></div>
            <div className="card-insight"><span>◆</span><p><b>Primeiro insight</b>Centralizar a gestão pode devolver 21 horas por mês ao seu RH.</p></div>
          </div>
          <div className="floating-note"><span>✓</span><p><b>Diagnóstico independente</b>Sem indicação antes da análise</p></div>
        </div>
      </section>

      <section className="category-strip" aria-label="Categorias analisadas"><p>ONDE SUA EMPRESA PODE GANHAR</p><div className="category-list">{categories.map((category) => <a key={category.slug} href={`/categorias/${category.slug}`}><span>{category.index}</span>{category.shortTitle}<b>Ver</b></a>)}</div></section>

      <section className="problem-section content-section">
        <div className="section-heading split-heading"><div><p className="kicker">O PREÇO DO RETRABALHO</p><h2>Sua empresa pode estar pagando duas vezes pelos mesmos benefícios.</h2></div><p>Uma vez no contrato. Outra em horas de RH, correções e processos que não conversam.</p></div>
        <figure className="audit-people-image">
          <img src="/images/equipe-rh-operacao-beneficios-ai.webp" alt="Equipe de RH analisando a operação de benefícios em conjunto" />
          <figcaption><span>VISÃO OPERACIONAL</span>Veja onde tempo, dinheiro e segurança se perdem.</figcaption>
        </figure>
        <div className="audit-grid">
          <article><span>01</span><h3>Horas que não voltam</h3><p>Cadastros repetidos, portais diferentes e conferências que recomeçam todos os meses.</p></article>
          <article><span>02</span><h3>Erros que custam caro</h3><p>Dados desencontrados entre fornecedor, elegibilidade e folha viram correções depois do fechamento.</p></article>
          <article><span>03</span><h3>Benefícios sem valor percebido</h3><p>Mais itens no pacote não geram resultado quando o colaborador não entende ou não consegue usar.</p></article>
        </div>
      </section>

      <section className="method-band">
        <div className="method-copy"><p className="kicker">DA DOR AO PLANO DE AÇÃO</p><h2>Descubra onde agir antes de investir em mais uma solução.</h2><p>Em três movimentos, analisamos a rotina do RH e identificamos uma prioridade clara e mensurável, pronta para orientar a decisão.</p><a className="text-link dark-link" href="/sobre-o-metodo">Ver o método completo</a></div>
        <div className="method-steps"><article><span>1</span><div><h3>Mapear</h3><p>Encontre gargalos em fornecedores, fluxos, regras e integrações.</p></div></article><article><span>2</span><div><h3>Mensurar</h3><p>Veja o impacto em horas, custo oculto, risco e valor percebido.</p></div></article><article><span>3</span><div><h3>Priorizar</h3><p>Saia com a frente que pode gerar mais resultado agora.</p></div></article></div>
      </section>

      <section className="category-showcase content-section">
        <div className="section-heading"><p className="kicker">QUATRO CAMINHOS PARA GERAR MAIS VALOR</p><h2>Encontre a prioridade que pode melhorar seu resultado agora.</h2><p>Compare cada frente pela dor que resolve, pelo impacto esperado e pela capacidade real de implantação.</p></div>
        <div className="showcase-grid">{categories.map((category) => <a key={category.slug} href={`/categorias/${category.slug}`} className="showcase-card"><img src={category.image} alt={category.imageAlt} /><span>{category.index}</span><h3>{category.title}</h3><p>{category.description}</p><b>Explorar categoria</b></a>)}</div>
      </section>

      <section className="home-diagnostic">
        <div><p className="eyebrow"><span /> Diagnóstico gratuito e imediato</p><h2>Veja quanto tempo e dinheiro sua operação pode estar perdendo.</h2><p>Responda seis perguntas e receba uma estimativa inicial com os números que ajudam o RH a embasar a próxima decisão.</p><ul><li>Custo oculto estimado</li><li>Risco de divergência</li><li>Próximo passo recomendado</li></ul><a className="button" href="/diagnostico">Calcular meu resultado agora</a></div>
        <aside><span className="mini-label">EXEMPLO DE RESULTADO</span><div className="big-score"><strong>42</strong><span>/100</span></div><p>Seu RH pode estar dedicando <b>32 horas por mês</b> a uma rotina que deveria estar integrada.</p><div className="mini-bars"><i style={{width:"74%"}}/><i style={{width:"58%"}}/><i style={{width:"86%"}}/></div><small>As estimativas mudam conforme suas respostas.</small></aside>
      </section>

      <section className="closing-section"><p className="kicker">COMECE SEM COMPROMISSO</p><h2>Pare de investir em benefícios sem saber onde está o problema.</h2><a className="button" href="/diagnostico">Quero meu diagnóstico gratuito</a></section>
      <SiteFooter />
    </main>
  );
}
