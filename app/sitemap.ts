import type { MetadataRoute } from "next";
import { categories } from "./lib/category-data";

const siteUrl = "https://www.gestaobeneficios.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const fixedRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/diagnostico`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/diagnostico-folha`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/categorias`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/para-quem-e`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/sobre-o-metodo`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteUrl}/categorias/${category.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...fixedRoutes, ...categoryRoutes];
}
