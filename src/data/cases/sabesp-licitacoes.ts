import type { LocalizedCaseData } from "./types";

const plataformaDeLicitacoes: LocalizedCaseData = {
  slug: "sabesp",
  n: "02",
  cover: "cover.png",
  client: "Sabesp",
  tools: ["Figma"],
  year: "2023",
  roles: ["UX/UI Design"],
  title: { pt: "Plataforma de Licitações", en: "", es: "" },
  summary: {
    pt: "Simplificando o processo licitatório para aumentar concorrência e número de fornecedores.",
    en: "",
    es: "",
  },
  sections: [
    {
      title: { pt: "A Missão", en: "", es: "" },
      subtitle: { pt: "Facilitar o processo licitatório para ampliar a concorrência", en: "", es: "" },
      body: {
        pt: "O processo licitatório da Sabesp era fragmentado e pouco intuitivo. As informações estavam dispersas em diferentes sistemas e a linguagem utilizada dificultava o entendimento dos novos fornecedores. Não havia uma plataforma centralizada para os fornecedores acompanharem licitações, seu andamento e outras informações relevantes. O cadastro de fornecedores era burocrático e a falta de documentação adequada era um problema recorrente.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "O Insight", en: "", es: "" },
      subtitle: { pt: "O problema não era encontrar as licitações — era encontrá-las a tempo", en: "", es: "" },
      body: {
        pt: "Ao longo da pesquisa, chegamos a um insight importante: o maior desafio não estava em encontrar as licitações, mas em encontrá-las a tempo e entender rapidamente como participar. As dores mais críticas estavam concentradas em três pontos: identificar os prazos corretos, entender os requisitos para participação e saber como e quando enviar a documentação necessária. Esse insight mudou completamente a direção do projeto.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "Os Desafios", en: "", es: "" },
      body: {
        pt: "Os desafios principais envolveram a complexidade burocrática de uma empresa pública, a necessidade de integração de múltiplos sistemas de licitação como pregão e leilão, a falta de uma arquitetura da informação com diversos dados sem mapeamento, e a criação de uma nova identidade visual mantendo consistência com o design existente. Também precisávamos simplificar o processo para os fornecedores, criar uma área logada para acompanhamento fácil e estruturar a gestão de notificações e documentos.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "A Solução", en: "", es: "" },
      subtitle: { pt: "Redesenhando a experiência com foco em clareza e tomada de decisão rápida", en: "", es: "" },
      body: {
        pt: "Com base nos insights, redesenhamos a interface priorizando clareza, agilidade e tomada de decisão rápida. A nova UI passou a destacar de forma muito mais visível o status da licitação, as próximas datas importantes, um resumo simplificado do edital e os requisitos principais para participação. O objetivo era reduzir o esforço cognitivo e permitir que o usuário entendesse rapidamente se aquele edital era relevante e se ainda estava no timing correto.",
        en: "",
        es: "",
      },
    },
    {
      title: { pt: "O Resultado", en: "", es: "" },
      subtitle: { pt: "Acompanhamento e dados estratégicos no momento certo", en: "", es: "" },
      body: {
        pt: "Mapeamos os principais dados que influenciavam a tomada de decisão do usuário em cada etapa da jornada: acompanhar, participar e gerir uma licitação em andamento. A partir disso, refinamos a área logada para facilitar essa gestão, destacando informações críticas como status, prazos, requisitos e atualizações do processo. Ao dar visibilidade aos dados certos no momento certo, reduzimos incertezas e apoiamos decisões mais rápidas, aumentando o potencial de participação e recorrência na plataforma.",
        en: "",
        es: "",
      },
    },
  ],
};

export default plataformaDeLicitacoes;
