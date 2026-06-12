# Dark Theme + Motion System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o portfólio de tema claro estático para tema escuro animado — com background vivo (grid + nós + glow), lista editorial de cases, reveal por scroll e monólito que se monta durante o scroll.

**Architecture:** Três arquivos modificados — `index.html` recebe divs estruturais (living-bg, monolith-scroll), `style.css` inverte tokens de cor e adiciona novos keyframes/componentes, `app.js` ganha três sistemas novos (background vivo, scroll reveal, monólito progressivo) e a renderização de cases muda de grid para lista. Zero dependências novas.

**Tech Stack:** Vanilla HTML5, CSS3 (custom properties, keyframes, IntersectionObserver), SVG inline, JavaScript ES6 (IIFE, requestAnimationFrame, scroll events).

**Spec de referência:** `docs/superpowers/specs/2026-06-11-dark-motion-design.md`

---

## Mapa de arquivos

| Arquivo | O que muda |
|---|---|
| `index.html` | `<div id="living-bg">` no topo do body; `<div id="monolith-scroll">` com SVG antes do `</body>`; logo trocada na nav; `cases-grid` → `cases-list` |
| `style.css` | Tokens dark no `:root`; estilos dark de cada componente; keyframes novos; `.cases-list` + `.case-row`; `.living-bg`; `.reveal` |
| `app.js` | `initLivingBackground()` (nós SVG + glow cursor); `initScrollReveal()`; `renderCasesAsList()`; `initMonolith()` |

---

## Task 1 — Tokens de cor dark no CSS

**Files:**
- Modify: `style.css` (bloco `:root`, linhas 1–23)

- [ ] **1.1 — Substituir o bloco `:root` inteiro**

Substitua o `:root` atual pelo seguinte (mantém variáveis antigas para evitar quebra, adiciona semânticas dark):

```css
:root {
  /* ── Marca (inalterado) ── */
  --clay:       #C58A4A;   /* bronze (mais vibrante no escuro) */
  --clay-light: #E0AA6A;

  /* ── Tema dark ── */
  --bg:         #071B3A;   /* fundo principal */
  --bg-alt:     #0B2550;   /* fundo alternativo de seção */
  --bg-deep:    #041327;   /* mais escuro (footer, modal) */
  --fg:         #F2EFE7;   /* texto principal */
  --fg-muted:   rgba(242, 239, 231, 0.65);
  --line:       rgba(242, 239, 231, 0.1);
  --line-bright:rgba(242, 239, 231, 0.2);

  /* ── Compat (usados em calc/SVG) ── */
  --navy:       #071B3A;
  --navy-deep:  #041327;
  --cream:      #F2EFE7;
  --cream-dim:  #0B2550;
  --line-on-cream: rgba(242, 239, 231, 0.1);
  --line-on-navy:  rgba(242, 239, 231, 0.18);

  /* ── Layout ── */
  --font-display: 'Cinzel', 'Georgia', serif;
  --font-body:    'Manrope', -apple-system, sans-serif;
  --max:    1080px;
  --gutter: 1.5rem;
  --radius: 3px;
  --spine-offset: 0.9rem;
}
```

- [ ] **1.2 — Atualizar `body`**

Localize o bloco `body {` no CSS e substitua:

```css
body {
  margin: 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--fg);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
```

- [ ] **1.3 — Verificar no browser**

Abra `index.html` no browser. O fundo deve ser navy escuro (#071B3A) e o texto ivory. O hero ainda vai ter background claro (correto — será ajustado na Task 6).

---

## Task 2 — Estrutura HTML do background vivo

**Files:**
- Modify: `index.html`

- [ ] **2.1 — Adicionar `#living-bg` e ajustar logo**

Logo após `<body>`, antes de `<a class="skip-link"...>`, inserir:

```html
<!-- ===== LIVING BACKGROUND ===== -->
<div id="living-bg" aria-hidden="true">
  <div class="living-bg__glow" id="bg-glow"></div>
</div>
```

Na nav, trocar a logo para a versão clara:

```html
<img src="images/logo-light.png" alt="" class="nav__logo" width="36" height="36" />
```

- [ ] **2.2 — Adicionar `#monolith-scroll`**

Antes de `<script src="cases.js">`, inserir:

```html
<!-- ===== MONÓLITO SCROLL ===== -->
<div id="monolith-scroll" aria-hidden="true">
  <svg viewBox="400 140 280 800" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path class="mono-part" data-part="arrow"
      d="M509.576 416.767L454.185 320.826V449.239L539.765 534.82L625.346 449.239V320.826L569.954 416.767V303.114L601.729 248.077L539.765 140.752L477.801 248.077L509.576 303.114V416.767Z"
      fill="#F2EFE7"/>
    <path class="mono-part" data-part="base-left"
      d="M539.793 940V742.214H497.807V814.539C450.575 848.487 405.968 902.116 404 940H539.793Z"
      fill="#F2EFE7"/>
    <path class="mono-part" data-part="base-right"
      d="M539.793 940V742.214H581.779V814.539C629.011 848.487 673.618 902.116 675.586 940H539.793Z"
      fill="#F2EFE7"/>
    <path class="mono-part" data-part="figure-left"
      d="M445.328 653.139C445.824 653.11 446.323 653.094 446.826 653.094C460.904 653.094 472.317 664.482 472.317 678.531C472.317 692.579 460.904 703.967 446.826 703.967C446.323 703.967 445.824 703.951 445.328 703.922V777.286L485.813 736.886L497.809 736.929V801.254H539.793V552.843H521.8L445.328 476.532V653.139ZM493.31 590.249C513.184 590.249 529.297 606.328 529.297 626.161C529.297 645.994 513.184 662.072 493.31 662.072C473.435 662.072 457.323 645.993 457.323 626.161C457.323 606.328 473.435 590.25 493.31 590.249Z"
      fill="#F2EFE7"/>
    <path class="mono-part" data-part="figure-right"
      d="M634.258 653.139C633.762 653.11 633.263 653.094 632.76 653.094C618.682 653.094 607.269 664.482 607.269 678.531C607.269 692.579 618.682 703.967 632.76 703.967C633.263 703.967 633.762 703.951 634.258 703.922V777.286L593.772 736.886L581.777 736.929V801.254H539.793V552.843H557.786L634.258 476.532V653.139ZM586.276 590.249C566.402 590.249 550.289 606.328 550.289 626.161C550.289 645.994 566.401 662.072 586.276 662.072C606.151 662.072 622.263 645.993 622.263 626.161C622.263 606.328 606.151 590.25 586.276 590.249Z"
      fill="#C58A4A"/>
  </svg>
</div>
```

- [ ] **2.3 — Alterar `id` do grid de cases e adicionar `cases-list`**

Localize `<div class="cases" id="cases-grid">` e substitua por:

```html
<div class="cases-list" id="cases-grid">
```

- [ ] **2.4 — Verificar no browser**

O elemento `#living-bg` deve existir no DOM (verificar via DevTools). O monólito SVG não deve ser visível ainda (será posicionado na Task 12).

---

## Task 3 — CSS do living background + grid cartográfico

**Files:**
- Modify: `style.css`

- [ ] **3.1 — Adicionar bloco `LIVING BACKGROUND` no CSS**

Insira após o bloco `RESET / BASE`:

```css
/* =========================================================================
   LIVING BACKGROUND
   ========================================================================= */
#living-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  /* Camada 1: grid cartográfico */
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px),
    linear-gradient(rgba(197,138,74,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,138,74,0.04) 1px, transparent 1px);
  background-size: 80px 80px, 80px 80px, 16px 16px, 16px 16px;
}

/* Camada 3: glow cursor */
.living-bg__glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(197,138,74,0.09), transparent 65%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  transition: left 0.9s ease, top 0.9s ease;
  will-change: left, top;
}

/* Camada 2: SVG de nós (gerado por JS, posicionado aqui) */
#living-bg svg.nodes-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
```

- [ ] **3.2 — Garantir que `main` e demais conteúdos ficam acima do background**

Adicione ao bloco `body`:

```css
body > *:not(#living-bg):not(#monolith-scroll) {
  position: relative;
  z-index: 1;
}
```

- [ ] **3.3 — Verificar no browser**

A grade de linhas finas deve aparecer sobre o fundo navy em toda a página. Ao mover o mouse, um brilho bronzeado suave deve seguir o cursor (o JS ainda não foi adicionado — o glow ficará centrado por enquanto).

---

## Task 4 — JS: glow cursor + nós flutuantes (initLivingBackground)

**Files:**
- Modify: `app.js`

- [ ] **4.1 — Adicionar `initLivingBackground()` no início do IIFE**

Logo após `(function () {`, antes de qualquer código existente, inserir:

```javascript
/* ── Living Background ── */
function initLivingBackground() {
  const glow = document.getElementById('bg-glow');
  const bg   = document.getElementById('living-bg');
  if (!glow || !bg) return;

  // Glow segue o mouse (apenas em desktop)
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  // Nós flutuantes com linhas de conexão
  var NODES = [
    [12, 18], [22, 72], [48, 32], [66, 86],
    [82, 24], [91, 58], [38,  8], [ 8, 48]
  ];
  var CONNECTIONS = [[0,1],[2,3],[4,5],[6,7],[1,2],[3,4]];

  var ns  = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  svg.classList.add('nodes-svg');

  // Linhas de conexão
  CONNECTIONS.forEach(function (pair) {
    var n1 = NODES[pair[0]], n2 = NODES[pair[1]];
    var line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', n1[0]); line.setAttribute('y1', n1[1]);
    line.setAttribute('x2', n2[0]); line.setAttribute('y2', n2[1]);
    line.setAttribute('stroke', 'rgba(197,138,74,0.25)');
    line.setAttribute('stroke-width', '0.15');
    line.setAttribute('stroke-dasharray', '0.4 1.2');
    svg.appendChild(line);
  });

  // Nós com anéis
  NODES.forEach(function (pos, i) {
    var g = document.createElementNS(ns, 'g');
    g.style.animation = 'float-node ' + (4 + i * 0.7) + 's ease-in-out ' + (i * 0.35) + 's infinite';

    var ring = document.createElementNS(ns, 'circle');
    ring.setAttribute('cx', pos[0]); ring.setAttribute('cy', pos[1]);
    ring.setAttribute('r', '1.8');
    ring.setAttribute('stroke', 'rgba(197,138,74,0.3)');
    ring.setAttribute('stroke-width', '0.2');
    ring.setAttribute('fill', 'none');
    ring.style.animation = 'pulse-ring ' + (3.5 + i * 0.5) + 's ease-in-out ' + (i * 0.4) + 's infinite';

    var dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', pos[0]); dot.setAttribute('cy', pos[1]);
    dot.setAttribute('r', '0.7');
    dot.setAttribute('fill', '#C58A4A');

    g.appendChild(ring);
    g.appendChild(dot);
    svg.appendChild(g);
  });

  bg.appendChild(svg);
}

initLivingBackground();
```

- [ ] **4.2 — Adicionar keyframes novos no `style.css`**

No final do bloco `RESET / BASE` (após o `@media prefers-reduced-motion`), adicionar:

```css
@keyframes float-node {
  0%, 100% { transform: translateY(0);    opacity: 0.5; }
  50%       { transform: translateY(-6px); opacity: 1;   }
}

@keyframes pulse-ring {
  0%, 100% { r: 1.8; opacity: 0.3; }
  50%       { r: 2.8; opacity: 0.7; }
}

@keyframes draw-line {
  from { stroke-dashoffset: var(--len, 600); }
  to   { stroke-dashoffset: 0; }
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- [ ] **4.3 — Verificar no browser**

Os nós bronzeados devem aparecer flutuando sobre toda a página com anéis pulsantes. O glow deve seguir o cursor suavemente.

---

## Task 5 — Nav dark

**Files:**
- Modify: `style.css` (bloco NAV)

- [ ] **5.1 — Atualizar estilos da nav**

Substitua o bloco `.nav {` pelo seguinte:

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--gutter);
  background: rgba(4, 19, 39, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav__name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--fg);
}

.nav__links a { color: var(--fg-muted); }
.nav__links a:hover { color: var(--clay); }
```

- [ ] **5.2 — Verificar no browser**

A nav deve ser navy translúcida com blur. Links em ivory acinzentado, hover em bronze.

---

## Task 6 — Hero dark + constelação animada

**Files:**
- Modify: `style.css` (bloco HERO)

- [ ] **6.1 — Atualizar bloco `.hero`**

Substitua `.hero {` pelo seguinte (o hero agora é transparente — o `#living-bg` fornece o fundo):

```css
.hero {
  position: relative;
  min-height: 92vh;
  color: var(--fg);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem var(--gutter) 4rem;
}

.hero__constellation {
  position: absolute;
  inset: 0;
  opacity: 0.6;
}
.hero__constellation svg { width: 100%; height: 100%; }

/* Linhas da constelação — desenham ao carregar */
.constellation-lines line {
  stroke: rgba(197,138,74,0.35);
  stroke-width: 0.8;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: draw-line 2.4s ease-out forwards;
}
.constellation-lines line:nth-child(2) { animation-delay: 0.3s; }
.constellation-lines line:nth-child(3) { animation-delay: 0.5s; }
.constellation-lines line:nth-child(4) { animation-delay: 0.7s; }
.constellation-lines line:nth-child(5) { animation-delay: 0.9s; }
.constellation-lines line:nth-child(6) { animation-delay: 1.1s; }
.constellation-lines line:nth-child(7) { animation-delay: 1.3s; }

/* Nós da constelação */
.constellation-nodes circle {
  fill: var(--clay-light);
  opacity: 0;
  animation: reveal-up 0.6s ease forwards 1.5s;
}
.constellation-nodes .node--watch {
  fill: var(--fg);
  opacity: 0;
  animation: pulse 5s ease-in-out infinite 1.8s, reveal-up 0.6s ease forwards 1.5s;
}
.constellation-nodes .node--watch:nth-child(8) {
  animation: pulse 5s ease-in-out infinite 3.4s, reveal-up 0.6s ease forwards 1.5s;
}

.hero__statement { color: var(--clay-light); }
.hero__lead      { color: var(--fg-muted); }

.hero__scroll      { color: rgba(242,239,231,0.5); }
.hero__scroll-line { background: var(--line-bright); }
```

- [ ] **6.2 — Verificar no browser**

As linhas da constelação devem se desenhar sequencialmente ao carregar a página. Os nós aparecem após as linhas. Os dois pontos pulsantes continuam pulsando.

---

## Task 7 — Seções internas dark + scroll reveal

**Files:**
- Modify: `style.css` (blocos SECTIONS, SOBRE, FERRAMENTAS)
- Modify: `app.js`

- [ ] **7.1 — Atualizar estilos das seções**

Substitua o bloco `SECTIONS (with the node-spine)`:

```css
/* =========================================================================
   SECTIONS (with the node-spine)
   ========================================================================= */
.section {
  position: relative;
  padding: 4.5rem var(--gutter) 4.5rem calc(var(--gutter) + var(--spine-offset) + 1.1rem);
  color: var(--fg);
}

.section::before {
  content: '';
  position: absolute;
  left: calc(var(--gutter) + var(--spine-offset));
  top: 0; bottom: 0;
  width: 1px;
  background: var(--line);
}

.section--sobre,
.section--ferramentas { background: transparent; }
.section--trabalho    { background: rgba(11,37,80,0.4); }

.section .eyebrow .node { position: relative; margin-left: -1.375rem; }

.section__intro { color: var(--fg-muted); }
.sobre__lead    { color: var(--fg); }

/* Tags (ferramentas) */
.ferramentas__lista li {
  color: var(--fg);
  border-color: var(--line-bright);
}

@media (min-width: 760px) {
  :root { --spine-offset: 2.5rem; }
  .section { padding: 6.5rem var(--gutter) 6.5rem calc(var(--gutter) + var(--spine-offset) + 1.5rem); }
}
```

- [ ] **7.2 — Adicionar CSS de scroll reveal**

Adicione ao final de `style.css`:

```css
/* =========================================================================
   SCROLL REVEAL
   ========================================================================= */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **7.3 — Adicionar `initScrollReveal()` no `app.js`**

Após `initLivingBackground();`, inserir:

```javascript
/* ── Scroll Reveal ── */
function initScrollReveal() {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function (s) { s.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('is-visible'); });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(function (s) { obs.observe(s); });
}

initScrollReveal();
```

- [ ] **7.4 — Verificar no browser**

Rolar a página deve mostrar cada seção aparecendo suavemente com fade+slide. As seções sobre e ferramentas devem ser transparentes, deixando o background vivo aparecer.

---

## Task 8 — CSS da lista editorial de cases

**Files:**
- Modify: `style.css` (bloco TRABALHO)

- [ ] **8.1 — Substituir estilos de `.cases` e `.case-card` pelo novo `.cases-list`**

Localize o bloco `/* TRABALHO — filtros + grid de cases */` e substitua todo o conteúdo de `.cases` até o final de `.cases__empty` por:

```css
/* ── Filtros ── */
.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.75rem 0 2.5rem;
}

.filtro {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--line-bright);
  background: transparent;
  color: var(--fg-muted);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.filtro:hover { border-color: var(--clay); color: var(--fg); }
.filtro.is-active {
  background: var(--clay);
  color: var(--bg-deep);
  border-color: var(--clay);
}

/* ── Lista editorial ── */
.cases-list {
  border-top: 1px solid var(--line);
}

.case-row {
  display: grid;
  grid-template-columns: 2.5rem 1fr 2rem;
  align-items: baseline;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--line);
  position: relative;
  cursor: pointer;
  text-align: left;
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  font-family: inherit;
  color: inherit;
  width: 100%;
  overflow: hidden;
  transition: background 0.3s ease;
}
.case-row:hover { background: rgba(197,138,74,0.04); }

/* Linha bronzeada que se desenha no hover */
.case-row::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  height: 1px;
  width: 100%;
  background: var(--clay);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s ease;
}
.case-row:hover::before { transform: scaleX(1); }

.case-row__num {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--clay);
  font-weight: 700;
  padding-top: 0.2rem;
}

.case-row__title {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  font-weight: 500;
  color: var(--fg);
  line-height: 1.2;
  margin: 0 0 0.3rem;
  transition: color 0.35s ease;
}
.case-row:hover .case-row__title { color: var(--clay); }

.case-row__meta {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin: 0;
}

.case-row__expand {
  font-size: 0.9375rem;
  color: var(--fg-muted);
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin: 0;
  transition: max-height 0.45s ease, opacity 0.35s ease, margin-top 0.35s ease;
}
.case-row:hover .case-row__expand,
.case-row:focus .case-row__expand {
  max-height: 5rem;
  opacity: 1;
  margin-top: 0.75rem;
}

.case-row__arrow {
  display: block;
  height: 1px;
  width: 1.25rem;
  background: var(--clay);
  align-self: center;
  transition: width 0.45s ease;
}
.case-row:hover .case-row__arrow { width: 3rem; }

.cases__empty {
  font-size: 0.95rem;
  color: var(--fg-muted);
  padding: 1rem 0;
}

@media (min-width: 760px) {
  .case-row { padding: 2rem 0; }
}
```

- [ ] **8.2 — Verificar no browser**

A seção Trabalho deve mostrar os filtros com estilo dark. Os cases (ainda em grid — o JS muda na próxima task) devem estar com borda dark.

---

## Task 9 — JS: renderizar cases como lista editorial

**Files:**
- Modify: `app.js`

- [ ] **9.1 — Substituir `renderCases()` por `renderCasesAsList()`**

Localize a função `function renderCases()` e substitua toda ela (incluindo o `grid.querySelectorAll` abaixo) por:

```javascript
function renderCasesAsList() {
  var visible = ordered.filter(function (c) {
    return activeTag === 'Todos' || (c.tags || []).includes(activeTag);
  });

  if (!visible.length) {
    grid.innerHTML = '<p class="cases__empty">Nenhum case com esse filtro ainda.</p>';
    return;
  }

  grid.innerHTML = visible.map(function (c, idx) {
    var num = String(idx + 1).padStart(2, '0');
    var meta = [c.cliente, c.ano ? String(c.ano) : '', (c.tags || []).join(' · ')]
      .filter(Boolean).join(' · ');
    return (
      '<button class="case-row" data-id="' + escapeAttr(c.id) + '">' +
        '<span class="case-row__num">' + escapeHtml(num) + '</span>' +
        '<div>' +
          '<p class="case-row__title">' + escapeHtml(c.titulo || '') + '</p>' +
          '<p class="case-row__meta">' + escapeHtml(meta) + '</p>' +
          '<p class="case-row__expand">' + escapeHtml(c.resumo || '') + '</p>' +
        '</div>' +
        '<span class="case-row__arrow"></span>' +
      '</button>'
    );
  }).join('');

  grid.querySelectorAll('.case-row').forEach(function (row) {
    row.addEventListener('click', function () { openModal(row.dataset.id); });
  });
}
```

- [ ] **9.2 — Atualizar as chamadas de `renderCases()`**

Localize todas as ocorrências de `renderCases()` no arquivo e renomeie para `renderCasesAsList()`. Há duas ocorrências:
1. Dentro do `filtrosWrap.querySelectorAll('.filtro').forEach(...)` 
2. No final (Init)

- [ ] **9.3 — Verificar no browser**

A seção Trabalho deve exibir uma lista numerada com títulos em Cinzel. Ao passar o mouse em cada linha, o título deve virar bronze e um texto de resumo deve aparecer suavemente. Clicar ainda abre o modal.

---

## Task 10 — Modal dark

**Files:**
- Modify: `style.css` (bloco MODAL)

- [ ] **10.1 — Atualizar estilos do modal**

Substitua o bloco `.modal {` até `body.modal-open` por:

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: none;
}
.modal.is-open { display: block; }

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(4, 19, 39, 0.8);
}

.modal__panel {
  position: absolute;
  inset: 0;
  margin: 0 auto;
  max-width: 760px;
  background: var(--bg-alt);
  color: var(--fg);
  overflow-y: auto;
  padding: 3.5rem var(--gutter) 4rem;
}

@media (min-width: 760px) {
  .modal__panel {
    top: 3vh; bottom: 3vh;
    border-radius: 8px;
    padding: 3.5rem 3rem 4rem;
  }
}

.modal__close {
  position: fixed;
  top: max(1rem, calc(3vh + 1rem));
  right: max(1rem, calc((100vw - 760px) / 2 + 1rem));
  z-index: 5;
  width: 2.5rem; height: 2.5rem;
  border-radius: 50%;
  border: 1px solid var(--line-bright);
  background: var(--bg-alt);
  color: var(--fg);
  font-size: 1rem;
  cursor: pointer;
  line-height: 1;
}
.modal__close:hover { border-color: var(--clay); color: var(--clay); }

.modal__cover {
  width: 100%;
  border-radius: var(--radius);
  margin-bottom: 1.75rem;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: var(--bg-deep);
}

.modal__meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.75rem 0;
  padding: 1.25rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
@media (min-width: 540px) { .modal__meta { grid-template-columns: repeat(4, 1fr); } }

.modal__meta dt {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clay);
  margin: 0 0 0.3rem;
}
.modal__meta dd { margin: 0; font-size: 0.9375rem; font-weight: 500; color: var(--fg); }

.modal__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.5rem, 5vw, 2rem);
  line-height: 1.3;
  margin: 0 0 0.5rem;
  color: var(--fg);
}
.modal__resumo { font-size: 1.0625rem; color: var(--fg-muted); margin: 0; }

.modal__section-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.15rem;
  margin: 2.5rem 0 1rem;
  color: var(--fg);
}

.modal__processo { list-style: none; margin: 0; padding: 0; }
.modal__processo li {
  position: relative;
  padding: 0 0 1.75rem 1.75rem;
  border-left: 1px solid var(--line);
}
.modal__processo li:last-child { border-color: transparent; padding-bottom: 0; }
.modal__processo li::before {
  content: '';
  position: absolute;
  left: -0.275rem; top: 0.35rem;
  width: 0.55rem; height: 0.55rem;
  border-radius: 50%;
  background: var(--clay);
}
.modal__processo h4 { font-size: 1rem; font-weight: 700; margin: 0 0 0.4rem; color: var(--fg); }
.modal__processo p  { margin: 0; font-size: 0.9375rem; color: var(--fg-muted); }

.modal__resultado {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.6;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: rgba(197,138,74,0.08);
  border-left: 3px solid var(--clay);
  border-radius: var(--radius);
  color: var(--fg);
}

.modal__gallery { display: grid; gap: 0.75rem; margin: 1rem 0; }
.modal__gallery img { border-radius: var(--radius); width: 100%; }

.modal__video {
  position: relative; width: 100%; aspect-ratio: 16/9;
  margin: 1rem 0; border-radius: var(--radius); overflow: hidden;
}
.modal__video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }

/* Tags no modal */
.section--trabalho .tag { background: rgba(197,138,74,0.12); color: var(--clay-light); }

body.modal-open { overflow: hidden; }
```

- [ ] **10.2 — Verificar no browser**

Clicar em um case deve abrir o modal com fundo navy secundário, texto ivory, destaque bronze.

---

## Task 11 — Footer dark + constelação animada

**Files:**
- Modify: `style.css` (bloco FOOTER)

- [ ] **11.1 — Atualizar estilos do footer**

Substitua o bloco `.footer {` até `.footer__copy` por:

```css
.footer {
  position: relative;
  background: var(--bg-deep);
  color: var(--fg);
  padding: 5rem var(--gutter) 3rem;
  overflow: hidden;
}

.footer__constellation { position: absolute; inset: 0; opacity: 0.5; }
.footer__constellation svg { width: 100%; height: 100%; }

/* Constelação do footer também anima */
.footer__constellation .constellation-lines line {
  stroke: rgba(197,138,74,0.3);
  stroke-width: 0.6;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw-line 2s ease-out forwards;
}
.footer__constellation .constellation-nodes circle {
  fill: var(--clay);
  opacity: 0;
  animation: reveal-up 0.5s ease forwards 1.8s;
}

.footer__content { position: relative; z-index: 1; max-width: 32rem; }

.footer__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  line-height: 1.25;
  margin: 0 0 1rem;
  color: var(--fg);
}

.footer__lead { color: var(--fg-muted); margin: 0 0 1.75rem; max-width: 28em; }

.footer__social { display: flex; gap: 1.5rem; margin: 1.75rem 0 0; font-size: 0.875rem; font-weight: 700; }
.footer__social a { border-bottom: 1px solid var(--line-bright); padding-bottom: 0.2rem; color: var(--fg-muted); }
.footer__social a:hover { color: var(--clay-light); border-color: var(--clay-light); }

.footer__copy { margin-top: 3rem; font-size: 0.75rem; color: rgba(242,239,231,0.35); letter-spacing: 0.04em; }
```

- [ ] **11.2 — Verificar no browser**

Footer deve ser navy profundo, constelação deve se desenhar quando a página chegar ao footer.

---

## Task 12 — CSS do monólito progressivo

**Files:**
- Modify: `style.css`

- [ ] **12.1 — Adicionar bloco `MONÓLITO SCROLL`**

Adicione ao final de `style.css`:

```css
/* =========================================================================
   MONÓLITO SCROLL — indicador de progresso lateral
   ========================================================================= */
#monolith-scroll {
  display: none; /* hidden em mobile */
}

@media (min-width: 760px) {
  #monolith-scroll {
    display: block;
    position: fixed;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 48px;
    pointer-events: none;
  }

  #monolith-scroll svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }

  /* Todas as partes começam invisíveis */
  #monolith-scroll .mono-part {
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  /* Classe adicionada por JS ao atingir threshold */
  #monolith-scroll .mono-part.is-revealed {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **12.2 — Verificar no browser**

Em desktop, o contêiner do monólito deve existir à direita mas estar invisível (partes com opacity 0). No inspector, deve aparecer fixo na lateral direita.

---

## Task 13 — JS: animação de montagem do monólito por scroll

**Files:**
- Modify: `app.js`

- [ ] **13.1 — Adicionar `initMonolith()` no final do IIFE (antes do `})();`)**

```javascript
/* ── Monólito progressivo ── */
function initMonolith() {
  var container = document.getElementById('monolith-scroll');
  if (!container || window.innerWidth < 760) return;

  var parts = [
    container.querySelector('[data-part="arrow"]'),
    container.querySelector('[data-part="base-left"]'),
    container.querySelector('[data-part="base-right"]'),
    container.querySelector('[data-part="figure-left"]'),
    container.querySelector('[data-part="figure-right"]'),
  ].filter(Boolean);

  if (!parts.length) return;

  // Thresholds: arrow, bases (esq+dir juntas), figure-left, figure-right
  var GROUPS = [
    [parts[0]],           // 0–25%: arrow
    [parts[1], parts[2]], // 25–50%: bases
    [parts[3]],           // 50–75%: figure-left
    [parts[4]],           // 75–100%: figure-right
  ];

  var revealed = [false, false, false, false];

  function getProgress() {
    var sobre = document.getElementById('sobre');
    var footer = document.querySelector('.footer');
    if (!sobre || !footer) return 0;

    var start = sobre.getBoundingClientRect().top + window.scrollY;
    var end   = footer.getBoundingClientRect().top + window.scrollY;
    var range = end - start;
    if (range <= 0) return 0;

    var progress = (window.scrollY - start) / range;
    return Math.max(0, Math.min(1, progress));
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var p = getProgress();
      GROUPS.forEach(function (group, i) {
        var threshold = i / GROUPS.length; // 0, 0.25, 0.5, 0.75
        if (!revealed[i] && p >= threshold) {
          revealed[i] = true;
          group.forEach(function (el) { el.classList.add('is-revealed'); });
        }
      });
      ticking = false;
    });
  }, { passive: true });

  // Verificar estado inicial (página pode já estar scrollada)
  var p0 = getProgress();
  GROUPS.forEach(function (group, i) {
    if (p0 >= i / GROUPS.length) {
      revealed[i] = true;
      group.forEach(function (el) { el.classList.add('is-revealed'); });
    }
  });
}

initMonolith();
```

- [ ] **13.2 — Verificar no browser (desktop)**

Rolar do início da seção Sobre até o footer deve montar o monólito progressivamente:
1. Scroll 0–25%: seta do topo aparece
2. Scroll 25–50%: duas pernas da base aparecem
3. Scroll 50–75%: corpo esquerdo (ivory) aparece
4. Scroll 75–100%: corpo direito (bronze) aparece — monólito completo

---

## Task 14 — Eyebrow + elementos tipográficos dark

**Files:**
- Modify: `style.css`

- [ ] **14.1 — Atualizar helpers tipográficos**

Localize o bloco `TYPOGRAPHY HELPERS` e substitua:

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clay);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1.25rem;
}

.eyebrow--light { color: var(--clay-light); }

.section__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  line-height: 1.25;
  margin: 0 0 1.5rem;
  letter-spacing: 0.01em;
  color: var(--fg);
}

.section__intro {
  max-width: 38em;
  color: var(--fg-muted);
  font-size: 1.0625rem;
}

.node {
  display: inline-block;
  width: 0.55rem; height: 0.55rem;
  border-radius: 50%;
  background: var(--clay);
  flex-shrink: 0;
}
.node--light { background: var(--clay-light); }
```

- [ ] **14.2 — Atualizar botões**

Localize o bloco `BUTTONS` e substitua `.button--ghost-light` e `.button--solid`:

```css
.button--ghost-light {
  color: var(--fg);
  border-color: var(--line-bright);
}
.button--ghost-light:hover {
  background: var(--fg);
  color: var(--bg-deep);
  border-color: var(--fg);
}

.button--solid {
  background: var(--clay);
  border-color: var(--clay);
  color: var(--bg-deep);
  font-size: 1rem;
  word-break: break-word;
}
.button--solid:hover {
  background: var(--clay-light);
  border-color: var(--clay-light);
  color: var(--bg-deep);
}
```

- [ ] **14.3 — Verificar no browser**

Eyebrows, títulos, botões e o marcador de seção (espinha de nós) devem estar com cores corretas no dark.

---

## Task 15 — Verificação final + critério de exclusão da pasta Digital Legacy

**Files:** nenhum

- [ ] **15.1 — Checklist de aceitação**

Abra `index.html` e verifique cada item:

| Item | Como verificar |
|---|---|
| Fundo navy escuro em todas as seções | Rolar a página inteira |
| Grid cartográfico visível | Fundo com linhas finas em bronze/ivory |
| Nós flutuantes animados | Pontos bronzeados respirando na tela |
| Glow segue o cursor | Mover o mouse pela página |
| Nav com blur dark | Rolar levemente — nav deve ser translúcida |
| Constelação do hero se desenha | Recarregar a página |
| Seções aparecem com scroll reveal | Rolar devagar — seções fazem fade |
| Espinha de nós preservada | Linha vertical e pontos nos eyebrows |
| Lista editorial de cases | Seção Trabalho mostra linhas numeradas |
| Hover nos cases: bronze + expansão | Passar o mouse em cada case |
| Filtros de tag funcionando | Clicar nos filtros filtra a lista |
| Modal dark | Clicar em um case abre modal navy |
| Monólito monta no scroll (desktop ≥760px) | Rolar devagar do início ao fim |
| Monólito ausente em mobile | Estreitar janela para <760px |
| Footer: constelação animada | Rolar até o footer |
| `cases.js` sem nenhuma mudança | Verificar que o arquivo não foi tocado |

- [ ] **15.2 — Exclusão da pasta Digital Legacy**

Quando todos os itens acima estiverem marcados:

```bash
rm -rf "/Users/rodrigoanselmodasilva/Documents/portfolio/Rodrigo Anselmo_ Digital Legacy"
```

Confirme que `index.html` ainda abre normalmente após a remoção.
