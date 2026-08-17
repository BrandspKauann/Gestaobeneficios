import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryTemplate } from "../../components/CategoryTemplate";
import { categories, getCategory } from "../../lib/category-data";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.title} para empresas`;
  const url = `/categorias/${category.slug}`;
  return {
    title,
    description: category.metaDescription,
    alternates: { canonical: `https://www.gestaobeneficios.com.br${url}` },
    openGraph: { title, description: category.metaDescription, url: `https://www.gestaobeneficios.com.br${url}`, type: "article", images: [] },
    twitter: { card: "summary", title, description: category.metaDescription, images: [] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <CategoryTemplate category={category} />;
}
