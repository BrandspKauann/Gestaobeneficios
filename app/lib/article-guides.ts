type ArticleSource = { label: string; href: string };

type GuideSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
  sources?: ArticleSource[];
};

export type ArticleGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  focus: string;
  checklist: string[];
  updatedAt: string;
  publishedAt?: string;
  sections: GuideSection[];
  relatedSlugs: string[];
  cta: { title: string; text: string; label: string; href: string };
};

const sources = {
  payroll: { label: "Banco Central: conta-salário e portabilidade salarial", href: "https://www.bcb.gov.br/meubc/faqs/s/conta-salario-e-portabilidade-de-salario" },
  institutions: { label: "Banco Central: consulta de instituições reguladas", href: "https://www.bcb.gov.br/meubc/encontreinstituicao" },
  adjustment: { label: "ANS: reajuste anual de planos coletivos", href: "https://www.gov.br/ans/pt-br/assuntos/consumidor/reajuste-variacao-de-mensalidade/reajuste-anual-de-planos-coletivos" },
  hiring: { label: "ANS: o que avaliar na contratação de um plano", href: "https://www.gov.br/ans/pt-br/publicidade-ans/contratacao-plano-de-saude" },
  collective: { label: "ANS: planos coletivos empresariais e por adesão", href: "https://www.gov.br/ans/pt-br/assuntos/contratacao-e-troca-de-plano/dicas-de-como-escolher-um-plano-de-saude-1/formas-de-contratacao-de-planos-de-saude-1/planos-coletivos-por-adesao-e-empresariais" },
  coverage: { label: "ANS: coberturas conforme o tipo de plano", href: "https://www.gov.br/ans/pt-br/assuntos/consumidor/o-que-o-seu-plano-de-saude-deve-cobrir-1" },
};

export const articleGuides: ArticleGuide[] = [
  {
    slug: "folha-pagamento-trocar-instituicao-ou-renegociar",
    title: "Folha de pagamento: vale trocar de instituição ou renegociar onde sua empresa está?",
    description: "Compare condições atuais, rotina do RH e custo da transição para decidir se vale mudar a instituição da folha ou renegociar.",
    category: "Folha de pagamento",
    focus: "condições da folha e esforço de mudança",
    checklist: ["Documentar as condições atuais", "Medir o esforço do RH", "Comparar renegociação e mudança pelo custo total"],
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    sections: [
      { id: "ponto-de-partida", title: "Comece pelo que a empresa já tem", paragraphs: ["Uma proposta atraente para a folha só pode ser comparada quando as condições atuais estão claras. Reúna o contrato, os serviços incluídos, as tarifas, os compromissos assumidos e as regras de encerramento. Isenção de tarifa é uma condição comercial, mas não descreve toda a experiência da empresa.", "Olhe também para a operação: quanto tempo o RH gasta com comprovantes, acessos, pagamentos rejeitados e dúvidas dos colaboradores? Esse trabalho precisa entrar na decisão, mesmo quando não aparece na fatura."] },
      { id: "renegociar", title: "Quando renegociar pode ser o melhor caminho", paragraphs: ["Se os pagamentos funcionam, o atendimento resolve e a integração atende à empresa, vale pedir uma revisão antes de iniciar uma migração. Leve o volume da operação e os problemas documentados para a conversa."], items: ["Peça condições por escrito, com validade e responsabilidades definidas.", "Negocie acesso a comprovantes, atendimento e suporte à conciliação.", "Verifique se a proposta exige permanência ou contratação de outros serviços."] },
      { id: "comparar-mudanca", title: "Quando vale estudar outra instituição", paragraphs: ["Falhas recorrentes, retrabalho e falta de suporte podem justificar uma comparação. Peça uma demonstração do fluxo completo, do arquivo gerado pelo sistema de folha até o comprovante individual. A proposta precisa mostrar quem acompanha rejeições e como uma ocorrência é resolvida no dia do pagamento.", "Confirme a instituição responsável e a modalidade da conta oferecida. Conta-salário, conta corrente e conta de pagamento têm características diferentes; valide as regras de movimentação e de portabilidade aplicáveis ao modelo apresentado."], sources: [sources.institutions, sources.payroll] },
      { id: "custo-total", title: "Coloque o custo da transição na conta", paragraphs: ["Compare o mesmo período e o mesmo conjunto de serviços. Inclua preparação de cadastros, testes, treinamento, atendimento e eventual manutenção temporária de duas estruturas. Uma oferta melhor pode perder sentido se chegar durante outra implantação que já consome o RH."], items: ["Condições comerciais e obrigações da empresa.", "Compatibilidade com sistema, contabilidade e CNPJs.", "Acesso dos colaboradores e suporte na virada.", "Prazo, responsáveis e plano de contingência."] },
      { id: "decisao", title: "Registre uma decisão que RH e financeiro consigam sustentar", paragraphs: ["A conclusão pode ser renegociar, comparar com mais profundidade ou planejar a mudança. Registre o motivo, as pendências e a data da próxima revisão. Assim, a folha deixa de ser uma negociação isolada e passa a ser uma decisão acompanhada pela empresa."] },
    ],
    relatedSlugs: ["mudanca-instituicao-folha-transicao-primeiro-pagamento", "governanca-beneficios-cfo-rh"],
    cta: { title: "Sua folha merece uma revisão?", text: "Responda ao diagnóstico para organizar as condições atuais e entender se faz sentido renegociar ou estudar uma mudança.", label: "Fazer diagnóstico da folha", href: "/diagnostico-folha" },
  },
  {
    slug: "reajuste-plano-saude-empresarial",
    title: "Reajuste do plano empresarial: quais documentos conferir antes de aceitar a proposta?",
    description: "Confira contrato, memória de cálculo, faturas e base de beneficiários antes de negociar o reajuste do plano de saúde empresarial.",
    category: "Saúde corporativa",
    focus: "documentos e critérios para negociar o reajuste",
    checklist: ["Identificar a regra do contrato", "Conferir memória de cálculo e base de vidas", "Separar reajuste de outras mudanças na fatura"],
    updatedAt: "2026-10-15",
    sections: [
      { id: "regra-do-contrato", title: "Primeiro, identifique qual regra vale para o contrato", paragraphs: ["O reajuste de um plano coletivo empresarial não segue automaticamente o teto dos planos individuais. A ANS diferencia contratos com menos de 30 beneficiários, em regra reunidos em agrupamento, dos contratos com 30 ou mais, cujas condições são negociadas. Existem exceções ao agrupamento, como planos exclusivamente odontológicos.", "Conte beneficiários, incluindo dependentes, e confirme o enquadramento com a operadora. O número de empregados da empresa, sozinho, não resolve essa conferência."], sources: [sources.adjustment] },
      { id: "documentos", title: "Monte uma pasta de conferência antes da negociação", paragraphs: ["Organizar os documentos permite perguntar como a proposta foi formada e quais informações ainda faltam."], items: ["Contrato e aditivos: aniversário, regra de reajuste, coparticipação e condições vigentes.", "Proposta formal: percentual, data de aplicação e serviços considerados.", "Memória de cálculo e metodologia: período analisado, critérios e componentes do índice.", "Faturas anteriores: valores cobrados, movimentações e histórico de reajustes.", "Base de beneficiários: titulares, dependentes, inclusões e exclusões do período.", "Relatórios agregados de utilização e sinistralidade, quando aplicáveis, sem exposição desnecessária de dados de saúde individuais."] },
      { id: "memoria-de-calculo", title: "Peça os cálculos com antecedência", paragraphs: ["Para contratos com 30 ou mais beneficiários, a orientação da ANS prevê a disponibilização da memória de cálculo e da metodologia à contratante com pelo menos 30 dias de antecedência da aplicação. A página também informa que, após o reajuste, o beneficiário pode solicitá-las formalmente, com fornecimento em até 10 dias.", "No agrupamento, confira o índice publicado pela operadora e sua aplicação ao aniversário do contrato. Protocole os pedidos e guarde as respostas para que RH e financeiro trabalhem com a mesma versão dos documentos."], sources: [sources.adjustment] },
      { id: "conferencia-fatura", title: "Separe o reajuste das outras mudanças na fatura", paragraphs: ["Uma fatura maior não significa que toda a diferença veio do reajuste anual. Inclusões, exclusões, mudança de faixa etária e cobranças de utilização podem alterar o total. Compare competências equivalentes e confira o percentual sobre uma base compatível.", "Ao receber alternativas, registre se a proposta preserva rede, acomodação, abrangência e regras de cobrança. Uma mensalidade menor com mudanças de cobertura ou coparticipação exige outra análise de impacto."] },
      { id: "negociacao", title: "Leve perguntas objetivas para a mesa", items: ["Quais componentes explicam o percentual e a qual período se referem?", "O cadastro usado no cálculo corresponde à base conferida pela empresa?", "Quais alternativas mantêm o nível de serviço necessário?", "Qual será o custo anual e o efeito para titulares e dependentes?"], paragraphs: ["Defina quem negocia, quem aprova e quando a decisão precisa estar concluída. A empresa ganha clareza para discutir as condições quando consegue conferir os dados que sustentam a proposta."] },
    ],
    relatedSlugs: ["coparticipacao-plano-saude", "dependentes-plano-empresarial-inclusao-elegibilidade", "sinistralidade-plano-saude-empresa"],
    cta: { title: "A renovação chegou sem os documentos necessários?", text: "Organize as prioridades do contrato e os pontos que precisam ser esclarecidos antes de comparar propostas.", label: "Solicitar diagnóstico de benefícios", href: "/diagnostico" },
  },
  {
    slug: "mudanca-instituicao-folha-transicao-primeiro-pagamento",
    title: "Mudança da instituição da folha: como planejar a transição antes do primeiro pagamento?",
    description: "Organize cadastros, testes, comunicação e contingência para a mudança da instituição da folha antes do primeiro pagamento.",
    category: "Folha de pagamento",
    focus: "implantação e continuidade dos pagamentos",
    checklist: ["Validar cadastros e arquivo de folha", "Testar o ciclo completo", "Definir suporte e contingência para a virada"],
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    sections: [
      { id: "cronograma", title: "Monte o cronograma a partir do dia do pagamento", paragraphs: ["A assinatura do contrato não encerra a implantação. Parta da data em que o salário precisa estar disponível e volte no calendário para reservar tempo de cadastro, validação, testes e correção. Considere todos os CNPJs, unidades e calendários de pagamento.", "Defina quem libera o arquivo, quem aprova os valores e quem confirma o processamento. RH, financeiro, contabilidade, tecnologia e instituição precisam conhecer suas entregas e seus contatos de apoio."] },
      { id: "cadastros", title: "Confira a base e o modelo de conta", paragraphs: ["Valide os dados necessários por um canal seguro e com acesso restrito. Identifique cadastros incompletos, divergências e pessoas que precisam de ajuda para acessar a nova estrutura. Mantenha uma lista de pendências com responsável e prazo.", "Confirme a modalidade de conta, o funcionamento da portabilidade quando aplicável e as orientações que a instituição fornecerá ao colaborador. Receber salário em uma conta não basta para presumir todas as características de uma conta-salário."], sources: [sources.payroll] },
      { id: "testes", title: "Teste o ciclo inteiro, incluindo o retorno", ordered: true, items: ["Valide o formato do arquivo gerado pelo sistema ou pela contabilidade.", "Confira totais, identificação dos favorecidos e aprovações exigidas.", "Faça homologação ou teste controlado, conforme o procedimento da instituição.", "Simule rejeições e confirme como corrigir sem duplicar o pagamento.", "Verifique o retorno do processamento, a conciliação e o acesso aos comprovantes."], paragraphs: ["Um arquivo aceito ainda precisa de acompanhamento. Documente qual retorno comprova cada etapa e quem avalia as exceções antes de encerrar o lote."] },
      { id: "comunicacao", title: "Explique o que o colaborador precisa fazer", paragraphs: ["Envie uma orientação curta com datas, passos de acesso, canal oficial e atendimento para dificuldades. Evite depender de uma única mensagem ou de instruções repassadas informalmente por gestores. Disponibilize apoio também para quem tem pouca familiaridade digital.", "Separe a comunicação do pagamento de ofertas comerciais. O colaborador precisa entender o recebimento do salário sem confundir essa etapa com a contratação de serviços adicionais."] },
      { id: "contingencia", title: "Defina o que fazer se algo falhar", paragraphs: ["Combine um horário de conferência, uma equipe de plantão e uma forma alternativa de regularizar ocorrências, validada pelas áreas responsáveis e pela instituição. Estabeleça critérios para adiar a virada se houver pendências críticas.", "Depois do primeiro pagamento, confira os créditos e as exceções, registre chamados e acompanhe o ciclo seguinte. Só encerre a estrutura anterior após validar obrigações contratuais, histórico e acesso aos documentos necessários."] },
    ],
    relatedSlugs: ["folha-pagamento-trocar-instituicao-ou-renegociar", "comunicacao-beneficios-mudanca"],
    cta: { title: "Ainda está avaliando a mudança?", text: "Antes de montar a implantação, organize o cenário da empresa e o custo operacional da transição.", label: "Fazer diagnóstico da folha", href: "/diagnostico-folha" },
  },
  {
    slug: "coparticipacao-plano-saude",
    title: "Coparticipação: como avaliar o impacto para a empresa e os colaboradores?",
    description: "Avalie mensalidade, cobranças por uso, previsibilidade e comunicação antes de adotar ou revisar a coparticipação no plano empresarial.",
    category: "Saúde corporativa",
    focus: "custo total e previsibilidade da coparticipação",
    checklist: ["Conferir a tabela e as regras de cobrança", "Simular diferentes perfis de uso", "Planejar comunicação e conferência dos descontos"],
    updatedAt: "2026-10-15",
    sections: [
      { id: "custo-total", title: "A mensalidade é só uma parte da comparação", paragraphs: ["Na coparticipação, há cobrança associada à utilização de determinados serviços, conforme o contrato, além da mensalidade. Uma proposta com mensalidade menor precisa ser comparada com o que poderá ser cobrado quando titulares e dependentes usarem o plano.", "Separe o orçamento da empresa do desembolso do colaborador. Reduzir uma linha da fatura e transferir uma despesa imprevisível para a família pode mudar a percepção do benefício."], sources: [sources.hiring] },
      { id: "regras", title: "Peça regras que permitam conferir uma cobrança", paragraphs: ["Antes de decidir, solicite a tabela aplicável e exemplos de extratos. A comunicação precisa permitir que o colaborador entenda a cobrança e saiba onde questionar uma divergência."], items: ["Quais atendimentos geram coparticipação e como o valor é calculado?", "Há valores fixos, percentuais, limites ou isenções no contrato?", "Qual é a referência usada quando a cobrança é percentual?", "Em que prazo o uso aparece no extrato e na cobrança?", "Quem recebe a contestação e como funciona uma correção?"], sources: [sources.collective] },
      { id: "simulacao", title: "Simule rotinas diferentes antes de aprovar", paragraphs: ["Use a tabela da proposta para montar cenários ilustrativos: uma pessoa com consultas ocasionais, uma família com dependentes e alguém que utiliza acompanhamento frequente. Compare mensalidade, utilização e eventual participação da empresa no mesmo período.", "Faça a análise com dados agregados ou exemplos fictícios. O RH não precisa divulgar diagnósticos individuais para entender se as regras produzem cobranças difíceis de prever. Os cenários ajudam a decidir, mas não garantem o gasto futuro de cada pessoa."] },
      { id: "folha-comunicacao", title: "Prepare a operação antes de comunicar o modelo", paragraphs: ["Defina como o demonstrativo será conferido, como eventuais descontos serão processados conforme as regras aplicáveis e quem tratará divergências. Valide o procedimento com as áreas responsáveis antes de anunciar datas ou condições.", "Explique com exemplos o que gera cobrança, quando ela pode chegar e onde consultar o detalhamento. Oriente também sobre dependentes e cobranças relativas a períodos anteriores. A equipe de atendimento precisa usar as mesmas informações que foram apresentadas aos colaboradores."] },
      { id: "acompanhamento", title: "Acompanhe o efeito depois da implantação", items: ["Compare o custo total da empresa com o cenário usado na decisão.", "Observe concentração de cobranças e dificuldades relatadas por diferentes públicos.", "Acompanhe contestações, correções e dúvidas sobre extratos.", "Reavalie a política quando houver relatos de dificuldade de acesso ao cuidado."], paragraphs: ["A escolha deve equilibrar sustentabilidade financeira e uma experiência que o colaborador consiga compreender. Se a economia só aparece antes de considerar uso e atendimento, a comparação ainda está incompleta."] },
    ],
    relatedSlugs: ["reajuste-plano-saude-empresarial", "dependentes-plano-empresarial-inclusao-elegibilidade"],
    cta: { title: "Quer revisar o modelo com mais clareza?", text: "Organize o contrato, a rotina de cobrança e as dúvidas do time antes de decidir sobre coparticipação.", label: "Solicitar diagnóstico de benefícios", href: "/diagnostico" },
  },
  {
    slug: "dependentes-plano-empresarial-inclusao-elegibilidade",
    title: "Dependentes no plano empresarial: como organizar inclusão, elegibilidade e comunicação?",
    description: "Defina elegibilidade, documentos, prazos e conferência de faturas para organizar os dependentes no plano de saúde empresarial.",
    category: "Operação do RH",
    focus: "cadastro e comunicação de dependentes",
    checklist: ["Alinhar elegibilidade com contrato e política", "Registrar pedidos e confirmação de inclusão", "Conciliar cadastro, fatura e folha"],
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    sections: [
      { id: "elegibilidade", title: "Deixe claro quem pode entrar no plano", paragraphs: ["A ANS informa que a participação de familiares como dependentes em planos coletivos empresariais depende das condições contratuais e dos vínculos admitidos pela legislação. A política interna precisa refletir esse enquadramento e explicar o que a empresa oferece.", "Documente quem pode solicitar inclusão, quais comprovações são necessárias e como funciona o custeio. Uma regra entendida apenas por quem opera o benefício vira fonte de exceções e respostas diferentes para a mesma dúvida."], sources: [sources.collective] },
      { id: "fluxo", title: "Crie um fluxo do pedido até a confirmação", ordered: true, items: ["Receba a solicitação em um canal definido e registre a data.", "Confira os documentos exigidos para o vínculo, sem pedir informações desnecessárias.", "Valide prazos, carências e condições de ingresso aplicáveis ao caso com a operadora.", "Envie a movimentação e acompanhe pendências até obter confirmação.", "Informe a data efetiva de cobertura, o acesso ao plano e as condições de cobrança."], paragraphs: ["Protocolo de solicitação e confirmação de inclusão são etapas diferentes. Não prometa cobertura imediata apenas porque os documentos foram enviados. Confira as regras para situações como nascimento, adoção e outras mudanças familiares antes de orientar o colaborador."] },
      { id: "custos", title: "Mostre o custo antes da adesão", paragraphs: ["Explique a parcela paga pela empresa, a parcela do colaborador e as cobranças de utilização previstas no contrato. Quando houver desconto em folha, valide o procedimento e as autorizações aplicáveis com as áreas responsáveis.", "Deixe acessíveis as regras de reajuste, mudança de faixa etária e alteração da composição familiar. A pessoa precisa entender o efeito da inclusão no orçamento, inclusive quando há mais de um dependente."] },
      { id: "conciliacao", title: "Concilie cadastro, fatura e folha todos os meses", paragraphs: ["Mantenha um controle restrito às pessoas autorizadas, com pedido, vínculo, status, data de vigência e responsável. Compare a base confirmada pela operadora com a fatura e os valores processados na folha."], items: ["Inclusões solicitadas que ainda não foram concluídas.", "Dependentes cobrados antes da vigência confirmada.", "Exclusões ou alterações que não chegaram à fatura.", "Diferenças entre o valor comunicado e o efetivamente cobrado."] },
      { id: "comunicacao", title: "Transforme as regras em uma orientação curta", paragraphs: ["Prepare uma página ou mensagem com quem pode aderir, documentos, prazos, custos, canal e forma de acompanhamento. Inclua o procedimento para atualizar dados, comunicar mudanças de vínculo e solicitar exclusão.", "Na admissão e nas mudanças familiares, reforce onde consultar essas informações. O objetivo é dar previsibilidade ao colaborador e permitir que o RH acompanhe cada pedido até a conclusão."] },
    ],
    relatedSlugs: ["coparticipacao-plano-saude", "politica-de-beneficios-clara", "reajuste-plano-saude-empresarial"],
    cta: { title: "As movimentações estão virando retrabalho?", text: "Mapeie as falhas entre cadastro, comunicação, fatura e folha para definir o que precisa ser organizado primeiro.", label: "Solicitar diagnóstico de benefícios", href: "/diagnostico" },
  },
  {
    slug: "plano-odontologico-empresarial-pacote-beneficios",
    title: "Plano odontológico empresarial: o que avaliar antes de incluir no pacote?",
    description: "Compare cobertura, rede, acesso, custeio e operação do plano odontológico empresarial antes de ampliar o pacote de benefícios.",
    category: "Composição do pacote",
    focus: "acesso e operação do benefício odontológico",
    checklist: ["Validar demanda e rede nas localidades do time", "Conferir cobertura e regras do produto", "Definir custeio e acompanhar a adesão"],
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    sections: [
      { id: "demanda", title: "Comece pela necessidade de quem vai usar", paragraphs: ["Antes de acrescentar mais um item ao pacote, entenda como o time acessa cuidados odontológicos hoje. Uma escuta simples pode mostrar se a prioridade está no custo, na falta de rede próxima ou na dificuldade de agendar.", "Cruze essa demanda com as cidades onde as pessoas vivem e trabalham. Um benefício pode ter boa apresentação comercial e pouco uso se o atendimento exigir deslocamentos incompatíveis com a rotina."] },
      { id: "cobertura", title: "Confira cobertura e condições do produto", paragraphs: ["A ANS define coberturas obrigatórias conforme a segmentação do plano, incluindo a odontológica. A análise deve considerar o Rol aplicável e o contrato do produto, além dos serviços que o material comercial destaca.", "Peça a relação de coberturas, carências e procedimentos de autorização. Se a demanda do time inclui ortodontia, próteses, implantes ou procedimentos estéticos, confirme especificamente o que é coberto e em quais condições. Não presuma que o nome do plano inclua todo tratamento desejado."], sources: [sources.coverage] },
      { id: "rede", title: "Teste o acesso além da lista de credenciados", paragraphs: ["Verifique prestadores nas regiões prioritárias, especialidades necessárias, canais de agendamento e atendimento de urgência. Confirme se os profissionais listados atendem ao produto exato da proposta."], items: ["Há opções próximas para titulares e dependentes?", "O colaborador consegue localizar e contatar o prestador?", "As informações da rede estão atualizadas?", "Quem ajuda quando há dificuldade de atendimento?"], sources: [sources.hiring] },
      { id: "custeio-operacao", title: "Defina custeio e operação antes de contratar", paragraphs: ["Compare o custo anual considerando os critérios comerciais da proposta, a participação da empresa e a adesão esperada. Confirme regras de inclusão de dependentes, movimentações, reajuste e eventuais cobranças adicionais.", "Decida quem envia os cadastros, confere a fatura e atende as dúvidas. Explique se a adesão é opcional ou segue outra condição contratada e apresente os custos antes da escolha do colaborador. Se houver desconto em folha, valide o fluxo com as áreas responsáveis."] },
      { id: "percepcao", title: "Acompanhe se o novo benefício está funcionando", paragraphs: ["Na implantação, comunique como acessar o plano, localizar a rede e pedir suporte. Depois, acompanhe adesão, dúvidas, dificuldade de agendamento e percepção do time, usando informações agregadas para avaliar o benefício.", "O plano odontológico faz sentido no pacote quando há demanda, acesso e condições compreensíveis. A decisão fica mais sólida quando a empresa define o que espera resolver e como vai verificar o resultado."] },
    ],
    relatedSlugs: ["dependentes-plano-empresarial-inclusao-elegibilidade", "beneficios-corporativos-por-onde-comecar", "indicadores-rh-beneficios"],
    cta: { title: "Quer ampliar o pacote com um objetivo claro?", text: "Organize demanda, orçamento e operação antes de escolher um novo benefício para a empresa.", label: "Solicitar diagnóstico de benefícios", href: "/diagnostico" },
  },
];

export const guideBySlug = (slug: string) => articleGuides.find((guide) => guide.slug === slug);
