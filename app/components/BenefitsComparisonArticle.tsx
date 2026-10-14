const criteria = [
  ["Objetivo do benefício", "Verifique como alimentação e refeição atendem à rotina de trabalho.", "Identifique quais categorias fazem sentido para o time e estão previstas na política da empresa."],
  ["Perfil dos colaboradores", "Compare hábitos de refeição, deslocamento e acesso aos estabelecimentos utilizados.", "Escute públicos diferentes para entender se outras categorias serão realmente utilizadas."],
  ["Aceitação", "Confira os locais de uso de VA e VR nas regiões onde os colaboradores vivem e trabalham.", "Confira aceitação e regras de cada categoria. Um cartão com várias opções não garante uso em qualquer lugar."],
  ["Regras e governança", "Defina valores, elegibilidade e comunicação de alimentação e refeição.", "Documente categorias, limites e possibilidades de movimentação de saldo conforme o contrato e as regras aplicáveis."],
  ["Rotina do RH", "Avalie cadastro, pedidos, conciliação e atendimento a dúvidas sobre saldos.", "Avalie se a gestão conjunta simplifica a operação ou acrescenta etapas e exceções para o RH."],
  ["Implantação e suporte", "Planeje a transição de saldos, o calendário de crédito e a orientação ao colaborador.", "Valide integrações, cronograma, comunicação por categoria e canais de suporte antes de migrar."],
];

export function BenefitsComparisonArticle() {
  return <>
    <section>
      <h2>Qual modelo combina com a sua empresa?</h2>
      <p>VA e VR atendem a necessidades de alimentação e refeição. Um modelo flexível pode reunir outras categorias, conforme a solução contratada e a política da empresa. A decisão começa no uso real: onde as pessoas utilizam os saldos, quais dúvidas chegam ao RH e quais controles precisam ser mantidos.</p>
      <p>Mais categorias não significam, por si só, mais valor para o colaborador. Antes de trocar, compare os modelos pelo mesmo conjunto de critérios.</p>
    </section>
    <section>
      <h2>Compare os critérios antes de mudar</h2>
      <div className="benefit-comparison-scroll" role="region" aria-label="Comparação de VA, VR e benefícios flexíveis" tabIndex={0}>
        <table className="benefit-comparison-table">
          <caption>VA/VR e benefícios flexíveis: perguntas para a decisão do RH</caption>
          <thead><tr><th scope="col">Critério</th><th scope="col">VA e VR</th><th scope="col">Benefícios flexíveis</th></tr></thead>
          <tbody>{criteria.map(([criterion, traditional, flexible]) => <tr key={criterion}><th scope="row">{criterion}</th><td>{traditional}</td><td>{flexible}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Um roteiro simples para o RH</h2>
      <ol><li>Mapeie hábitos de uso, localidades e dúvidas recorrentes de grupos representativos do time.</li><li>Compare aceitação, regras de saldo, custo total, suporte e esforço de implantação de cada alternativa.</li><li>Defina os critérios com RH e financeiro e peça demonstrações dos fluxos que a equipe utiliza.</li><li>Planeje comunicação e transição e acompanhe dúvidas e utilização depois da implantação.</li></ol>
      <p>As condições variam conforme fornecedor e contrato. Confirme as regras de uso, os requisitos aplicáveis e os canais de atendimento antes da decisão.</p>
    </section>
    <section>
      <h2>Precisa comparar cartões para o seu cenário?</h2>
      <p>A Consultoria VR reúne a análise especializada de cartões, VA, VR e benefícios flexíveis do ecossistema Hirayama. Você pode organizar as prioridades da empresa antes de conversar sobre fornecedores.</p>
      <a className="button" href="https://www.consultoriavr.com.br/#diagnostico">Solicitar análise na Consultoria VR</a>
    </section>
  </>;
}
