import type { LocalizedCaseData } from "./types";

const aionSolution: LocalizedCaseData = {
  slug: "aion-solution",
  n: "03",
  cover: "cover.png",
  client: "Aion Solution",
  tools: ["Figma"],
  year: "2024",
  roles: ["UX/UI Design", "Product Design"],
  title: { pt: "Aion Solution", en: "", es: "" },
  summary: {
    pt: "Redesign de plataforma para aumentar adoção, clareza de jornada e ativação de funcionalidades estratégicas.",
    en: "",
    es: "",
  },
  sections: [
    {
      title: { pt: "O Desafio", en: "", es: "" },
      subtitle: { pt: "Descoberta de valor e adoção de funcionalidades estratégicas", en: "", es: "" },
      body: {
        pt: "A Aion Solution é uma plataforma focada em gestão de lucratividade para e-commerces e operações de varejo. O desafio central era aumentar a adoção das funcionalidades de maior valor estratégico e traduzir dados complexos em direcionamentos claros e acionáveis para os gestores — reduzindo fricção em fluxos complexos e elevando o entendimento do valor da plataforma.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "Aion Score", en: "", es: "" },
      subtitle: { pt: "Traduzindo complexidade em direcionamento claro", en: "", es: "" },
      body: {
        pt: "Mesmo com melhorias iniciais, ainda observávamos usuários ignorando recomendações importantes. Para reforçar a percepção de urgência e valor, criamos o Aion Score — uma funcionalidade que consolidava uma análise da performance ideal de lucro baseada na metodologia proprietária da empresa. O score apresentava gaps críticos, oportunidades de melhoria, nível de maturidade da operação e ações prioritárias. Além de reforçar as recomendações, o score passou a atuar como um driver de ativação de features estratégicas, conectando diretamente o diagnóstico às ações recomendadas pela plataforma.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "Gestão de Usuários e Atribuições", en: "", es: "" },
      subtitle: { pt: "Cada ação chegando à pessoa certa", en: "", es: "" },
      body: {
        pt: "As tarefas não poderiam ser genéricas — cada ação precisava chegar à pessoa certa. Desenhamos uma área completa de gestão de usuários, cargos, permissões e atribuições por função. Isso permitiu que tarefas fossem direcionadas de forma contextualizada: abastecimento para o responsável por supply, precificação para o time comercial, fluxo de caixa para o financeiro. Essa camada foi essencial para aumentar eficiência e reduzir ruído operacional.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "SmartSupply e Substituições Equivalentes", en: "", es: "" },
      subtitle: { pt: "Simplificando fluxos de alta complexidade", en: "", es: "" },
      body: {
        pt: "Lideramos otimizações no SmartSupply — funcionalidade que permitia que o usuário cadastrasse produtos elegíveis para recomendações de abastecimento inteligente. O maior desafio era a alta complexidade do fluxo, com muitas informações a serem preenchidas. A solução foi redesenhar o fluxo em 3 etapas com stepper visual, trazendo melhor percepção de progresso e redução da sobrecarga mental. Também criamos um modelo de visualização produto vs. produto para substituições equivalentes, destacando claramente o item atual, o item sugerido, ganho de margem, economia total e impacto no processo de cotação.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "Simulador de Precificação", en: "", es: "" },
      subtitle: { pt: "Da análise à ação: conectando insight, plano e execução", en: "", es: "" },
      body: {
        pt: "O simulador de formação de preço tinha como objetivo calcular o preço ideal de venda para maximizar lucratividade. O maior desafio não foi a interface da calculadora, mas a arquitetura da decisão: quais variáveis o usuário poderia alterar, quais deveriam permanecer fixas e como evitar paralisia por excesso de opções. A experiência entregava não apenas um preço sugerido, mas projeções de negócio como lucro estimado mensal, faturamento projetado, margem percentual e impacto por cenário. Após os testes de uso, identificamos que usuários não sabiam como aplicar o plano gerado — o que nos levou a criar a função de salvar plano e um modal de próximos passos, conectando insight → ação → execução.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "O Impacto", en: "", es: "" },
      body: {
        pt: "O projeto foi especialmente relevante por atuar diretamente em descoberta de valor e adoção de funcionalidades estratégicas. As principais evoluções foram maior clareza da jornada, aumento do uso de funcionalidades avançadas, melhor direcionamento operacional, maior entendimento do valor da plataforma e redução de fricção em fluxos complexos. Mais do que redesign, esse projeto foi uma evolução de experiência orientada a produto e growth.",
        en: "",
        es: "",
      },
    },
  ],
};

export default aionSolution;
