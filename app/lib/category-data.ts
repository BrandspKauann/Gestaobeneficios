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
    headline: "Cuidado acessível sem começar por um plano tradicional.",
    description: "Entenda quando uma solução flexível de saúde e um marketplace de bem-estar podem ampliar o acesso ao cuidado sem criar uma estrutura incompatível com o porte da empresa.",
    metaDescription: "Entenda vale-saúde, saúde flexível e marketplaces de bem-estar para empresas que buscam ampliar o cuidado sem começar por um plano tradicional.",
    image: "/images/categoria-saude-bem-estar-ai.webp",
    imageAlt: "Composição editorial sobre acesso corporativo à saúde e ao bem-estar",
    myth: "Benefício de saúde de verdade precisa começar por um plano completo.",
    shift: "O ponto de partida não é o produto. É saber qual barreira impede o colaborador de cuidar da saúde hoje: preço, acesso, previsibilidade ou adesão.",
    question: "Seu time precisa de cobertura ampla ou de acesso recorrente a cuidado básico e bem-estar?",
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
    signs: [
      { title: "Demandas recorrentes", text: "RH recebe dúvidas sobre família, consumo, moradia ou dívidas que não sabe como encaminhar." },
      { title: "Estresse financeiro", text: "Conflitos e pendências jurídicas já aparecem em afastamentos, atrasos ou queda de concentração." },
      { title: "Cuidado incompleto", text: "A política fala em bem-estar, mas termina quando o problema exige orientação especializada." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Acesso a orientação sem transformar o RH em plantão para temas que fogem da sua função." },
      { label: "Média empresa", text: "Benefício de percepção alta e implantação simples para complementar a jornada de cuidado." },
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
    description: "Antecipação salarial e acesso responsável a crédito podem aliviar emergências sem empurrar o colaborador para opções mais caras — desde que custo, educação e governança estejam claros.",
    metaDescription: "Avalie antecipação salarial via Pix, adiantamento e benefícios financeiros para apoiar colaboradores com responsabilidade e reduzir pressão sobre o RH.",
    image: "/images/categoria-saude-financeira-ai.webp",
    imageAlt: "Composição editorial sobre acesso responsável ao salário e saúde financeira",
    myth: "Antecipar salário sempre incentiva desorganização financeira.",
    shift: "O risco não está só no acesso. Está em oferecer crédito sem transparência, limites, educação e leitura do contexto financeiro do público.",
    question: "Sua política oferece uma saída segura para o imprevisto ou deixa o colaborador recorrer à opção mais cara?",
    signs: [
      { title: "Pedidos informais", text: "RH e liderança recebem solicitações de adiantamento sem regra clara ou tratamento uniforme." },
      { title: "Crédito caro", text: "O colaborador cobre emergências com cheque especial, rotativo ou empréstimos de curto prazo." },
      { title: "Turnover sensível", text: "Pressão financeira afeta produtividade, clima e permanência, sobretudo em faixas salariais menores." },
    ],
    profiles: [
      { label: "Pequena empresa", text: "Política simples que reduz exceções manuais e preserva previsibilidade do caixa." },
      { label: "Média empresa", text: "Automação de solicitações, critérios uniformes e comunicação de uso responsável." },
      { label: "Grande empresa", text: "Escala, integração com folha, limites por público e dados para prevenção de uso nocivo." },
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
    headline: "Toda planilha paralela é uma decisão que o RH terá de conferir duas vezes.",
    description: "Mapeie fornecedores, movimentações, integrações e conciliações para reduzir dispersão operacional e devolver tempo estratégico ao RH.",
    metaDescription: "Diagnóstico de integração de benefícios com folha, dispersão de fornecedores, planilhas manuais e risco de erro para o RH.",
    image: "/images/categoria-gestao-integrada-ai.webp",
    imageAlt: "Composição editorial sobre integração de fornecedores, dados e folha de pagamento",
    myth: "Ter muitos fornecedores significa ter uma política mais completa.",
    shift: "Amplitude sem governança pode multiplicar portais, arquivos, prazos e divergências. A pergunta não é quantos benefícios existem, mas como eles conversam com a folha e com o RH.",
    question: "Quantas vezes o mesmo dado é digitado, exportado e conferido até a folha fechar?",
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
      { question: "Integração com folha elimina toda conferência?", answer: "Não. Ela reduz digitação e divergência, mas regras, exceções e auditoria continuam necessárias. O ganho vem de concentrar conferência no que realmente exige decisão humana." },
      { question: "Como calcular o custo das planilhas manuais?", answer: "Some horas de preparação, conferência e correção, custo do time envolvido e impacto médio dos erros. O diagnóstico deste site oferece uma estimativa inicial com premissas visíveis." },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
