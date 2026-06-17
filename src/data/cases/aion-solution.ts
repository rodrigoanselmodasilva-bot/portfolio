import type { LocalizedCaseData } from "./types";

const aionSolution: LocalizedCaseData = {
  slug: "aion-solution",
  n: "03",
  cover: "cover.png",
  client: "Aion Solution",
  tools: ["Figma"],
  year: "2024",
  roles: ["UX/UI Design", "Product Design"],
  title: { pt: "Aion Solution", en: "Aion Solution", es: "Aion Solution" },
  summary: {
    pt: "Redesign de plataforma para aumentar adoção, clareza de jornada e ativação de funcionalidades estratégicas.",
    en: "Platform redesign to drive adoption, clarify user journeys, and activate high-value features.",
    es: "Rediseño de plataforma para aumentar la adopción, claridad de jornada y activación de funcionalidades estratégicas.",
  },
  sections: [
    {
      title: { pt: "O Desafio", en: "The Challenge", es: "El Desafío" },
      subtitle: { pt: "Descoberta de valor e adoção de funcionalidades estratégicas", en: "Value discovery and strategic feature adoption", es: "Descubrimiento de valor y adopción de funcionalidades estratégicas" },
      body: {
        pt: "A Aion Solution é uma plataforma focada em gestão de lucratividade para e-commerces e operações de varejo. O desafio central era aumentar a adoção das funcionalidades de maior valor estratégico e traduzir dados complexos em direcionamentos claros e acionáveis para os gestores — reduzindo fricção em fluxos complexos e elevando o entendimento do valor da plataforma.",
        en: "Aion Solution is a platform focused on profitability management for e-commerce and retail operations. The core challenge was increasing adoption of the highest-value features and translating complex data into clear, actionable direction for managers — reducing friction in complex workflows and raising the perceived value of the platform.",
        es: "Aion Solution es una plataforma enfocada en la gestión de rentabilidad para e-commerces y operaciones de retail. El desafío central era aumentar la adopción de las funcionalidades de mayor valor estratégico y traducir datos complejos en orientaciones claras y accionables para los gestores, reduciendo la fricción en flujos complejos y elevando la comprensión del valor de la plataforma.",
      },
    },
    {
      title: { pt: "Aion Score", en: "Aion Score", es: "Aion Score" },
      subtitle: { pt: "Traduzindo complexidade em direcionamento claro", en: "Turning complexity into clear direction", es: "Traduciendo complejidad en orientación clara" },
      body: {
        pt: "Mesmo com melhorias iniciais, ainda observávamos usuários ignorando recomendações importantes. Para reforçar a percepção de urgência e valor, criamos o Aion Score — uma funcionalidade que consolidava uma análise da performance ideal de lucro baseada na metodologia proprietária da empresa. O score apresentava gaps críticos, oportunidades de melhoria, nível de maturidade da operação e ações prioritárias. Além de reforçar as recomendações, o score passou a atuar como um driver de ativação de features estratégicas, conectando diretamente o diagnóstico às ações recomendadas pela plataforma.",
        en: "Even after initial improvements, we still observed users ignoring important recommendations. To reinforce the perception of urgency and value, we created the Aion Score — a feature that consolidated a profitability performance analysis based on the company's proprietary methodology. The score surfaced critical gaps, improvement opportunities, operational maturity level, and priority actions. Beyond reinforcing recommendations, the score became a driver for strategic feature activation, directly connecting the diagnosis to the actions recommended by the platform.",
        es: "Incluso con las mejoras iniciales, seguíamos observando que los usuarios ignoraban recomendaciones importantes. Para reforzar la percepción de urgencia y valor, creamos el Aion Score — una funcionalidad que consolidaba un análisis del rendimiento ideal de rentabilidad basado en la metodología propia de la empresa. El score presentaba brechas críticas, oportunidades de mejora, nivel de madurez de la operación y acciones prioritarias. Además de reforzar las recomendaciones, el score pasó a actuar como impulsor de activación de funcionalidades estratégicas, conectando directamente el diagnóstico con las acciones recomendadas por la plataforma.",
      },
    },
    {
      title: { pt: "Gestão de Usuários e Atribuições", en: "User Management and Task Assignment", es: "Gestión de Usuarios y Atribuciones" },
      subtitle: { pt: "Cada ação chegando à pessoa certa", en: "Every action reaching the right person", es: "Cada acción llegando a la persona correcta" },
      body: {
        pt: "As tarefas não poderiam ser genéricas — cada ação precisava chegar à pessoa certa. Desenhamos uma área completa de gestão de usuários, cargos, permissões e atribuições por função. Isso permitiu que tarefas fossem direcionadas de forma contextualizada: abastecimento para o responsável por supply, precificação para o time comercial, fluxo de caixa para o financeiro. Essa camada foi essencial para aumentar eficiência e reduzir ruído operacional.",
        en: "Tasks could not be generic — each action needed to reach the right person. We designed a complete area for managing users, roles, permissions, and function-based assignments. This allowed tasks to be routed contextually: supply replenishment to the supply owner, pricing to the commercial team, cash flow to finance. This layer was essential for increasing efficiency and reducing operational noise.",
        es: "Las tareas no podían ser genéricas: cada acción necesitaba llegar a la persona correcta. Diseñamos un área completa de gestión de usuarios, cargos, permisos y atribuciones por función. Esto permitió que las tareas fueran dirigidas de forma contextualizada: abastecimiento para el responsable de supply, precios para el equipo comercial, flujo de caja para el área financiera. Esta capa fue esencial para aumentar la eficiencia y reducir el ruido operacional.",
      },
    },
    {
      title: { pt: "SmartSupply e Substituições Equivalentes", en: "SmartSupply and Equivalent Substitutions", es: "SmartSupply y Sustituciones Equivalentes" },
      subtitle: { pt: "Simplificando fluxos de alta complexidade", en: "Simplifying high-complexity workflows", es: "Simplificando flujos de alta complejidad" },
      body: {
        pt: "Lideramos otimizações no SmartSupply — funcionalidade que permitia que o usuário cadastrasse produtos elegíveis para recomendações de abastecimento inteligente. O maior desafio era a alta complexidade do fluxo, com muitas informações a serem preenchidas. A solução foi redesenhar o fluxo em 3 etapas com stepper visual, trazendo melhor percepção de progresso e redução da sobrecarga mental. Também criamos um modelo de visualização produto vs. produto para substituições equivalentes, destacando claramente o item atual, o item sugerido, ganho de margem, economia total e impacto no processo de cotação.",
        en: "We led optimizations to SmartSupply — a feature that let users register products eligible for smart replenishment recommendations. The biggest challenge was the high complexity of the flow, with a large amount of information to fill in. The solution was to redesign the flow into 3 steps with a visual stepper, improving the sense of progress and reducing mental overload. We also created a product-vs-product view for equivalent substitutions, clearly showing the current item, the suggested item, margin gain, total savings, and impact on the quoting process.",
        es: "Lideramos optimizaciones en SmartSupply — funcionalidad que permitía a los usuarios registrar productos elegibles para recomendaciones de abastecimiento inteligente. El mayor desafío era la alta complejidad del flujo, con mucha información a completar. La solución fue rediseñar el flujo en 3 pasos con un stepper visual, mejorando la percepción de progreso y reduciendo la sobrecarga mental. También creamos un modelo de visualización producto vs. producto para sustituciones equivalentes, destacando claramente el ítem actual, el ítem sugerido, ganancia de margen, ahorro total e impacto en el proceso de cotización.",
      },
    },
    {
      title: { pt: "Simulador de Precificação", en: "Pricing Simulator", es: "Simulador de Precios" },
      subtitle: { pt: "Da análise à ação: conectando insight, plano e execução", en: "From analysis to action: connecting insight, plan, and execution", es: "Del análisis a la acción: conectando insight, plan y ejecución" },
      body: {
        pt: "O simulador de formação de preço tinha como objetivo calcular o preço ideal de venda para maximizar lucratividade. O maior desafio não foi a interface da calculadora, mas a arquitetura da decisão: quais variáveis o usuário poderia alterar, quais deveriam permanecer fixas e como evitar paralisia por excesso de opções. A experiência entregava não apenas um preço sugerido, mas projeções de negócio como lucro estimado mensal, faturamento projetado, margem percentual e impacto por cenário. Após os testes de uso, identificamos que usuários não sabiam como aplicar o plano gerado — o que nos levou a criar a função de salvar plano e um modal de próximos passos, conectando insight → ação → execução.",
        en: "The pricing simulator was designed to calculate the optimal selling price to maximize profitability. The biggest challenge was not the calculator UI, but the decision architecture: which variables the user could change, which should remain fixed, and how to prevent decision paralysis from too many options. The experience delivered not just a suggested price, but business projections — estimated monthly profit, projected revenue, percentage margin, and scenario impact. After usability testing, we found that users did not know how to act on the generated plan, which led us to create a save plan function and a next steps modal, connecting insight to action to execution.",
        es: "El simulador de formación de precios tenía como objetivo calcular el precio ideal de venta para maximizar la rentabilidad. El mayor desafío no fue la interfaz de la calculadora, sino la arquitectura de la decisión: qué variables podía modificar el usuario, cuáles debían permanecer fijas y cómo evitar la parálisis por exceso de opciones. La experiencia entregaba no solo un precio sugerido, sino proyecciones de negocio como ganancia mensual estimada, facturación proyectada, margen porcentual e impacto por escenario. Tras las pruebas de uso, identificamos que los usuarios no sabían cómo aplicar el plan generado, lo que nos llevó a crear la función de guardar plan y un modal de próximos pasos, conectando insight → acción → ejecución.",
      },
    },
    {
      title: { pt: "O Impacto", en: "The Impact", es: "El Impacto" },
      body: {
        pt: "O projeto foi especialmente relevante por atuar diretamente em descoberta de valor e adoção de funcionalidades estratégicas. As principais evoluções foram maior clareza da jornada, aumento do uso de funcionalidades avançadas, melhor direcionamento operacional, maior entendimento do valor da plataforma e redução de fricção em fluxos complexos. Mais do que redesign, esse projeto foi uma evolução de experiência orientada a produto e growth.",
        en: "This project was especially significant for its direct impact on value discovery and strategic feature adoption. The main outcomes were greater journey clarity, increased use of advanced features, better operational direction, improved understanding of the platform's value, and reduced friction in complex workflows. More than a redesign, this was an experience evolution driven by product and growth thinking.",
        es: "Este proyecto fue especialmente relevante por actuar directamente en el descubrimiento de valor y la adopción de funcionalidades estratégicas. Las principales evoluciones fueron mayor claridad de la jornada, aumento del uso de funcionalidades avanzadas, mejor orientación operacional, mayor comprensión del valor de la plataforma y reducción de la fricción en flujos complejos. Más que un rediseño, este proyecto fue una evolución de experiencia orientada a producto y crecimiento.",
      },
    },
  ],
};

export default aionSolution;
