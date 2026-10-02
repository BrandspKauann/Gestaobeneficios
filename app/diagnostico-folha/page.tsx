import type { Metadata } from "next";
import {
  FaBuilding,
  FaChartLine,
  FaCheck,
  FaClockRotateLeft,
  FaComments,
  FaFileInvoice,
  FaHeadset,
  FaLayerGroup,
  FaLinkedinIn,
  FaPeopleGroup,
  FaScaleBalanced,
  FaShieldHalved,
} from "react-icons/fa6";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { FolhaDiagnostic } from "../components/FolhaDiagnostic";

export const metadata: Metadata = {
  title: "Quanto vale a folha da sua empresa? | Diagnóstico gratuito",
  description: "Descubra em 4 minutos se vale a pena mudar a forma como sua empresa paga os salários ou ficar onde está. Diagnóstico independente e gratuito.",
  keywords: ["folha de pagamento", "trocar instituição da folha", "pagamento de salários empresa", "conta salário para funcionários"],
  alternates: { canonical: "https://www.gestaobeneficios.com.br/diagnostico-folha" },
  openGraph: {
    title: "Quanto vale a folha da sua empresa?",
    description: "Diagnóstico independente e gratuito sobre a estrutura de pagamento de salários da sua empresa.",
    url: "https://www.gestaobeneficios.com.br/diagnostico-folha",
    type: "website",
  },
};

const problems = [
  { Icon: FaBuilding, title: "Uma operação grande tratada no automático", text: "A folha é uma das maiores movimentações financeiras da empresa. Mesmo assim, muitas empresas médias entregam essa operação a uma instituição financeira apenas em troca de isenção de tarifa." },
  { Icon: FaClockRotateLeft, title: "O custo aparece na rotina do RH", text: "O RH perde horas buscando comprovantes antigos, resolvendo problemas de acesso dos colaboradores e intermediando conversas com a instituição." },
  { Icon: FaPeopleGroup, title: "Uma mudança precisa proteger as pessoas", text: "Quando a empresa decide mudar sem planejamento, o problema pode chegar ao colaborador. A análise precisa considerar valor e custo de implantação." },
];

const process = [
  { number: "01", title: "Você responde", text: "São 13 perguntas rápidas sobre o tamanho da empresa, a estrutura atual e a rotina do RH." },
  { number: "02", title: "Você recebe a devolutiva", text: "Em até dois dias úteis, com a leitura do seu caso e uma recomendação clara." },
  { number: "03", title: "Se fizer sentido, conversamos", text: "Uma conversa de 20 minutos para olhar os números com calma. Sem compromisso." },
];

const results = [
  { label: "Caminho 01", title: "Fique e renegocie", text: "Mudar não compensa agora. Você recebe argumentos para melhorar as condições com a instituição atual." },
  { label: "Caminho 02", title: "Vale estudar uma mudança", text: "A folha tem um valor que hoje não está sendo aproveitado. Vale comparar caminhos com números." },
  { label: "Caminho 03", title: "A mudança faz sentido agora", text: "O valor é relevante e o modelo atual já pesa na operação. A recomendação considera uma transição por etapas." },
];

const criteria = [
  { Icon: FaShieldHalved, title: "Autorização", text: "A instituição é autorizada pelo Banco Central? Essa informação pode ser consultada por qualquer pessoa." },
  { Icon: FaScaleBalanced, title: "Modelo de negócio", text: "Como a instituição ganha dinheiro e em quais condições oferece crédito aos colaboradores?" },
  { Icon: FaHeadset, title: "Atendimento", text: "Quem ajuda o colaborador quando ele não consegue acessar o salário ou tem pouca familiaridade digital?" },
  { Icon: FaLayerGroup, title: "Implantação", text: "A mudança pode ser feita por etapas, sem deixar ninguém sem receber?" },
  { Icon: FaFileInvoice, title: "Comprovantes", text: "O RH consegue recuperar documentos antigos com autonomia quando precisa?" },
  { Icon: FaChartLine, title: "Retorno para a empresa", text: "O que a empresa recebe hoje pela operação e qual valor essa folha pode gerar?" },
];

const faqs = [
  { question: "Vocês são uma instituição financeira?", answer: "Não. O diagnóstico é independente. Avaliamos a situação da empresa e, quando faz sentido, comparamos instituições autorizadas pelo Banco Central." },
  { question: "O diagnóstico tem custo?", answer: "Não. O diagnóstico e a devolutiva inicial são gratuitos." },
  { question: "E se a recomendação for ficar onde estou?", answer: "Ótimo. Você recebe argumentos para renegociar a estrutura atual, e ninguém perde tempo com uma mudança que não compensa." },
  { question: "Mudar dá muito trabalho para o RH?", answer: "Depende de como a transição é conduzida. Por isso, o diagnóstico considera o custo de mudar e não apenas o benefício financeiro." },
  { question: "O que acontece com os meus dados?", answer: "Eles são usados somente para preparar a devolutiva e realizar o contato sobre o diagnóstico. Você pode solicitar a exclusão a qualquer momento." },
];

export default function DiagnosticoFolhaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="folha-page">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="folha-hero">
        <div className="folha-hero-copy">
          <p className="folha-kicker">Diagnóstico independente da folha</p>
          <h1>Quanto vale a folha da sua empresa?</h1>
          <p className="folha-hero-lead">Diagnóstico sobre onde seus colaboradores recebem o salário, e se vale a pena mudar ou ficar onde está.</p>
          <div className="folha-hero-actions">
            <a className="button folha-primary-button" href="#iniciar-diagnostico" data-folha-start="hero">Fazer o diagnóstico</a>
            <span>4 minutos. Sem custo. Uma das respostas possíveis é: fique onde está.</span>
          </div>
        </div>
        <aside className="folha-hero-panel" aria-label="Resumo do diagnóstico">
          <div className="folha-panel-top"><span>LEITURA INDEPENDENTE</span><b>Gratuito</b></div>
          <p>Uma decisão sobre valor, operação e pessoas.</p>
          <div className="folha-hero-metrics">
            <article><strong>13</strong><span>perguntas objetivas</span></article>
            <article><strong>4 min</strong><span>tempo estimado</span></article>
            <article><strong>2 dias</strong><span>para a devolutiva</span></article>
          </div>
          <div className="folha-panel-proof"><FaCheck aria-hidden="true" /><span>Contato somente depois das perguntas</span></div>
        </aside>
      </section>

      <section className="folha-final">
        <div className="folha-final-heading"><p className="folha-kicker">Comece agora</p><h2>Leva 4 minutos. A decisão continua sendo sua.</h2><p>Responda no seu ritmo. Seus dados de contato aparecem somente no final.</p></div>
        <FolhaDiagnostic />
      </section>

      <section className="folha-section folha-problem">
        <div className="folha-inner">
          <div className="folha-section-heading"><p className="folha-kicker">O problema</p><h2>Uma decisão grande, quase sempre tomada no automático.</h2></div>
          <div className="folha-problem-grid">
            {problems.map(({ Icon, title, text }, index) => <article key={title}><div><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="folha-process">
        <div className="folha-inner folha-process-layout">
          <div className="folha-section-heading folha-heading-light"><p className="folha-kicker">Como funciona</p><h2>Você responde. A devolutiva chega com uma recomendação clara.</h2><p>Nenhuma indicação acontece antes da leitura do cenário.</p></div>
          <ol className="folha-process-list">
            {process.map((item) => <li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="folha-section folha-results">
        <div className="folha-inner">
          <div className="folha-section-heading"><p className="folha-kicker">Três resultados possíveis</p><h2>O diagnóstico não parte da ideia de que mudar é sempre melhor.</h2></div>
          <div className="folha-results-grid">
            {results.map((item) => <article key={item.title}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="folha-section folha-criteria">
        <div className="folha-inner">
          <div className="folha-section-heading folha-criteria-heading"><div><p className="folha-kicker">O que avaliamos</p><h2>O que importa antes de decidir onde seus colaboradores recebem o salário.</h2></div><p>Valor financeiro sozinho não basta. A decisão precisa funcionar para a empresa, para o RH e para quem recebe.</p></div>
          <div className="folha-criteria-grid">
            {criteria.map(({ Icon, title, text }, index) => <article key={title}><div><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="folha-transparency" aria-label="Transparência sobre a recomendação">
        <div><span>TRANSPARÊNCIA</span><FaComments aria-hidden="true" /></div>
        <p>Sou remunerado pelas instituições financeiras que eventualmente indico. Por isso mesmo, o diagnóstico recomenda ficar onde está quando esse é o melhor caminho para a sua empresa.</p>
      </section>

      <section className="folha-profile">
        <div className="folha-inner folha-profile-layout">
          <figure><img src="/images/ewerton-hirayama.jpg" alt="Ewerton Hirayama, fundador da Hirayama Corretora e Consultoria" /></figure>
          <div><p className="folha-kicker">Quem faz o diagnóstico</p><h2>Quem está por trás da análise.</h2><p>Ewerton Hirayama, fundador da Hirayama Corretora &amp; Consultoria, trabalha com empresas em decisões sobre benefícios, saúde corporativa e riscos, sempre com uma regra: decisão com dados, não com achismo.</p><a href="https://www.linkedin.com/in/ewertonhirayama" target="_blank" rel="noreferrer"><FaLinkedinIn aria-hidden="true" /> Conhecer o Ewerton no LinkedIn</a></div>
        </div>
      </section>

      <section className="folha-section folha-faq">
        <div className="folha-inner folha-faq-layout">
          <div className="folha-section-heading"><p className="folha-kicker">Perguntas frequentes</p><h2>Clareza antes de começar.</h2></div>
          <div className="folha-faq-list">
            {faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="folha-final">
        <div className="folha-final-heading"><p className="folha-kicker">Comece agora</p><h2>Leva 4 minutos. A decisão continua sendo sua.</h2><p>Responda no seu ritmo. Seus dados de contato aparecem somente no final.</p><a className="button folha-secondary-button" href="#iniciar-diagnostico" data-folha-start="final">Começar o diagnóstico</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
