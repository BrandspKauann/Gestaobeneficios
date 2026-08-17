import type { Metadata } from "next";
import { headers } from "next/headers";
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
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "www.gestaobeneficios.com.br";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const imageUrl = new URL(category.image, `${protocol}://${host}`).toString();
  return {
    title,
    description: category.metaDescription,
    alternates: { canonical: `https://www.gestaobeneficios.com.br${url}` },
    openGraph: { title, description: category.metaDescription, url: `https://www.gestaobeneficios.com.br${url}`, type: "article", images: [{ url: imageUrl, alt: category.imageAlt }] },
    twitter: { card: "summary_large_image", title, description: category.metaDescription, images: [imageUrl] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <CategoryTemplate category={category} />;
}
