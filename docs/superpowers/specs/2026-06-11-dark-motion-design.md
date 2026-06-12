# Design Spec — Dark Theme + Motion System

**Data:** 2026-06-11  
**Projeto:** Portfólio Rodrigo Anselmo (`index.html`)  
**Inspiração:** `Rodrigo Anselmo_ Digital Legacy/` (React/Lovable)  
**Objetivo:** Trazer o movimento, o fundo vivo e as interações do Digital Legacy para o portfólio atual (vanilla HTML/CSS/JS), sem introduzir frameworks ou dependências.

---

## Decisões de design (confirmadas)

| Pergunta | Resposta |
|---|---|
| Tema de fundo | **Escuro total** — navy profundo em todas as seções |
| Camadas de background | **Grid + Nós flutuantes + Glow no cursor** |
| Cards de case | **Lista editorial expansível** (sem grid/thumbnail) |
| Scroll reveal | Incluído em todas as seções |
| Hover nos cases | Linha bronzeada animada + expansão de texto |

---

## 1. Paleta de cores

A paleta atual inverte do creme para o navy. Os tokens no `:root` mudam assim:

| Token | Antes (claro) | Depois (escuro) |
|---|---|---|
| `--bg` | `#F3EFE7` (creme) | `#071B3A` (navy profundo) |
| `--bg-alt` | `#E8DFD0` (creme dim) | `#0B2550` (navy secundário) |
| `--bg-deep` | `#1A2942` (navy) | `#041327` (navy deep) |
| `--text` | `#1A2942` (navy) | `#F2EFE7` (ivory) |
| `--text-muted` | `rgba(26,41,66,0.7)` | `rgba(242,239,231,0.65)` |
| `--line` | `rgba(26,41,66,0.14)` | `rgba(242,239,231,0.1)` |
| `--clay` | `#A66A3F` | `#C58A4A` (bronze, mais vibrante no escuro) |
| `--clay-light` | `#C99A6F` | `#E0AA6A` |

A body passa de `background: var(--cream)` para `background: var(--bg)`.

---

## 2. Background vivo (3 camadas)

Uma `<div id="living-bg">` é inserida como primeiro filho do `<body>`, com `position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden`. Todo o conteúdo existente recebe `position: relative; z-index: 1`.

### Camada 1 — Grid cartográfico (CSS puro)
`background-image` com dois patterns em `::before` do `living-bg`:
- Grid principal: linhas de 80×80px, `rgba(197,138,74,0.08)`
- Grid fino: linhas de 16×16px, `rgba(197,138,74,0.04)`

### Camada 2 — Nós flutuantes (SVG + CSS animation)
SVG inline dentro do `living-bg` com:
- 8 pontos (circles) nas posições do Digital Legacy
- Anéis concêntricos pulsantes em cada ponto (`animation: pulse-ring`)
- Linhas de conexão entre pares de nós adjacentes (stroke-dasharray, sem animação)
- Cada nó flutua verticalmente com `animation: float-node` (3–6s, ease-in-out, delays escalonados)

### Camada 3 — Glow ambiental no cursor (JS)
Um `<div class="glow-orb">` dentro do `living-bg`:
- `radial-gradient(circle at 50% 50%, rgba(197,138,74,0.1), transparent 50%)`
- JS atualiza `background` com `mousemove` mapeando `clientX/Y` para porcentagens
- Transição CSS de 0.8s para suavizar o movimento

---

## 3. Navegação

A nav mantém a estrutura atual. Mudanças:
- `background: rgba(4,19,39,0.88)` (navy deep com alpha)
- `backdrop-filter: blur(12px)` (mantém)
- `border-bottom: 1px solid rgba(242,239,231,0.08)`
- Logo: troca para `logo-light.png` (já existente em `images/`)
- Links: `color: var(--text)` com hover em `var(--clay)`

---

## 4. Hero

Mantém estrutura e textos. Mudanças visuais:
- Background já coberto pelo `living-bg` (sem `background: var(--navy)` próprio)
- A constelação SVG existente (`hero__constellation`) recebe animação CSS:
  - Todos os `circle` da `constellation-nodes` ganham `animation: pulse-ring` com delays variados
  - As `line` da `constellation-lines` ganham `stroke-dasharray` + `animation: draw-line` no page load
- Os dois pontos "watch" mantêm a animação `pulse` original — são o elemento de assinatura
- Hero text em `color: var(--text)` (ivory)
- Botões: `button--ghost-light` adaptado para o dark

---

## 5. Seções internas (Sobre, Ferramentas)

- `background: transparent` — o `living-bg` aparece através
- `color: var(--text)`
- A "espinha de nós" (`.section::before`) muda para `background: var(--line)` (ivory translúcido)
- `.node` marker: mantém em `var(--clay)`
- `.eyebrow`: `color: var(--clay)` (já correto, apenas mais brilhante no escuro)
- `.section__intro`: `color: var(--text-muted)`

**Scroll reveal:** cada `.section` começa com `opacity: 0; transform: translateY(24px)`. Um `IntersectionObserver` em `app.js` adiciona a classe `.is-visible` quando a seção entra em viewport, disparando `transition: opacity 0.7s ease, transform 0.7s ease`.

---

## 6. Seção Trabalho — lista editorial

A seção "Trabalho" muda de grid de cards para lista numerada expansível.

### Estrutura HTML (gerada por `app.js`)
```
<div class="cases-list">
  <article class="case-row" data-id="...">
    <span class="case-row__num">01</span>
    <div class="case-row__content">
      <h3 class="case-row__title">Título do case</h3>
      <p class="case-row__meta">Cliente · Ano · Tag · Tag</p>
      <p class="case-row__expand">Resumo do case — aparece no hover.</p>
    </div>
    <span class="case-row__arrow"></span>
  </article>
  …
</div>
```

### Comportamento de hover
- `case-row` tem `border-bottom: 1px solid var(--line)`
- Hover: `background: rgba(197,138,74,0.04)` (fundo sutil)
- `.case-row__title` muda para `color: var(--clay)` com `transition: color 0.4s`
- `.case-row__expand` tem `max-height: 0; overflow: hidden; opacity: 0` → hover: `max-height: 4rem; opacity: 1` (transition 0.4s ease)
- `.case-row__arrow` é uma linha de `width: 20px; height: 1px; background: var(--clay)` que anima para `width: 48px` no hover
- Uma linha bronzeada (`::before` absolute) se desenha da esquerda para a direita no hover (scaleX 0→1)

### Filtros de tag
Os botões de filtro (`.filtro`) são mantidos acima da lista, com visual ajustado para dark:
- Background transparente, borda `var(--line)`, texto `var(--text)`
- `.filtro.is-active`: `background: var(--clay); color: var(--bg-deep); border-color: var(--clay)`

### Clique → modal
Clicar em qualquer `case-row` abre o modal existente (sem mudança funcional).

---

## 7. Modal

- `background: var(--bg-alt)` (navy secundário)
- `color: var(--text)`
- `.modal__backdrop`: `rgba(4,19,39,0.75)`
- `.modal__close`: dark version, hover com clay
- Bordas e divisórias: `var(--line)`
- `.modal__resultado`: `background: rgba(197,138,74,0.08); border-left: 3px solid var(--clay)`

---

## 8. Footer / Contato

- Mantém `background: var(--bg-deep)` (navy deep — já correto)
- A constelação de fundo do footer ganha as mesmas animações de `pulse-ring` dos nós do hero
- Textos em `var(--text)` e `var(--text-muted)`
- Botão: `button--ghost-light` já funciona no dark

---

## 9. Animações CSS novas (em `style.css`)

```css
@keyframes pulse-ring {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(1.15); }
}
@keyframes float-node {
  0%, 100% { transform: translateY(0);   opacity: 0.5; }
  50%       { transform: translateY(-7px); opacity: 1;   }
}
@keyframes draw-line {
  from { stroke-dashoffset: var(--len, 400); }
  to   { stroke-dashoffset: 0; }
}
```

A regra `prefers-reduced-motion` existente já desativa todas essas animações — sem necessidade de mudança.

---

## 10. Monólito progressivo (scroll-driven)

O logo/símbolo do monólito se monta parte por parte conforme o usuário rola a página — inspirado diretamente no Digital Legacy.

### Posicionamento
O monólito fica fixo à direita da tela, visível durante o scroll da seção **Sobre** até o **Footer**, como um indicador de progresso lateral. Em mobile, aparece apenas no footer (já montado).

### Estrutura SVG
O SVG do monólito tem 4 partes independentes (mesmos `path` do Digital Legacy):
1. **Arrow** — a seta/chevron no topo do símbolo
2. **Left base + Right base** — as duas pernas na base
3. **Left figure** (ivory) — metade esquerda do corpo
4. **Right figure** (bronze/clay) — metade direita do corpo

### Mecânica de montagem
Cada parte começa com `opacity: 0` e `transform: translateY(12px)`.

Um `scroll` event listener (throttled com `requestAnimationFrame`) calcula o progresso do scroll entre o início da seção Sobre e o topo do footer, mapeando para 4 thresholds:

| Progresso do scroll | Parte que aparece |
|---|---|
| 0–25% | Arrow (topo) |
| 25–50% | Left + Right base |
| 50–75% | Left figure (ivory) |
| 75–100% | Right figure (bronze) — monólito completo |

Cada parte aparece com `transition: opacity 0.8s ease, transform 0.8s ease` quando seu threshold é atingido. Uma vez revelada, não some mais (one-way).

### Em desktop
O SVG fica em `position: fixed; right: 2rem; top: 50%; transform: translateY(-50%)` com `z-index: 2`. Tamanho: ~60px de largura.

### Em mobile
`display: none` na posição fixa. O monólito aparece apenas no footer como elemento estático já montado (como é hoje).

---

## 11. Arquivos alterados

| Arquivo | Tipo de mudança |
|---|---|
| `style.css` | Tokens de cor, estilos dark, keyframes novos, `.cases-list` + `.case-row`, `.living-bg`, scroll reveal |
| `app.js` | Living background (nós SVG + glow cursor), `IntersectionObserver` para reveal, `renderCases()` → `renderCasesAsList()`, monólito progressivo (scroll listener) |
| `index.html` | `<div id="living-bg">` no topo do body, `<div id="monolith-scroll">` com SVG, `logo-light.png` na nav |

`cases.js` **não muda** — o schema de dados é compatível com a lista.

---

## 11. O que NÃO muda

- Schema de `cases.js` e como Rodrigo adiciona casos
- Estrutura de seções e âncoras de navegação
- Modal e seu comportamento
- Fontes Google Fonts (Cinzel + Manrope)
- A "espinha de nós" (`section::before` + `.node` no eyebrow) — assinatura da marca, preservada
- Os dois pontos pulsantes no hero (`.node--watch`) — animação de assinatura, preservada
- Nenhuma dependência nova, nenhum build step

---

## Critério de conclusão

O projeto Digital Legacy pode ser excluído quando:
1. O fundo escuro estiver funcionando em todas as seções
2. As 3 camadas de background estiverem visíveis (grid, nós, glow)
3. A seção Trabalho exibir a lista editorial com hover funcional
4. O scroll reveal estiver ativo em todas as seções
5. O modal funcionar com visual dark
6. O monólito progressivo aparecer corretamente em desktop durante o scroll
7. Nenhuma regressão funcional (filtros, modal, dados de cases)
