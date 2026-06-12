# Contexto do projeto — Portfólio Rodrigo Anselmo

## O que é
Site one-page, mobile-first, em HTML/CSS/JS puro (sem build, sem
dependências, sem framework). Funciona abrindo `index.html` direto no
navegador — não precisa de servidor.

## Quem é o usuário
Rodrigo Anselmo da Silva — profissional de UX, Growth e Estratégia Digital.
Posicionamento: "Interpretar o invisível" — mapear como pessoas descobrem,
interpretam, decidem e agem dentro de sistemas digitais. A marca trabalha na
interseção entre comportamento humano, tecnologia e crescimento.

Rodrigo **não é desenvolvedor**. O objetivo principal é manter o site fácil
de editar por ele — especialmente adicionar novos cases de portfólio.

## Estrutura de arquivos
```
index.html   → estrutura/markup das seções (hero, sobre, trabalho, ferramentas, contato, modal)
style.css    → design tokens (cores, tipografia, espaçamentos) e estilos
app.js       → renderiza os cards de case e o modal a partir de cases.js
cases.js     → "banco de dados" dos projetos — único arquivo que Rodrigo edita no dia a dia
images/
  logo.svg, logo-dark.png, logo-light.png
  cases/<slug-do-projeto>/cover.jpg (+ outras imagens)
README.md    → guia para Rodrigo (não-técnico) adicionar cases e publicar o site
```

## Identidade visual (não alterar sem confirmação)
- Cores: navy `#1A2942`, terracota `#A66A3F`, creme `#F3EFE7`, creme escuro
  `#E8DFD0`, navy profundo `#121C30`, terracota claro `#C99A6F`.
  Definidas em `:root` no topo do `style.css`.
- Tipografia: **Cinzel** (display/títulos) + **Manrope** (corpo/UI), via
  Google Fonts.
- Conceito da marca: o símbolo do monólito tem múltiplas leituras (R
  escondido, pontos de observação/pesquisa, movimento ascendente, flor).
  A "espinha de nós" (linha vertical com pontos circulares antes de cada
  eyebrow de seção) é o elemento de assinatura — referencia os "nós" e a
  "ascensão" do brandboard. Os dois pontos pulsantes no hero/footer
  representam os "pontos de observação" do símbolo. Mantenha esse elemento
  como o único ponto de movimento/animação da página.

## Como cases.js funciona
`window.CASES_DATA.cases` é um array de objetos. Cada objeto vira um card na
seção "Trabalho" e popula o modal de detalhes ao clicar. Campos: `id`,
`destaque`, `titulo`, `cliente`, `ano`, `papel`, `industria`, `tags[]`,
`resumo`, `capa`, `contexto`, `processo[]` (cada item com `titulo`/`texto`),
`resultado`, `ferramentas[]`, `galeria[]`, `video`.

**Importante:** o arquivo usa `window.CASES_DATA = {...}` (não `const`),
propositalmente — `const`/`let` no topo do arquivo não ficam acessíveis em
`window`, e o `app.js` depende de `window.CASES_DATA`. Não trocar isso.

`app.js` ordena os cases por `destaque` (true primeiro) e gera dinamicamente
os filtros de tag a partir de todas as tags presentes nos cases.

## Convenções de código
- Sem frameworks, sem build step, sem dependências de npm.
- CSS mobile-first: estilos base para mobile, `@media (min-width: ...)`
  para telas maiores.
- JS vanilla, um único arquivo (`app.js`), funções pequenas e nomeadas.
- HTML/textos em português (pt-BR).
- Todo texto inserido via JS passa por `escapeHtml`/`escapeAttr` — manter
  esse padrão em qualquer novo conteúdo dinâmico.

## Tarefas comuns
- **Adicionar um case novo**: editar `cases.js` seguindo o schema acima e o
  `README.md`; criar pasta em `images/cases/<slug>/` para as imagens.
- **Ajustar cores/tipografia**: editar variáveis em `:root` no `style.css`.
- **Publicação**: GitHub Pages + domínio próprio (passo a passo no
  `README.md`, seção 5).
- Ao terminar qualquer alteração visual, é recomendável tirar um print
  (ex: via Playwright) em viewport mobile (390px) e desktop (1440px) para
  confirmar que nada quebrou — especialmente o alinhamento da "espinha de
  nós" com os marcadores de eyebrow.

## O que evitar
- Não introduzir frameworks, bundlers ou dependências externas além das
  fontes do Google Fonts já usadas.
- Não remover o fallback de `cases.js` funcionar via `file://` (ou seja,
  não voltar a usar `fetch('cases.json')`).
- Não adicionar mais elementos animados além da "espinha de nós"/pontos de
  observação — a direção visual é deliberadamente quieta, com esse único
  elemento de movimento.
