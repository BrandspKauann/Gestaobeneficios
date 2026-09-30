import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { articles } from "../lib/article-data";

export const metadata: Metadata = { title: "Biblioteca de benefícios corporativos", description: "Conteúdos práticos sobre governança, operação e decisões de benefícios corporativos.", alternates: { canonical: "https://www.gestaobeneficios.com.br/artigos" } };

export default function ArticlesPage() { return <main><SiteHeader /><section className="inner-hero compact-hero"><div className="inner-hero-copy"><p className="eyebrow"><span /> Biblioteca prática</p><h1>Conteúdo para decidir benefícios com mais clareza.</h1><p>Guias curtos para RH e financeiro organizarem dados, comunicação e prioridades antes de qualquer mudança.</p></div></section><section className="content-section article-library"><div className="article-library-grid">{articles.map(a => <a href={`/artigos/${a.slug}`} key={a.slug}><span>{a.category}</span><h2>{a.title}</h2><p>{a.description}</p><b>Ler artigo →</b></a>)}</div></section><SiteFooter /></main>; }
