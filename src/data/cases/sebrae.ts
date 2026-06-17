import type { LocalizedCaseData } from "./types";

const sebrae: LocalizedCaseData = {
  slug: "sebrae",
  n: "04",
  cover: "cover.png",
  client: "EaD Tech & Sebrae",
  tools: ["Figma", "Hotjar"],
  year: "2024",
  roles: ["UX/UI Design"],
  title: { pt: "Sebrae", en: "Sebrae", es: "Sebrae" },
  summary: {
    pt: "Transformando uma LMS em LXP para aumentar retenção e engajamento na plataforma do Sebrae.",
    en: "Transforming an LMS into an LXP to increase retention and engagement on the Sebrae platform.",
    es: "Transformando un LMS en LXP para aumentar la retención y el engagement en la plataforma del Sebrae.",
  },
  sections: [
    {
      title: { pt: "O Desafio", en: "The Challenge", es: "El Desafío" },
      subtitle: { pt: "Transformar uma LMS em uma plataforma de experiência de aprendizado", en: "Transforming an LMS into a learning experience platform", es: "Transformar un LMS en una plataforma de experiencia de aprendizaje" },
      body: {
        pt: "O desafio era reimaginar completamente a experiência de consumo de cursos online da plataforma da EAD Tech, tendo o Sebrae como principal cliente. O objetivo de negócio era claro: aumentar o tempo de retenção dentro da plataforma. A solicitação inicial envolvia três grandes frentes — reconstruir a jornada de estudos, elevar a interface visual para um padrão mais atual e investir em gamificação para aumentar recorrência. Mas o projeto rapidamente se mostrou muito maior do que um redesign visual.",
        en: "The challenge was to completely reimagine the online course experience on the EAD Tech platform, with Sebrae as its main client. The business goal was clear: increase retention time within the platform. The initial brief covered three major areas — rebuilding the study journey, elevating the visual interface to a more current standard, and investing in gamification to drive recurrence. But the project quickly revealed itself to be much larger than a visual redesign.",
        es: "El desafío era reimaginar por completo la experiencia de consumo de cursos online de la plataforma de EAD Tech, con Sebrae como principal cliente. El objetivo de negocio era claro: aumentar el tiempo de retención dentro de la plataforma. La solicitud inicial abarcaba tres grandes frentes: reconstruir la jornada de estudios, elevar la interfaz visual a un estándar más actual e invertir en gamificación para aumentar la recurrencia. Pero el proyecto rápidamente se reveló mucho mayor que un rediseño visual.",
      },
    },
    {
      title: { pt: "Discovery", en: "Discovery", es: "Discovery" },
      subtitle: { pt: "Começamos pelo que realmente importa: entender o produto", en: "We started with what actually matters: understanding the product", es: "Comenzamos por lo que realmente importa: entender el producto" },
      body: {
        pt: "Antes de desenhar qualquer tela, mergulhamos profundamente no ecossistema existente. Mapeamos funcionalidades atuais, dependências de backend, regras de negócio, padrões de navegação, benchmarks de mercado e referências visuais trazidas pela equipe. Combinamos análise de gravações e mapas de calor via Hotjar — identificando que usuários preferiam o menu de navegação expandido e tinham dificuldade em diferenciar as áreas de Catálogo de Cursos e Cursos e Trilhas — com entrevistas com usuários para compreender como os alunos escolhiam cursos e o impacto das informações nessa decisão.",
        en: "Before designing any screen, we immersed ourselves in the existing ecosystem. We mapped current features, backend dependencies, business rules, navigation patterns, market benchmarks, and visual references brought by the team. We combined session recording and heatmap analysis via Hotjar — identifying that users preferred the expanded navigation menu and had difficulty distinguishing the Course Catalog from the Courses and Tracks areas — with user interviews to understand how learners chose courses and how the available information influenced that decision.",
        es: "Antes de diseñar cualquier pantalla, nos sumergimos en el ecosistema existente. Mapeamos funcionalidades actuales, dependencias de backend, reglas de negocio, patrones de navegación, benchmarks de mercado y referencias visuales aportadas por el equipo. Combinamos el análisis de grabaciones y mapas de calor vía Hotjar — identificando que los usuarios preferían el menú de navegación expandido y tenían dificultad para diferenciar las áreas de Catálogo de Cursos y Cursos y Rutas — con entrevistas a usuarios para comprender cómo los estudiantes elegían cursos y el impacto de la información en esa decisión.",
      },
    },
    {
      title: { pt: "Personalização e Endowment Effect", en: "Personalization and Endowment Effect", es: "Personalización y Efecto de Dotación" },
      subtitle: { pt: "Aprendizado adaptativo como protagonismo do usuário", en: "Adaptive learning as user agency", es: "Aprendizaje adaptativo como protagonismo del usuario" },
      body: {
        pt: "Para responder ao como poderíamos incorporar aprendizado adaptativo personalizado ao desempenho e preferências do aluno, desenhamos a possibilidade de criar, salvar e evoluir coleções de cursos, transformando a navegação em uma jornada de aprendizado personalizada. Ao organizar conteúdos com base em seus interesses e receber recomendações alinhadas ao seu comportamento, o usuário passa a construir ativamente seu próprio caminho. Essa abordagem reforça o Endowment Effect, aumentando a percepção de valor sobre a experiência e fortalecendo o engajamento e a continuidade na jornada de aprendizado.",
        en: "To address how we could embed adaptive learning tailored to each learner's performance and preferences, we designed the ability to create, save, and evolve course collections — turning navigation into a personalized learning journey. By organizing content based on their interests and receiving behavior-aligned recommendations, users actively build their own path. This approach reinforces the Endowment Effect, increasing perceived value over the experience and strengthening engagement and continuity in the learning journey.",
        es: "Para responder a cómo podríamos incorporar aprendizaje adaptativo personalizado al rendimiento y las preferencias del estudiante, diseñamos la posibilidad de crear, guardar y evolucionar colecciones de cursos, transformando la navegación en una jornada de aprendizaje personalizada. Al organizar contenidos según sus intereses y recibir recomendaciones alineadas a su comportamiento, el usuario construye activamente su propio camino. Este enfoque refuerza el Efecto de Dotación, aumentando la percepción de valor sobre la experiencia y fortaleciendo el engagement y la continuidad en la jornada de aprendizaje.",
      },
    },
    {
      title: { pt: "Comunidade e Descoberta", en: "Community and Discovery", es: "Comunidad y Descubrimiento" },
      subtitle: { pt: "Da interação isolada ao senso de pertencimento integrado", en: "From isolated interaction to integrated belonging", es: "De la interacción aislada al sentido de pertenencia integrado" },
      body: {
        pt: "Para tornar a comunidade mais acessível e engajadora, evoluímos o conceito tradicional de fóruns para algo mais integrado à experiência de aprendizado. Criamos uma dinâmica de interação fluida entre professor–aluno e aluno–aluno dentro da própria sala de aula, incorporando o conceito de comunidade diretamente na jornada educacional. Para estimular a descoberta de novos cursos e trilhas, incentivamos os usuários a indicar seus interesses desde o primeiro contato — permitindo que a plataforma adaptasse imediatamente a experiência com recomendações mais relevantes.",
        en: "To make the community more accessible and engaging, we evolved the traditional forum concept into something more integrated with the learning experience. We created fluid interaction dynamics between instructor and learner, and between learners themselves, inside the classroom — embedding community directly into the educational journey. To stimulate discovery of new courses and learning paths, we prompted users to signal their interests from first contact, allowing the platform to immediately tailor the experience with more relevant recommendations.",
        es: "Para hacer la comunidad más accesible y atractiva, evolucionamos el concepto tradicional de foros hacia algo más integrado a la experiencia de aprendizaje. Creamos una dinámica de interacción fluida entre profesor–alumno y alumno–alumno dentro del propio salón de clases, incorporando el concepto de comunidad directamente en la jornada educativa. Para estimular el descubrimiento de nuevos cursos y rutas, incentivamos a los usuarios a indicar sus intereses desde el primer contacto, permitiendo que la plataforma adaptara de inmediato la experiencia con recomendaciones más relevantes.",
      },
    },
    {
      title: { pt: "Gamificação", en: "Gamification", es: "Gamificación" },
      subtitle: { pt: "Engajamento e tempo de sessão como métricas centrais", en: "Engagement and session time as core metrics", es: "Engagement y tiempo de sesión como métricas centrales" },
      body: {
        pt: "Estruturamos um sistema de gamificação focado diretamente nas métricas-chave do cliente. Introduzimos uma lógica contínua de pontos por interações dentro da plataforma, incentivando o uso recorrente e aumentando o tempo ativo dos alunos. Para potencializar esse efeito, criamos uma loja de recompensas e a ferramenta de torneios, permitindo ativações sazonais com desafios e prêmios diferenciados — funcionando como gatilhos estratégicos para reaquecer a base e impulsionar o engajamento sempre que necessário.",
        en: "We structured a gamification system directly tied to the client's key metrics. We introduced a continuous points logic for interactions within the platform, encouraging recurring use and increasing learners' active time. To amplify this effect, we created a rewards store and a tournament tool — enabling seasonal activations with distinct challenges and prizes, acting as strategic triggers to re-engage the user base and boost engagement whenever needed.",
        es: "Estructuramos un sistema de gamificación enfocado directamente en las métricas clave del cliente. Introdujimos una lógica continua de puntos por interacciones dentro de la plataforma, incentivando el uso recurrente y aumentando el tiempo activo de los estudiantes. Para potenciar este efecto, creamos una tienda de recompensas y la herramienta de torneos, permitiendo activaciones estacionales con desafíos y premios diferenciados — funcionando como disparadores estratégicos para reactivar la base y potenciar el engagement cuando fuera necesario.",
      },
    },
    {
      title: { pt: "O Resultado", en: "The Outcome", es: "El Resultado" },
      body: {
        pt: "Esse projeto para o Sebrae foi mais do que uma evolução de interface — foi a construção de uma experiência orientada a comportamento, engajamento e crescimento contínuo. Ao integrar personalização, senso de pertencimento e mecânicas de progressão, conseguimos transformar a jornada de aprendizado em algo mais relevante, dinâmico e alinhado aos objetivos do usuário e do negócio. O resultado é uma plataforma mais viva, que não apenas entrega conteúdo, mas estimula ação, recorrência e evolução constante.",
        en: "This project for Sebrae was more than an interface evolution — it was the construction of an experience driven by behavior, engagement, and continuous growth. By integrating personalization, a sense of belonging, and progression mechanics, we transformed the learning journey into something more relevant, dynamic, and aligned with both user and business goals. The result is a more alive platform — one that does not just deliver content, but stimulates action, recurrence, and constant evolution.",
        es: "Este proyecto para Sebrae fue más que una evolución de interfaz — fue la construcción de una experiencia orientada al comportamiento, el engagement y el crecimiento continuo. Al integrar personalización, sentido de pertenencia y mecánicas de progresión, logramos transformar la jornada de aprendizaje en algo más relevante, dinámico y alineado con los objetivos del usuario y del negocio. El resultado es una plataforma más viva, que no solo entrega contenido, sino que estimula la acción, la recurrencia y la evolución constante.",
      },
    },
  ],
};

export default sebrae;
