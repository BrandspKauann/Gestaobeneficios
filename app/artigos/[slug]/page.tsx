import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { articleBySlug, articles } from "../../lib/article-data";
import { BenefitsComparisonArticle } from "../../components/BenefitsComparisonArticle";
import { PracticalArticle } from "../../components/PracticalArticle";
import { guideBySlug } from "../../lib/article-guides";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = articleBySlug((await params).slug);
  if (!article) return {};
  const canonical = `https://www.gestaobeneficios.com.br/artigos/${article.slug}`;
  const isComparison = article.slug === "beneficio-flexivel-ou-va-vr";
  const guide = guideBySlug(article.slug);
  return {
    title: isComparison || guide ? { absolute: article.title } : article.title,
    description: article.description,
    alternates: { canonical },
    ...(isComparison || guide ? {
      openGraph: { title: article.title, description: article.description, url: canonical, type: "article", ...(guide?.image ? { images: [{ url: `https://www.gestaobeneficios.com.br${guide.image}`, alt: guide.imageAlt }] } : {}), ...(guide ? { modifiedTime: guide.updatedAt, ...(guide.publishedAt ? { publishedTime: guide.publishedAt } : {}) } : {}) },
      twitter: { card: guide?.image ? "summary_large_image" : "summary", title: article.title, description: article.description, ...(guide?.image ? { images: [`https://www.gestaobeneficios.com.br${guide.image}`] } : {}) },
    } : {}),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = articleBySlug((await params).slug);
  if (!article) notFound();
  const guide = guideBySlug(article.slug);
  const canonical = `https://www.gestaobeneficios.com.br/artigos/${article.slug}`;
  const schema = guide ? {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", "@id": `${canonical}#article`, headline: article.title, description: article.description, mainEntityOfPage: canonical, url: canonical, inLanguage: "pt-BR", articleSection: article.category, dateModified: guide.updatedAt, ...(guide.image ? { image: `https://www.gestaobeneficios.com.br${guide.image}` } : {}), ...(guide.publishedAt ? { datePublished: guide.publishedAt } : {}), author: { "@type": "Organization", name: "Gestão de Benefícios", url: "https://www.gestaobeneficios.com.br" }, publisher: { "@type": "Organization", name: "Gestão de Benefícios", url: "https://www.gestaobeneficios.com.br" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.gestaobeneficios.com.br" },
        { "@type": "ListItem", position: 2, name: "Biblioteca", item: "https://www.gestaobeneficios.com.br/artigos" },
        { "@type": "ListItem", position: 3, name: article.title, item: canonical },
      ] },
    ],
  } : null;
  const updatedLabel = guide ? new Date(`${guide.updatedAt}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" }) : "";
  return <main><SiteHeader />{schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}<article className={`editorial-article${guide ? " editorial-guide" : ""}`}>
    <header><p className="eyebrow"><span /> {article.category}</p><p className="article-breadcrumb"><a href="/artigos">Biblioteca</a> / {article.category}</p><h1>{article.title}</h1><p className="article-intro">{article.description}</p>{guide && <p className="article-guide-meta">Por Gestão de Benefícios <span aria-hidden="true">·</span> Atualizado em <time dateTime={guide.updatedAt}>{updatedLabel}</time></p>}</header>
    {guide?.image && <figure className="weekly-editorial-cover"><img src={guide.image} alt={guide.imageAlt || article.title} width="1440" height="810" fetchPriority="high" /><figcaption>Imagem ilustrativa gerada por IA.</figcaption></figure>}
    {guide ? <PracticalArticle guide={guide} /> : article.slug === "beneficio-flexivel-ou-va-vr" ? <BenefitsComparisonArticle /> : <>
      <section><h2>O que vale observar</h2><p>Quando o tema é {article.focus}, comparar apenas preço ou uma lista de opções costuma deixar pontos importantes de fora. Uma decisão bem conduzida começa ao colocar o cenário da empresa e das pessoas no centro da conversa.</p><p>O objetivo não é encontrar uma resposta automática, e sim definir critérios claros, reunir informação suficiente e transformar a próxima ação em algo compreensível para RH, financeiro e colaboradores.</p></section>
      <section><h2>Checklist prático</h2><ul>{article.checklist.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>Como avançar sem improviso</h2><p>Registre o que já funciona, os pontos de atrito e o que precisa ser validado. Em seguida, escolha uma prioridade e acompanhe o efeito dela antes de abrir várias frentes ao mesmo tempo.</p><p>Se o cenário ainda estiver confuso, o diagnóstico inicial ajuda a organizar perguntas antes de decidir qualquer fornecedor ou modelo.</p><a className="button" href="/diagnostico">Fazer diagnóstico gratuito</a></section>
    </>}
  </article><SiteFooter /></main>;
}
