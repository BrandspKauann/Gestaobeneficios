import Link from "next/link";
import type { Category } from "../lib/category-data";
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

  return (
    <main>
      <SiteHeader />
      <section className="inner-hero category-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow"><span /> Categoria {category.index}</p>
          <h1>{category.headline}</h1>
          <p>{category.description}</p>
          <Link className="button" href="/diagnostico">Ver se faz sentido para minha empresa</Link>
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

      <section className="decision-question">
        <span>A PERGUNTA QUE MUDA A DECISÃO</span>
        <h2>{category.question}</h2>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="kicker">SINAIS PARA INVESTIGAR</p>
          <h2>Antes de comparar soluções, leia o cenário.</h2>
          <p>Três sinais ajudam a identificar se esta categoria merece entrar na sua política — e qual problema ela deveria resolver.</p>
        </div>
        <div className="three-grid">
          {category.signs.map((sign, index) => (
            <article className="info-card" key={sign.title}>
              <span>0{index + 1}</span><h3>{sign.title}</h3><p>{sign.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="section-heading light-heading">
          <p className="kicker">POR PORTE DE EMPRESA</p>
          <h2>A mesma categoria exige decisões diferentes.</h2>
        </div>
        <div className="profile-list">
          {category.profiles.map((profile, index) => (
            <article key={profile.label}><span>{index + 1}</span><div><h3>{profile.label}</h3><p>{profile.text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="kicker">DÚVIDAS COMUNS</p><h2>Sem atalho na decisão.</h2>
        </div>
        <div className="faq-list">
          {category.faqs.map((faq) => (
            <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>
          ))}
        </div>
      </section>

      <section className="inline-cta">
        <p className="eyebrow"><span /> Próximo passo</p>
        <h2>Descubra se esta é a prioridade certa.</h2>
        <p>O diagnóstico cruza porte, dispersão e rotina operacional antes de sugerir um caminho.</p>
        <Link className="button" href="/diagnostico">Começar diagnóstico</Link>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
