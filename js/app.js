// Atlas de Baróvia · versão para celular.
// Quatro abas (Personagens, Capítulos, A história, A jornada) e uma gaveta à esquerda com a lista de cada aba.
// Endereços: #p/<personagem> · #c/<capítulo> (#c/mapa) · #h[/<seção>] · #j[/<parte>]
(() => {
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = v => String(v ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const view = $('#view');
  history.scrollRestoration = 'manual';

  // ————————————————————————————————————————————————— Utilidades visuais
  function av(id, size, extra = '') {
    const p = peopleById[id], n = thumbIndex[id];
    const cls = `av k-${p ? p.kind : ''} ${p && p.status === 'Morto' ? 'dead' : ''} ${extra}`;
    const style = size ? ` style="--s:${size}px"` : '';
    if (n === undefined) return `<span class="${cls}"${style} aria-hidden="true">${esc((p ? p.name : '?')[0])}</span>`;
    const c = n % THUMB_COLS, r = Math.floor(n / THUMB_COLS);
    return `<span class="${cls}"${style} aria-hidden="true"><i style="background-size:${THUMB_COLS * 100}% ${THUMB_ROWS * 100}%;background-position:${(c / (THUMB_COLS - 1) * 100).toFixed(3)}% ${(r / (THUMB_ROWS - 1) * 100).toFixed(3)}%"></i></span>`;
  }
  const stars = n => '★'.repeat(n);
  const chapterLabel = c => c.id === 'casa' ? 'Apêndice B' : `Capítulo ${Number(c.number)}`;
  const chapterShort = c => c.id === 'casa' ? 'Apênd. B' : `Cap. ${Number(c.number)}`;
  const chapterImages = {abertura:'01-nas-brumas', terras:'02-terras-de-barovia', vila:'03-vila-de-barovia', ravenloft:'04-castelo-ravenloft', vallaki:'05-vallaki', moedor:'06-velho-moedor-de-ossos', argynvostholt:'07-argynvostholt', krezk:'08-krezk', tsolenka:'09-passagem-tsolenka', berez:'10-ruinas-de-berez', torre:'11-torre-de-van-richten', vinhos:'12-mago-dos-vinhos', templo:'13-templo-ambar', yester:'14-colina-yester', lobos:'15-covil-dos-lobisomens', casa:'B-casa-da-morte'};
  const chapterImg = id => `./img/capitulos/${chapterImages[id] || chapterImages.abertura}.webp`;
  const chapterSigils = {
    abertura:'<path d="M3 9h13a3 3 0 1 0-3-3M3 14h17a3 3 0 1 1-3 3M5 19h6"/>',
    terras:'<path d="M2 20 9 8l4 6 3-4 6 10z"/><path d="M11 20c1-3 3-4 6-5" opacity=".6"/>',
    vila:'<path d="M3 21V11l6-5 6 5v10z"/><path d="M15 21v-7l3-3 3 3v7M7 21v-4h4v4"/>',
    ravenloft:'<path d="M3 21V9h3V6h2v3h2V4l2-2 2 2v5h2V6h2v3h3v12z"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/>',
    vallaki:'<path d="M3 21V8l2-3 2 3v13M9 21V7l2-3 2 3v14M15 21V8l2-3 2 3v13"/><path d="M2 13h20"/>',
    moedor:'<path d="M12 12 6 3M12 12l9-3M12 12l-2 10M12 12 3 15"/><path d="M9 22h6l-1-8h-4z"/>',
    argynvostholt:'<path d="M12 3 20 6v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M8 12c2-1 3-3 4-5 1 2 2 4 4 5-2 1-3 3-4 5-1-2-2-4-4-5z"/>',
    krezk:'<path d="M12 2v5M10 4h4"/><path d="M5 21V11l7-4 7 4v10z"/><path d="M10 21v-5h4v5"/>',
    tsolenka:'<path d="M2 17h20M5 17v4M19 17v4"/><path d="M2 17c4-4 16-4 20 0"/><path d="M9 11V6h6v5"/>',
    berez:'<path d="M2 8c3-3 5 3 8 0s5-3 8 0 3 1 4 0M2 14c3-3 5 3 8 0s5-3 8 0 3 1 4 0M2 20c3-3 5 3 8 0s5-3 8 0 3 1 4 0"/>',
    torre:'<path d="M8 21V7l4-5 4 5v14z"/><path d="M5 21h14M11 11h2M11 15h2"/>',
    vinhos:'<circle cx="9" cy="10" r="2.5"/><circle cx="15" cy="10" r="2.5"/><circle cx="12" cy="14.5" r="2.5"/><circle cx="12" cy="19.5" r="2"/><path d="M12 7V3l3-1"/>',
    templo:'<path d="M12 2 20 7v10l-8 5-8-5V7z"/><path d="M12 2v20M4 7l16 10M20 7 4 17" opacity=".45"/>',
    yester:'<path d="M3 21h18"/><path d="M5 21V9l2-3 2 3v12M11 21V6l2-3 2 3v15M17 21v-9l2-2 1 2v9"/>',
    lobos:'<path d="M5 3c2 5 2 11-1 18M10 3c2 5 2 11-1 18M15 3c2 5 2 11-1 18"/><path d="M19 5l1 3"/>',
    casa:'<path d="M3 21V10l9-7 9 7v11z"/><circle cx="12" cy="13" r="3"/><path d="M9 21v-3h6v3"/>',
    mapa:'<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="12" cy="9" r="2"/><path d="M7 6.5 10.3 8.4M17 6.5l-3.3 1.9M12 11v5M6 8l5 8.4M18 8l-5 8.4" opacity=".6"/>'
  };
  const sigil = id => `<svg viewBox="0 0 24 24" aria-hidden="true">${chapterSigils[id] || chapterSigils.abertura}</svg>`;
  const icon = name => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${HIST.icons[name] || HIST.icons.mist}</svg>`;
  const go = (path, label, cls = '') => `data-go="${esc(path)}"${label ? ` aria-label="${esc(label)}"` : ''}${cls ? ` class="${cls}"` : ''}`;
  // [[id]] / [[id|texto]] → ficha; {{capítulo|texto}} → capítulo
  const rich = t => esc(t)
    .replace(/\[\[([a-z_]+)(?:\|([^\]]+))?\]\]/g, (m, id, label) => peopleById[id] ? `<a href="#p/${id}" class="link" data-go="p/${id}">${label || esc(peopleById[id].name)}</a>` : (label || id))
    .replace(/\{\{([a-z]+)\|([^}]+)\}\}/g, (m, id, label) => storyById[id] ? `<a href="#c/${id}" class="link" data-go="c/${id}">${label}</a>` : label);
  const pcard = (id, sub) => { const p = peopleById[id]; return p ? `<button type="button" class="pcard" ${go('p/' + id)}>${av(id, 64)}<strong>${esc(p.name)}</strong><small>${esc(sub ?? p.role)}</small></button>` : ''; };
  const prow = (id, sub, right = '') => { const p = peopleById[id]; return p ? `<button type="button" class="prow" ${go('p/' + id)}>${av(id, 44)}<span class="row-info"><strong>${esc(p.name)}</strong><small>${esc(sub ?? p.role)}</small></span>${right}<span class="go" aria-hidden="true">›</span></button>` : ''; };
  const secTitle = (t, n) => `<div class="sec-title">${t}${n !== undefined ? ` <span class="n">${n}</span>` : ''}</div>`;
  const uniq = ids => [...new Set(ids)].filter(id => peopleById[id]);

  // ————————————————————————————————————————————————— Navegação
  const tabNames = {p:'Personagens', c:'Capítulos', h:'A história', j:'A jornada'};
  const lastPath = {p:'p/strahd', c:'c/mapa', h:'h', j:'j'};
  const tabScroll = {};
  let cur = null;

  function parse(path) {
    const [tab, id, anchor] = String(path || '').replace(/^#/, '').split('/');
    if (tab === 'p' && peopleById[id]) return {tab, id, path:`p/${id}`};
    if (tab === 'c' && (id === 'mapa' || storyById[id])) return {tab, id, anchor, path:`c/${id}`};
    if (tab === 'h') return {tab, id:'h', anchor:id, path:id ? `h/${id}` : 'h'};
    if (tab === 'j') return {tab, id:'j', anchor:id, path:id ? `j/${id}` : 'j'};
    if (peopleById[tab]) return {tab:'p', id:tab, path:`p/${tab}`};
    return {tab:'p', id:'strahd', path:'p/strahd'};
  }

  function navigate(path, {replace = false, y} = {}) {
    const r = parse(path);
    if (cur) tabScroll[cur.tab] = scrollY;
    const depth = history.state?.depth || 0;
    if (replace) history.replaceState({depth}, '', '#' + r.path);
    else {
      history.replaceState({...(history.state || {}), depth, y:scrollY}, '', location.hash || '#' + cur?.path);
      history.pushState({depth:depth + 1}, '', '#' + r.path);
    }
    show(r, y);
  }

  function show(r, y) {
    const samePage = cur && cur.tab === r.tab && (r.tab === 'h' || r.tab === 'j') && view.dataset.page === r.tab;
    cur = r;
    lastPath[r.tab] = r.path;
    document.querySelectorAll('.tab').forEach(t => { const on = t.dataset.tab === r.tab; t.classList.toggle('on', on); on ? t.setAttribute('aria-current', 'page') : t.removeAttribute('aria-current'); });
    $('#backBtn').hidden = !(history.state?.depth > 0);
    if (!samePage) {
      stopNight();
      if (r.tab === 'p') renderPerson(r.id);
      else if (r.tab === 'c') r.id === 'mapa' ? renderMap() : renderChapter(r.id);
      else if (r.tab === 'h') renderHistory();
      else renderJourney();
      view.dataset.page = r.tab;
      view.style.animation = 'none'; void view.offsetWidth; view.style.animation = '';
      arm();
    }
    if (drawerOpen) buildDrawer();
    const target = r.anchor && document.getElementById(anchorId(r));
    requestAnimationFrame(() => {
      if (y !== undefined) scrollTo(0, y);
      else if (target) {
        const fold = target.closest('details');
        if (fold) fold.open = true;
        if (target.tagName === 'DETAILS') target.open = true;
        target.classList.add('flash');
        const top = target.getBoundingClientRect().top + scrollY - (document.querySelector('.bar').offsetHeight + (r.tab === 'c' ? 90 : 8));
        scrollTo({top, behavior: samePage && !reduceMotion ? 'smooth' : 'auto'});
      } else scrollTo(0, 0);
      onScroll();
    });
  }
  const anchorId = r => r.tab === 'h' ? `h-${r.anchor}` : r.tab === 'j' ? `act-${r.anchor}` : r.anchor;

  addEventListener('popstate', e => { if (drawerOpen) closeDrawer(); const r = parse(location.hash); show(r, e.state?.y ?? 0); });

  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) {
      e.preventDefault();
      const path = g.dataset.go;
      if (drawerOpen) closeDrawer();
      if (cur && path === cur.path && !path.match(/^[hj]\//)) { scrollTo({top:0, behavior:reduceMotion ? 'auto' : 'smooth'}); return; }
      navigate(path);
      return;
    }
    const tab = e.target.closest('.tab');
    if (tab) {
      const t = tab.dataset.tab;
      if (drawerOpen) closeDrawer();
      if (cur && cur.tab === t) { scrollTo({top:0, behavior:reduceMotion ? 'auto' : 'smooth'}); return; }
      const y = tabScroll[t];
      navigate(lastPath[t], {y});
      return;
    }
    const ph = e.target.closest('[data-photo]');
    if (ph) openPhoto(ph.dataset.photo);
  });
  $('#backBtn').addEventListener('click', () => history.back());

  // ————————————————————————————————————————————————— Gaveta
  let drawerOpen = false;
  const drawer = $('#drawer'), scrim = $('#scrim');
  function openDrawer() {
    drawerOpen = true;
    buildDrawer();
    scrim.hidden = false;
    drawer.inert = false;
    drawer.setAttribute('aria-hidden', 'false');
    $('#menuBtn').setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => document.body.classList.add('drawer-open', 'locked'));
    const on = drawer.querySelector('.row.on');
    if (on) on.scrollIntoView({block:'center'});
  }
  function closeDrawer() {
    drawerOpen = false;
    document.body.classList.remove('drawer-open', 'locked');
    drawer.inert = true;
    drawer.setAttribute('aria-hidden', 'true');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
    drawer.style.transform = '';
    setTimeout(() => { if (!drawerOpen) scrim.hidden = true; }, 320);
  }
  $('#menuBtn').addEventListener('click', () => drawerOpen ? closeDrawer() : openDrawer());
  $('#edgeTab').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  addEventListener('keydown', e => { if (e.key === 'Escape' && drawerOpen) closeDrawer(); });
  // Arrastar a gaveta para a esquerda fecha
  let sx = null, sy = 0, dx = 0, horizontal = null;
  drawer.addEventListener('touchstart', e => { if (e.target.closest('input,select')) return; sx = e.touches[0].clientX; sy = e.touches[0].clientY; dx = 0; horizontal = null; }, {passive:true});
  drawer.addEventListener('touchmove', e => {
    if (sx === null) return;
    dx = e.touches[0].clientX - sx;
    const dy = e.touches[0].clientY - sy;
    if (horizontal === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) horizontal = Math.abs(dx) > Math.abs(dy);
    if (horizontal && dx < 0) { drawer.classList.add('dragging'); drawer.style.transform = `translateX(${dx}px)`; }
  }, {passive:true});
  drawer.addEventListener('touchend', () => {
    drawer.classList.remove('dragging');
    if (horizontal && dx < -70) closeDrawer(); else drawer.style.transform = '';
    sx = null;
  });

  function buildDrawer() {
    const t = cur.tab;
    $('#drawerKicker').textContent = 'Atlas de Baróvia';
    $('#drawerTitle').textContent = tabNames[t];
    if (t === 'p') drawerPeople();
    else if (t === 'c') drawerChapters();
    else if (t === 'h') drawerHistory();
    else drawerJourney();
  }

  // ————————————————————————————————————————————————— Personagens: filtros e lista
  const region = place => place.split(' · ')[0].replace('Passado de Ravenloft', 'Castelo Ravenloft').replace('Berez · passado', 'Ruínas de Berez');
  const regions = ['Todos','Vila de Baróvia','Vallaki','Castelo Ravenloft','Mago dos Vinhos','Abadia de Santa Markóvia','Argynvostholt','Ruínas de Berez','Templo Âmbar','Covil dos Lobisomens','Casa da Morte'];
  const kindGroup = k => k === 'Aliada' ? 'Aliado' : k;
  const kinds = [['', 'Todos'], ['Antagonista', 'Antagonistas'], ['Aliado', 'Aliados'], ['Neutra', 'Neutros'], ['Histórico', 'Históricos']];
  const natures = [...new Set(people.map(p => p.nature))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const F = {q:'', region:'Todos', kind:'', tier:'', status:'', nature:''};
  const filteredPeople = () => people.filter(p =>
    (F.region === 'Todos' || region(p.place) === F.region) && (!F.kind || kindGroup(p.kind) === F.kind) &&
    (!F.tier || p.tier === Number(F.tier)) && (!F.status || p.status === F.status) && (!F.nature || p.nature === F.nature) &&
    (!F.q || norm([p.name, (p.aliases || []).join(' '), p.place, p.role, p.summary].join(' ')).includes(F.q)));

  function drawerPeople() {
    const extra = [F.region !== 'Todos', F.tier, F.status, F.nature].filter(Boolean).length;
    $('#drawerTools').innerHTML = `
      <label class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg><input id="pq" type="search" placeholder="Buscar nome, lugar ou papel" value="${esc(F.qRaw || '')}" aria-label="Buscar personagens" autocomplete="off"></label>
      <div class="chips-row" role="group" aria-label="Classificação">${kinds.map(([k, l]) => `<button type="button" class="chip ${F.kind === k ? 'on' : ''}" data-kind="${k}">${l}</button>`).join('')}</div>
      <details class="more-filters" ${F.moreOpen ? 'open' : ''}><summary>Mais filtros ${extra ? `<span class="count">${extra}</span>` : ''}</summary>
        <label class="field"><span>REGIÃO</span><select id="pRegion">${regions.map(g => `<option ${F.region === g ? 'selected' : ''}>${esc(g)}</option>`).join('')}</select></label>
        <label class="field"><span>RELEVÂNCIA</span><select id="pTier"><option value="">Todas as estrelas</option>${[5,4,3,2,1].map(n => `<option value="${n}" ${F.tier === String(n) ? 'selected' : ''}>${n} ${n === 1 ? 'estrela' : 'estrelas'}</option>`).join('')}</select></label>
        <label class="field"><span>STATUS</span><select id="pStatus"><option value="">Vivos e mortos</option><option ${F.status === 'Vivo' ? 'selected' : ''}>Vivo</option><option ${F.status === 'Morto' ? 'selected' : ''}>Morto</option></select></label>
        <label class="field"><span>RAÇA / TIPO</span><select id="pNature"><option value="">Todos os tipos</option>${natures.map(n => `<option ${F.nature === n ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></label>
      </details>
      <div class="list-meta"><span id="pCount"></span><button type="button" id="pClear">Limpar filtros</button></div>`;
    peopleList();
    const tools = $('#drawerTools');
    tools.querySelector('#pq').addEventListener('input', e => { F.qRaw = e.target.value; F.q = norm(e.target.value); peopleList(); });
    tools.querySelector('.more-filters').addEventListener('toggle', e => { F.moreOpen = e.target.open; });
    tools.querySelectorAll('[data-kind]').forEach(b => b.addEventListener('click', () => { F.kind = b.dataset.kind; drawerPeople(); }));
    [['#pRegion', 'region'], ['#pTier', 'tier'], ['#pStatus', 'status'], ['#pNature', 'nature']].forEach(([s, k]) => tools.querySelector(s).addEventListener('change', e => { F[k] = e.target.value; drawerPeople(); }));
    tools.querySelector('#pClear').addEventListener('click', () => { Object.assign(F, {q:'', qRaw:'', region:'Todos', kind:'', tier:'', status:'', nature:''}); drawerPeople(); });
  }
  function peopleList() {
    const list = filteredPeople();
    $('#pCount').textContent = `${list.length} ${list.length === 1 ? 'PERSONAGEM' : 'PERSONAGENS'}`;
    $('#drawerList').innerHTML = list.length ? list.map(p => `<button type="button" class="row ${cur.id === p.id ? 'on' : ''} ${p.status === 'Morto' ? 'past' : ''}" ${go('p/' + p.id)}>${av(p.id, 44)}<span class="row-info"><strong>${esc(p.name)}</strong><small>${esc(p.role)}</small></span><span class="stars" aria-label="Relevância ${p.tier} de 5">${stars(p.tier)}</span></button>`).join('') : '<p class="empty">Nenhum personagem encontrado.</p>';
  }

  // ————————————————————————————————————————————————— Personagens: ficha
  const depthSections = [['aparencia','Aparência'],['interpretar','Personalidade e como interpretar'],['sabe','O que sabe e o que conta'],['jogo','Em jogo'],['posses','Posses e tesouro']];
  function renderPerson(id) {
    const p = peopleById[id];
    const src = portraitSrc(p.id);
    const links = (p.links || []).filter(([i]) => peopleById[i]);
    const depth = typeof profileDepth !== 'undefined' && profileDepth[p.id];
    const chaps = storyChapters.filter(c => c.people.includes(p.id) || c.locations.some(l => (l.people || []).includes(p.id)));
    const acts = JORNADA.atos.filter(a => a.text.some(t => t.includes(`[[${p.id}]]`) || t.includes(`[[${p.id}|`)));
    let list = filteredPeople();
    if (!list.includes(p)) list = people;
    const i = list.indexOf(p), prev = list[i - 1], next = list[i + 1];
    setBar('Personagens', p.name);
    view.innerHTML = `
      <div class="p-hero">
        ${src ? `<img src="${src}" alt="Retrato de ${esc(p.name)}" decoding="async">` : `<div class="initial" aria-hidden="true">${esc(p.name[0])}</div>`}
        ${src ? `<button type="button" class="zoom" data-photo="${p.id}" aria-label="Ver retrato inteiro"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg></button>` : ''}
        <div class="p-hero-text"><span class="kind ${esc(p.kind)}">${esc(p.kind)}</span><h1 class="p-name">${esc(p.name)}</h1><div class="p-role">${esc(p.role)}</div>
          <div class="stars-big" role="img" aria-label="Relevância narrativa ${p.tier} de 5">${stars(p.tier)}<span>${stars(5 - p.tier)}</span></div></div>
      </div>
      <div class="facts">
        <div class="fact"><small>STATUS</small><b class="${p.status === 'Vivo' ? 'alive' : 'dead'}">${esc(p.status)}</b></div>
        <div class="fact"><small>RAÇA / TIPO</small><b>${esc(p.nature)}</b></div>
        <div class="fact full"><small>LOCAL</small><b>${esc(p.place)}</b></div>
      </div>
      ${p.aliases?.length ? `<p class="alias">Também conhecido como ${esc(p.aliases.join(', '))}</p>` : ''}
      <section class="sec rv">${secTitle('Quem é')}<p class="summary">${esc(p.summary)}</p></section>
      ${p.detail ? `<section class="sec rv">${secTitle('História e objetivos')}<div class="text"><p>${esc(p.detail)}</p></div></section>` : ''}
      ${depth ? `<section class="sec rv">${secTitle('Para interpretar')}${depthSections.filter(([k]) => depth[k]).map(([k, l]) => `<details class="fold"><summary><strong>${l}</strong></summary><div class="fold-body">${[].concat(depth[k]).map(t => `<p>${esc(t)}</p>`).join('')}</div></details>`).join('')}</section>` : ''}
      ${p.tarokka ? `<div class="tarokka rv"><span aria-hidden="true">✦</span><div><strong>POSSÍVEL ALIADO NA LEITURA DE TAROKKA</strong><p>${esc(p.tarokka)}</p></div></div>` : ''}
      <section class="sec rv">${secTitle('Pessoas ligadas', links.length)}${links.length ? `<div class="plist">${links.map(([lid, label]) => prow(lid, label, `<span class="status ${peopleById[lid].status === 'Vivo' ? 'alive' : 'dead'}">${esc(peopleById[lid].status)}</span>`)).join('')}</div>` : '<p class="note" style="margin:0">O livro não estabelece uma relação pessoal específica para esta ficha.</p>'}</section>
      ${chaps.length ? `<section class="sec rv">${secTitle('Nos capítulos', chaps.length)}<div class="next-list">${chaps.map(c => `<button type="button" ${go('c/' + c.id)}><span><small>${esc(chapterShort(c))}</small>${esc(c.title)}</span><span class="go">›</span></button>`).join('')}</div></section>` : ''}
      ${acts.length ? `<section class="sec rv">${secTitle('Na jornada', acts.length)}<div class="next-list">${acts.map(a => `<button type="button" ${go('j/' + a.id)}><span><small>${esc(a.num)}</small>${esc(a.title)}</span><span class="go">›</span></button>`).join('')}</div></section>` : ''}
      <div class="pager">
        <button type="button" ${prev ? go('p/' + prev.id) : 'disabled'}><small>‹ ANTERIOR</small><span>${esc(prev?.name || '')}</span></button>
        <button type="button" ${next ? go('p/' + next.id) : 'disabled'}><small>PRÓXIMO ›</small><span>${esc(next?.name || '')}</span></button>
      </div>
      <p class="note">Conteúdo de consulta para o mestre. As estrelas indicam relevância narrativa (5 = campanha inteira; 1 = participação breve). O status usa o começo da aventura como referência.</p>`;
  }

  // ————————————————————————————————————————————————— Capítulos
  let cq = '';
  function chapterHay(c) {
    return norm([c.title, c.area, c.intro, c.type, ...c.story, ...c.beats, ...(c.lore || []), ...(c.events || []).flatMap(e => [e.name, e.text]), ...(c.fortune || []).flat(), ...c.locations.flatMap(l => [l.name, l.area || '', l.text]), ...(areaIndex[c.id] || []).flat()].join(' '));
  }
  function drawerChapters() {
    $('#drawerTools').innerHTML = `<label class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg><input id="cqIn" type="search" placeholder="Buscar capítulo, local ou área" value="${esc(cq)}" aria-label="Buscar capítulos e locais" autocomplete="off"></label>`;
    $('#cqIn').addEventListener('input', e => { cq = e.target.value; chaptersList(); });
    chaptersList();
  }
  function chaptersList() {
    const q = norm(cq);
    const matches = storyChapters.filter(c => !q || chapterHay(c).includes(q));
    let html = q ? '' : `<button type="button" class="row ${cur.id === 'mapa' ? 'on' : ''}" ${go('c/mapa')}><span class="row-num">${sigil('mapa')}</span><span class="row-info"><span class="over">Visão geral</span><strong>Mapa da campanha</strong><small>Como os capítulos se ligam</small></span></button><div class="group-label">Os capítulos</div>`;
    html += matches.map(c => {
      const places = q ? c.locations.map((l, i) => [l, i]).filter(([l]) => norm(`${l.name} ${l.text}`).includes(q)) : [];
      const areas = q ? (areaIndex[c.id] || []).filter(([code, t]) => norm(`${code} ${t}`).includes(q)).slice(0, 10) : [];
      return `<button type="button" class="row ${cur.id === c.id ? 'on' : ''}" ${go('c/' + c.id)}><span class="row-num">${sigil(c.id)}</span><span class="row-info"><span class="over">${esc(chapterShort(c))}${c.suggestedLevel ? ` · nível ${esc(c.suggestedLevel)}` : ''}</span><strong>${esc(c.title)}</strong><small>${esc(c.area)}</small></span></button>`
        + places.map(([l, i]) => `<button type="button" class="row-sub" ${go(`c/${c.id}/local-${i}`)}>↳ ${esc(l.name)}</button>`).join('')
        + areas.map(([code, t]) => `<button type="button" class="row-sub" ${go(`c/${c.id}/area-${code}`)}>↳ ${esc(code)} · ${esc(t)}</button>`).join('');
    }).join('');
    $('#drawerList').innerHTML = matches.length || !q ? html : '<p class="empty">Nenhum capítulo ou local encontrado.</p>';
  }

  function renderChapter(id) {
    const c = storyById[id];
    const idx = storyChapters.indexOf(c), prev = storyChapters[idx - 1], next = storyChapters[idx + 1];
    const threads = CAMP.threads.filter(t => t.steps.some(([ch]) => ch === c.id));
    const acts = JORNADA.atos.filter(a => a.chapters.includes(c.id));
    const ppl = uniq(c.people);
    setBar('Capítulos', `${chapterShort(c)} · ${c.title}`);
    view.innerHTML = `
      <div class="c-hero" style="background-image:url('${chapterImg(c.id)}')"><div class="c-hero-in"><span class="kicker">${esc(c.type)}</span><h1>${esc(c.title)}</h1></div></div>
      <div class="metrics">${c.suggestedLevel ? `<span class="lv">Nível sugerido ${esc(c.suggestedLevel)}</span>` : ''}<span>${esc(c.area)}</span><span>${c.locations.length} locais</span><span>${ppl.length} personagens</span></div>
      <p class="intro">${esc(c.intro)}</p>
      <section class="sec rv">${secTitle('História e contexto')}<div class="text">${c.story.map(t => `<p>${esc(t)}</p>`).join('')}</div></section>
      <section class="sec rv">${secTitle('O que acompanhar em jogo')}<ol class="beats">${c.beats.map(b => `<li>${esc(b)}</li>`).join('')}</ol></section>
      ${c.lore?.length ? `<section class="sec rv">${secTitle('O que os moradores sabem')}<ul class="lore">${c.lore.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>` : ''}
      ${c.events?.length ? `<section class="sec rv">${secTitle('Eventos especiais', c.events.length)}${c.events.map(e => `<article class="event"><span aria-hidden="true">✦</span><div><strong>${esc(e.name)}</strong><p>${esc(e.text)}</p></div></article>`).join('')}</section>` : ''}
      <section class="sec rv">${secTitle('Locais e pontos de interesse', c.locations.length)}${c.locations.map((l, i) => `<details class="fold" id="local-${i}"><summary><span class="idx">${String(i + 1).padStart(2, '0')}</span><strong>${esc(l.name)}</strong>${l.area ? `<span class="code">${esc(l.area)}</span>` : ''}</summary><div class="fold-body"><p>${esc(l.text)}</p>${l.people?.length ? `<div class="loc-people"><small>PERSONAGENS</small>${uniq(l.people).map(pid => prow(pid)).join('')}</div>` : ''}${l.chapter && storyById[l.chapter] ? `<p style="margin-top:10px"><button type="button" class="btn" ${go('c/' + l.chapter)}>Abrir ${esc(chapterShort(storyById[l.chapter]))} · ${esc(storyById[l.chapter].title)} ›</button></p>` : ''}</div></details>`).join('')}</section>
      ${c.fortune?.length ? `<section class="sec rv"><details class="fold"><summary><strong>Sorte de Ravenloft · se a tarokka apontar para cá</strong></summary><div class="fold-body"><p style="margin-bottom:10px;color:var(--muted);font-size:.86rem">Onde fica o tesouro indicado por Madame Eva quando a carta aponta para um local deste capítulo.</p><div class="fortune">${c.fortune.map(([pl, wh]) => `<div><b>${esc(pl)}</b><span>${esc(wh)}</span></div>`).join('')}</div></div></details></section>` : ''}
      ${areaIndex[c.id]?.length ? `<section class="sec rv"><details class="fold" id="areas"><summary><strong>Índice de áreas numeradas</strong><span class="code">${areaIndex[c.id].length}</span></summary><div class="fold-body"><div class="areas">${areaIndex[c.id].map(([code, t]) => `<div id="area-${esc(code)}"><b>${esc(code)}</b><span>${esc(t)}</span></div>`).join('')}</div></div></details></section>` : ''}
      ${threads.length ? `<section class="sec rv">${secTitle('Como se liga à campanha')}${threads.map(t => `<div class="thread" style="--c:${t.color}"><strong>${esc(t.label)}</strong><p>${esc(t.steps.filter(([ch]) => ch === c.id).map(s => s[1]).join(' '))}</p><div class="steps">${t.steps.map(([ch], k) => `<button type="button" class="${ch === c.id ? 'here' : ''}" ${go('c/' + ch)}>${k + 1}. ${esc(storyById[ch].title.replace(/^(A|O|As|Os) /, ''))}</button>`).join('')}</div></div>`).join('')}</section>` : ''}
      ${ppl.length ? `<section class="sec rv">${secTitle('Personagens neste capítulo', ppl.length)}<div class="people-h">${ppl.map(pid => pcard(pid)).join('')}</div></section>` : ''}
      ${c.next?.length ? `<section class="sec rv">${secTitle('Próximos caminhos')}<div class="next-list">${c.next.filter(n => storyById[n]).map(n => `<button type="button" ${go('c/' + n)}><span class="row-num">${sigil(n)}</span><span><small>${esc(chapterShort(storyById[n]))}</small>${esc(storyById[n].title)}</span><span class="go">›</span></button>`).join('')}</div></section>` : ''}
      ${acts.length ? `<section class="sec rv">${secTitle('Na jornada')}<div class="next-list">${acts.map(a => `<button type="button" ${go('j/' + a.id)}><span><small>${esc(a.num)}</small>${esc(a.title)}</span><span class="go">›</span></button>`).join('')}</div></section>` : ''}
      <div class="pager">
        <button type="button" ${go(prev ? 'c/' + prev.id : 'c/mapa')}><small>‹ ANTERIOR</small><span>${prev ? esc(prev.title) : 'Mapa da campanha'}</span></button>
        <button type="button" ${next ? go('c/' + next.id) : 'disabled'}><small>PRÓXIMO ›</small><span>${esc(next?.title || '')}</span></button>
      </div>
      <p class="note">Síntese de consulta para o mestre.${c.suggestedLevel ? ' O nível vem da tabela de áreas do livro e é uma orientação, não uma ordem obrigatória.' : ''} A leitura de tarokka e as escolhas da mesa definem parte dos acontecimentos.</p>`;
  }

  function renderMap() {
    setBar('Capítulos', 'Mapa da campanha');
    view.innerHTML = `
      <div class="c-hero" style="background-image:url('${chapterImg('terras')}')"><div class="c-hero-in"><span class="kicker">Visão geral</span><h1>Mapa da campanha</h1></div></div>
      <div class="metrics"><span>15 capítulos + Casa da Morte</span><span>${CAMP.threads.length} linhas de missão</span><span>${CAMP.stages.length} etapas</span></div>
      <p class="intro">Maldição de Strahd é uma aventura aberta: não existe roteiro obrigatório. Mas os capítulos conversam entre si: missões começam num lugar e terminam em outro, e o livro sugere um nível para cada área.</p>
      <section class="sec rv">${secTitle('Uma ordem coerente, por nível')}${CAMP.stages.map((s, i) => `<div class="stage"><span class="stage-n">${i + 1}</span><small>NÍVEL ${esc(s.level)}</small><h3>${esc(s.label)}</h3><p>${esc(s.text)}</p><div class="steps">${s.chapters.map(id => `<button type="button" ${go('c/' + id)}>${esc(chapterShort(storyById[id]))} · ${esc(storyById[id].title)}</button>`).join('')}</div></div>`).join('')}</section>
      <section class="sec rv">${secTitle('Linhas de missão', CAMP.threads.length)}${CAMP.threads.map(t => `<details class="fold" style="--c:${t.color}"><summary><span class="dot" aria-hidden="true"></span><strong>${esc(t.label)}</strong></summary><div class="fold-body"><p style="margin-bottom:8px">${esc(t.text)}</p>${t.steps.map(([ch, txt], k) => `<div class="tstep"><b>${k + 1}</b><div><button type="button" ${go('c/' + ch)}>${esc(chapterShort(storyById[ch]))} · ${esc(storyById[ch].title)} ›</button><span>${esc(txt)}</span></div></div>`).join('')}</div></details>`).join('')}</section>
      <section class="sec rv">${secTitle('Todos os capítulos')}<div class="next-list">${storyChapters.map(c => `<button type="button" ${go('c/' + c.id)}><span class="row-num">${sigil(c.id)}</span><span><small>${esc(chapterShort(c))}${c.suggestedLevel ? ` · nível ${esc(c.suggestedLevel)}` : ''}</small>${esc(c.title)}</span><span class="go">›</span></button>`).join('')}</div></section>
      <div class="end rv"><span class="kicker">Quer a campanha contada como história?</span><p>A aba Jornada percorre um caminho possível do começo ao fim.</p><div class="btns"><button type="button" class="btn wide" ${go('j')}>Ler a jornada ›</button></div></div>`;
  }

  // ————————————————————————————————————————————————— A história
  const histSections = [['inicio','Início'],['linhagens','Linhagens'],['tempo','Linha do tempo'],['noite','A noite do casamento'],['ciclo','O ciclo'],['tabuleiro','O tabuleiro'],['regras','Regras do vale']];
  const genLabels = {zarovich:['A geração de Barov','Strahd e os seus','Noivas, pretendentes e outras vidas'], martikov:['O patriarca','Filhos e genros','Os netos'], richten:['As famílias','O filho e o algoz','A pupila']};
  const shortNames = {strahd:'Strahd', barov:'Barov', ravenovia:'Ravenovia', sergei:'Sergei', eva:'Madame Eva', baba:'Baba Lysaga', vanrichten:'Van Richten', ezmerelda:'Ezmerelda', metus:'Barão Metus', fiona:'Fiona Wachter', abbot:'O Abade', kasimir:'Kasimir', vladimir:'Vladimir'};
  const shortName = id => shortNames[id] || (peopleById[id]?.name || id).split(' ')[0];
  let activeTree = 'zarovich', treeNode = null, boardSide = 'todos';

  function renderHistory() {
    setBar('A história', 'Crônica de Baróvia');
    const title = 'Crônica de Baróvia';
    let k = 0;
    const lives = [
      {id:'tatyana', tag:'ORIGEM', d:'Amou Sergei. Morreu na noite do casamento.'},
      {id:'marina', tag:'DEPOIS', d:'Berez. Morta por quem quis salvá-la; a vila foi afogada.'},
      {id:'ireena', tag:'AGORA', d:'Adotada por Kolyan. Mordida duas vezes.'}
    ];
    let tl = '';
    HIST.eras.forEach(era => {
      tl += `<div class="era rv" id="h-era-${era.id}" data-title="${esc(era.title)}"><span class="era-num">${era.num}</span><div><h3>${esc(era.title)}</h3><p>${esc(era.sub)}</p></div></div>`;
      HIST.events.filter(e => e.era === era.id).forEach(e => {
        if (e.special === 'noite') { tl += nightHTML(); return; }
        tl += `<details class="fold ev tone-${e.tone} rv"><summary><span class="when">${esc(e.when)}</span><strong>${esc(e.title)}</strong><span class="lead">${esc(e.lead)}</span></summary><div class="fold-body">${e.text.map(t => `<p>${esc(t)}</p>`).join('')}${e.people?.length ? `<div class="people-h" style="margin-top:12px">${uniq(e.people).map(id => pcard(id)).join('')}</div>` : ''}${e.chapter && storyById[e.chapter] ? `<button type="button" class="btn wide" style="margin-top:8px" ${go('c/' + e.chapter)}>${esc(chapterShort(storyById[e.chapter]))} · ${esc(storyById[e.chapter].title)} ›</button>` : ''}</div></details>`;
      });
    });
    view.innerHTML = `
      <section class="h-hero" id="h-inicio" data-title="Início">
        <span class="kicker">Ambientação · antes da aventura</span>
        <h1 aria-label="${title}">${title.split(' ').map(w => `<b class="w">${[...w].map(ch => `<span style="animation-delay:${(k++) * 45}ms">${esc(ch)}</span>`).join('')}</b>`).join(' ')}</h1>
        <p class="h-lead">Como um vale nas montanhas virou prisão, um príncipe virou vampiro e uma alma continua renascendo. Tudo o que aconteceu <em>antes</em> de os aventureiros chegarem.</p>
        <blockquote class="quote">“Eu sou o Antigo. Eu sou a Terra.”<cite>Memorial de Strahd</cite></blockquote>
        <div class="stats"><div><strong>400</strong><span>anos de maldição, aproximadamente</span></div><div><strong>7</strong><span>eras até o presente</span></div><div><strong>3</strong><span>vidas de uma mesma alma no livro</span></div></div>
      </section>
      <section class="sec" id="h-linhagens" data-title="Linhagens">${secTitle('01 · Linhagens')}<p class="text" style="margin-bottom:12px;color:var(--muted)">Quem é quem, e de quem. Toque numa pessoa para ver seu papel na história.</p>
        <div class="seg" role="tablist">${Object.entries(HIST.trees).map(([key, t]) => `<button type="button" role="tab" data-tree="${key}" class="${key === activeTree ? 'on' : ''}" aria-selected="${key === activeTree}"><strong>${esc(t.label)}</strong><small>${esc(t.lead)}</small></button>`).join('')}</div>
        <div id="treeBox"></div></section>
      <section class="sec" id="h-tempo" data-title="Linha do tempo">${secTitle('02 · Linha do tempo')}<p class="text" style="color:var(--muted)">Do âmbar às brumas. Toque num acontecimento para abrir os detalhes.</p><div class="tl">${tl}</div>
        <p class="note" style="margin:10px 0 0">A ordem é narrativa. O livro fala em “séculos” e “mais de quatro séculos” para a maldição, mas não data cada episódio.</p></section>
      <section class="sec" id="h-ciclo" data-title="O ciclo">${secTitle('03 · O ciclo')}<p class="text" style="margin-bottom:12px;color:var(--muted)">Uma alma, várias vidas. Para Strahd, Tatyana nunca morreu de verdade: ela volta.</p>
        <ol class="lives">${lives.map(l => `<li>${av(l.id, 52)}<div><b>${l.tag}</b><a href="#p/${l.id}" class="link" ${go('p/' + l.id)}><strong>${esc(peopleById[l.id].name)}</strong></a><p>${esc(l.d)}</p></div></li>`).join('')}<li class="q"><span class="av ghost" style="--s:52px">?</span><div><b>E ENTRE ELAS?</b><strong>Vidas sem registro</strong><p>O livro não afirma que estas sejam as únicas. Use o vazio como quiser na sua mesa.</p></div></li></ol>
        <div class="sec-title" style="margin-top:18px">A família que Ireena tem hoje</div>
        <div class="people-h">${pcard('kolyan', 'pai adotivo · morto')}${pcard('ireena', 'adotada ainda criança')}${pcard('ismark', 'irmão adotivo')}</div></section>
      <section class="sec" id="h-tabuleiro" data-title="O tabuleiro">${secTitle('04 · O tabuleiro')}<p class="text" style="margin-bottom:12px;color:var(--muted)">Quem move as peças no início da aventura, e o que cada um quer.</p>
        <div class="chips-row" style="margin-bottom:12px">${[['todos','Todos'],['serve','Servem'],['contra','Contra'],['ambiguo','Ambíguos'],['alvo','Alvo']].map(([s, l]) => `<button type="button" class="chip ${boardSide === s ? 'on' : ''}" data-side="${s}">${l}</button>`).join('')}</div>
        <div id="boardBox"></div></section>
      <section class="sec" id="h-regras" data-title="Regras do vale">${secTitle('05 · Regras do vale')}<div class="rules">${HIST.rules.map(r => `<div class="rule rv">${icon(r.icon)}<div><h4>${esc(r.t)}</h4><p>${esc(r.d)}</p></div></div>`).join('')}</div>
        <div class="sec-title" style="margin-top:20px">Relíquias do passado</div><p class="text" style="margin-bottom:10px;color:var(--muted)">Três objetos nascidos desta história. A leitura de Madame Eva define onde estão.</p>
        <div class="rules">${HIST.relics.map(r => `<div class="rule relic rv">${icon(r.icon)}<div><h4>${esc(r.t)}</h4><p>${esc(r.d)}</p></div></div>`).join('')}</div></section>
      <div class="end rv"><span class="kicker">A partir daqui, a história é da mesa</span><p>Os aventureiros chegam a uma terra presa ao passado. O que fazem com ela ainda não foi escrito.</p>
        <div class="btns"><button type="button" class="btn wide" ${go('j')}>Ler a jornada da campanha ›</button><button type="button" class="btn wide" ${go('c/abertura')}>Capítulo 1 · Nas Brumas ›</button></div></div>`;
    renderTree();
    renderBoard();
    setNight(0);
  }

  function renderTree() {
    const t = HIST.trees[activeTree];
    const byK = Object.fromEntries(t.nodes.map(n => [n.k, n]));
    if (!treeNode || !byK[treeNode]) treeNode = (t.nodes.find(n => n.main) || t.nodes[0]).k;
    const ys = [...new Set(t.nodes.map(n => n.y))].sort((a, b) => a - b);
    const nodeCard = n => {
      const face = n.ghost ? '<span class="av ghost" style="--s:56px">?</span>' : n.group ? av(n.group[0], 56) : av(n.k, 56);
      return `<button type="button" class="pcard ${n.k === treeNode ? 'on' : ''}" data-node="${n.k}">${face}<strong>${esc(n.name || shortName(n.k))}</strong><small>${esc(n.sub)}</small></button>`;
    };
    const n = byK[treeNode], p = peopleById[treeNode];
    const label = k => byK[k]?.name || shortName(k);
    const legend = Object.fromEntries(HIST.edgeLegend);
    const bonds = [
      ...t.families.map(f => `<div class="bond"><i class="b-marriage" style="opacity:.5"></i><span>${f.parents.map(label).map(esc).join(' e ')} <em>→ ${f.children.length > 1 ? 'filhos' : 'filho(a)'}:</em> ${f.children.map(label).map(esc).join(', ')}</span></div>`),
      ...t.edges.map(e => `<div class="bond"><i class="b-${e.type} ${['secret','affair','rift','soul'].includes(e.type) ? 'dash' : ''}"></i><span>${esc(label(e.a))} <em>${esc(e.label || legend[e.type] || '')}</em> ${esc(label(e.b))}</span></div>`)
    ].join('');
    $('#treeBox').innerHTML = `
      ${ys.map((y, i) => `<div class="gen"><small>${esc((genLabels[activeTree] || [])[i] || '')}</small><div class="people-h">${t.nodes.filter(nd => nd.y === y).sort((a, b) => a.x - b.x).map(nodeCard).join('')}</div></div>`).join('')}
      <div class="card tree-info">
        ${n.ghost ? '<span class="av ghost" style="--s:56px">?</span>' : n.group ? av(n.group[0], 56) : av(n.k, 56)}
        <div style="flex:1;min-width:0"><span class="over">${esc(n.sub)}</span><h4>${esc(n.name || p?.name || n.k)}</h4>
          ${p ? `<span class="status ${p.status === 'Vivo' ? 'alive' : 'dead'}">${p.status === 'Vivo' ? 'Ainda em cena' : 'Pertence ao passado'}</span>` : ''}
          <p>${esc(n.note || p?.summary || '')}</p>
          ${n.group ? `<div class="plist" style="margin-top:8px">${uniq(n.group).map(id => prow(id)).join('')}</div>` : p ? `<button type="button" class="btn" ${go('p/' + n.k)}>Abrir ficha completa ›</button>` : ''}
        </div>
      </div>
      <div class="sec-title" style="margin-top:16px">Laços</div><div class="bonds">${bonds}</div>`;
  }

  function renderBoard() {
    const s = HIST.board.filter(b => boardSide === 'todos' || b.side === boardSide);
    const strahd = boardSide === 'todos' ? `<button type="button" class="board-card" style="--s:var(--gold)" ${go('p/strahd')}>${av('strahd', 52)}<div><small>NO CENTRO</small><strong>Strahd von Zarovich</strong><p>Quer Ireena como consorte, quer capturar van Richten e está prestes a testar os recém-chegados. Governa de Ravenloft, mas pode aparecer em quase qualquer lugar do vale.</p></div></button>` : '';
    $('#boardBox').innerHTML = strahd + s.map(b => `<button type="button" class="board-card side-${b.side}" ${go('p/' + b.id)}>${av(b.id, 52)}<div><small>${esc(HIST.sides[b.side])}</small><strong>${esc(peopleById[b.id].name)}</strong><em>Relação com Strahd: ${esc(b.rel)}</em><p>${esc(b.want)}</p></div></button>`).join('');
  }

  // A noite do casamento: passo a passo
  let nightStep = 0, nightTimer = null;
  function nightHTML() {
    return `<div class="night rv" id="h-noite" data-title="A noite do casamento" data-step="0">
      <div class="night-stage"><span class="night-moon" aria-hidden="true"></span><span class="kicker" style="color:var(--blood-hi)">Era V · O ponto de ruptura</span><div class="night-body" aria-live="polite"></div></div>
      <div class="night-ctrl"><button type="button" class="round" data-night="prev" aria-label="Passo anterior">‹</button><div class="dots">${HIST.nightSteps.map((s, i) => `<button type="button" data-night-step="${i}" aria-label="${i + 1}. ${esc(s.t)}"></button>`).join('')}</div><button type="button" class="round" data-night="next" aria-label="Próximo passo">›</button><button type="button" class="round" data-night="play" aria-label="Reproduzir">▶</button></div>
      <div class="people-h" style="margin:0;padding:0 12px 14px">${['strahd','sergei','tatyana','leo','eva'].map(id => pcard(id)).join('')}</div>
    </div>`;
  }
  function setNight(i) {
    const night = view.querySelector('.night');
    if (!night) return;
    nightStep = (i + HIST.nightSteps.length) % HIST.nightSteps.length;
    const s = HIST.nightSteps[nightStep];
    night.dataset.step = nightStep;
    night.querySelector('.night-body').innerHTML = `<div class="anim"><div class="night-step" style="margin-top:8px">${String(nightStep + 1).padStart(2, '0')} / ${String(HIST.nightSteps.length).padStart(2, '0')}</div><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p></div>`;
    night.querySelectorAll('[data-night-step]').forEach((b, j) => { b.classList.toggle('on', j === nightStep); b.classList.toggle('past', j < nightStep); });
  }
  function stopNight() { clearInterval(nightTimer); nightTimer = null; const b = view.querySelector('[data-night="play"]'); if (b) { b.textContent = '▶'; b.setAttribute('aria-label', 'Reproduzir'); } }
  function playNight() {
    if (nightTimer) { stopNight(); return; }
    if (nightStep === HIST.nightSteps.length - 1) setNight(0);
    nightTimer = setInterval(() => { if (nightStep >= HIST.nightSteps.length - 1) stopNight(); else setNight(nightStep + 1); }, 4200);
    const b = view.querySelector('[data-night="play"]'); b.textContent = '❚❚'; b.setAttribute('aria-label', 'Pausar');
  }
  view.addEventListener('click', e => {
    const tr = e.target.closest('[data-tree]');
    if (tr) { activeTree = tr.dataset.tree; treeNode = null; view.querySelectorAll('[data-tree]').forEach(b => { b.classList.toggle('on', b === tr); b.setAttribute('aria-selected', b === tr); }); tr.scrollIntoView({inline:'nearest', block:'nearest', behavior:reduceMotion ? 'auto' : 'smooth'}); renderTree(); return; }
    const nd = e.target.closest('[data-node]');
    if (nd) { treeNode = nd.dataset.node; renderTree(); const info = view.querySelector('.tree-info'); if (info && info.getBoundingClientRect().bottom > innerHeight - 70) info.scrollIntoView({behavior:reduceMotion ? 'auto' : 'smooth', block:'center'}); return; }
    const sd = e.target.closest('[data-side]');
    if (sd) { boardSide = sd.dataset.side; view.querySelectorAll('[data-side]').forEach(b => b.classList.toggle('on', b === sd)); renderBoard(); return; }
    const ns = e.target.closest('[data-night-step]');
    if (ns) { stopNight(); setNight(Number(ns.dataset.nightStep)); return; }
    const nb = e.target.closest('[data-night]');
    if (nb) { const a = nb.dataset.night; if (a === 'play') playNight(); else { stopNight(); setNight(nightStep + (a === 'next' ? 1 : -1)); } }
  });

  function drawerHistory() {
    $('#drawerTools').innerHTML = '';
    const icons = {inicio:'mist', linhagens:'crown', tempo:'castle', noite:'rose', ciclo:'soul', tabuleiro:'cards', regras:'book'};
    $('#drawerList').innerHTML = histSections.map(([id, l]) => `<button type="button" class="row ${cur.anchor === id ? 'on' : ''}" ${go('h/' + id)}><span class="row-num">${icon(icons[id])}</span><span class="row-info"><strong>${l}</strong></span></button>`
      + (id === 'tempo' ? HIST.eras.map(e => `<button type="button" class="row-sub" ${go('h/era-' + e.id)}>${e.num} · ${esc(e.title)}</button>`).join('') : '')).join('');
  }

  // ————————————————————————————————————————————————— A jornada
  function renderJourney() {
    setBar('A jornada', 'Do começo ao fim');
    view.innerHTML = `
      <section class="j-hero" id="act-inicio" data-title="Do começo ao fim">
        <span class="kicker">A campanha contada como história</span>
        <h1>A jornada</h1>
        ${JORNADA.intro.map(t => `<p class="h-lead">${esc(t)}</p>`).join('')}
      </section>
      <section class="sec" id="act-leitura" data-title="A leitura de Madame Eva">${secTitle('A leitura de Madame Eva')}<p class="text" style="margin-bottom:10px;color:var(--muted)">Nesta versão, as cartas caíram assim. Deslize para ver as cinco.</p>
        <div class="cards">${JORNADA.leitura.map(l => `<button type="button" class="tcard" ${go(l.person ? 'p/' + l.person : 'c/' + l.chapter)}><small>${esc(l.pos)}</small><strong>${esc(l.card)}</strong><q>${esc(l.say)}</q><span>${esc(l.where)} ›</span></button>`).join('')}</div></section>
      ${JORNADA.atos.map((a, i) => `
        <article class="act" id="act-${a.id}" data-title="${esc(a.title)}">
          <div class="act-banner" style="background-image:url('${chapterImg(a.chapters[0])}')"><div><span class="act-num">${esc(a.num)}</span><h2>${esc(a.title)}</h2></div></div>
          <div class="act-meta"><span>${esc(a.place)}</span>${a.level ? `<span class="lv">· nível ${esc(a.level)}</span>` : ''}${a.chapters.filter(c => storyById[c]).map(c => `<button type="button" ${go('c/' + c)}>${esc(chapterShort(storyById[c]))}</button>`).join('')}</div>
          <p class="act-lead">${esc(a.lead)}</p>
          <div class="story">${a.text.map(t => `<p>${rich(t)}</p>`).join('')}</div>
          ${a.fios?.length ? `<div class="box"><small>FIOS DA HISTÓRIA</small><ul>${a.fios.map(f => `<li>${rich(f)}</li>`).join('')}</ul></div>` : ''}
          ${a.outros?.length ? `<div class="box alt"><small>OUTROS CAMINHOS</small><ul>${a.outros.map(f => `<li>${rich(f)}</li>`).join('')}</ul></div>` : ''}
          ${i < JORNADA.atos.length - 1 ? '<div class="ornament" aria-hidden="true">✦ ✦ ✦</div>' : ''}
        </article>`).join('')}
      <div class="end"><span class="kicker">Fim</span><p>Esta foi uma das campanhas possíveis. A sua será decidida pelas cartas e pelos jogadores.</p><div class="btns"><button type="button" class="btn wide" ${go('c/mapa')}>Ver o mapa da campanha ›</button><button type="button" class="btn wide" ${go('h')}>Ler a história do vale ›</button></div></div>`;
  }
  function drawerJourney() {
    $('#drawerTools').innerHTML = '';
    $('#drawerList').innerHTML = `<button type="button" class="row ${!cur.anchor || cur.anchor === 'inicio' ? 'on' : ''}" ${go('j/inicio')}><span class="row-num">✦</span><span class="row-info"><strong>Introdução</strong><small>Como ler esta história</small></span></button>
      <button type="button" class="row ${cur.anchor === 'leitura' ? 'on' : ''}" ${go('j/leitura')}><span class="row-num">${icon('cards')}</span><span class="row-info"><strong>A leitura de Madame Eva</strong><small>As cinco cartas desta versão</small></span></button>
      <div class="group-label">A história, parte a parte</div>`
      + JORNADA.atos.map((a, i) => `<button type="button" class="row ${cur.anchor === a.id ? 'on' : ''}" ${go('j/' + a.id)}><span class="row-num">${i === 0 ? 'P' : i === JORNADA.atos.length - 1 ? 'E' : i}</span><span class="row-info"><span class="over">${esc(a.num)}${a.level ? ` · nível ${esc(a.level)}` : ''}</span><strong>${esc(a.title)}</strong><small>${esc(a.place)}</small></span></button>`).join('');
  }

  // ————————————————————————————————————————————————— Topo, rolagem e revelações
  function setBar(kicker, title) { $('#barKicker').textContent = kicker; $('#barTitle').textContent = title; document.title = `${title} · Atlas de Baróvia`; }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (!cur) return;
      const reading = cur.tab === 'h' || cur.tab === 'j';
      const max = document.documentElement.scrollHeight - innerHeight;
      $('#progressBar').style.transform = `scaleX(${reading && max > 0 ? Math.min(1, scrollY / max) : 0})`;
      if (reading) {
        let title = null, id = null;
        view.querySelectorAll('[data-title]').forEach(el => { if (el.getBoundingClientRect().top < 140) { title = el.dataset.title; id = el.id; } });
        if (title) $('#barTitle').textContent = title;
        if (id) cur.anchor = id.replace(/^(h|act)-/, '');
      }
    });
  }
  let scrollIdle = null;
  addEventListener('scroll', () => { onScroll(); document.body.classList.add('scrolling'); clearTimeout(scrollIdle); scrollIdle = setTimeout(() => document.body.classList.remove('scrolling'), 600); }, {passive:true});

  let io = null;
  function arm() {
    const els = view.querySelectorAll('.rv:not(.in)');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
    io ??= new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), {rootMargin:'0px 0px -5% 0px', threshold:.05});
    els.forEach(el => io.observe(el));
  }

  // ————————————————————————————————————————————————— Retrato em tela cheia
  const photo = $('#photo');
  function openPhoto(id) {
    const p = peopleById[id], src = portraitSrc(id);
    if (!p || !src) return;
    $('#photoImg').src = src;
    $('#photoImg').alt = `Retrato de ${p.name}`;
    $('#photoName').textContent = p.name;
    photo.showModal();
  }
  $('#photoClose').addEventListener('click', () => photo.close());
  photo.addEventListener('click', e => { if (e.target === photo || e.target.id === 'photoImg') photo.close(); });

  // ————————————————————————————————————————————————— Início
  const start = parse(location.hash);
  history.replaceState({depth:0}, '', '#' + start.path);
  show(start);
})();
