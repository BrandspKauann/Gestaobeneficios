import type { ArticleGuide } from "../lib/article-guides";
import { articleBySlug } from "../lib/article-data";

export function PracticalArticle({ guide }: { guide: ArticleGuide }) {
  const related = guide.relatedSlugs.map(articleBySlug).filter((article) => article !== undefined);

  return <>
    <nav className="article-guide-toc" aria-label="Neste artigo">
      <p>Neste artigo</p>
      <ol>{guide.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
    </nav>
    {guide.sections.map((section) => <section id={section.id} key={section.id}>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.items && (section.ordered
        ? <ol>{section.items.map((item) => <li key={item}>{item}</li>)}</ol>
        : <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>)}
      {section.sources && <div className="article-guide-sources"><span>Referências oficiais</span>{section.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}</a>)}</div>}
    </section>)}
    <section className="article-guide-cta">
      <h2>{guide.cta.title}</h2>
      <p>{guide.cta.text}</p>
      <a className="button" href={guide.cta.href}>{guide.cta.label}</a>
    </section>
    <section>
      <h2>Continue a leitura</h2>
      <div className="article-guide-related">{related.map((article) => <a key={article.slug} href={`/artigos/${article.slug}`}><span>{article.category}</span><h3>{article.title}</h3></a>)}</div>
    </section>
  </>;
}
