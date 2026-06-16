import type { CaseData } from "./types";

const sebrae: CaseData = {
  slug: "sebrae",
  n: "04",
  title: "Sebrae",
  summary: "Transformando uma LMS em LXP para aumentar retenção e engajamento na plataforma do Sebrae.",
  cover: "cover.png",
  client: "EaD Tech & Sebrae",
  tools: ["Figma", "Hotjar"],
  year: "2024",
  roles: ["UX/UI Design"],
  sections: [
    {
      title: "O Desafio",
      subtitle: "Transformar uma LMS em uma plataforma de experiência de aprendizado",
      body: "O desafio era reimaginar completamente a experiência de consumo de cursos online da plataforma da EAD Tech, tendo o Sebrae como principal cliente. O objetivo de negócio era claro: aumentar o tempo de retenção dentro da plataforma. A solicitação inicial envolvia três grandes frentes — reconstruir a jornada de estudos, elevar a interface visual para um padrão mais atual e investir em gamificação para aumentar recorrência. Mas o projeto rapidamente se mostrou muito maior do que um redesign visual.",
    },
    {
      title: "Discovery",
      subtitle: "Começamos pelo que realmente importa: entender o produto",
      body: "Antes de desenhar qualquer tela, mergulhamos profundamente no ecossistema existente. Mapeamos funcionalidades atuais, dependências de backend, regras de negócio, padrões de navegação, benchmarks de mercado e referências visuais trazidas pela equipe. Combinamos análise de gravações e mapas de calor via Hotjar — identificando que usuários preferiam o menu de navegação expandido e tinham dificuldade em diferenciar as áreas de Catálogo de Cursos e Cursos e Trilhas — com entrevistas com usuários para compreender como os alunos escolhiam cursos e o impacto das informações nessa decisão.",
    },
    {
      title: "Personalização e Endowment Effect",
      subtitle: "Aprendizado adaptativo como protagonismo do usuário",
      body: "Para responder ao como poderíamos incorporar aprendizado adaptativo personalizado ao desempenho e preferências do aluno, desenhamos a possibilidade de criar, salvar e evoluir coleções de cursos, transformando a navegação em uma jornada de aprendizado personalizada. Ao organizar conteúdos com base em seus interesses e receber recomendações alinhadas ao seu comportamento, o usuário passa a construir ativamente seu próprio caminho. Essa abordagem reforça o Endowment Effect, aumentando a percepção de valor sobre a experiência e fortalecendo o engajamento e a continuidade na jornada de aprendizado.",
    },
    {
      title: "Comunidade e Descoberta",
      subtitle: "Da interação isolada ao senso de pertencimento integrado",
      body: "Para tornar a comunidade mais acessível e engajadora, evoluímos o conceito tradicional de fóruns para algo mais integrado à experiência de aprendizado. Criamos uma dinâmica de interação fluida entre professor–aluno e aluno–aluno dentro da própria sala de aula, incorporando o conceito de comunidade diretamente na jornada educacional. Para estimular a descoberta de novos cursos e trilhas, incentivamos os usuários a indicar seus interesses desde o primeiro contato — permitindo que a plataforma adaptasse imediatamente a experiência com recomendações mais relevantes.",
    },
    {
      title: "Gamificação",
      subtitle: "Engajamento e tempo de sessão como métricas centrais",
      body: "Estruturamos um sistema de gamificação focado diretamente nas métricas-chave do cliente. Introduzimos uma lógica contínua de pontos por interações dentro da plataforma, incentivando o uso recorrente e aumentando o tempo ativo dos alunos. Para potencializar esse efeito, criamos uma loja de recompensas e a ferramenta de torneios, permitindo ativações sazonais com desafios e prêmios diferenciados — funcionando como gatilhos estratégicos para reaquecer a base e impulsionar o engajamento sempre que necessário.",
    },
    {
      title: "O Resultado",
      body: "Esse projeto para o Sebrae foi mais do que uma evolução de interface — foi a construção de uma experiência orientada a comportamento, engajamento e crescimento contínuo. Ao integrar personalização, senso de pertencimento e mecânicas de progressão, conseguimos transformar a jornada de aprendizado em algo mais relevante, dinâmico e alinhado aos objetivos do usuário e do negócio. O resultado é uma plataforma mais viva, que não apenas entrega conteúdo, mas estimula ação, recorrência e evolução constante.",
    },
  ],
};

export default sebrae;
