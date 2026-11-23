/* =====================================================================
   PHILO · Terminale — application (routeur + pages)
   Tu n'as normalement pas besoin de modifier ce fichier pour ajouter
   du contenu : tout se passe dans data/chapitres.js et data/outils.js
   ===================================================================== */
(() => {
'use strict';

const P = window.PHILO;
const CH = P.chapitres;
const app = document.getElementById('app');

/* ---------- utilitaires ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const strip = h => String(h).replace(/<\/(p|div|h\d|li|span|dfn|blockquote|figcaption|td|th)>|<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').replace(/\s+([,.;)])/g, '$1').trim();
const norm = s => strip(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return (h >>> 0).toString(36); };
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const byId = id => CH.find(c => c.id === id) || (id === 'methode' ? P.methode : null);
const tint = c => `class="tint" style="--c-l:${c.couleur[0]};--c-d:${c.couleur[1]}"`;
const tintVars = c => `--c-l:${c.couleur[0]};--c-d:${c.couleur[1]}`;
const plural = (n, w) => `${n} ${w}${n > 1 ? 's' : ''}`;

/* ---------- mémoire locale (progression) ---------- */
const KEY = 'philo-terminale-v1';
const blank = () => ({ read: {}, known: {}, quiz: {}, mode: 'cours', last: null });
let S;
try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = blank(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

/* ---------- thème ---------- */
const root = document.documentElement;
try { const t = localStorage.getItem('philo-theme'); if (t) root.dataset.theme = t; } catch (e) {}
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
$('#theme-btn').addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('philo-theme', root.dataset.theme); } catch (e) {}
});

/* ---------- statistiques ---------- */
const secKey = (c, s) => `${c.id}/${s.id}`;
function chapStats(c) {
  const total = c.sections.length;
  const done = c.sections.filter(s => S.read[secKey(c, s)]).length;
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}
function decks() {
  const d = CH.map(c => ({
    id: c.id, nom: c.court, chap: c,
    cards: c.flashcards.map(([q, a]) => ({ id: hash(q), q, a, src: c.label }))
  }));
  d.push({
    id: 'reperes', nom: 'Repères', chap: null,
    cards: P.reperes.map(r => ({ id: hash(r.t), q: `Distingue :<br><em>${r.t}</em>`, a: r.d, src: 'Repère' }))
  });
  return d;
}
function globalStats() {
  let secT = 0, secD = 0;
  CH.forEach(c => { const s = chapStats(c); secT += s.total; secD += s.done; });
  const all = decks().flatMap(d => d.cards);
  const known = all.filter(c => S.known[c.id]).length;
  const pct = Math.round(((secD / (secT || 1)) * .5 + (known / (all.length || 1)) * .5) * 100);
  return { secT, secD, cards: all.length, known, pct };
}

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2000);
}

/* =====================================================================
   RENDU DES BLOCS DE COURS
   ===================================================================== */
function block(b) {
  if (b.p) return `<p>${b.p}</p>`;
  if (b.h) return `<h3 class="b-h">${b.h}</h3>`;
  if (b.ul) return `<ul class="b-ul">${b.ul.map(x => `<li>${x}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol class="b-ol">${b.ol.map((x, i) => `<li><span class="n">${i + 1}</span><div>${x}</div></li>`).join('')}</ol>`;
  if (b.def) return `<div class="b-def"><span class="lbl">Définition</span><dfn>${b.def}</dfn><p>${b.d}</p></div>`;
  if (b.q) return `<figure class="b-q"><blockquote>${b.q}</blockquote>${b.src ? `<figcaption>${b.src}</figcaption>` : ''}</figure>`;
  if (b.key) return `<div class="b-key"><span class="lbl">À retenir</span><p>${b.key}</p></div>`;
  if (b.ex) return `<div class="b-ex"><span class="lbl">Exemple</span><p>${b.ex}</p></div>`;
  if (b.cards) return `<div class="b-cards">${b.cards.map(c => `<div class="mini"><h4>${c.k}</h4><p>${c.v}</p></div>`).join('')}</div>`;
  if (b.table) return `<div class="b-table"><table><thead><tr>${b.table.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (b.timeline) return `<ol class="b-tl">${b.timeline.map(([d, v]) => `<li><span class="d">${d}</span><span>${v}</span></li>`).join('')}</ol>`;
  if (b.steps) return `<div class="b-steps">${b.steps.map(([L, t, d, q]) => `<div class="step"><span class="L">${L}</span><div><h4>${t}</h4><p>${d}</p>${q ? `<span class="qg">« ${q} »</span>` : ''}</div></div>`).join('')}</div>`;
  if (b.formula) return `<div class="b-formula">${b.formula.map(([w, t]) => `<div><span class="w">${w}</span><span>${t}</span></div>`).join('')}</div>`;
  return '';
}

/* =====================================================================
   PAGES
   ===================================================================== */
const pages = {};

/* ---------- ACCUEIL ---------- */
pages.home = () => {
  const g = globalStats();
  const bac = new Date(P.config.bacBlanc + 'T08:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Math.round((new Date(P.config.bacBlanc + 'T00:00:00') - today) / 864e5);
  const dateTxt = bac.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const vues = new Set(CH.flatMap(c => c.notions || []));
  const notions = P.programme.perspectives.flatMap(p => p.notions);
  const mq = notions.map(n => `<span class="${vues.has(n) ? 'vu' : ''}">${n}</span>`).join('');
  const last = S.last && byId(S.last.split('/')[0]);
  const circ = 2 * Math.PI * 30;

  return `
  <section class="hero">
    <div class="hero-glyph" aria-hidden="true">φ</div>
    <div class="wrap">
      <div class="hero-top mono"><span>${P.config.classe} · Philosophie</span><span>${P.config.annee}</span></div>
      <div class="hero-grid">
        <div>
          <h1 class="display"><span class="ln"><span>Le cours,</span></span><span class="ln"><span><em>rien que</em></span></span><span class="ln"><span>le cours.</span></span></h1>
        </div>
        <div>
          <p class="lead">Tout ce qu’on a vu en classe, reformulé clairement, avec des flashcards, des quiz et la méthode du bac. Pour réviser seul ou entre potes.</p>
          <div class="hero-cta">
            <a class="btn primary" href="#/cours/${last ? S.last : CH[0].id}">${last ? 'Reprendre' : 'Commencer'} <span class="arr">→</span></a>
            <a class="btn ghost" href="#/flashcards">Se tester</a>
          </div>
        </div>
      </div>
      <div class="hero-side" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin-top:clamp(36px,5vw,60px)">
        ${days >= 0 ? `<div class="stat reveal"><div class="big">${days === 0 ? 'J' : `J−${days}`}</div><p><b>${days === 0 ? 'C’est aujourd’hui. Courage !' : 'avant le bac blanc'}</b>${dateTxt}</p></div>` : ''}
        <div class="stat reveal">
          <div class="ring"><svg viewBox="0 0 72 72"><circle class="tr" cx="36" cy="36" r="30"/><circle class="pr" cx="36" cy="36" r="30" stroke-dasharray="${circ}" stroke-dashoffset="${circ}" data-off="${circ * (1 - g.pct / 100)}"/></svg><span>${g.pct}%</span></div>
          <p><b>Ta progression</b>${g.secD}/${g.secT} parties comprises · ${g.known}/${g.cards} cartes maîtrisées</p>
        </div>
      </div>
    </div>
  </section>

  <div class="marquee" aria-hidden="true"><div class="marquee-track">${mq}${mq}</div></div>

  <section class="block wrap" id="chapitres">
    <div class="block-head reveal"><h2 class="display">Les <em>chapitres</em></h2><p>Le site grandit avec le cours : chaque nouveau chapitre vu en classe s’ajoute ici.</p></div>
    ${chapList()}
  </section>

  <section class="block wrap">
    <div class="block-head reveal"><h2 class="display">Réviser <em>autrement</em></h2><p>Lire ne suffit pas : se tester, c’est ce qui fait retenir.</p></div>
    ${bento()}
  </section>
  ${foot()}`;
};

function chapList() {
  return `<div class="chap-list">${CH.map(c => {
    const s = chapStats(c);
    return `<a class="chap-row reveal" href="#/cours/${c.id}" style="${tintVars(c)};--c:var(--c-l)" data-tint>
      <span class="chap-n">${c.num}</span>
      <div><span class="lbl muted mono">${c.label}</span><h3>${c.titre}</h3><p class="muted">${c.sousTitre}</p></div>
      <div class="prog"><div class="pbar-lbl"><span class="muted">${plural(c.sections.length, 'partie')}</span><span class="muted">${s.pct}%</span></div><div class="pbar"><i style="width:${s.pct}%"></i></div></div>
      <span class="chap-arrow" aria-hidden="true">→</span>
    </a>`;
  }).join('')}
  <div class="chap-row soon" aria-hidden="true" style="--c:var(--muted)">
    <span class="chap-n">${String(CH.length).padStart(2, '0')}</span>
    <div><span class="lbl muted mono">Bientôt</span><h3>Le prochain chapitre</h3><p class="muted">Ajouté dès qu’il est vu en cours.</p></div>
    <div></div><span></span>
  </div></div>`;
}

function bento() {
  const d = decks(); const nCards = d.reduce((a, x) => a + x.cards.length, 0);
  const nQuiz = CH.reduce((a, c) => a + c.quiz.length, 0);
  const nCit = citations().length;
  return `<div class="bento">
    <a class="tile hero-tile reveal" href="#/flashcards"><div class="tile-top"><span class="mono">Mémoriser</span><span class="count">${nCards}</span></div><div><h3>Flashcards</h3><p>Retourne la carte, dis si tu savais. Les cartes ratées reviennent.</p></div><span class="deco">?</span></a>
    <a class="tile ink reveal" href="#/quiz"><div class="tile-top"><span class="mono">Vérifier</span><span class="count">${nQuiz}</span></div><div><h3>Quiz</h3><p>QCM avec correction expliquée, par chapitre.</p></div><span class="deco">✓</span></a>
    <a class="tile reveal" href="#/methode"><div class="tile-top"><span class="mono">Rédiger</span><span class="count">5</span></div><div><h3>Méthode</h3><p>ADREC, problématisation, explication de texte.</p></div><span class="deco">A</span></a>
    <a class="tile reveal" href="#/citations"><div class="tile-top"><span class="mono">Citer</span><span class="count">${nCit}</span></div><div><h3>Citations</h3><p>Avec un mode test : retrouve l’auteur.</p></div><span class="deco">«</span></a>
    <a class="tile reveal" href="#/auteurs"><div class="tile-top"><span class="mono">Référencer</span><span class="count">${P.auteurs.length}</span></div><div><h3>Auteurs</h3><p>Qui dit quoi, dans quelle œuvre.</p></div><span class="deco">Δ</span></a>
    <a class="tile reveal" href="#/reperes"><div class="tile-top"><span class="mono">Distinguer</span><span class="count">${P.reperes.length}</span></div><div><h3>Repères</h3><p>Légal / légitime, persuader / convaincre…</p></div><span class="deco">/</span></a>
    <a class="tile wide reveal" href="#/programme"><div class="tile-top"><span class="mono">Le programme</span><span class="count">17</span></div><div><h3>Notions & auteurs</h3><p>Les 17 notions officielles et où on en est dans l’année.</p></div><span class="deco">∴</span></a>
  </div>`;
}

const foot = () => `<footer class="foot"><div class="wrap">
  <div class="foot-big">Sapere <em>aude.</em></div>
  <div>Fait pour réviser ensemble · ${P.config.classe} ${P.config.annee}<br>Ta progression reste sur ton appareil.</div>
</div></footer>`;

/* ---------- LISTE DES CHAPITRES ---------- */
pages.cours = () => `
  <header class="tool-head wrap"><span class="mono muted">Le cours</span><h1 class="display">Tous les <em>chapitres</em></h1><p class="lead">Chaque chapitre : l’essentiel en 30 secondes, le cours complet, une fiche express, puis flashcards et quiz.</p></header>
  <section class="wrap">${chapList()}</section>
  <section class="block wrap"><a class="chap-row reveal" href="#/methode" style="--c:var(--ink)"><span class="chap-n">✦</span><div><span class="lbl muted mono">Boîte à outils</span><h3>La <em>méthode</em> du bac</h3><p class="muted">ADREC, tableau argumentatif, problématisation, explication de texte.</p></div><div></div><span class="chap-arrow">→</span></a></section>
  ${foot()}`;

/* ---------- CHAPITRE (et méthode) ---------- */
pages.chapitre = (id) => {
  const c = byId(id);
  if (!c) return pages.notfound();
  const isChap = CH.includes(c);
  const st = chapStats(c);
  const words = c.sections.reduce((a, s) => a + strip(s.blocs.map(block).join(' ')).split(' ').length, 0);
  const auteursCh = P.auteurs.filter(a => a.ch.includes(c.id));
  const idx = CH.indexOf(c);
  const next = isChap ? CH[idx + 1] : null;

  let lastPart = null, n = 0;
  const toc = c.sections.map(s => {
    n++;
    const part = s.partie && s.partie !== lastPart ? `<li class="part">${s.partie}</li>` : '';
    if (s.partie) lastPart = s.partie;
    return `${part}<li><a href="#/${isChap ? 'cours/' : ''}${c.id}/${s.id}" data-sec="${s.id}" class="${S.read[secKey(c, s)] ? 'done' : ''}"><span class="n">${String(n).padStart(2, '0')}</span><span class="t">${strip(s.titre)}</span><span class="ck">✓</span></a></li>`;
  }).join('');

  lastPart = null; n = 0;
  const body = c.sections.map(s => {
    n++;
    const part = s.partie && s.partie !== lastPart ? `<div class="part-title">${s.partie}</div>` : '';
    if (s.partie) lastPart = s.partie;
    const on = S.read[secKey(c, s)];
    return `${part}<section class="sec" id="sec-${s.id}" data-sec="${s.id}">
      <div class="sec-head"><span class="sec-n">${n}.</span><h2>${s.titre}</h2></div>
      <p class="sec-resume">${s.resume}</p>
      <div class="sec-body">${s.blocs.map(block).join('')}</div>
      <button class="done-btn ${on ? 'on' : ''}" data-done="${s.id}"><span class="box">${on ? '✓' : ''}</span>${on ? 'Compris' : 'J’ai compris cette partie'}</button>
    </section>`;
  }).join('');

  return `<article ${tint(c)} id="chap">
    <header class="page-head wrap">
      <a class="back mono" href="#/${isChap ? 'cours' : ''}">← ${isChap ? 'Tous les chapitres' : 'Accueil'}</a>
      <div class="ph-grid">
        <div class="ph-num">${c.num}</div>
        <div><span class="mono muted">${c.label}</span><h1 class="display">${c.titre}</h1></div>
      </div>
      <p class="lead">${c.sousTitre}</p>
      <div class="ph-meta">
        <span class="mono">${plural(c.sections.length, 'partie')}</span>
        <span class="mono">≈ ${Math.max(1, Math.round(words / 200))} min de lecture</span>
        ${isChap ? `<span class="mono" id="st-pct">${st.pct}% compris</span>` : ''}
        <div class="seg" role="group" aria-label="Mode de lecture">
          <button data-mode="cours" class="${S.mode !== 'fiche' ? 'on' : ''}">Cours complet</button>
          <button data-mode="fiche" class="${S.mode === 'fiche' ? 'on' : ''}">Fiche express</button>
        </div>
      </div>
    </header>

    <section class="wrap"><div class="essentiel reveal"><h2>L’essentiel <em>en 30 secondes</em></h2><ol>${c.essentiel.map(x => `<li><span>${x}</span></li>`).join('')}</ol></div></section>

    <div class="wrap reader">
      <nav class="toc" aria-label="Sommaire du chapitre">
        <div class="toc-prog"><div class="pbar-lbl mono"><span>Progression</span><span id="toc-pct">${st.done}/${st.total}</span></div><div class="pbar"><i style="width:${st.pct}%"></i></div></div>
        <ol>${toc}</ol>
      </nav>
      <div class="${S.mode === 'fiche' ? 'fiche' : ''}" id="sections">${body}</div>
    </div>

    <section class="wrap chap-end">
      ${isChap ? `<div class="end-card fill reveal"><span class="mono">Teste-toi</span><h3>As-tu vraiment retenu ?</h3><div class="btns"><a class="btn" href="#/flashcards?deck=${c.id}">${c.flashcards.length} flashcards</a><a class="btn" href="#/quiz?ch=${c.id}">Quiz · ${c.quiz.length} questions</a></div></div>` :
      `<div class="end-card fill reveal"><span class="mono">Et maintenant</span><h3>Entraîne-toi sur un chapitre</h3><div class="btns"><a class="btn" href="#/cours">Voir les chapitres</a></div></div>`}
      ${next ? `<a class="end-card reveal" href="#/cours/${next.id}" style="${tintVars(next)}"><span class="mono muted">Chapitre suivant</span><h3>${next.titre}</h3><span class="btn ghost" style="align-self:start">Continuer <span class="arr">→</span></span></a>` :
        auteursCh.length ? `<a class="end-card reveal" href="#/auteurs?ch=${c.id}"><span class="mono muted">Pour tes références</span><h3>${plural(auteursCh.length, 'auteur')} à connaître</h3><span class="muted">${auteursCh.map(a => a.nom).join(' · ')}</span></a>` :
        `<a class="end-card reveal" href="#/reperes"><span class="mono muted">À maîtriser aussi</span><h3>Les repères</h3><span class="btn ghost" style="align-self:start">Voir <span class="arr">→</span></span></a>`}
    </section>
  </article>${foot()}`;
};

pages.chapitre.init = (id, sec) => {
  const c = byId(id); if (!c) return;
  if (CH.includes(c)) { S.last = c.id + (sec ? '/' + sec : ''); save(); }
  const wrap = $('#sections');

  // mode cours / fiche
  $$('.seg button').forEach(b => b.addEventListener('click', () => {
    S.mode = b.dataset.mode; save();
    $$('.seg button').forEach(x => x.classList.toggle('on', x === b));
    wrap.classList.toggle('fiche', S.mode === 'fiche');
  }));

  // "j'ai compris"
  $$('[data-done]').forEach(btn => btn.addEventListener('click', () => {
    const s = c.sections.find(x => x.id === btn.dataset.done); const k = secKey(c, s);
    S.read[k] = !S.read[k]; if (!S.read[k]) delete S.read[k]; save();
    const on = !!S.read[k];
    btn.classList.toggle('on', on);
    btn.innerHTML = `<span class="box">${on ? '✓' : ''}</span>${on ? 'Compris' : 'J’ai compris cette partie'}`;
    $(`.toc a[data-sec="${s.id}"]`).classList.toggle('done', on);
    const st = chapStats(c);
    $('#toc-pct').textContent = `${st.done}/${st.total}`;
    $('.toc .pbar i').style.width = st.pct + '%';
    if ($('#st-pct')) $('#st-pct').textContent = `${st.pct}% compris`;
    if (on) toast(st.done === st.total ? 'Chapitre terminé. Passe au quiz !' : 'Bien joué ✓');
  }));

  // liens du sommaire
  $$('.toc a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const el = $('#sec-' + a.dataset.sec);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', a.getAttribute('href'));
  }));

  // surlignage de la partie en cours
  const links = $$('.toc a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => {
        const on = l.dataset.sec === en.target.dataset.sec;
        l.classList.toggle('on', on);
        if (on && innerWidth <= 960) l.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      });
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  $$('.sec').forEach(s => io.observe(s));
  cleanup.push(() => io.disconnect());

  if (sec) {
    const el = $('#sec-' + sec);
    if (el) setTimeout(() => el.scrollIntoView({ block: 'start' }), 60);
  }
};
pages.methode = () => pages.chapitre('methode');
pages.methode.init = (sec) => pages.chapitre.init('methode', sec);

/* ---------- RÉVISER (hub mobile) ---------- */
pages.reviser = () => `
  <header class="tool-head wrap"><span class="mono muted">Réviser</span><h1 class="display">Se <em>tester</em></h1><p class="lead">Choisis ton outil. Ce que tu ne sais pas encore revient en priorité.</p></header>
  <section class="wrap">${bento()}</section>${foot()}`;

/* ---------- FLASHCARDS ---------- */
pages.flashcards = (q) => {
  const ds = decks();
  const cur = q.get('deck') || 'tout';
  const onlyNew = q.get('revoir') === '1';
  return `
  <header class="tool-head wrap"><span class="mono muted">Mémoriser</span><h1 class="display"><em>Flash</em>cards</h1><p class="lead">Lis la question, réponds dans ta tête, retourne. Sois honnête : les cartes ratées reviennent plus tard.</p></header>
  <section class="wrap">
    <div class="toolbar">
      <div class="chips">
        <a class="chip ${cur === 'tout' ? 'on' : ''}" href="#/flashcards?deck=tout${onlyNew ? '&revoir=1' : ''}">Tout mélanger</a>
        ${ds.map(d => `<a class="chip ${cur === d.id ? 'on' : ''}" href="#/flashcards?deck=${d.id}${onlyNew ? '&revoir=1' : ''}" ${d.chap ? `style="${tintVars(d.chap)};--c:var(--c-l)"` : ''}>${d.chap ? '<span class="dot"></span>' : ''}${d.nom}</a>`).join('')}
      </div>
      <a class="chip ${onlyNew ? 'on' : ''}" href="#/flashcards?deck=${cur}${onlyNew ? '' : '&revoir=1'}">${onlyNew ? '✓ ' : ''}Seulement à revoir</a>
    </div>
    <div class="fc-wrap" id="fc"></div>
  </section>`;
};
pages.flashcards.init = (q) => {
  const ds = decks();
  const cur = q.get('deck') || 'tout';
  const onlyNew = q.get('revoir') === '1';
  let pool = cur === 'tout' ? ds.flatMap(d => d.cards.map(c => ({ ...c, chap: d.chap }))) : (ds.find(d => d.id === cur) || ds[0]).cards.map(c => ({ ...c, chap: (ds.find(d => d.id === cur) || {}).chap }));
  if (onlyNew) pool = pool.filter(c => !S.known[c.id]);
  let queue = shuffle(pool), i = 0, good = 0, seen = 0;
  const box = $('#fc');

  function draw() {
    if (!pool.length) {
      box.innerHTML = `<div class="done-screen"><div class="big">✓</div><h2>Rien à revoir ici</h2><p class="muted">Toutes ces cartes sont maîtrisées.</p><div class="btns"><a class="btn primary" href="#/flashcards?deck=${cur}">Tout revoir quand même</a></div></div>`; return;
    }
    if (i >= queue.length) {
      const total = pool.length, k = pool.filter(c => S.known[c.id]).length;
      box.innerHTML = `<div class="done-screen"><div class="big">${k}/${total}</div><h2>cartes maîtrisées</h2><p class="muted">${k === total ? 'Parfait. Passe au quiz pour vérifier.' : 'Refais un tour avec seulement les cartes à revoir.'}</p>
        <div class="btns">${k < total ? `<a class="btn primary" href="#/flashcards?deck=${cur}&revoir=1">Revoir les ${total - k} restantes</a>` : `<a class="btn primary" href="#/quiz">Faire un quiz</a>`}<button class="btn ghost" id="fc-again">Recommencer</button></div></div>`;
      $('#fc-again').onclick = () => { queue = shuffle(pool); i = 0; draw(); };
      return;
    }
    const c = queue[i];
    const chapStyle = c.chap ? `${tintVars(c.chap)}` : `--c-l:#141310;--c-d:#EEEAE0`;
    box.innerHTML = `
      <div class="fc-status"><span class="mono">${i + 1} / ${queue.length}</span><span class="mono">${pool.filter(x => S.known[x.id]).length} maîtrisées</span></div>
      <div class="pbar" style="margin-bottom:18px"><i style="width:${(i / queue.length) * 100}%"></i></div>
      <div class="fc-stage tint" style="${chapStyle}">
        <div class="fc-card" id="card" tabindex="0" role="button" aria-label="Retourner la carte">
          <div class="fc-face fc-front"><div class="row"><span class="lbl">${c.src}</span>${S.known[c.id] ? '<span class="lbl" style="color:var(--ok)">✓ Déjà su</span>' : ''}</div><h3>${c.q}</h3><span class="fc-hint">Touche la carte pour voir la réponse</span></div>
          <div class="fc-face fc-back"><span class="lbl">Réponse</span><div class="ans">${c.a}</div><span></span></div>
        </div>
      </div>
      <div class="fc-actions">
        <button class="btn bad" data-r="0">← À revoir</button>
        <button class="btn ghost flipb" data-flip>Retourner</button>
        <button class="btn good" data-r="1">Je savais →</button>
      </div>
      <p class="fc-keys">Espace : retourner · ← à revoir · → je savais</p>`;
    const card = $('#card');
    card.onclick = () => card.classList.toggle('flip');
    $('[data-flip]').onclick = () => card.classList.toggle('flip');
    $$('[data-r]').forEach(b => b.onclick = () => rate(b.dataset.r === '1'));
    // glisser sur mobile
    let x0 = null;
    card.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    card.addEventListener('touchend', e => {
      if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 70) { e.preventDefault(); rate(dx > 0); }
    });
  }
  function rate(ok) {
    const c = queue[i]; if (!c) return;
    const card = $('#card');
    seen++;
    if (ok) { S.known[c.id] = 1; good++; }
    else { delete S.known[c.id]; if (queue.slice(i + 1).indexOf(c) === -1) queue.splice(Math.min(queue.length, i + 4), 0, c); }
    save();
    card.classList.remove('flip'); card.classList.add(ok ? 'out-r' : 'out-l');
    setTimeout(() => { i++; draw(); }, 280);
  }
  const onKey = e => {
    if (!$('#card') || e.target.matches('input')) return;
    if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); $('#card').classList.toggle('flip'); }
    if (e.key === 'ArrowRight') rate(true);
    if (e.key === 'ArrowLeft') rate(false);
  };
  addEventListener('keydown', onKey);
  cleanup.push(() => removeEventListener('keydown', onKey));
  draw();
};

/* ---------- QUIZ ---------- */
pages.quiz = (q) => {
  const ch = q.get('ch');
  if (!ch) return `
    <header class="tool-head wrap"><span class="mono muted">Vérifier</span><h1 class="display"><em>Quiz</em></h1><p class="lead">10 questions tirées au hasard, avec la correction expliquée. Ton meilleur score est gardé.</p></header>
    <section class="wrap"><div class="qz-pick">
      ${CH.map(c => `<button ${tint(c)} data-ch="${c.id}"><span class="mono muted">${c.label} · ${c.quiz.length} questions</span><h3>${c.titre}</h3><span class="mono" style="color:var(--c)">${S.quiz[c.id] != null ? `Meilleur score : ${S.quiz[c.id]}%` : 'Pas encore tenté'}</span></button>`).join('')}
      <button data-ch="tout" style="background:var(--ink);color:var(--bg);border:0"><span class="mono" style="opacity:.6">Tous les chapitres</span><h3><em style="color:inherit">Le grand mélange</em></h3><span class="mono" style="opacity:.6">${S.quiz.tout != null ? `Meilleur score : ${S.quiz.tout}%` : '15 questions'}</span></button>
    </div></section>${foot()}`;
  return `<header class="tool-head wrap"><a class="back mono" href="#/quiz">← Changer de quiz</a></header><section class="wrap"><div class="qz" id="qz"></div></section>`;
};
pages.quiz.init = (q) => {
  $$('.qz-pick [data-ch]').forEach(b => b.onclick = () => { location.hash = `#/quiz?ch=${b.dataset.ch}`; });
  const ch = q.get('ch'); if (!ch) return;
  const chaps = ch === 'tout' ? CH : [byId(ch)].filter(Boolean);
  if (!chaps.length) return;
  const all = chaps.flatMap(c => c.quiz.map(x => ({ ...x, chap: c })));
  const qs = shuffle(all).slice(0, ch === 'tout' ? 15 : 10).map(x => {
    const opts = shuffle(x.c.map((t, k) => ({ t, ok: k === 0 })));
    return { ...x, opts };
  });
  let i = 0; const res = [];
  const box = $('#qz');

  function draw() {
    if (i >= qs.length) return end();
    const x = qs[i];
    box.className = 'qz tint'; box.setAttribute('style', tintVars(x.chap));
    box.innerHTML = `
      <div class="qz-dots">${qs.map((_, k) => `<i class="${k < i ? (res[k] ? 'ok' : 'ko') : k === i ? 'cur' : ''}"></i>`).join('')}</div>
      <p class="mono muted" style="margin-top:22px">Question ${i + 1} / ${qs.length} · ${x.chap.label}</p>
      <h2 class="qz-q">${x.q}</h2>
      <div class="qz-opts">${x.opts.map((o, k) => `<button class="qz-opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span>${o.t}</span></button>`).join('')}</div>
      <div id="fb"></div>`;
    $$('.qz-opt').forEach(b => b.onclick = () => answer(+b.dataset.k));
  }
  function answer(k) {
    const x = qs[i]; if (res[i] !== undefined) return;
    const ok = x.opts[k].ok; res[i] = ok;
    $$('.qz-opt').forEach((b, j) => { b.disabled = true; if (x.opts[j].ok) b.classList.add('ok'); else if (j === k) b.classList.add('ko'); });
    $('#fb').innerHTML = `<div class="qz-fb"><p><b>${ok ? 'Exact.' : 'Raté.'}</b> ${x.e}</p><button class="btn primary" id="nx">${i + 1 < qs.length ? 'Suivante' : 'Voir le score'} <span class="arr">→</span></button></div>`;
    $('#nx').onclick = () => { i++; draw(); };
    $('#nx').focus({ preventScroll: true });
  }
  function end() {
    const score = res.filter(Boolean).length, pct = Math.round(score / qs.length * 100);
    const best = S.quiz[ch]; if (best == null || pct > best) { S.quiz[ch] = pct; save(); }
    const wrong = qs.filter((_, k) => !res[k]);
    box.innerHTML = `<div class="done-screen"><span class="mono muted">Score</span><div class="big">${score}/${qs.length}</div>
      <h2>${pct >= 80 ? 'Excellent. Tu maîtrises.' : pct >= 50 ? 'Pas mal, encore un effort.' : 'Relis la fiche express et retente.'}</h2>
      <p class="muted">${best != null && pct <= best ? `Ton record reste ${best}%` : 'Nouveau record enregistré'}</p>
      ${wrong.length ? `<div class="review"><span class="mono muted">À retenir</span>${wrong.map(w => `<div>${w.q}<br><b>→ ${w.c[0]}</b></div>`).join('')}</div>` : ''}
      <div class="btns"><button class="btn primary" id="again">Rejouer</button>${ch !== 'tout' ? `<a class="btn ghost" href="#/cours/${ch}">Revoir le cours</a>` : ''}</div></div>`;
    $('#again').onclick = () => route();
  }
  const onKey = e => {
    if (!$('.qz-opt') ) return;
    const n = 'abcd1234'.indexOf(e.key.toLowerCase());
    if (n >= 0 && res[i] === undefined) answer(n % 4);
    else if (e.key === 'Enter' && $('#nx')) { e.preventDefault(); $('#nx').click(); }
  };
  addEventListener('keydown', onKey);
  cleanup.push(() => removeEventListener('keydown', onKey));
  draw();
};

/* ---------- CITATIONS ---------- */
function citations() {
  return CH.flatMap(c => c.sections.flatMap(s => s.blocs.filter(b => b.q).map(b => ({ ...b, chap: c, sec: s }))));
}
pages.citations = (q) => {
  const ch = q.get('ch') || 'tout';
  const list = citations().filter(x => ch === 'tout' || x.chap.id === ch);
  return `
  <header class="tool-head wrap"><span class="mono muted">Citer</span><h1 class="display"><em>Citations</em> du cours</h1><p class="lead">Une citation bien placée vaut une référence. Active le mode test pour retrouver qui a dit quoi.</p></header>
  <section class="wrap">
    <div class="toolbar">
      <div class="chips"><a class="chip ${ch === 'tout' ? 'on' : ''}" href="#/citations">Toutes</a>${CH.map(c => `<a class="chip ${ch === c.id ? 'on' : ''}" href="#/citations?ch=${c.id}" style="${tintVars(c)};--c:var(--c-l)"><span class="dot"></span>${c.court}</a>`).join('')}</div>
      <button class="chip" id="hide">Mode test : cacher les auteurs</button>
    </div>
    <div class="cit-grid" id="cits">${list.map(x => `<figure class="cit tint" style="${tintVars(x.chap)}"><blockquote>${x.q}</blockquote><footer><span class="who">${x.src || ''}</span><a class="mono" href="#/cours/${x.chap.id}/${x.sec.id}" style="color:var(--c)">Contexte →</a></footer></figure>`).join('')}</div>
  </section>${foot()}`;
};
pages.citations.init = () => {
  const btn = $('#hide'), grid = $('#cits');
  btn.onclick = () => { const on = grid.classList.toggle('hide-auth'); btn.classList.toggle('on', on); $$('.who.shown').forEach(w => w.classList.remove('shown')); };
  grid.addEventListener('click', e => { const w = e.target.closest('.who'); if (w && grid.classList.contains('hide-auth')) w.classList.add('shown'); });
};

/* ---------- AUTEURS ---------- */
pages.auteurs = (q) => {
  const ch = q.get('ch') || 'tout';
  const list = P.auteurs.filter(a => ch === 'tout' || a.ch.includes(ch));
  return `
  <header class="tool-head wrap"><span class="mono muted">Référencer</span><h1 class="display">Les <em>auteurs</em> étudiés</h1><p class="lead">Pour le « R » d’ADREC : un nom, une œuvre, une thèse. Rien de plus que ce qu’on a vu en cours.</p></header>
  <section class="wrap">
    <div class="toolbar"><div class="chips"><a class="chip ${ch === 'tout' ? 'on' : ''}" href="#/auteurs">Tous</a>${CH.map(c => `<a class="chip ${ch === c.id ? 'on' : ''}" href="#/auteurs?ch=${c.id}" style="${tintVars(c)};--c:var(--c-l)"><span class="dot"></span>${c.court}</a>`).join('')}</div></div>
    <div class="auth-grid">${list.map(a => {
      const c = byId(a.ch[0]);
      return `<article class="auth tint reveal" style="${tintVars(c)}">
        <div class="top"><div><h3>${a.nom}</h3><span class="mono muted">${a.dates}</span></div><span class="ini">${a.nom.split(' ').pop()[0]}</span></div>
        <p class="these">${a.these}</p>
        <p class="oe">${a.oeuvres}</p>
        <div class="tags">${a.ch.map(id => { const x = byId(id); return `<a class="tag tint" style="${tintVars(x)}" href="#/cours/${id}">${x.label}</a>`; }).join('')}</div>
        <blockquote>« ${a.cite} »</blockquote>
      </article>`;
    }).join('')}</div>
  </section>${foot()}`;
};

/* ---------- REPÈRES ---------- */
pages.reperes = () => `
  <header class="tool-head wrap"><span class="mono muted">Distinguer</span><h1 class="display">Les <em>repères</em></h1><p class="lead">Les distinctions conceptuelles du programme. Les utiliser dans une copie, c’est montrer qu’on pense avec précision.</p></header>
  <section class="wrap">
    <div class="toolbar"><input class="search-in" id="rq" type="search" placeholder="Chercher un repère…" aria-label="Chercher un repère"><div class="chips" style="justify-content:flex-end"><button class="chip" id="rt">Mode test : cacher les définitions</button><a class="chip" href="#/flashcards?deck=reperes">En flashcards →</a></div></div>
    <div class="rep-grid" id="rg">${P.reperes.map(r => `<button class="rep" data-s="${esc(norm(r.t + ' ' + r.d))}"><h3>${r.t.split(' / ').join(' <span class="sl">/</span> ')}</h3><p>${r.d}</p></button>`).join('')}</div>
    <p class="empty" id="re" hidden>Aucun repère ne correspond.</p>
  </section>${foot()}`;
pages.reperes.init = () => {
  const g = $('#rg');
  $('#rq').addEventListener('input', e => {
    const v = norm(e.target.value); let n = 0;
    $$('.rep', g).forEach(r => { const ok = r.dataset.s.includes(v); r.hidden = !ok; n += ok; });
    $('#re').hidden = n > 0;
  });
  $('#rt').onclick = () => { const on = g.classList.toggle('test-mode'); $('#rt').classList.toggle('on', on); $$('.rep.shown').forEach(r => r.classList.remove('shown')); };
  g.addEventListener('click', e => { const r = e.target.closest('.rep'); if (r && g.classList.contains('test-mode')) r.classList.toggle('shown'); });
};

/* ---------- PROGRAMME ---------- */
pages.programme = () => {
  const vues = new Map(); CH.forEach(c => (c.notions || []).forEach(n => vues.set(n, c)));
  const etudies = P.auteurs.map(a => a.match);
  return `
  <header class="tool-head wrap"><span class="mono muted">Programme officiel</span><h1 class="display">17 notions, <em>une année</em></h1><p class="lead">En gras : ce qu’on a déjà traité en cours. Le reste s’allumera au fil des chapitres.</p></header>
  <section class="wrap"><div class="persp">${P.programme.perspectives.map(p => `<div class="reveal"><span class="mono muted">Perspective</span><h3>${p.nom}</h3>${p.notions.map(n => { const c = vues.get(n); return `<div class="notion ${c ? 'vu' : ''}"><span>${n}</span>${c ? `<a href="#/cours/${c.id}">${c.label} →</a>` : '<span class="mono">à venir</span>'}</div>`; }).join('')}</div>`).join('')}</div></section>
  <section class="block wrap"><div class="block-head"><h2 class="display">Les <em>auteurs</em> du programme</h2><p>Surlignés : ceux qu’on a étudiés.</p></div>
    <div class="prog-auth">${P.programme.auteurs.map(p => `<div class="reveal"><h3 class="mono muted">${p.periode}</h3><div class="chips">${p.noms.map(n => `<span class="${etudies.some(m => n.includes(m)) ? 'vu' : ''}">${n}</span>`).join('')}</div></div>`).join('')}</div>
  </section>${foot()}`;
};

pages.notfound = () => `<section class="tool-head wrap"><h1 class="display">Page <em>introuvable</em></h1><p class="lead" style="margin:20px 0">Ce lien ne mène nulle part.</p><a class="btn primary" href="#/">Retour à l’accueil</a></section>`;

/* =====================================================================
   ROUTEUR
   ===================================================================== */
let cleanup = [];
function route() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, qs] = raw.split('?');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
  const q = new URLSearchParams(qs || '');
  let html, init, nav = parts[0] || '';

  if (!parts.length) { html = pages.home(); }
  else if (parts[0] === 'cours' && parts[1]) { html = pages.chapitre(parts[1]); init = () => pages.chapitre.init(parts[1], parts[2]); }
  else if (parts[0] === 'methode') { html = pages.methode(); init = () => pages.methode.init(parts[1]); }
  else if (pages[parts[0]] && !['home', 'chapitre', 'notfound'].includes(parts[0])) { html = pages[parts[0]](q); init = pages[parts[0]].init && (() => pages[parts[0]].init(q)); }
  else html = pages.notfound();

  const view = parts.slice(0, 2).join('/');
  if (app.dataset.view === view && (parts[0] === 'cours' || parts[0] === 'methode') && parts[parts[0] === 'cours' ? 2 : 1]) {
    // simple saut vers une partie de la page déjà ouverte
    const el = $('#sec-' + parts[parts[0] === 'cours' ? 2 : 1]);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
  }
  cleanup.forEach(f => f()); cleanup = [];
  app.dataset.view = parts.slice(0, 2).join('/');
  app.innerHTML = html;
  app.style.animation = 'none'; void app.offsetWidth; app.style.animation = '';
  if (!parts[2]) scrollTo(0, 0);
  if (init) init();

  // états de navigation
  const map = { '': 'home', cours: 'cours', methode: 'methode', reperes: 'reperes', flashcards: 'reviser', quiz: 'reviser', citations: 'reviser', auteurs: 'reviser', reviser: 'reviser', programme: 'reperes' };
  $$('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === (map[nav] || '')));

  // titre de l'onglet
  const c = parts[0] === 'cours' && parts[1] ? byId(parts[1]) : null;
  document.title = c ? `${strip(c.titre)} · Philo Terminale` : 'Philo · Terminale — le cours, rien que le cours';

  observeReveal();
  requestAnimationFrame(() => $$('.ring .pr').forEach(r => r.style.strokeDashoffset = r.dataset.off));
}

/* apparitions au défilement */
let rio;
function observeReveal() {
  if (rio) rio.disconnect();
  rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el, k) => { el.style.transitionDelay = `${Math.min(k % 6, 5) * 60}ms`; rio.observe(el); });
}

/* =====================================================================
   RECHERCHE GLOBALE  (Ctrl/Cmd + K  ou  /)
   ===================================================================== */
let INDEX = null;
function buildIndex() {
  const idx = [];
  [...CH, P.methode].forEach(c => {
    const base = CH.includes(c) ? `#/cours/${c.id}` : `#/methode`;
    c.sections.forEach(s => idx.push({ t: strip(s.titre), c: c.court || c.label, txt: strip(s.resume + ' ' + s.blocs.map(block).join(' ')), href: `${base}/${s.id}` }));
  });
  P.reperes.forEach(r => idx.push({ t: r.t, c: 'Repère', txt: strip(r.d), href: '#/reperes' }));
  P.auteurs.forEach(a => idx.push({ t: a.nom, c: 'Auteur', txt: strip(a.these + ' ' + a.oeuvres + ' ' + a.cite), href: `#/auteurs?ch=${a.ch[0]}` }));
  idx.forEach(e => { e.nt = norm(e.t); e.nx = norm(e.txt); });
  return idx;
}
const pal = $('#pal'), pin = $('#pal-in'), pres = $('#pal-res');
let palSel = 0;
function openPal() { INDEX = INDEX || buildIndex(); pal.classList.add('open'); pin.value = ''; search(''); pin.focus(); }
function closePal() { pal.classList.remove('open'); }
function search(v) {
  const terms = norm(v).split(' ').filter(Boolean);
  if (!terms.length) { pres.innerHTML = `<div class="pal-hint">Tape un mot : « cogito », « Spinoza », « légitime », « maïeutique »…</div>`; return; }
  const out = INDEX.map(e => {
    let sc = 0;
    for (const t of terms) { const a = e.nt.includes(t), b = e.nx.includes(t); if (!a && !b) return null; sc += a ? 10 : 1; }
    return { e, sc };
  }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 14);
  if (!out.length) { pres.innerHTML = `<div class="pal-hint">Rien trouvé pour « ${esc(v)} ».</div>`; return; }
  const hi = s => { let r = esc(s); terms.forEach(t => { r = r.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>'); }); return r; };
  pres.innerHTML = out.map(({ e }, k) => {
    const nx = e.nx, p = Math.max(0, nx.indexOf(terms[0]) - 50);
    const snip = (p ? '…' : '') + e.txt.slice(p, p + 150) + '…';
    return `<a href="${e.href}" class="${k === 0 ? 'on' : ''}"><span class="c mono">${esc(e.c)}</span><span class="t">${hi(e.t)}</span><span class="s">${hi(snip)}</span></a>`;
  }).join('');
  palSel = 0;
}
pin.addEventListener('input', () => search(pin.value));
pin.addEventListener('keydown', e => {
  const items = $$('a', pres); if (!items.length) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault(); palSel = (palSel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items.forEach((a, k) => a.classList.toggle('on', k === palSel)); items[palSel].scrollIntoView({ block: 'nearest' });
  }
  if (e.key === 'Enter') { e.preventDefault(); items[palSel].click(); }
});
pres.addEventListener('click', e => { if (e.target.closest('a')) closePal(); });
$('.pal-bg').addEventListener('click', closePal);
$$('[data-search]').forEach(b => b.addEventListener('click', openPal));
addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.classList.contains('open') ? closePal() : openPal(); }
  else if (e.key === '/' && !e.target.matches('input, textarea')) { e.preventDefault(); openPal(); }
  else if (e.key === 'Escape') closePal();
});

addEventListener('hashchange', route);
route();
})();
