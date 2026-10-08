import type { Metadata } from 'next';
import { FaArrowRight } from 'react-icons/fa6';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PayrollContact } from '../components/PayrollContact';
import './payroll.css';

const canonical = 'https://www.gestaobeneficios.com.br/pagamento-de-folha';
const title = 'Pagamento de folha para empresas';
const description = 'Avalie pagamento de salários, conta digital, comprovantes e integração com ERP para simplificar a rotina do RH, DP e financeiro.';
const image = 'https://www.gestaobeneficios.com.br/images/pagamento-folha-rh.webp';

export const metadata: Metadata = {
  title, description,
  keywords: ['pagamento de folha', 'pagamento de salários', 'conta digital para colaboradores', 'comprovantes de pagamento', 'integração ERP', 'RH e departamento pessoal'],
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website', images: [{ url: image, width: 1440, height: 810, alt: 'Profissionais revisando a operação de pagamento da empresa' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

const faq = [
  ['Essa solução calcula a folha de pagamento?', 'O foco é avaliar o pagamento dos salários e a organização dos registros. Cálculos trabalhistas, encargos e obrigações continuam com os responsáveis da empresa. Integrações e funcionalidades devem ser confirmadas na proposta.'],
  ['É preciso trocar de sistema ou abrir contas para todos?', 'Não existe uma resposta única. Antes de uma mudança, analisamos o ERP utilizado, o processo de pagamento e as condições de abertura de conta. O plano precisa prever comunicação, suporte e continuidade da operação.'],
  ['A empresa pode receber cashback sobre a folha?', 'Essa possibilidade pode entrar na avaliação comercial, mas não é automática nem garantida. Percentual, base de cálculo, elegibilidade, prazo de pagamento e eventuais custos precisam estar documentados na proposta vigente.'],
  ['A integração funciona com qualquer ERP?', 'A compatibilidade precisa ser validada com o sistema e a versão utilizados pela empresa. Layout de arquivos, APIs, permissões e testes fazem parte dessa verificação; não presumimos integração universal.'],
  ['Preciso enviar a folha ou os dados dos colaboradores?', 'Não nesta etapa. O formulário pede apenas contato e contexto da empresa. Não envie arquivos de folha, salários individuais, dados bancários, documentos dos colaboradores ou credenciais.'],
  ['O contato já significa contratação?', 'Não. A conversa serve para mapear o cenário e avaliar a solução e suas condições. A contratação depende de proposta, documentação, aprovação e definição das responsabilidades. A Hirayama atua na orientação e não executa pagamentos nem oferece serviços bancários em nome próprio.'],
];

const features = [
  ['Pagamento de salários', 'Organize o fluxo de valores recorrentes em uma operação digital. Na análise, validamos calendário, responsáveis, aprovação e retorno das transações para que o fechamento não dependa de transferências avulsas e conferências dispersas.'],
  ['Conta digital para o time', 'A abertura de contas pode fazer parte da solução. Antes de comunicar ao colaborador, confira documentação, condições de uso, canais de atendimento e o suporte disponível durante a implantação.'],
  ['Comprovantes organizados', 'Avalie a geração e a consulta de comprovantes individuais, em lote ou por centro de custo. O objetivo é facilitar a localização dos registros e a conferência do que foi pago, sem transformar cada consulta em uma busca manual.'],
  ['Contracheque online', 'A disponibilização digital do contracheque pode reduzir a circulação de arquivos e simplificar a consulta pelo colaborador. Confirme como o documento chega à plataforma, quem pode acessá-lo e quais controles protegem as informações.'],
  ['Relatórios para o fechamento', 'Leve à demonstração os relatórios que o financeiro realmente utiliza. A leitura deve permitir acompanhar pagamentos, conciliar retornos e identificar pendências sem perder a visão das unidades e dos centros de custo.'],
  ['Integração com seu ERP', 'Uma integração precisa encaixar no processo atual. Confira compatibilidade, formato de troca de dados, autorização, retorno e suporte técnico antes de considerar que uma etapa manual será eliminada.'],
];

const steps = [
  ['Mapear o cenário', 'Porte da equipe, unidades, processo atual, ERP e prioridades. Nesta conversa inicial, não precisamos de arquivos de folha nem dados bancários dos colaboradores.'],
  ['Validar a solução', 'Compare fluxo de pagamento, relatórios, comprovantes e integração. Peça demonstração, condições comerciais e documentação dos serviços efetivamente oferecidos.'],
  ['Planejar a implantação', 'Defina cronograma, acessos, testes e responsáveis. Se houver contas digitais, a comunicação precisa explicar condições, suporte e a experiência do colaborador.'],
  ['Acompanhar o primeiro ciclo', 'Confira os retornos, trate pendências e valide a conciliação. A mudança precisa entregar uma rotina utilizável para quem paga e para quem recebe.'],
];

export default function PagamentoFolhaPage() {
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: canonical, isPartOf: { '@type': 'WebSite', name: 'Gestão de Benefícios', url: 'https://www.gestaobeneficios.com.br' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.gestaobeneficios.com.br/' }, { '@type': 'ListItem', position: 2, name: title, item: canonical }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ];
  return <><SiteHeader /><main className="payroll-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="payroll-hero">
      <img src="/images/pagamento-folha-rh.webp" alt="Profissionais de RH revisando a operação da empresa" width={1440} height={810} fetchPriority="high" />
      <div className="payroll-wrap"><p className="payroll-kicker">Gestão de Benefícios by Hirayama</p><h1>Pagamento de folha.<br /><span>Mais eficiência para sua empresa.</span></h1><p>Do pagamento dos salários aos comprovantes: conheça uma solução digital e avalie como <strong>simplificar a rotina do RH, do DP e do financeiro.</strong></p><a className="button" href="#analise-folha">Quero avaliar a folha da minha empresa <FaArrowRight aria-hidden="true" /></a><p className="payroll-hero-note">Primeiro entendemos sua operação. Depois, discutimos a solução.</p></div>
    </header>
    <div className="payroll-audience"><div className="payroll-wrap"><span>RH e departamento pessoal</span><span>Financeiro e tesouraria</span><span>Empresas com equipes em crescimento</span></div></div>
    <section className="payroll-section payroll-wrap" aria-labelledby="payroll-pain-title">
      <div className="payroll-heading"><p className="payroll-kicker">Menos etapas soltas. Mais clareza.</p><h2 id="payroll-pain-title">Sua folha não precisa terminar em retrabalho.</h2><p>O salário foi pago. Mas a rotina continua com comprovantes, conciliação, dúvidas e pendências. Quando tudo fica espalhado entre planilhas, arquivos e portais, o fechamento exige mais esforço do que deveria.</p></div>
      <div className="payroll-pains"><article><span>01</span><h3>Pagamento fragmentado</h3><p>Transferências individuais e etapas repetidas dificultam a conferência. Vale mapear quais tarefas podem ser organizadas em um fluxo único, com responsáveis e aprovações definidos.</p></article><article><span>02</span><h3>Comprovantes difíceis de encontrar</h3><p>Se cada solicitação exige procurar um arquivo, o RH perde tempo. A análise considera acesso aos registros, organização por centro de custo e consulta das informações.</p></article><article><span>03</span><h3>Fechamento sem visão completa</h3><p>Dados dispersos podem esconder pendências. Relatórios e retornos precisam ajudar o financeiro a distinguir <strong>pagamento enviado, confirmado e ainda não concluído.</strong></p></article></div>
    </section>
    <section className="payroll-solutions" aria-labelledby="payroll-solutions-title"><div className="payroll-wrap payroll-section"><div className="payroll-heading"><p className="payroll-kicker">Da conta ao acompanhamento</p><h2 id="payroll-solutions-title">Uma operação digital que começa no seu processo.</h2><p>Pagamento de salários, conta digital, comprovantes e integração devem funcionar como partes da mesma rotina. Conheça o que pode entrar no escopo e confira cada recurso na demonstração e na proposta.</p></div><div className="payroll-features">{features.map(([heading, text]) => <article key={heading}><h3>{heading}</h3><p>{text}</p></article>)}</div><a className="button" href="#analise-folha">Conversar sobre minha operação <FaArrowRight aria-hidden="true" /></a></div></section>
    <section className="payroll-section payroll-wrap payroll-return" aria-labelledby="payroll-return-title"><div><p className="payroll-kicker">Condições comerciais com transparência</p><h2 id="payroll-return-title">Existe oportunidade de retorno sobre a folha?</h2><p>Além da eficiência operacional, <strong>a possibilidade de cashback sobre a folha paga</strong> pode entrar na avaliação. Para decidir, a empresa precisa conhecer a regra completa, não apenas uma promessa comercial.</p></div><div><h3>Coloque as condições na mesma conta.</h3><p>Confira elegibilidade, percentual, base de cálculo, periodicidade e custos associados. Compare o retorno previsto com o esforço de implantação e a aderência à sua operação.</p><p className="payroll-note"><strong>Não há retorno garantido.</strong> Cashback, serviços adicionais, tarifas e funcionalidades dependem do produto, da contratação e das condições vigentes.</p></div></section>
    <section className="payroll-process" aria-labelledby="payroll-process-title"><div className="payroll-wrap payroll-section"><div className="payroll-heading"><p className="payroll-kicker">Uma mudança com responsáveis e calendário</p><h2 id="payroll-process-title">Antes de mudar, desenhe o próximo fechamento.</h2><p>Não basta apresentar uma plataforma. É preciso entender o sistema atual, validar a solução e preparar o time para que o primeiro pagamento aconteça com acompanhamento.</p></div><ol>{steps.map(([heading, text], index) => <li key={heading}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{heading}</h3><p>{text}</p></div></li>)}</ol></div></section>
    <section className="payroll-section payroll-wrap payroll-faq" aria-labelledby="payroll-faq-title"><p className="payroll-kicker">Antes da conversa</p><h2 id="payroll-faq-title">Perguntas sobre pagamento de folha</h2>{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="payroll-contact" id="analise-folha" aria-labelledby="payroll-contact-title"><div className="payroll-wrap payroll-section"><div><p className="payroll-kicker">Vamos olhar para sua empresa</p><h2 id="payroll-contact-title">Seu próximo fechamento pode começar com uma conversa melhor.</h2><p>Conte como a folha é paga hoje e o que precisa melhorar. <strong>O Ewerton ou alguém do time retorna em até 1 dia útil</strong> para entender o cenário e discutir os próximos passos.</p><p>Sem contratação automática e sem envio de documentos de colaboradores nesta etapa. A solução, o fornecedor e as responsabilidades serão esclarecidos durante a análise e antes de qualquer contratação.</p><p className="payroll-note">A Hirayama atua na orientação consultiva. Não calcula encargos, não movimenta salários e não oferece serviços bancários em nome próprio.</p><a className="payroll-diagnostic-link" href="/diagnostico-folha">Prefere começar pelo diagnóstico de folha? <FaArrowRight aria-hidden="true" /></a></div><PayrollContact /></div></section>
  </main><SiteFooter /></>;
}
