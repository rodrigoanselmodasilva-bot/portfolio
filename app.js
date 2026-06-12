(function () {
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
        renderCases();
      });
    });
  }

  /* ---------- Cards ---------- */
  function renderCases() {
    const visible = ordered.filter(
      (c) => activeTag === 'Todos' || (c.tags || []).includes(activeTag)
    );

    if (!visible.length) {
      grid.innerHTML = '<p class="cases__empty">Nenhum case com esse filtro ainda.</p>';
      return;
    }

    grid.innerHTML = visible
      .map(
        (c) => `
        <button class="case-card" data-id="${escapeAttr(c.id)}">
          <span class="case-card__media">
            ${c.capa ? `<img src="${escapeAttr(c.capa)}" alt="" loading="lazy" />` : ''}
          </span>
          <span class="case-card__body">
            <span class="case-card__meta">
              <span>${escapeHtml(c.cliente || '')}</span>
              <span>${escapeHtml(String(c.ano || ''))}</span>
            </span>
            <span class="case-card__title">${escapeHtml(c.titulo || '')}</span>
            <span class="case-card__resumo">${escapeHtml(c.resumo || '')}</span>
            <span class="case-card__tags">
              ${(c.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
            </span>
          </span>
        </button>
      `
      )
      .join('');

    grid.querySelectorAll('.case-card').forEach((card) => {
      card.addEventListener('click', () => openModal(card.dataset.id));
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
  renderCases();
})();
