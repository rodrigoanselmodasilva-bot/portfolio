import type { LocalizedCaseData } from "./types";

const plataformaDeLicitacoes: LocalizedCaseData = {
  slug: "sabesp",
  n: "02",
  cover: "cover.png",
  client: "Sabesp",
  tools: ["Figma"],
  year: "2023",
  roles: ["UX/UI Design"],
  title: { pt: "Plataforma de Licitações", en: "Procurement Platform", es: "Plataforma de Licitaciones" },
  summary: {
    pt: "Simplificando o processo licitatório para aumentar concorrência e número de fornecedores.",
    en: "Simplifying the procurement process to increase competition and grow the supplier base.",
    es: "Simplificando el proceso licitatorio para aumentar la competencia y el número de proveedores.",
  },
  sections: [
    {
      title: { pt: "A Missão", en: "The Mission", es: "La Misión" },
      subtitle: { pt: "Facilitar o processo licitatório para ampliar a concorrência", en: "Making the procurement process easier to drive broader competition", es: "Facilitar el proceso licitatorio para ampliar la competencia" },
      body: {
        pt: "O processo licitatório da Sabesp era fragmentado e pouco intuitivo. As informações estavam dispersas em diferentes sistemas e a linguagem utilizada dificultava o entendimento dos novos fornecedores. Não havia uma plataforma centralizada para os fornecedores acompanharem licitações, seu andamento e outras informações relevantes. O cadastro de fornecedores era burocrático e a falta de documentação adequada era um problema recorrente.",
        en: "Sabesp's procurement process was fragmented and hard to navigate. Information was scattered across different systems, and the language used made it difficult for new suppliers to understand what was required. There was no centralized platform where suppliers could track bids, monitor progress, or access relevant information. Vendor registration was bureaucratic, and missing or incorrect documentation was a recurring problem.",
        es: "El proceso licitatorio de Sabesp era fragmentado y poco intuitivo. La información estaba dispersa en distintos sistemas y el lenguaje utilizado dificultaba la comprensión de los nuevos proveedores. No existía una plataforma centralizada donde los proveedores pudieran seguir licitaciones, su avance y otras informaciones relevantes. El registro de proveedores era burocrático y la falta de documentación adecuada era un problema recurrente.",
      },
    },
    {
      title: { pt: "O Insight", en: "The Insight", es: "El Insight" },
      subtitle: { pt: "O problema não era encontrar as licitações — era encontrá-las a tempo", en: "The problem was not finding bids — it was finding them in time", es: "El problema no era encontrar las licitaciones — era encontrarlas a tiempo" },
      body: {
        pt: "Ao longo da pesquisa, chegamos a um insight importante: o maior desafio não estava em encontrar as licitações, mas em encontrá-las a tempo e entender rapidamente como participar. As dores mais críticas estavam concentradas em três pontos: identificar os prazos corretos, entender os requisitos para participação e saber como e quando enviar a documentação necessária. Esse insight mudou completamente a direção do projeto.",
        en: "Through research, we arrived at a key insight: the biggest challenge was not finding procurement opportunities — it was finding them in time and quickly understanding how to participate. The most critical pain points were concentrated in three areas: identifying the right deadlines, understanding participation requirements, and knowing how and when to submit the necessary documentation. This insight completely redirected the project.",
        es: "A lo largo de la investigación, llegamos a un insight clave: el mayor desafío no estaba en encontrar las licitaciones, sino en encontrarlas a tiempo y entender rápidamente cómo participar. Los problemas más críticos se concentraban en tres puntos: identificar los plazos correctos, comprender los requisitos de participación y saber cómo y cuándo enviar la documentación necesaria. Este insight cambió por completo la dirección del proyecto.",
      },
    },
    {
      title: { pt: "Os Desafios", en: "The Challenges", es: "Los Desafíos" },
      body: {
        pt: "Os desafios principais envolveram a complexidade burocrática de uma empresa pública, a necessidade de integração de múltiplos sistemas de licitação como pregão e leilão, a falta de uma arquitetura da informação com diversos dados sem mapeamento, e a criação de uma nova identidade visual mantendo consistência com o design existente. Também precisávamos simplificar o processo para os fornecedores, criar uma área logada para acompanhamento fácil e estruturar a gestão de notificações e documentos.",
        en: "The main challenges included the bureaucratic complexity of a public company, the need to integrate multiple procurement systems such as open bidding and auctions, an absence of information architecture across unmapped data sets, and creating a new visual identity while maintaining consistency with the existing design. We also needed to simplify the process for suppliers, build a logged-in area for easy tracking, and structure notification and document management.",
        es: "Los principales desafíos incluyeron la complejidad burocrática de una empresa pública, la necesidad de integrar múltiples sistemas de licitación como pregón y subasta, la falta de una arquitectura de información con datos dispersos y sin mapear, y la creación de una nueva identidad visual manteniendo consistencia con el diseño existente. También necesitábamos simplificar el proceso para los proveedores, crear un área de acceso restringido para seguimiento fácil y estructurar la gestión de notificaciones y documentos.",
      },
    },
    {
      title: { pt: "A Solução", en: "The Solution", es: "La Solución" },
      subtitle: { pt: "Redesenhando a experiência com foco em clareza e tomada de decisão rápida", en: "Redesigning the experience around clarity and fast decision-making", es: "Rediseñando la experiencia con foco en claridad y toma de decisiones rápida" },
      body: {
        pt: "Com base nos insights, redesenhamos a interface priorizando clareza, agilidade e tomada de decisão rápida. A nova UI passou a destacar de forma muito mais visível o status da licitação, as próximas datas importantes, um resumo simplificado do edital e os requisitos principais para participação. O objetivo era reduzir o esforço cognitivo e permitir que o usuário entendesse rapidamente se aquele edital era relevante e se ainda estava no timing correto.",
        en: "Based on those insights, we redesigned the interface with a focus on clarity, speed, and fast decision-making. The new UI surfaced bid status, upcoming key dates, a simplified tender summary, and the main participation requirements far more prominently. The goal was to reduce cognitive load so users could quickly assess whether a tender was relevant and whether they were still within the right time window to act.",
        es: "Con base en los insights, rediseñamos la interfaz priorizando claridad, agilidad y toma de decisiones rápida. La nueva UI destacó de forma mucho más visible el estado de la licitación, las próximas fechas importantes, un resumen simplificado del pliego y los requisitos principales de participación. El objetivo era reducir el esfuerzo cognitivo y permitir que el usuario entendiera rápidamente si ese pliego era relevante y si aún estaba en el momento correcto para actuar.",
      },
    },
    {
      title: { pt: "O Resultado", en: "The Outcome", es: "El Resultado" },
      subtitle: { pt: "Acompanhamento e dados estratégicos no momento certo", en: "Tracking and strategic data at the right moment", es: "Seguimiento y datos estratégicos en el momento justo" },
      body: {
        pt: "Mapeamos os principais dados que influenciavam a tomada de decisão do usuário em cada etapa da jornada: acompanhar, participar e gerir uma licitação em andamento. A partir disso, refinamos a área logada para facilitar essa gestão, destacando informações críticas como status, prazos, requisitos e atualizações do processo. Ao dar visibilidade aos dados certos no momento certo, reduzimos incertezas e apoiamos decisões mais rápidas, aumentando o potencial de participação e recorrência na plataforma.",
        en: "We mapped the key data points that influenced user decision-making at each stage of the journey: monitoring, participating in, and managing an active bid. From there, we refined the logged-in area to simplify that management — surfacing critical information like status, deadlines, requirements, and process updates. By putting the right data in front of users at the right moment, we reduced uncertainty and supported faster decisions, increasing the potential for participation and return visits to the platform.",
        es: "Mapeamos los principales datos que influían en la toma de decisiones del usuario en cada etapa del proceso: seguir, participar y gestionar una licitación en curso. A partir de eso, refinamos el área de acceso restringido para facilitar esa gestión, destacando información crítica como estado, plazos, requisitos y actualizaciones del proceso. Al dar visibilidad a los datos correctos en el momento justo, redujimos incertidumbres y apoyamos decisiones más rápidas, aumentando el potencial de participación y recurrencia en la plataforma.",
      },
    },
  ],
};

export default plataformaDeLicitacoes;
