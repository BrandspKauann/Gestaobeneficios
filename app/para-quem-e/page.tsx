import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Gestão de benefícios por porte de empresa", description: "Veja como pequenas, médias e grandes empresas podem priorizar gestão, integração, cuidado e governança de benefícios.", alternates: { canonical: "https://www.gestaobeneficios.com.br/para-quem-e" } };

const profiles = [
  { number: "01", title: "Pequena empresa", people: "Até 99 colaboradores", headline: "Cresça sem levar planilhas e retrabalho junto.", copy: "Estruture uma operação simples, previsível e pronta para acompanhar o crescimento da equipe.", points: ["Responsabilidade e rotina bem definidas", "Benefícios com adesão real", "Custo previsível para o caixa"] },
  { number: "02", title: "Média empresa", people: "100 a 499 colaboradores", headline: "Ganhe escala sem multiplicar fornecedores e exceções.", copy: "Padronize o que cresceu de forma dispersa e devolva tempo estratégico ao RH.", points: ["Integrações prioritárias", "Política por perfil de público", "Indicadores de uso e operação"] },
  { number: "03", title: "Grande empresa", people: "500+ colaboradores", headline: "Reduza complexidade sem perder controle.", copy: "Use arquitetura, dados e critérios de auditoria para transformar escala em eficiência.", points: ["Governança de fornecedores", "Auditoria de dispersão", "Jornadas por população"] },
];

export default function ForWhoPage() { return <main><SiteHeader />
  <section className="inner-hero compact-hero"><div className="inner-hero-copy"><p className="eyebrow"><span /> Eficiência em qualquer porte</p><h1>Reduza custos e retrabalho em cada fase de crescimento.</h1><p>Descubra quais ajustes podem gerar mais eficiência considerando seu time, seu caixa e a maturidade atual do RH.</p></div></section>
  <section className="company-profiles content-section">{profiles.map((profile) => <article key={profile.title}><div className="profile-number">{profile.number}</div><div><span>{profile.people}</span><h2>{profile.title}</h2><h3>{profile.headline}</h3><p>{profile.copy}</p><ul>{profile.points.map((point) => <li key={point}>✓ {point}</li>)}</ul><a href="/diagnostico">Avaliar este cenário</a></div></article>)}</section>
  <section className="inline-cta"><p className="eyebrow"><span /> Qual é o seu potencial de melhoria?</p><h2>Veja onde sua empresa pode ganhar eficiência agora.</h2><p>Cruze porte, fornecedores, horas e nível de integração em uma leitura rápida.</p><a className="button" href="/diagnostico">Fazer diagnóstico gratuito</a></section><SiteFooter /></main>; }
