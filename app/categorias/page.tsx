import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { categories } from "../lib/category-data";

export const metadata: Metadata = {
  title: "Categorias de benefícios corporativos",
  description: "Explore saúde e bem-estar, cuidado jurídico, antecipação salarial e gestão integrada à folha sob uma ótica de diagnóstico.",
  alternates: { canonical: "https://www.gestaobeneficios.com.br/categorias" },
};

export default function CategoriesPage() {
  return (
    <main><SiteHeader />
      <section className="inner-hero compact-hero">
        <div className="inner-hero-copy"><p className="eyebrow"><span /> Mapa de decisões</p><h1>Quatro frentes. Uma pergunta antes de todas.</h1><p>Qual problema sua política de benefícios precisa resolver agora? Comece pela dor, não pelo fornecedor.</p></div>
      </section>
      <section className="category-index content-section">
        {categories.map((category) => (
          <a className="category-index-card" href={`/categorias/${category.slug}`} key={category.slug}>
            <span>{category.index}</span><div><img src={category.image} alt="" /><p>{category.title}</p><h2>{category.headline}</h2><small>{category.description}</small></div><b>Ver</b>
          </a>
        ))}
      </section>
      <section className="inline-cta"><p className="eyebrow"><span /> Não sabe por onde começar?</p><h2>O diagnóstico organiza a prioridade.</h2><a className="button" href="/diagnostico">Diagnosticar minha gestão</a></section>
      <SiteFooter />
    </main>
  );
}
