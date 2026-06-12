/*
  ===========================================================================
  ARQUIVO DE CASES — é aqui que você cadastra cada projeto do portfólio.
  ===========================================================================

  COMO ADICIONAR UM NOVO CASE:
  1. Copie um bloco inteiro, do "{" até o "}," (incluindo a vírgula no final).
  2. Cole no início ou no fim da lista "cases" (entre os colchetes [ ]).
  3. Troque os textos e valores. Não apague aspas ( " ), dois pontos ( : ),
     vírgulas ( , ) nem chaves ( { } ).
  4. Salve o arquivo. Pronto — o site já mostra o novo case.

  Guia rápido dos campos (veja o README.md para mais detalhes):
  - id            -> um nome curto único, sem espaços ou acentos (ex: "case-x")
  - destaque      -> true ou false. Cases com "true" aparecem primeiro.
  - titulo        -> título do projeto
  - cliente       -> nome do cliente/produto
  - ano           -> ano do projeto (número, sem aspas)
  - papel         -> seu papel no projeto
  - industria     -> setor/segmento
  - tags          -> lista de temas, usada nos filtros (ex: ["UX","Growth"])
  - resumo        -> 1-2 frases que aparecem no card
  - capa          -> caminho da imagem de capa (coloque o arquivo em images/cases/)
  - contexto      -> texto do desafio/contexto
  - processo      -> lista de etapas, cada uma com "titulo" e "texto"
  - resultado     -> texto de fechamento/resultado
  - ferramentas   -> lista de ferramentas usadas
  - galeria       -> lista de imagens adicionais (opcional)
  - video         -> link de vídeo (YouTube/Vimeo) ou null se não tiver
  ===========================================================================
*/

window.CASES_DATA = {
  "cases": [
    {
      "id": "georgiapro",
      "destaque": true,
      "titulo": "Construindo um motor de crescimento digital para um negócio tradicional",
      "cliente": "GeorgiaPro",
      "ano": 2024,
      "papel": "UX/UI · Growth Designer",
      "industria": "E-commerce, Construção",
      "tags": ["UX", "Growth", "Estratégia", "B2B2C"],
      "resumo": "Estratégia de transformação digital para uma loja de materiais de construção nos EUA, com foco na criação de um modelo B2B2C escalável.",
      "capa": "images/cases/georgiapro/cover.jpg",
      "contexto": "A GeorgiaPro é uma loja de materiais de construção nos Estados Unidos, com forte atuação no mercado físico e um público de consumidores finais e profissionais da construção. Apesar de consolidada offline, a empresa enfrentava uma limitação crítica: a ausência de um canal digital estruturado, o que restringia seu crescimento, alcance e capacidade de escala. O desafio não era apenas lançar um e-commerce, mas estruturar um modelo capaz de atender diferentes perfis de usuários e capturar novas oportunidades de crescimento.",
      "processo": [
        {
          "titulo": "Do zero ao aprendizado real",
          "texto": "Desenvolver uma plataforma própria com toda a robustez necessária levaria tempo, e o negócio precisava de resultados rápidos para aproveitar uma janela estratégica de crescimento. A resposta foi estruturar uma abordagem em duas frentes: ativar rapidamente o canal digital com Shopify no curto prazo, enquanto a plataforma própria, mais robusta e alinhada ao modelo B2B2C, era desenhada para o longo prazo."
        },
        {
          "titulo": "Do e-commerce à lógica de rede",
          "texto": "Ao longo do projeto, ficou claro que o maior valor não estava apenas na construção de um e-commerce, mas na definição de uma lógica de operação que conectasse diferentes perfis de usuários e criasse novos canais de venda — explorando como estruturar uma rede de parceiros ativos e diferenciar a experiência entre usuários B2C e profissionais."
        },
        {
          "titulo": "Desenhando as bases de um ecossistema escalável",
          "texto": "A solução foi pensada para equilibrar controle de negócio e flexibilidade para os parceiros: estrutura de perfis distintos (cliente final vs. parceiro profissional), lógicas de precificação diferenciada, incentivos para recompra e mecanismos de indicação e uso recorrente durante obras."
        },
        {
          "titulo": "Mais do que vender, habilitar crescimento",
          "texto": "O projeto evoluiu de uma visão inicial de e-commerce para a estruturação de um modelo de crescimento baseado em rede, onde profissionais deixam de ser apenas clientes e passam a ser parceiros, e a venda acontece no contexto da obra, não apenas no ponto de compra."
        }
      ],
      "resultado": "Mesmo sem o lançamento final da plataforma, o projeto consolidou as bases estratégicas para expansão digital, trazendo clareza sobre como estruturar ofertas, incentivos e experiências em um modelo B2B2C. Crescimento não vem apenas de vender mais — vem de transformar clientes em canais de venda.",
      "ferramentas": ["Shopify", "Figma", "Miro"],
      "galeria": [
        "images/cases/georgiapro/cover.jpg"
      ],
      "video": null
    }
  ]
};
