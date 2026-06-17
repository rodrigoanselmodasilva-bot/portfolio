import type { Dictionary } from "../types";

const pt: Dictionary = {
  meta: {
    homeTitle: "Rodrigo Anselmo — Estrategista de Produto & Design",
    homeDescription:
      "Estrategista de produto e design. Construo sistemas, produtos e ideias na interseção entre estratégia, narrativa e design.",
    ogTitle: "Rodrigo Anselmo — Estrategista de Produto & Design",
    ogDescription:
      "Estrategista de produto e design. Construo sistemas, produtos e ideias na interseção entre estratégia, narrativa e design.",
  },
  topMeta: {
    archive: "Arquivo · MMXXVI",
  },
  nav: {
    sections: [
      { id: "vision", label: "Visão", num: "I" },
      { id: "story", label: "Trajetória", num: "II" },
      { id: "method", label: "Método", num: "III" },
      { id: "projects", label: "Projetos", num: "IV" },
      { id: "legacy", label: "Princípios", num: "V" },
      { id: "contact", label: "Contato", num: "VI" },
    ],
  },
  hero: {
    eyebrow: "Cap. I — Visão",
    title: "Estratégia, narrativa",
    titleItalic: "e design",
    titleHighlight: "no mesmo lugar.",
    lead: "Desenho produtos e estratégias na interseção entre negócio, narrativa e design — do problema à execução.",
    cta: "Ver projetos",
  },
  story: {
    eyebrow: "Cap. II — Trajetória",
    title: "Uma trajetória feita de disciplinas que se somam.",
    fragmentLabel: "Fragmento",
    timeline: [
      {
        year: "2008",
        title: "Direito",
        body: "Aprendi que todo sistema se apoia numa estrutura de linguagem e argumento.",
      },
      {
        year: "2012",
        title: "Marketing",
        body: "Transformei valor abstrato em histórias que o mercado consegue segurar. Estratégia sem narrativa desmorona quando toca o real.",
      },
      {
        year: "2015",
        title: "UX",
        body: "Estudei a geometria do comportamento. Todo clique é uma frase; todo fluxo, um parágrafo de um texto maior.",
      },
      {
        year: "2018",
        title: "Produto",
        body: "Construí produtos como organismos vivos — feitos de trocas, visão e disciplina medida em iterações entregues.",
      },
      {
        year: "2021",
        title: "Estratégia",
        body: "Conectei arquitetura de negócio e intenção criativa. Passei de fazer coisas para decidir quais coisas merecem ser feitas.",
      },
      {
        year: "Hoje",
        title: "Produto & Design",
        body: "Conecto estratégia de negócio e intenção de design para construir produtos que duram.",
      },
    ],
    scrollHint: "Role",
  },
  method: {
    eyebrow: "Cap. III — Método",
    title: "Mais do que um processo: decisões com consequência.",
    hoverHint: "Passe o cursor sobre cada etapa",
    nodes: [
      { id: "research", label: "Pesquisa", body: "Habitar o território antes de desenhar o mapa." },
      { id: "insight", label: "Insight", body: "Comprimir o ruído em uma única verdade que sustenta tudo." },
      { id: "strategy", label: "Estratégia", body: "Sequenciar os movimentos que se acumulam." },
      { id: "design", label: "Design", body: "Traduzir intenção em forma, ritual e restrição." },
      { id: "execution", label: "Execução", body: "Entregar com a disciplina de quem vai ter que viver com o resultado." },
      { id: "scale", label: "Escala", body: "Construir a estrutura que permite ao sistema crescer sem perder a forma." },
    ],
  },
  projects: {
    eyebrow: "Cap. IV — Projetos",
    title: "Casos reais, não entradas de portfólio.",
  },
  principles: {
    eyebrow: "Cap. V — Princípios",
    lines: [
      "Todo sistema conta uma história.",
      "Todo produto deixa uma marca.",
      "Toda boa ideia começa simples — e é refinada até virar inevitável.",
    ],
  },
  contact: {
    eyebrow: "Cap. VI — Contato",
    titleLine1: "Vamos construir algo",
    titleItalic: "que ",
    titleHighlight: "valha a pena.",
    lead: "Para colaborações, consultoria e projetos de longo prazo onde o resultado importa mais que o ciclo.",
    cta: "Iniciar conversa",
    monolithLabel: "Monólito · Completo",
  },
  footer: {
    copyright: "© MMXXVI · Rodrigo Anselmo",
    location: "Lat 23°33′44″S · Lon 46°38′20″W · São Paulo",
    archive: "Arquivo · v.1",
  },
  case: {
    client: "Cliente",
    tools: "Ferramentas",
    year: "Ano",
    role: "Papel",
    archive: "Arquivo",
    previous: "Anterior",
    next: "Próximo",
    backToArchive: "← Arquivo",
    notFound: "Case não encontrado.",
    caseLabel: "Caso",
  },
};

export default pt;
