import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { categories } from "../lib/category-data";

export const metadata: Metadata = {
  title: "Categorias de benefícios corporativos",
  description: "Compare quatro frentes de benefícios corporativos e descubra qual pode reduzir custo, risco e retrabalho na sua empresa.",
  alternates: { canonical: "https://www.gestaobeneficios.com.br/categorias" },
};

export default function CategoriesPage() {
  return (
    <main><SiteHeader />
      <section className="inner-hero compact-hero">
        <div className="inner-hero-copy"><p className="eyebrow"><span /> Escolha com mais clareza</p><h1>Encontre a solução certa para o problema que mais custa à sua empresa.</h1><p>Compare quatro frentes pela dor que resolvem e pelo resultado que podem gerar — antes de escolher fornecedor.</p></div>
      </section>
      <section className="category-index content-section">
        {categories.map((category) => (
          <a className="category-index-card" href={`/categorias/${category.slug}`} key={category.slug}>
            <span>{category.index}</span><div><img src={category.image} alt="" /><p>{category.title}</p><h2>{category.headline}</h2><small>{category.description}</small></div><b>Ver</b>
          </a>
        ))}
      </section>
      <section className="inline-cta"><p className="eyebrow"><span /> Descubra sua prioridade</p><h2>Em menos de três minutos, veja onde agir primeiro.</h2><a className="button" href="/diagnostico">Fazer diagnóstico gratuito</a></section>
      <SiteFooter />
    </main>
  );
}
