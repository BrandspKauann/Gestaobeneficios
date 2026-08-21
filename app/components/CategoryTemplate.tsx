import { categories, type Category } from "../lib/category-data";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function CategoryTemplate({ category }: { category: Category }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: category.headline,
    description: category.metaDescription,
    image: category.image,
    articleSection: "Benefícios corporativos",
    about: category.title,
  };
  const relatedCategories = categories.filter((item) => item.slug !== category.slug);

  return (
    <main>
      <SiteHeader />
      <section className="inner-hero category-hero">
        <div className="inner-hero-copy">
          <nav className="category-breadcrumb" aria-label="Navegação estrutural"><a href="/">Início</a><span>/</span><a href="/categorias">Categorias</a><span>/</span><b>{category.title}</b></nav>
          <p className="eyebrow"><span /> Categoria {category.index}</p>
          <h1>{category.headline}</h1>
          <p>{category.description}</p>
          <div className="article-meta"><span>GUIA PRÁTICO</span><span>CRITÉRIOS DE COMPRA</span><span>ANÁLISE INDEPENDENTE</span></div>
          <a className="button" href="/diagnostico">Avaliar esta solução para minha empresa</a>
        </div>
        <div className="category-visual-stack">
          <figure className="category-hero-image"><img src={category.image} alt={category.imageAlt} /></figure>
          <aside className="myth-card">
            <span>MITO DE MERCADO</span>
            <blockquote>“{category.myth}”</blockquote>
            <p>{category.shift}</p>
          </aside>
        </div>
      </section>

      <nav className="article-index" aria-label="Nesta análise">
        <span>NESTA ANÁLISE</span>
        <a href="#entenda">Entenda a categoria</a>
        <a href="#sinais">Sinais</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#criterios">Critérios</a>
        <a href="#roteiro">Roteiro de auditoria</a>
        <a href="#duvidas">Dúvidas</a>
      </nav>

      <article className="category-article">
      <section className="article-overview content-section" id="entenda">
        <div className="article-body">
          <p className="kicker">ENTENDA A CATEGORIA</p>
          <h2>O que é {category.title.toLocaleLowerCase("pt-BR")} — e qual decisão está por trás desse nome.</h2>
          {category.summary.slice(0, 1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="article-disclaimer">{category.disclaimer}</p>
        </div>
        <aside className="takeaway-card">
          <span>EM POUCAS LINHAS</span>
          <h3>O que o RH precisa guardar</h3>
          <ol>{category.takeaways.map((takeaway, index) => <li key={takeaway}><b>0{index + 1}</b><p>{takeaway}</p></li>)}</ol>
        </aside>
      </section>

      <section className="decision-question">
        <span>A PERGUNTA QUE MUDA A DECISÃO</span>
        <h2>{category.question}</h2>
      </section>

      <section className="content-section" id="sinais">
        <div className="section-heading">
          <p className="kicker">SINAIS PARA INVESTIGAR</p>
          <h2>Veja se esta frente pode gerar valor agora.</h2>
          <p>Três sinais ajudam a identificar se esta categoria merece entrar no seu plano de ação — e qual resultado ela precisa entregar.</p>
        </div>
        <div className="three-grid">
          {category.signs.map((sign, index) => (
            <article className="info-card" key={sign.title}>
              <span>0{index + 1}</span><h3>{sign.title}</h3><p>{sign.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="como-funciona">
        <div className="section-heading light-heading">
          <p className="kicker">COMO FUNCIONA NA PRÁTICA</p>
          <h2>Da oportunidade a uma operação que entrega valor.</h2>
          <p>Uma implantação consistente separa problema, desenho e acompanhamento para transformar contratação em resultado percebido.</p>
        </div>
        <div className="how-grid">
          {category.howItWorks.map((step, index) => <article key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
        </div>
      </section>

      <section className="criteria-section content-section" id="criterios">
        <div className="section-heading split-heading">
          <div><p className="kicker">CRITÉRIOS DE DECISÃO</p><h2>Compare o que realmente afeta os custos, o uso e os resultados.</h2></div>
          <p>Use as mesmas perguntas com todos os fornecedores para revelar custos escondidos e tornar as diferenças realmente comparáveis.</p>
        </div>
        <div className="criteria-table" role="table" aria-label={`Critérios para avaliar ${category.title}`}>
          <div className="criteria-row criteria-head" role="row"><span role="columnheader">Dimensão</span><span role="columnheader">Pergunta de auditoria</span><span role="columnheader">Evidências a solicitar</span></div>
          {category.criteria.slice(0, 4).map((criterion) => <div className="criteria-row" role="row" key={criterion.dimension}><b role="cell">{criterion.dimension}</b><p role="cell">{criterion.question}</p><small role="cell">{criterion.evidence}</small></div>)}
        </div>
      </section>

      <section className="audit-playbook content-section" id="roteiro">
        <div className="audit-checklist">
          <p className="kicker">ROTEIRO DE AUDITORIA</p>
          <h2>Quatro verificações para investir com mais segurança.</h2>
          <ol>{category.checklist.slice(0, 4).map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
        <aside className="metrics-panel">
          <p className="kicker">INDICADORES PARA ACOMPANHAR</p>
          <h3>Contratar é só o começo. O valor precisa aparecer.</h3>
          <div>{category.metrics.slice(0, 3).map((metric) => <article key={metric.label}><b>{metric.label}</b><p>{metric.text}</p></article>)}</div>
        </aside>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="section-heading">
          <p className="kicker">DÚVIDAS COMUNS</p><h2>Decida com mais segurança.</h2>
        </div>
        <div className="faq-list">
          {category.faqs.map((faq) => (
            <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>
          ))}
        </div>
      </section>
      </article>

      <section className="related-section content-section">
        <div className="section-heading"><p className="kicker">COMPARE OUTRAS FRENTES</p><h2>Encontre a melhor combinação para o seu plano de ação.</h2></div>
        <div className="related-grid">{relatedCategories.map((item) => <a href={`/categorias/${item.slug}`} key={item.slug}><img src={item.image} alt={item.imageAlt} /><div><span>{item.index}</span><h3>{item.title}</h3><b>Ler análise</b></div></a>)}</div>
      </section>

      <section className="inline-cta">
        <p className="eyebrow"><span /> Diagnóstico gratuito</p>
        <h2>Veja se esta categoria deve entrar no seu plano de ação.</h2>
        <p>Em menos de três minutos, cruze porte, dispersão e rotina para descobrir onde agir primeiro.</p>
        <a className="button" href="/diagnostico">Avaliar minha empresa agora</a>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
