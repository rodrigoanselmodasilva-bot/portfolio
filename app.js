(function () {
  /* ── Living Background ── */
  function initLivingBackground() {
    var glow = document.getElementById('bg-glow');
    var bg   = document.getElementById('living-bg');
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

  const cases = (window.CASES_DATA && window.CASES_DATA.cases) || [];

  // Ordena: destaque primeiro, mantendo a ordem original entre eles
  const ordered = cases
    .map((c, i) => ({ c, i }))
    .sort((a, b) => {
      const da = a.c.destaque ? 0 : 1;
      const db = b.c.destaque ? 0 : 1;
      return da - db || a.i - b.i;
    })
    .map((x) => x.c);

  const grid = document.getElementById('cases-grid');
  const filtrosWrap = document.getElementById('filtros');
  const modal = document.getElementById('case-modal');
  const modalBody = document.getElementById('modal-body');

  /* ---------- Filtros ---------- */
  const allTags = Array.from(
    new Set(ordered.flatMap((c) => c.tags || []))
  );

  let activeTag = 'Todos';

  function renderFiltros() {
    const tags = ['Todos', ...allTags];
    filtrosWrap.innerHTML = tags
      .map(
        (tag) =>
          `<button class="filtro${tag === activeTag ? ' is-active' : ''}" data-tag="${escapeAttr(tag)}">${escapeHtml(tag)}</button>`
      )
      .join('');

    filtrosWrap.querySelectorAll('.filtro').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeTag = btn.dataset.tag;
        renderFiltros();
        renderCasesAsList();
      });
    });
  }

  /* ---------- Lista editorial ---------- */
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

  /* ---------- Modal ---------- */
  function openModal(id) {
    const c = ordered.find((item) => item.id === id);
    if (!c) return;

    const meta = [
      ['Cliente', c.cliente],
      ['Ano', c.ano],
      ['Papel', c.papel],
      ['Indústria', c.industria],
    ].filter(([, v]) => v);

    const galeriaExtra = (c.galeria || []).filter((src) => src !== c.capa);

    modalBody.innerHTML = `
      ${c.capa ? `<img class="modal__cover" src="${escapeAttr(c.capa)}" alt="" />` : ''}

      <p class="eyebrow">${escapeHtml((c.tags || []).join(' · '))}</p>
      <h2 class="modal__title" id="modal-title">${escapeHtml(c.titulo || '')}</h2>
      <p class="modal__resumo">${escapeHtml(c.resumo || '')}</p>

      ${meta.length ? `
        <dl class="modal__meta">
          ${meta.map(([k, v]) => `<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join('')}
        </dl>
      ` : ''}

      ${c.contexto ? `
        <h3 class="modal__section-title">O contexto</h3>
        <p>${escapeHtml(c.contexto)}</p>
      ` : ''}

      ${(c.processo && c.processo.length) ? `
        <h3 class="modal__section-title">O processo</h3>
        <ol class="modal__processo">
          ${c.processo.map((p) => `<li><h4>${escapeHtml(p.titulo || '')}</h4><p>${escapeHtml(p.texto || '')}</p></li>`).join('')}
        </ol>
      ` : ''}

      ${c.resultado ? `<p class="modal__resultado">${escapeHtml(c.resultado)}</p>` : ''}

      ${c.video ? `
        <h3 class="modal__section-title">Vídeo</h3>
        <div class="modal__video">
          <iframe src="${escapeAttr(c.video)}" title="Vídeo do projeto" allowfullscreen loading="lazy"></iframe>
        </div>
      ` : ''}

      ${galeriaExtra.length ? `
        <h3 class="modal__section-title">Imagens</h3>
        <div class="modal__gallery">
          ${galeriaExtra.map((src) => `<img src="${escapeAttr(src)}" alt="" loading="lazy" />`).join('')}
        </div>
      ` : ''}

      ${(c.ferramentas && c.ferramentas.length) ? `
        <h3 class="modal__section-title">Ferramentas</h3>
        <div class="case-card__tags">
          ${c.ferramentas.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      ` : ''}
    `;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.modal__close').focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalBody.innerHTML = '';
  }

  modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  /* ---------- Helpers ---------- */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[ch]);
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }

  /* ---------- Ano no footer ---------- */
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Init ---------- */
  renderFiltros();
  renderCasesAsList();
})();
