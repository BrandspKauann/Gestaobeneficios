export type Category = {
  slug: string;
  index: string;
  shortTitle: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  myth: string;
  shift: string;
  question: string;
  summary: string[];
  takeaways: string[];
  howItWorks: { title: string; text: string }[];
  criteria: { dimension: string; question: string; evidence: string }[];
  risks: { title: string; text: string }[];
  checklist: string[];
  metrics: { label: string; text: string }[];
  disclaimer: string;
  signs: { title: string; text: string }[];
  profiles: { label: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const categories: Category[] = [
  {
    slug: "vale-saude-bem-estar",
    index: "01",
    shortTitle: "Saúde e bem-estar",
    title: "Vale-saúde e bem-estar",
    headline: "Mais acesso à saúde com um modelo que cabe na realidade da empresa.",
    description: "Avalie como uma solução flexível de saúde e bem-estar pode ampliar o cuidado sem criar uma estrutura incompatível com o porte da empresa.",
    metaDescription: "Entenda vale-saúde, saúde flexível e marketplaces de bem-estar para empresas que buscam ampliar o cuidado sem começar por um plano tradicional.",
    image: "/images/categoria-saude-bem-estar-ai.webp",
    imageAlt: "Composição editorial sobre acesso corporativo à saúde e ao bem-estar",
    myth: "Benefício de saúde de verdade precisa começar por um plano completo.",
    shift: "O ponto de partida não é o produto. É saber qual barreira impede o colaborador de cuidar da saúde hoje: preço, acesso, previsibilidade ou adesão.",
    question: "Seu time precisa de cobertura ampla ou de acesso recorrente a cuidado básico e bem-estar?",
    summary: [
      "Vale-saúde é uma forma flexível de financiar ou facilitar o acesso a consultas, exames, terapias, medicamentos e serviços de bem-estar dentro de regras definidas pela empresa. Dependendo do modelo, o colaborador usa uma rede, um saldo por categoria ou condições negociadas em uma plataforma.",
      "Ele não deve ser tratado como uma versão menor de um plano médico. A decisão começa pelo problema que a empresa quer resolver: ampliar acesso básico, complementar uma cobertura existente, atender públicos sem plano ou criar uma porta de entrada para uma política de cuidado.",
    ],
    takeaways: [
      "Flexibilidade só gera valor quando a rede é útil para o público real.",
      "Cobertura, saldo e regras precisam ser compreendidos antes da adesão.",
      "Uso recorrente e percepção de cuidado importam mais do que o tamanho do catálogo.",
    ],
    howItWorks: [
      { title: "Definir a barreira de acesso", text: "Mapeie se o problema principal é preço, distância, tempo de espera, ausência de cobertura ou baixa adesão aos benefícios atuais." },
      { title: "Desenhar a jornada de cuidado", text: "Escolha quais categorias entram, como o saldo pode ser usado, quais públicos participam e onde haverá rede presencial ou digital." },
      { title: "Acompanhar uso e evolução", text: "Comunique o escopo, observe adesão e recorrência e ajuste a política sem transformar dados de saúde em exposição individual." },
    ],
    criteria: [
      { dimension: "Acesso real", question: "A rede atende onde as pessoas vivem e trabalham?", evidence: "Cobertura por CEP, disponibilidade, tempo médio e canais digitais." },
      { dimension: "Modelo financeiro", question: "O custo é previsível para a empresa e para o colaborador?", evidence: "Mensalidade, saldo, coparticipação, taxas e regras de reajuste." },
      { dimension: "Amplitude útil", question: "Os serviços respondem às demandas prioritárias do time?", evidence: "Consultas, exames, terapia, farmácia, atividade física e limites." },
      { dimension: "Experiência", question: "Usar o benefício é simples do início ao atendimento?", evidence: "Cadastro, busca, agendamento, suporte, reembolso e acessibilidade." },
      { dimension: "Governança", question: "A empresa recebe informação suficiente sem invadir privacidade?", evidence: "Relatórios agregados, proteção de dados, SLA e gestão de incidentes." },
    ],
    risks: [
      { title: "Catálogo sem disponibilidade", text: "Muitas opções na tela não compensam uma rede fraca nas regiões onde o time está." },
      { title: "Promessa maior que a cobertura", text: "Comunicar o benefício como proteção completa cria frustração quando existem limites e exclusões." },
      { title: "Saldo sem estratégia", text: "Distribuir recursos sem entender demandas pode gerar baixa utilização ou concentração pouco saudável." },
    ],
    checklist: [
      "Mapear localização, faixa etária e principais barreiras de acesso do público.",
      "Separar claramente o que será porta de entrada, complemento ou alternativa.",
      "Testar a rede com uma amostra de cidades, especialidades e horários.",
      "Simular custo total com adesão baixa, média e alta.",
      "Validar privacidade, suporte e tratamento de reclamações.",
      "Planejar comunicação de escopo, limites e forma de uso.",
    ],
    metrics: [
      { label: "Ativação", text: "Percentual de elegíveis que concluíram cadastro e primeiro acesso." },
      { label: "Uso recorrente", text: "Frequência de utilização por categoria, sempre de forma agregada." },
      { label: "Acesso resolvido", text: "Tempo e sucesso entre busca, agendamento e atendimento." },
      { label: "Valor percebido", text: "Compreensão, satisfação e intenção de continuar usando." },
    ],
    disclaimer: "Conteúdo educativo para avaliação de benefícios corporativos. Não substitui orientação médica, análise atuarial ou revisão jurídica do contrato.",
    signs: [
      { title: "Baixa adesão", text: "O benefício existe, mas poucos colaboradores conseguem usar ou percebem valor." },
      { title: "Orçamento limitado", text: "A empresa quer começar a cuidar, mas um plano tradicional ainda não cabe na realidade." },
      { title: "Demanda diversa", text: "O time precisa de consultas, exames, terapia e bem-estar em intensidades diferentes." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Entrada progressiva, sem comprometer o caixa com uma estrutura superdimensionada." },
      { label: "Média empresa", text: "Combinação de acesso, escolha e dados de utilização para evoluir a política." },
      { label: "Grande empresa", text: "Camada complementar para públicos, jornadas ou localidades com necessidades específicas." },
    ],
    faqs: [
      { question: "Vale-saúde substitui plano de saúde?", answer: "Nem sempre. Ele pode funcionar como porta de entrada, complemento ou alternativa em cenários específicos. A decisão depende do perfil do time, orçamento e nível de cobertura desejado." },
      { question: "Como avaliar um marketplace de bem-estar?", answer: "Compare acesso real, amplitude de serviços, cobertura geográfica, modelo de cobrança, adesão e capacidade de acompanhar utilização sem expor dados sensíveis." },
      { question: "Empresas pequenas conseguem oferecer benefício de saúde?", answer: "Sim. Modelos flexíveis podem permitir uma implantação gradual, desde que a comunicação deixe claro o escopo e a empresa acompanhe uso e percepção de valor." },
    ],
  },
  {
    slug: "beneficio-juridico",
    index: "02",
    shortTitle: "Cuidado jurídico",
    title: "Benefício jurídico",
    headline: "Quando um problema pessoal vira absenteísmo, o RH já está pagando a conta.",
    description: "Assistência jurídica pode ser uma camada de cuidado corporativo para orientar o colaborador antes que dúvidas familiares, financeiras ou de consumo se transformem em perda de foco.",
    metaDescription: "Saiba como assistência jurídica para colaboradores pode apoiar bem-estar, reduzir insegurança e prevenir impactos no trabalho.",
    image: "/images/categoria-cuidado-juridico-ai.webp",
    imageAlt: "Composição editorial sobre cuidado jurídico oferecido aos colaboradores",
    myth: "A vida jurídica do colaborador não tem relação com a empresa.",
    shift: "A empresa não precisa resolver a vida particular do time. Pode, porém, oferecer acesso qualificado para que uma dúvida deixe de consumir dias de ansiedade e horas de trabalho.",
    question: "Quanto da perda de foco do seu time nasce de problemas que poderiam ser orientados cedo?",
    summary: [
      "Benefício jurídico é um canal de orientação que ajuda o colaborador a entender direitos, deveres e próximos passos em situações pessoais. O escopo pode incluir temas de família, consumo, moradia, sucessões e finanças, conforme o contrato e os limites do serviço.",
      "Para a empresa, a proposta não é assumir o problema nem interferir em decisões particulares. É oferecer acesso qualificado, confidencial e previsível para reduzir a insegurança que costuma chegar ao RH sem que o RH tenha competência ou estrutura para atendê-la.",
    ],
    takeaways: [
      "O RH encaminha a demanda para um canal especializado; não assume o papel de consultoria jurídica.",
      "Confidencialidade e independência precisam ser percebidas pelo colaborador.",
      "Um escopo claro vale mais do que uma lista extensa de serviços pouco compreendidos.",
    ],
    howItWorks: [
      { title: "Acesso confidencial", text: "O colaborador procura diretamente o canal contratado, sem precisar revelar o tema pessoal à liderança ou ao RH." },
      { title: "Triagem e orientação", text: "O serviço identifica a natureza da demanda, explica caminhos e informa o que está ou não incluído no benefício." },
      { title: "Encaminhamento responsável", text: "Quando a situação exige atuação adicional, o usuário recebe opções e limites claros, sem promessa indevida de resultado." },
    ],
    criteria: [
      { dimension: "Escopo", question: "Quais temas e etapas estão realmente incluídos?", evidence: "Áreas atendidas, consultas, documentos, representação, limites e exclusões." },
      { dimension: "Independência", question: "O colaborador confia que a conversa não volta para a empresa?", evidence: "Política de confidencialidade, fluxo de dados e comunicação do serviço." },
      { dimension: "Qualidade", question: "Quem atende tem qualificação e supervisão adequadas?", evidence: "Credenciais, critérios da rede, protocolos e controle de qualidade." },
      { dimension: "Acessibilidade", question: "É fácil obter orientação no momento de necessidade?", evidence: "Horários, canais, tempo de resposta, linguagem e inclusão." },
      { dimension: "Governança", question: "A empresa acompanha valor sem acessar casos individuais?", evidence: "Dados agregados, SLA, reclamações, auditoria e proteção de dados." },
    ],
    risks: [
      { title: "Confusão de papéis", text: "Se o RH tenta interpretar casos ou acompanhar resultados, o benefício perde independência e confiança." },
      { title: "Escopo ambíguo", text: "Divulgar assistência ampla sem explicar limites gera frustração exatamente no momento de vulnerabilidade." },
      { title: "Privacidade frágil", text: "Relatórios detalhados demais podem expor assuntos sensíveis e comprometer a adesão." },
    ],
    checklist: [
      "Levantar os tipos de dúvida que hoje chegam informalmente ao RH.",
      "Definir áreas atendidas, exclusões e limites por utilização.",
      "Validar credenciais, supervisão e cobertura da rede de profissionais.",
      "Revisar o fluxo de dados e garantir relatórios apenas agregados.",
      "Testar tempo de resposta e linguagem do atendimento.",
      "Comunicar independência, confidencialidade e fronteiras do serviço.",
    ],
    metrics: [
      { label: "Conhecimento", text: "Percentual do público que sabe quando e como acessar o benefício." },
      { label: "Primeira resposta", text: "Tempo entre a procura do colaborador e a orientação inicial." },
      { label: "Resolutividade", text: "Demandas orientadas dentro do escopo, reportadas de forma agregada." },
      { label: "Confiança", text: "Percepção de privacidade, clareza e qualidade do atendimento." },
    ],
    disclaimer: "Conteúdo educativo sobre desenho de benefícios corporativos. Não constitui aconselhamento jurídico nem substitui a avaliação de profissionais habilitados.",
    signs: [
      { title: "Demandas recorrentes", text: "O RH recebe dúvidas sobre família, consumo, moradia ou dívidas e não sabe como encaminhá-las." },
      { title: "Estresse financeiro", text: "Conflitos e pendências jurídicas já aparecem em afastamentos, atrasos ou queda de concentração." },
      { title: "Cuidado incompleto", text: "A política fala em bem-estar, mas termina quando o problema exige orientação especializada." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Acesso a orientação sem transformar o RH em plantão para temas que fogem da sua função." },
      { label: "Média empresa", text: "Benefício de alto valor percebido e implantação simples para complementar a jornada de cuidado." },
      { label: "Grande empresa", text: "Canal escalável para públicos numerosos, com governança e comunicação bem definidas." },
    ],
    faqs: [
      { question: "Assistência jurídica é o mesmo que seguro?", answer: "Não necessariamente. O modelo pode oferecer orientação, consultas e serviços definidos em contrato. Escopo, limites e rede precisam ser avaliados antes da contratação." },
      { question: "Quais temas costumam ser atendidos?", answer: "Os escopos variam, mas podem incluir família, consumo, moradia, sucessões e questões financeiras. A empresa deve conferir exclusões e formato de atendimento." },
      { question: "Isso reduz absenteísmo?", answer: "Pode reduzir o tempo gasto na busca por orientação e a ansiedade associada ao problema. O efeito real deve ser acompanhado por adesão, satisfação e indicadores internos." },
    ],
  },
  {
    slug: "antecipacao-salarial",
    index: "03",
    shortTitle: "Saúde financeira",
    title: "Antecipação salarial",
    headline: "O salário é mensal. Os imprevistos não.",
    description: "Antecipação salarial e acesso responsável ao crédito podem aliviar emergências sem empurrar o colaborador para opções mais caras — desde que custos, educação e governança estejam claros.",
    metaDescription: "Avalie antecipação salarial via Pix, adiantamento e benefícios financeiros para apoiar colaboradores com responsabilidade e reduzir pressão sobre o RH.",
    image: "/images/categoria-saude-financeira-ai.webp",
    imageAlt: "Composição editorial sobre acesso responsável ao salário e saúde financeira",
    myth: "Antecipar salário sempre incentiva desorganização financeira.",
    shift: "O risco não está só no acesso. Está em oferecer crédito sem transparência, limites, educação e leitura do contexto financeiro do público.",
    question: "Sua política oferece uma saída segura para o imprevisto ou deixa o colaborador recorrer à opção mais cara?",
    summary: [
      "Antecipação salarial permite ao colaborador acessar, antes da data de pagamento, uma parte do valor já trabalhado ou outra modalidade prevista na política. Ela é diferente de empréstimo quando não antecipa renda futura, mas custos, operação e tratamento jurídico variam conforme o modelo.",
      "O benefício faz sentido quando cria uma alternativa mais transparente para emergências e reduz exceções tratadas manualmente pelo RH. Para ser cuidado financeiro — e não apenas acesso rápido a dinheiro — precisa combinar limites, comunicação, conciliação com a folha e apoio educativo.",
    ],
    takeaways: [
      "Valor já trabalhado, adiantamento e crédito são produtos diferentes.",
      "Taxas e impacto no pagamento precisam aparecer antes da confirmação.",
      "A governança evita que a conveniência vire dependência ou retrabalho na folha.",
    ],
    howItWorks: [
      { title: "Elegibilidade e limite", text: "A política define quem pode usar, qual parcela está disponível e quais eventos bloqueiam ou ajustam o acesso." },
      { title: "Solicitação transparente", text: "Antes de confirmar, o colaborador visualiza valor líquido, eventual custo, data e reflexo no próximo pagamento." },
      { title: "Conciliação com a folha", text: "A movimentação retorna ao processo de pagamento com trilha de auditoria, tratamento de exceções e responsabilidade definida." },
    ],
    criteria: [
      { dimension: "Natureza do produto", question: "É valor já trabalhado, adiantamento ou crédito?", evidence: "Contrato, origem dos recursos, remuneração, encargos e responsabilidades." },
      { dimension: "Custo total", question: "O colaborador entende quanto paga e quanto recebe?", evidence: "Taxas, recorrência, exemplos numéricos e comparação com alternativas." },
      { dimension: "Integração", question: "Como a transação chega à folha sem digitação duplicada?", evidence: "Layout, frequência, validações, estornos e reconciliação." },
      { dimension: "Proteções", question: "Existem limites e sinais de uso potencialmente prejudicial?", evidence: "Percentuais máximos, frequência, bloqueios e canais de apoio." },
      { dimension: "Experiência", question: "A decisão é clara e livre de indução?", evidence: "Jornada, linguagem, consentimento, suporte e tratamento de erro." },
    ],
    risks: [
      { title: "Custo invisível", text: "Uma taxa pequena por uso pode se tornar relevante quando há repetição mensal." },
      { title: "Fechamento divergente", text: "Falhas entre plataforma e folha podem gerar desconto incorreto ou saldo incompatível." },
      { title: "Uso sem apoio", text: "Acesso fácil sem educação e limites pode esconder um problema financeiro recorrente." },
    ],
    checklist: [
      "Distinguir claramente antecipação de valor trabalhado, adiantamento e crédito.",
      "Simular custos para diferentes valores e frequências de uso.",
      "Definir elegibilidade, limites, bloqueios e exceções.",
      "Mapear integração, conciliação, estorno e desligamento.",
      "Revisar consentimento, segurança e tratamento de dados financeiros.",
      "Combinar acesso com educação e canais de apoio financeiro.",
    ],
    metrics: [
      { label: "Adoção consciente", text: "Percentual de usuários ativos, acompanhado do grau de compreensão das regras." },
      { label: "Recorrência", text: "Frequência de uso e concentração por faixas, sem exposição individual." },
      { label: "Custo médio", text: "Despesa total assumida pelo usuário ou empresa por operação." },
      { label: "Conciliação", text: "Transações processadas sem ajuste manual, estorno ou divergência." },
    ],
    disclaimer: "Conteúdo educativo para avaliação de benefícios. Não constitui aconselhamento financeiro, trabalhista ou jurídico; cada modelo exige revisão especializada.",
    signs: [
      { title: "Pedidos informais", text: "O RH e a liderança recebem solicitações de adiantamento sem regra clara ou tratamento uniforme." },
      { title: "Crédito caro", text: "O colaborador cobre emergências com cheque especial, rotativo ou empréstimos de curto prazo." },
      { title: "Turnover sensível", text: "Pressão financeira afeta produtividade, clima e permanência, sobretudo em faixas salariais menores." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Política simples que reduz exceções manuais e preserva previsibilidade do caixa." },
      { label: "Média empresa", text: "Automação de solicitações, critérios uniformes e comunicação de uso responsável." },
      { label: "Grande empresa", text: "Escala, integração com a folha, limites por público e dados para prevenção de uso nocivo." },
    ],
    faqs: [
      { question: "Antecipação salarial é empréstimo?", answer: "Depende do modelo. A antecipação de valor já trabalhado é diferente de crédito consignado. Taxas, limites, elegibilidade e impacto na folha devem estar explícitos." },
      { question: "A empresa precisa desembolsar antes?", answer: "Há modelos financiados pela empresa e por terceiros. O impacto financeiro, operacional e regulatório muda em cada formato e deve fazer parte do diagnóstico." },
      { question: "Como evitar uso recorrente e prejudicial?", answer: "Limites, transparência de custo, educação financeira, monitoramento agregado e canais de apoio ajudam a transformar acesso em cuidado responsável." },
    ],
  },
  {
    slug: "gestao-integrada-folha",
    index: "04",
    shortTitle: "Gestão integrada",
    title: "Gestão integrada à folha",
    headline: "Reduza planilhas, conferências e horas perdidas entre benefícios e folha.",
    description: "Veja como integrar fornecedores, movimentações e conciliações para reduzir dispersão operacional e devolver tempo estratégico ao RH.",
    metaDescription: "Diagnóstico da integração de benefícios com a folha, da dispersão de fornecedores, das planilhas manuais e do risco de erro para o RH.",
    image: "/images/categoria-gestao-integrada-ai.webp",
    imageAlt: "Composição editorial sobre integração de fornecedores, dados e folha de pagamento",
    myth: "Ter muitos fornecedores significa ter uma política mais completa.",
    shift: "Amplitude sem governança pode multiplicar portais, arquivos, prazos e divergências. A pergunta não é quantos benefícios existem, mas como eles conversam com a folha e com o RH.",
    question: "Quantas vezes o mesmo dado é digitado, exportado e conferido até a folha fechar?",
    summary: [
      "Gestão integrada conecta cadastro, elegibilidade, movimentações, fornecedores, cobrança e folha em um fluxo com responsabilidades e dados consistentes. Integração não significa necessariamente uma única plataforma: significa reduzir duplicidade e saber qual sistema é a fonte de cada informação.",
      "O diagnóstico começa antes da tecnologia. É preciso visualizar o caminho completo de uma admissão, alteração ou desligamento, identificar pontos manuais e medir onde tempo e divergência se acumulam. Só então faz sentido decidir entre integrar, automatizar, consolidar ou redesenhar o processo.",
    ],
    takeaways: [
      "Centralizar fornecedores não é o mesmo que integrar processos.",
      "A fonte oficial de cada dado precisa estar definida e documentada.",
      "Automação saudável mantém exceções visíveis e uma trilha de auditoria.",
    ],
    howItWorks: [
      { title: "Mapear a jornada do dado", text: "Registre de onde vêm admissões, alterações e desligamentos, por quais arquivos passam e quem os confere." },
      { title: "Definir fontes e regras", text: "Estabeleça o sistema oficial, o dono de cada etapa, os prazos, as validações e o tratamento das exceções." },
      { title: "Integrar e reconciliar", text: "Automatize os trechos repetitivos, monitore falhas e compare os dados do fornecedor, da elegibilidade, da cobrança e da folha antes do fechamento." },
    ],
    criteria: [
      { dimension: "Arquitetura", question: "Qual sistema é a fonte oficial de cada informação?", evidence: "Mapa de sistemas, campos, integrações, frequência e responsáveis." },
      { dimension: "Movimentações", question: "Admissão, alteração e desligamento seguem o mesmo padrão?", evidence: "Prazos, filas, retornos, exceções e evidência de conclusão." },
      { dimension: "Conciliação", question: "Cobrança, elegibilidade e folha são comparadas antes de fechar?", evidence: "Regras de validação, tolerâncias, alertas e histórico de diferenças." },
      { dimension: "Fornecedor", question: "Cada parceiro entrega valor compatível com a carga operacional?", evidence: "Uso, SLA, volume de chamados, arquivos manuais e custo total." },
      { dimension: "Continuidade", question: "O processo funciona sem depender de uma única pessoa?", evidence: "Documentação, acessos, substituição, logs e plano de contingência." },
    ],
    risks: [
      { title: "Automatizar um processo ruim", text: "A integração acelera também regras confusas se o desenho operacional não for revisto primeiro." },
      { title: "Fonte duplicada", text: "Dois sistemas editando o mesmo campo criam divergências difíceis de rastrear." },
      { title: "Exceção invisível", text: "Fluxos sem retorno e monitoramento podem falhar em silêncio até a cobrança ou o desconto." },
    ],
    checklist: [
      "Listar fornecedores, sistemas, arquivos, prazos e responsáveis.",
      "Desenhar uma admissão, uma alteração e um desligamento ponta a ponta.",
      "Marcar toda digitação, exportação, conferência e correção manual.",
      "Definir fonte oficial, chaves de integração e regra de reconciliação.",
      "Medir volume, tempo, erros e dependência de pessoas por etapa.",
      "Priorizar integrações pelo risco evitado e pelo tempo devolvido ao RH.",
    ],
    metrics: [
      { label: "Horas operacionais", text: "Tempo mensal em movimentação, conferência, cobrança e correção." },
      { label: "Toques manuais", text: "Quantidade de digitações e transferências por evento de colaborador." },
      { label: "Divergência", text: "Registros com diferença entre elegibilidade, fornecedor, cobrança e folha." },
      { label: "Fechamento", text: "Tempo entre corte, validação final e liberação para pagamento." },
    ],
    disclaimer: "Conteúdo educativo para diagnóstico operacional. Integrações, folha e tratamento de dados devem ser avaliados conforme contratos, sistemas e regras aplicáveis à empresa.",
    signs: [
      { title: "Muitos portais", text: "Admissões e desligamentos precisam ser repetidos em sistemas que não se comunicam." },
      { title: "Planilhas críticas", text: "A conciliação depende de arquivos manuais, conhecimento individual e conferência de última hora." },
      { title: "Erros silenciosos", text: "Cobranças, elegibilidade ou descontos divergentes só aparecem depois do fechamento." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Processo enxuto para crescer sem cristalizar retrabalho em planilhas." },
      { label: "Média empresa", text: "Padronização, dono do processo e integrações prioritárias para reduzir gargalos." },
      { label: "Grande empresa", text: "Governança de fornecedores, auditoria de dispersão e arquitetura de dados entre sistemas." },
    ],
    faqs: [
      { question: "Quantos fornecedores de benefícios uma empresa deveria ter?", answer: "Não existe um número universal. O limite saudável depende da capacidade de integração, governança, volume de movimentações e valor percebido em cada benefício." },
      { question: "A integração com a folha elimina toda conferência?", answer: "Não. Ela reduz digitação e divergência, mas regras, exceções e auditoria continuam necessárias. O ganho vem de concentrar a conferência no que realmente exige decisão humana." },
      { question: "Como calcular o custo das planilhas manuais?", answer: "Some horas de preparação, conferência e correção, custo do time envolvido e impacto médio dos erros. O diagnóstico deste site oferece uma estimativa inicial com premissas visíveis." },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
