import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "www.gestaobeneficios.com.br";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const requestBase = new URL(`${protocol}://${host}`);
  const title = "Gestão de Benefícios | Reduza custos e retrabalho no RH";
  const description = "Descubra onde sua empresa perde tempo e dinheiro com benefícios e receba uma prioridade clara para agir em menos de três minutos.";

  return {
    metadataBase: requestBase,
    title: { default: title, template: "%s | Gestão de Benefícios" },
    description,
    alternates: { canonical: "https://www.gestaobeneficios.com.br/" },
    applicationName: "Gestão de Benefícios by Hirayama",
    manifest: "/site.webmanifest",
    openGraph: { title, description, type: "website", siteName: "Gestão de Benefícios", url: "https://www.gestaobeneficios.com.br/", images: [{ url: new URL("/og.png", requestBase).toString(), width: 1200, height: 630, alt: "Gestão de benefícios sem achismo" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", requestBase).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
