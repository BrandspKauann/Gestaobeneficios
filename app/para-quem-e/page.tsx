import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Gestão de benefícios por porte de empresa", description: "Veja como pequenas, médias e grandes empresas podem priorizar gestão, integração, cuidado e governança de benefícios.", alternates: { canonical: "https://www.gestaobeneficios.com.br/para-quem-e" } };

const profiles = [
  { number: "01", title: "Pequena empresa", people: "Até 99 colaboradores", headline: "Estruturar antes de crescer.", copy: "Evite criar processos manuais que se tornam caros justamente quando a empresa acelera.", points: ["Responsável e rotina claros", "Benefícios com adesão real", "Custo previsível para o caixa"] },
  { number: "02", title: "Média empresa", people: "100 a 499 colaboradores", headline: "Integrar antes de dispersar.", copy: "O crescimento costuma multiplicar fornecedores, exceções e conferências. É hora de padronizar.", points: ["Integrações prioritárias", "Política por perfil de público", "Indicadores de uso e operação"] },
  { number: "03", title: "Grande empresa", people: "500+ colaboradores", headline: "Governar sem perder escala.", copy: "Amplitude exige arquitetura, dados e critérios de auditoria para que complexidade não vire ruído.", points: ["Governança de fornecedores", "Auditoria de dispersão", "Jornadas por população"] },
];

export default function ForWhoPage() { return <main><SiteHeader />
  <section className="inner-hero compact-hero"><div className="inner-hero-copy"><p className="eyebrow"><span /> Para quem é</p><h1>O porte muda a operação. O método continua o mesmo.</h1><p>Diagnóstico para empresas que precisam transformar benefícios em uma política coerente com o time, o caixa e a maturidade do RH.</p></div></section>
  <section className="company-profiles content-section">{profiles.map((profile) => <article key={profile.title}><div className="profile-number">{profile.number}</div><div><span>{profile.people}</span><h2>{profile.title}</h2><h3>{profile.headline}</h3><p>{profile.copy}</p><ul>{profile.points.map((point) => <li key={point}>✓ {point}</li>)}</ul><Link href="/diagnostico">Diagnosticar este cenário</Link></div></article>)}</section>
  <section className="inline-cta"><p className="eyebrow"><span /> Qual é o seu cenário?</p><h2>O tamanho orienta. A rotina confirma.</h2><p>Leve porte, fornecedores, horas e nível de integração para a mesma leitura.</p><Link className="button" href="/diagnostico">Começar diagnóstico</Link></section><SiteFooter /></main>; }
