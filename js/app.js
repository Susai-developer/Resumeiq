/* ==========================================================
   AROKIYAM - APP (js/app.js)
   Hash router + page views + player UI.
   Routes: #/home  #/search  #/library  #/playlists
           #/liked  #/playlist/<id>  #/recent
   ========================================================== */
(function () {
  'use strict';
  const S = window.Store, P = window.Player, A = window.ArokiyamAuth;
  if (!A.currentUser()) return;   // login.html redirect already in progress
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (t) => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (sec) => { sec = Math.max(0, Math.floor(sec || 0)); return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); };
  const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');

  /* ---------- icons ---------- */
  const path = (d, cls) => `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
  const D = {
    play: 'M8 5v14l11-7z', pause: 'M6 5h4v14H6zM14 5h4v14h-4z',
    prev: 'M6 6h2v12H6zM9.5 12L18 6v12z', next: 'M16 6h2v12h-2zM6 18V6l8.5 6z',
    shuffle: 'M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z',
    repeat: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    heart: 'M16.500 3c-1.740 0-3.410.81-4.500 2.090C10.910 3.810 9.240 3 7.500 3 4.420 3 2 5.420 2 8.500c0 3.780 3.400 6.860 8.550 11.540L12 21.350l1.450-1.320C18.600 15.360 22 12.280 22 8.500 22 5.420 19.580 3 16.500 3zm-4.400 15.550l-.1.1-.1-.1C7.140 14.240 4 11.390 4 8.500 4 6.500 5.500 5 7.500 5c1.540 0 3.040.99 3.570 2.360h1.870C13.460 5.990 14.960 5 16.500 5c2 0 3.500 1.500 3.500 3.500 0 2.890-3.140 5.740-7.900 10.050z',
    heartOn: 'M12 21.350l-1.450-1.320C5.400 15.360 2 12.280 2 8.500 2 5.420 4.420 3 7.500 3c1.740 0 3.410.81 4.500 2.090C13.090 3.810 14.760 3 16.500 3 19.580 3 22 5.420 22 8.500c0 3.780-3.400 6.860-8.550 11.540L12 21.350z',
    dots: 'M12 8a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z',
    home: 'M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3z',
    search: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    library: 'M4 4h2v16H4zM8 4h2v16H8zM12.500 5.500l1.900-.5 4.100 15-1.900.5z',
    list: 'M3 6h13v2H3zm0 5h13v2H3zm0 5h9v2H3zm14-5v6.200A2.800 2.800 0 1 0 19 19V13h3v-2z',
    playlists: 'M4 6h12v2H4zm0 4h12v2H4zm0 4h8v2H4zm12 .5V20a3 3 0 1 0 2 2.800V16h3v-2h-5z',
    vol: 'M3 9v6h4l5 5V4L7 9H3zm13.500 3A4.500 4.500 0 0 0 14 7.970v8.050c1.480-.73 2.500-2.250 2.500-4.020z',
    mute: 'M16.500 12A4.500 4.500 0 0 0 14 7.970v2.210l2.450 2.450c.03-.2.050-.41.050-.63zM4.270 3L3 4.270 7.730 9H3v6h4l5 5v-6.730l4.250 4.250c-.67.520-1.420.930-2.250 1.180v2.060a8.990 8.990 0 0 0 3.690-1.810L19.730 21 21 19.730l-9-9L4.270 3zM12 4L9.910 6.090 12 8.180V4z',
    down: 'M7.400 8.600L12 13.200l4.600-4.600L18 10l-6 6-6-6z',
    menu: 'M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z',
    bell: 'M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6v-5c0-3.070-1.630-5.640-4.500-6.320V4a1.500 1.500 0 00-3 0v.68C7.630 5.360 6 7.920 6 11v5l-2 2v1h16v-1l-2-2z',
    lyrics: 'M4 4h16v12H7l-3 3V4zm3 4v2h10V8H7zm0 3v2h7v-2H7z',
    out: 'M10 17l1.400-1.400L8.800 13H20v-2H8.800l2.600-2.600L10 7l-5 5 5 5zM4 5h8V3H4a2 2 0 00-2 2v14a2 2 0 002 2h8v-2H4V5z',
    shuffleSm: 'M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z',
    plus: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z', back: 'M15.400 16.600L10.800 12l4.600-4.600L14 6l-6 6 6 6z'
  };
  const I = (k, cls) => path(D[k], cls);

  /* ---------- toast ---------- */
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400); }

  /* ---------- shared fragments ---------- */
  const CAT_STYLE = {
    velankanni: ['🙏', 'linear-gradient(135deg,#1d4ed8,#38bdf8)'], jesus: ['✝️', 'linear-gradient(135deg,#b91c1c,#f97316)'],
    worship: ['🙌', 'linear-gradient(135deg,#6d28d9,#8b5cf6)'], prayer: ['🕯️', 'linear-gradient(135deg,#ea580c,#f59e0b)'],
    christmas: ['🎄', 'linear-gradient(135deg,#15803d,#4ade80)'], easter: ['🌅', 'linear-gradient(135deg,#d97706,#fb7185)'],
    peaceful: ['🕊️', 'linear-gradient(135deg,#0284c7,#22d3ee)'], hits: ['🎵', 'linear-gradient(135deg,#2563eb,#6366f1)'],
    traditional: ['⛪', 'linear-gradient(135deg,#92400e,#d6a35c)'], other: ['🎶', 'linear-gradient(135deg,#0e7490,#06b6d4)']
  };
  const songCount = (p) => plural(p.songs.length, 'song');
  const coverOf = (s) => s.art;

  function playlistCard(p) {
    return `<article class="pcard" data-pl="${p.id}">
      <a class="cv" href="#/playlist/${p.id}" aria-label="Open ${esc(p.name)}"><img src="${p.cover}" alt="" loading="lazy">
        <button class="pbtn" data-act="play-pl" data-id="${p.id}" aria-label="Play ${esc(p.name)}">${I('play')}</button></a>
      <h3 title="${esc(p.name)}">${esc(p.name)}</h3>
      <div class="meta">${songCount(p)}</div>
      <div class="acts"><button class="chip p" data-act="play-pl" data-id="${p.id}">${I('play')}Play All</button><button class="chip" data-act="shuffle-pl" data-id="${p.id}">${I('shuffleSm')}Shuffle</button></div>
    </article>`;
  }
  function tile(p, sub) {
    return `<a class="tile" href="#/playlist/${p.id}"><img src="${p.cover}" alt="" loading="lazy"><div class="t"><b>${esc(p.name)}</b><small>${esc(sub || songCount(p))}</small></div>
      <button class="pbtn" data-act="play-pl" data-id="${p.id}" aria-label="Play ${esc(p.name)}">${I('play')}</button></a>`;
  }
  function songRow(s, ctx, i) {
    const playing = P.current && P.current.id === s.id;
    return `<div class="song${playing ? ' playing' : ''}" data-song="${s.id}" data-ctx="${esc(ctx)}" tabindex="0">
      <div class="no"><span>${i + 1}</span>${I('play')}<div class="eq"><i></i><i></i><i></i></div></div>
      <img src="${coverOf(s)}" alt="" loading="lazy">
      <div class="tx"><b>${esc(s.title)}</b><small class="ta">${esc(s.tamilTitle || '')}${s.tamilTitle ? ' · ' : ''}${esc(s.artist)}</small></div>
      <span class="dur">${s.duration ? fmt(s.duration) : ''}</span>
      <button class="lk${S.isLiked(s.id) ? ' on' : ''}" data-act="like" data-id="${s.id}" aria-label="Like">${I(S.isLiked(s.id) ? 'heartOn' : 'heart')}</button>
      <button class="lk" data-act="more" data-id="${s.id}" aria-label="More options">${I('dots')}</button>
    </div>`;
  }
  const miniRow = (s, ctx) => `<div class="mini-row" data-song="${s.id}" data-ctx="${esc(ctx)}" tabindex="0"><img src="${coverOf(s)}" alt="" loading="lazy"><div class="tx"><b class="ta">${esc(s.tamilTitle || s.title)}</b><small>${esc(s.artist)}</small></div><button class="lk" data-act="more" data-id="${s.id}" aria-label="More options">${I('dots')}</button></div>`;

  /* contexts decide which songs form the queue when you press play */
  function ctxIds(ctx) {
    if (ctx === 'liked') return S.likedIds();
    if (ctx === 'recent') return S.recentIds();
    if (ctx.startsWith('pl:')) { const p = S.playlist(ctx.slice(3)); return p ? p.songs : []; }
    if (ctx.startsWith('ids:')) return ctx.slice(4).split(',').map(Number).filter(Boolean);
    if (ctx.startsWith('one:')) return [Number(ctx.slice(4))];
    return [];
  }
  const idsCtx = (ids) => 'ids:' + ids.join(',');

  const totalDur = (p) => p.songs.reduce((a, id) => a + (S.song(id).duration || 0), 0);
  const durText = (sec) => { const m = Math.round(sec / 60); return m >= 60 ? Math.floor(m / 60) + ' hr ' + (m % 60) + ' min' : m + ' min'; };

  /* ---------- views ---------- */
  const views = {};

  const BANNERS = [
    { t: 'Velankanni<br>Matha Special', s: 'Tamil devotional songs for every moment', pl: 'velankanni', img: 'assets/covers/banner-art.jpg', wide: true },
    { t: 'Jesus Songs', s: 'Love, grace and salvation in song', pl: 'jesus', img: 'assets/covers/jesus.jpg' },
    { t: 'Praise &amp; Worship', s: 'Lift your hands and praise Him', pl: 'worship', img: 'assets/covers/worship.jpg' },
    { t: 'Peaceful<br>Devotional', s: 'Find your peace in His presence', pl: 'peaceful', img: 'assets/covers/peaceful.jpg' }
  ];
  let heroTimer;

  function popularSongs(n) {
    return S.songs.slice().sort((a, b) => S.playlistsOf(b.id).length - S.playlistsOf(a.id).length || a.id - b.id).slice(0, n);
  }
  function recommendedSongs(n, skip) {
    const d = new Date(); let seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const pool = S.songs.filter(s => !skip.has(s.id) && s.id !== 66); const a = pool.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.slice(0, n);
  }

  views.home = () => {
    const h = new Date().getHours(); const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    const featured = ['hits', 'prayer', 'velankanni', 'worship', 'peaceful'].map(S.playlist);
    const taglines = { hits: "Feel the Lord's Love", prayer: 'Talk to God', velankanni: 'Our Blessed Mother', worship: 'Praise His Name', peaceful: 'Find Your Peace' };
    const recent = S.recentIds().slice(0, 6).map(S.song);
    const pop = popularSongs(8); const rec = recommendedSongs(6, new Set(pop.map(s => s.id)));
    return `
      <h1 class="greet">${greet} ${I('heart')}</h1>
      <section class="hero" id="hero" aria-label="Featured">
        ${BANNERS.map((b, i) => `<div class="slide${i ? '' : ' on'}${b.wide ? ' wide' : ''}" style="background-image:url('${b.img}')"><div><h1>${b.t}</h1><p>${b.s}</p><button class="btn btn-primary" data-act="play-pl" data-id="${b.pl}">${I('play')}Play Now</button></div></div>`).join('')}
        <div class="dots">${BANNERS.map((_, i) => `<button data-dot="${i}" class="${i ? '' : 'on'}" aria-label="Slide ${i + 1}"></button>`).join('')}</div>
      </section>

      <section class="sec"><div class="sec-h"><h2>Made for You</h2><a class="see" href="#/playlists">See all →</a></div>
        <div class="tiles">${featured.map(p => tile(p, taglines[p.id])).join('')}</div></section>

      <section class="sec"><div class="sec-h"><h2>Recently Played</h2>${recent.length ? '<a class="see" href="#/recent">See all →</a>' : ''}</div>
        ${recent.length ? `<div class="recent">${recent.map(s => miniRow(s, 'recent')).join('')}</div>` : '<div class="empty">Songs you play will appear here.</div>'}</section>

      <section class="sec"><div class="sec-h"><h2>Featured Playlists</h2><a class="see" href="#/playlists">See all →</a></div>
        <div class="row-scroll">${S.playlists.map(playlistCard).join('')}</div></section>

      <section class="sec"><div class="sec-h"><h2>Browse Categories</h2></div>
        <div class="cats">${S.playlists.map(p => { const c = CAT_STYLE[p.id] || ['🎵', 'linear-gradient(135deg,#2563eb,#38bdf8)']; return `<a class="cat" href="#/playlist/${p.id}" style="background:${c[1]}"><span class="g">${c[0]}</span><span class="l">${esc(p.name)}<small>${songCount(p)}</small></span><span class="go">›</span></a>`; }).join('')}</div></section>

      <section class="sec"><div class="sec-h"><h2>Popular Songs</h2><a class="see" href="#/playlist/hits">See all →</a></div>
        <div class="songs two" data-list>${pop.map((s, i) => songRow(s, idsCtx(pop.map(x => x.id)), i)).join('')}</div></section>

      <section class="sec"><div class="sec-h"><h2>Recommended Songs</h2><a class="see" href="#/playlists">Browse playlists →</a></div>
        <div class="songs two" data-list>${rec.map((s, i) => songRow(s, idsCtx(rec.map(x => x.id)), i)).join('')}</div></section>`;
  };

  views.playlists = () => `
    <div class="pagehead"><h1>Playlists</h1></div><p style="color:var(--muted);margin-bottom:18px">Every collection of AROKIYAM, each with its own songs.</p>
    <div class="grid">${S.playlists.map(playlistCard).join('')}</div>`;

  views.library = () => {
    const liked = S.likedIds().length; const recent = S.recentIds().slice(0, 6).map(S.song);
    return `<div class="pagehead"><h1>Your Library</h1></div>
      <div class="lib-list"><a class="lib-row" href="#/liked"><div class="lh">${I('heartOn')}</div><div class="tx"><b>Liked Songs</b><small>Playlist · ${plural(liked, 'song')}</small></div></a>
      ${S.playlists.map(p => `<a class="lib-row" href="#/playlist/${p.id}"><img src="${p.cover}" alt="" loading="lazy"><div class="tx"><b>${esc(p.name)}</b><small>Playlist · ${songCount(p)}</small></div></a>`).join('')}</div>
      ${recent.length ? `<section class="sec"><div class="sec-h"><h2>Recently Played</h2><a class="see" href="#/recent">See all →</a></div><div class="recent">${recent.map(s => miniRow(s, 'recent')).join('')}</div></section>` : ''}`;
  };

  views.recent = () => {
    const ids = S.recentIds();
    return `<div class="pagehead"><a class="icon-btn" href="#/home" aria-label="Back">${I('back')}</a><h1>Recently Played</h1></div>` +
      (ids.length ? `<div class="songs" data-list>${ids.map((id, i) => songRow(S.song(id), 'recent', i)).join('')}</div>` : '<div class="empty">Nothing played yet.</div>');
  };

  views.liked = () => {
    const ids = S.likedIds();
    return `<div class="likedhead"><div class="heart">${I('heartOn')}</div><h1>Your Liked Songs</h1><p>${plural(ids.length, 'song')}</p>
      ${ids.length ? `<div class="actions"><button class="btn btn-primary" data-act="shuffle-liked">${I('shuffleSm')}Shuffle Play</button><button class="btn btn-ghost" data-act="play-liked">${I('play')}Play</button></div>` : ''}</div>` +
      (ids.length ? `<div class="songs" data-list>${ids.map((id, i) => songRow(S.song(id), 'liked', i)).join('')}</div>`
        : `<div class="empty">You haven't liked any songs yet.<br>Tap the heart on a song to save it here.</div>`);
  };

  views.playlist = (id) => {
    const p = S.playlist(id);
    if (!p) return `<div class="noresult"><b>Playlist not found</b><a class="see" href="#/playlists">Browse playlists</a></div>`;
    return `<a class="back" href="#/playlists">${I('back')}Playlists</a>
      <div class="ph"><img class="cover" src="${p.cover}" alt=""><div><small>Playlist</small><h1>${esc(p.name)}</h1><div class="tam ta">${esc(p.tamilName || '')}</div><p>${esc(p.description)}</p>
        <div class="st">AROKIYAM · ${plural(p.songs.length, 'song')}${totalDur(p) ? ' · ' + durText(totalDur(p)) : ''}</div>
        <div class="actions"><button class="btn btn-primary" data-act="play-pl" data-id="${p.id}">${I('play')}Play All</button><button class="btn btn-ghost" data-act="shuffle-pl" data-id="${p.id}">${I('shuffleSm')}Shuffle</button></div></div></div>
      <div class="songs" data-list>${p.songs.map((sid, i) => songRow(S.song(sid), 'pl:' + p.id, i)).join('')}</div>`;
  };

  /* search */
  let searchQuery = '';
  const norm = (t) => String(t || '').toLowerCase().normalize('NFC');
  function searchAll(q) {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    const hit = (hay) => terms.every(t => hay.includes(t));
    const pls = S.playlists.filter(p => hit(norm([p.name, p.tamilName, p.description, p.id].join(' '))));
    const songs = S.songs.filter(s => hit(norm([s.title, s.tamilTitle, s.artist, s.album, S.playlistsOf(s.id).map(p => p.name + ' ' + p.tamilName).join(' ')].join(' '))));
    return { pls, songs };
  }
  views.search = () => `
    <label class="sbox view-search"><span>${I('search')}</span><input id="viewInput" type="search" placeholder="Search songs, albums…" autocomplete="off" value="${esc(searchQuery)}" aria-label="Search"></label>
    <div id="searchBody"></div>`;
  function renderSearch() {
    const body = $('#searchBody'); if (!body) return;
    const q = searchQuery.trim();
    if (!q) {
      body.innerHTML = `<section><div class="sec-h"><h2>Popular Searches</h2></div><div class="chips">${['Velankanni', 'Tamil Christian', 'Worship', 'Praise Songs', 'Jesus Songs', 'Peace', 'Prayer', 'Christmas'].map(c => `<button data-chip="${c}">${c}</button>`).join('')}</div></section>
        <section class="sec"><div class="sec-h"><h2>Browse All</h2></div><div class="cats">${S.playlists.map(p => { const c = CAT_STYLE[p.id] || ['🎵', '#2563eb']; return `<a class="cat" href="#/playlist/${p.id}" style="background:${c[1]}"><span class="g">${c[0]}</span><span class="l">${esc(p.name)}<small>${songCount(p)}</small></span><span class="go">›</span></a>`; }).join('')}</div></section>`;
      return;
    }
    const r = searchAll(q);
    if (!r.pls.length && !r.songs.length) { body.innerHTML = `<div class="noresult"><b>No results for “${esc(q)}”</b>Try a different spelling, a Tamil title, an artist or a category.</div>`; return; }
    const ids = r.songs.map(s => s.id);
    body.innerHTML = (r.pls.length ? `<section><div class="sec-h"><h2>Playlists</h2></div><div class="grid">${r.pls.map(playlistCard).join('')}</div></section>` : '') +
      (r.songs.length ? `<section class="sec"><div class="sec-h"><h2>Songs</h2><span style="color:var(--muted)">${plural(r.songs.length, 'result')}</span></div><div class="songs" data-list>${r.songs.map((s, i) => songRow(s, idsCtx(ids), i)).join('')}</div></section>` : '');
  }
  function setSearch(q, from) {
    searchQuery = q;
    if (from !== 'top') $('#topInput').value = q;
    const vi = $('#viewInput'); if (vi && from !== 'view') vi.value = q;
    if (currentRoute().name !== 'search') { location.hash = '#/search'; return; }
    renderSearch();
  }

  /* ---------- router ---------- */
  function currentRoute() {
    const h = (location.hash || '#/home').replace(/^#\/?/, ''); const [name, arg] = h.split('/');
    return { name: views[name] ? name : 'home', arg: arg ? decodeURIComponent(arg) : '' };
  }
  const NAV = [['home', 'Home', 'home'], ['search', 'Search', 'search'], ['library', 'Your Library', 'library'], ['playlists', 'Playlists', 'playlists'], ['liked', 'Liked Songs', 'heartOn']];
  const MNAV = [['home', 'Home', 'home'], ['search', 'Search', 'search'], ['liked', 'Liked', 'heartOn'], ['library', 'Library', 'library']];
  function renderNav() {
    $('#sideNav').innerHTML = NAV.map(n => `<a href="#/${n[0]}" data-nav="${n[0]}">${I(n[2])}<span>${n[1]}</span></a>`).join('');
    $('#bottomNav').innerHTML = MNAV.map(n => `<a href="#/${n[0]}" data-nav="${n[0]}">${I(n[2])}<span>${n[1]}</span></a>`).join('');
  }
  function route(keepScroll) {
    const r = currentRoute(); clearInterval(heroTimer);
    const view = $('#view');
    view.innerHTML = views[r.name](r.arg);
    view.classList.remove('view-enter'); void view.offsetWidth; view.classList.add('view-enter');
    const navKey = r.name === 'playlist' ? 'playlists' : r.name === 'recent' ? 'library' : r.name;
    $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === navKey));
    if (!keepScroll) $('#main').scrollTo({ top: 0, behavior: 'instant' });
    closeDrawer();
    if (r.name === 'home') startHero();
    if (r.name === 'search') {
      renderSearch(); const vi = $('#viewInput');
      vi.addEventListener('input', () => setSearch(vi.value, 'view'));
      if (matchMedia('(min-width:901px)').matches) $('#topInput').focus(); else if (!searchQuery) setTimeout(() => vi.focus({ preventScroll: true }), 50);
    }
  }
  function startHero() {
    const slides = $$('.slide'), dots = $$('[data-dot]'); let n = 0;
    const go = (i) => { n = i; slides.forEach((s, k) => s.classList.toggle('on', k === i)); dots.forEach((d, k) => d.classList.toggle('on', k === i)); };
    dots.forEach(d => d.addEventListener('click', () => { go(+d.dataset.dot); }));
    heroTimer = setInterval(() => { if (!document.hidden) go((n + 1) % slides.length); }, 6000);
  }

  /* ---------- refresh helpers (no full re-render, keeps scroll) ---------- */
  function refreshSongRows() {
    const cur = P.current && P.current.id;
    $$('.song').forEach(el => el.classList.toggle('playing', +el.dataset.song === cur));
    $$('[data-act="like"]').forEach(b => {
      const on = S.isLiked(+b.dataset.id); b.classList.toggle('on', on); b.innerHTML = I(on ? 'heartOn' : 'heart');
    });
  }

  /* ---------- global click handling ---------- */
  document.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]');
    if (act) {
      const a = act.dataset.act, id = act.dataset.id;
      if (act.closest('a')) e.preventDefault();
      e.stopPropagation();
      if (a === 'play-pl') { const p = S.playlist(id); P.playQueue(p.songs, p.songs[0], { shuffle: false }); }
      else if (a === 'shuffle-pl') { P.playQueue(S.playlist(id).songs, null, { shuffle: true }); toast('Shuffling ' + S.playlist(id).name); }
      else if (a === 'play-liked') P.playQueue(S.likedIds(), null, { shuffle: false });
      else if (a === 'shuffle-liked') P.playQueue(S.likedIds(), null, { shuffle: true });
      else if (a === 'like') likeSong(+id);
      else if (a === 'more') openMenu(+id, act);
      return;
    }
    const chip = e.target.closest('[data-chip]'); if (chip) { setSearch(chip.dataset.chip); return; }
    const row = e.target.closest('[data-song]');
    if (row) {
      const ctx = row.dataset.ctx || ('one:' + row.dataset.song); const sid = +row.dataset.song;
      const ids = ctxIds(ctx);
      if (P.current && P.current.id === sid && ids.length) { P.toggle(); return; }
      P.playQueue(ids.length ? ids : [sid], sid);
    }
  });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter') && e.target.matches('[data-song]')) e.target.click();
    if (e.code === 'Space' && !e.target.closest('input,textarea,button,a,[contenteditable]')) { e.preventDefault(); P.toggle(); }
    if (e.key === 'Escape') { closeMenu(); closeDrawer(); if ($('#np').classList.contains('open')) toggleNP(false); }
  });

  function likeSong(id) {
    const on = S.toggleLike(id);
    refreshSongRows(); syncPlayerUI();
    if (currentRoute().name === 'liked') {
      if (!on) { const row = $(`.song[data-song="${id}"]`); if (row) row.remove(); const n = S.likedIds().length; $('.likedhead p').textContent = plural(n, 'song'); if (!n) route(true); }
    }
    toast(on ? 'Added to Liked Songs' : 'Removed from Liked Songs');
  }

  /* ---------- three-dot menu ---------- */
  function openMenu(id, anchor) {
    const m = $('#menu'), liked = S.isLiked(id);
    m.innerHTML = `<button data-m="like">${I(liked ? 'heartOn' : 'heart')}${liked ? 'Remove from Liked Songs' : 'Add to Liked Songs'}</button>
      <button data-m="next">${I('plus')}Play next</button><button data-m="queue">${I('list')}Add to queue</button>`;
    m.dataset.id = id; m.classList.add('open'); $('#menuScrim').classList.add('open');
    if (matchMedia('(min-width:901px)').matches) {
      const r = anchor.getBoundingClientRect(); const mw = 230, mh = 150;
      m.style.left = Math.max(8, Math.min(innerWidth - mw - 8, r.right - mw)) + 'px';
      m.style.top = Math.max(8, Math.min(innerHeight - mh - 8, r.bottom + 4)) + 'px';
    }
  }
  function closeMenu() { $('#menu').classList.remove('open'); $('#menuScrim').classList.remove('open'); }
  $('#menuScrim').addEventListener('click', closeMenu);
  $('#menu').addEventListener('click', (e) => {
    const b = e.target.closest('[data-m]'); if (!b) return; const id = +$('#menu').dataset.id;
    if (b.dataset.m === 'like') likeSong(id);
    if (b.dataset.m === 'next') { P.playNext(id); toast('Will play next'); }
    if (b.dataset.m === 'queue') { P.addToQueue(id); toast('Added to queue'); }
    closeMenu();
  });
  $('#main').addEventListener('scroll', closeMenu, { passive: true });

  /* ---------- chrome: static icons + drawer ---------- */
  function closeDrawer() { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('open'); }
  function initChrome() {
    renderNav();
    $('#menuBtn').innerHTML = I('menu'); $('#bellBtn').innerHTML = I('bell'); $('#topSearchIc').innerHTML = I('search');
    $('#logoutBtn').innerHTML = I('out') + 'Log out';
    const u = A.currentUser(); $('#avatarBtn').textContent = (u.name || '?').trim().charAt(0).toUpperCase(); $('#avatarBtn').title = u.name + ' · ' + u.email;
    $('#menuBtn').addEventListener('click', () => { $('#sidebar').classList.add('open'); $('#scrim').classList.add('open'); });
    $('#scrim').addEventListener('click', closeDrawer);
    $('#bellBtn').addEventListener('click', () => toast('No new notifications'));
    $('#avatarBtn').addEventListener('click', () => toast('Signed in as ' + u.name));
    $('#logoutBtn').addEventListener('click', () => { A.logout(); location.replace('login.html'); });
    const ti = $('#topInput'); ti.addEventListener('input', () => setSearch(ti.value, 'top'));
    ti.addEventListener('focus', () => { if (currentRoute().name !== 'search') { location.hash = '#/search'; } });
  }

  /* ---------- player UI ---------- */
  const fillRange = (el, pct) => el.style.setProperty('--p', pct + '%');
  function syncPlayerUI() {
    const s = P.current, playing = P.playing;
    const ph = 'assets/arokiyam_mark.svg';
    $('#pCover').src = s ? s.art : ph; $('#pTitle').textContent = s ? s.title : 'Choose a song'; $('#pArtist').textContent = s ? s.artist : 'AROKIYAM · Praise Him Always';
    $('#npArt').src = s ? s.art : ph; $('#npTitle').textContent = s ? s.title : 'Nothing playing'; $('#npArtist').textContent = s ? (s.tamilTitle ? s.tamilTitle + ' · ' : '') + s.artist : '';
    const liked = s && S.isLiked(s.id);
    ['pLike', 'npLike'].forEach(id => { const b = $('#' + id); b.classList.toggle('on', !!liked); b.innerHTML = I(liked ? 'heartOn' : 'heart'); b.disabled = !s; });
    const pi = I(playing ? 'pause' : 'play');
    ['bPlay', 'mPlay', 'npPlay'].forEach(id => { const b = $('#' + id); b.innerHTML = pi; b.setAttribute('aria-label', playing ? 'Pause' : 'Play'); });
    ['bShuffle', 'npShuffle'].forEach(id => { const b = $('#' + id); b.innerHTML = I('shuffle'); b.classList.toggle('off', !P.shuffle); b.setAttribute('aria-pressed', P.shuffle); });
    ['bRepeat', 'npRepeat'].forEach(id => { const b = $('#' + id); b.innerHTML = I('repeat'); b.classList.toggle('off', P.repeat === 'off'); b.classList.toggle('one', P.repeat === 'one'); b.title = 'Repeat: ' + P.repeat; });
    const v = P.volume; $('#bVol').innerHTML = I(v === 0 ? 'mute' : 'vol'); $('#vol').value = Math.round(v * 100); fillRange($('#vol'), Math.round(v * 100));
    document.title = s && playing ? s.title + ' · AROKIYAM' : 'AROKIYAM - Tamil Christian Music';
    refreshSongRows();
  }
  function syncTime() {
    const d = P.duration, t = P.time, pct = d ? Math.min(100, t / d * 100) : 0;
    $('#tCur').textContent = fmt(t); $('#tDur').textContent = fmt(d); $('#npCur').textContent = fmt(t); $('#npDur').textContent = fmt(d);
    if (!dragging) { $('#seek').value = pct * 10; $('#npSeek').value = pct * 10; }
    fillRange($('#seek'), pct); fillRange($('#npSeek'), pct); $('#mProg').style.setProperty('--p', pct + '%');
    highlightLyric(t);
  }
  let dragging = false;
  function bindSeek(el) {
    el.addEventListener('input', () => { dragging = true; const pct = el.value / 10; fillRange(el, pct); $('#tCur').textContent = fmt(P.duration * pct / 100); $('#npCur').textContent = fmt(P.duration * pct / 100); });
    el.addEventListener('change', () => { P.seekTo(P.duration * el.value / 1000); dragging = false; });
  }

  /* lyrics + queue */
  let lyricEls = [];
  function renderLyrics() {
    const s = P.current, box = $('#lyrics');
    if (!s || !s.lyrics || !s.lyrics.length) { box.innerHTML = '<p class="on" style="cursor:default">Lyrics not available for this song yet.</p>'; lyricEls = []; return; }
    box.innerHTML = s.lyrics.map((l, i) => `<p data-t="${l.time}" class="ta">${esc(l.text)}</p>`).join(''); lyricEls = $$('p', box);
  }
  let lastLy = -1;
  function highlightLyric(t) {
    const s = P.current; if (!s || !lyricEls.length) return;
    let k = -1; for (let i = 0; i < s.lyrics.length; i++) if (s.lyrics[i].time <= t) k = i;
    if (k === lastLy) return; lastLy = k;
    lyricEls.forEach((el, i) => el.classList.toggle('on', i === k));
    if (k >= 0 && $('.tab[data-tab="lyrics"]').classList.contains('on')) lyricEls[k].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  $('#lyrics').addEventListener('click', (e) => { const p = e.target.closest('p[data-t]'); if (p) P.seekTo(+p.dataset.t); });

  function renderQueue() {
    const q = P.queue, i = P.index; const box = $('#queueTab');
    if (i < 0) { box.innerHTML = '<div class="empty" style="margin-top:20px">Your queue is empty. Play a song to begin.</div>'; return; }
    const row = (id, k, now) => { const s = S.song(id); return `<div class="q-row${now ? ' now' : ''}" data-q="${k}"><img src="${s.art}" alt=""><div class="tx"><b>${esc(s.title)}</b><small>${esc(s.artist)}</small></div></div>`; };
    const next = q.slice(i + 1);
    box.innerHTML = `<div class="q-h">Now playing</div>${row(q[i], i, true)}<div class="q-h">Next up · ${next.length}</div>` + (next.length ? next.map((id, k) => row(id, i + 1 + k)).join('') : '<div class="empty">No more songs in the queue.</div>');
  }
  $('#queueTab').addEventListener('click', (e) => { const r = e.target.closest('[data-q]'); if (r) P.jump(+r.dataset.q); });

  /* now playing panel */
  function setTab(name) {
    $$('#npTabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === name));
    $$('.np .tab').forEach(t => t.classList.toggle('on', t.dataset.tab === name));
    if (name === 'lyrics') { lastLy = -1; highlightLyric(P.time); }
  }
  function toggleNP(open, tab) {
    const np = $('#np'); const isOpen = open === undefined ? !np.classList.contains('open') : open;
    np.classList.toggle('open', isOpen); np.setAttribute('aria-hidden', !isOpen); document.body.classList.toggle('np-open', isOpen);
    const desktop = matchMedia('(min-width:901px)').matches;
    if (isOpen) setTab(tab || (desktop ? 'lyrics' : 'player'));
    $('#bLyrics').classList.toggle('on', isOpen && $('.tab[data-tab="lyrics"]').classList.contains('on'));
    $('#bQueue').classList.toggle('on', isOpen && $('.tab[data-tab="queue"]').classList.contains('on'));
  }

  function initPlayerUI() {
    $('#bLyrics').innerHTML = I('lyrics'); $('#bQueue').innerHTML = I('list');
    $('#mPrev').innerHTML = I('prev'); $('#mNext').innerHTML = I('next'); $('#bPrev').innerHTML = I('prev'); $('#bNext').innerHTML = I('next'); $('#npPrev').innerHTML = I('prev'); $('#npNext').innerHTML = I('next');
    $('#npClose').innerHTML = I('down'); $('#npMore').innerHTML = I('dots');
    ['bPlay', 'mPlay', 'npPlay'].forEach(id => $('#' + id).addEventListener('click', (e) => { e.stopPropagation(); P.toggle() || toast('Choose a song to play'); }));
    ['bNext', 'mNext', 'npNext'].forEach(id => $('#' + id).addEventListener('click', (e) => { e.stopPropagation(); P.next(); }));
    ['bPrev', 'mPrev', 'npPrev'].forEach(id => $('#' + id).addEventListener('click', (e) => { e.stopPropagation(); P.prev(); }));
    ['bShuffle', 'npShuffle'].forEach(id => $('#' + id).addEventListener('click', () => { P.toggleShuffle(); toast(P.shuffle ? 'Shuffle on' : 'Shuffle off'); }));
    ['bRepeat', 'npRepeat'].forEach(id => $('#' + id).addEventListener('click', () => { P.cycleRepeat(); toast({ off: 'Repeat off', all: 'Repeat all', one: 'Repeat one' }[P.repeat]); }));
    ['pLike', 'npLike'].forEach(id => $('#' + id).addEventListener('click', (e) => { e.stopPropagation(); if (P.current) likeSong(P.current.id); }));
    $('#vol').addEventListener('input', (e) => P.setVolume(e.target.value / 100));
    $('#bVol').addEventListener('click', () => P.toggleMute());
    bindSeek($('#seek')); bindSeek($('#npSeek'));
    $('#pLeft').addEventListener('click', (e) => { if (e.target.closest('.lk')) return; if (!matchMedia('(min-width:901px)').matches && P.current) toggleNP(true, 'player'); });
    $('#bLyrics').addEventListener('click', () => { const np = $('#np'); (np.classList.contains('open') && $('.tab[data-tab="lyrics"]').classList.contains('on')) ? toggleNP(false) : (toggleNP(true, 'lyrics')); });
    $('#bQueue').addEventListener('click', () => { const np = $('#np'); (np.classList.contains('open') && $('.tab[data-tab="queue"]').classList.contains('on')) ? toggleNP(false) : (toggleNP(true, 'queue')); });
    $('#npClose').addEventListener('click', () => toggleNP(false));
    $('#npMore').addEventListener('click', (e) => { if (P.current) openMenu(P.current.id, e.currentTarget); });
    $('#npTabs').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) setTab(b.dataset.tab); });
    // swipe down to close the full-screen player on touch devices
    let y0 = null; const np = $('#np');
    np.addEventListener('touchstart', (e) => { y0 = (e.target.closest('.tab-player,.np-top')) ? e.touches[0].clientY : null; }, { passive: true });
    np.addEventListener('touchend', (e) => { if (y0 != null && e.changedTouches[0].clientY - y0 > 110 && !matchMedia('(min-width:901px)').matches) toggleNP(false); y0 = null; });

    P.on('track', () => { lastLy = -1; renderLyrics(); syncPlayerUI(); syncTime(); if (currentRoute().name === 'home' && false) route(true); });
    P.on('state', syncPlayerUI);
    P.on('time', syncTime);
    P.on('queue', renderQueue);
    P.on('error', (s) => toast('Could not load “' + s.title + '”. Check your connection or the file path.'));
    window.addEventListener('resize', () => { if (matchMedia('(min-width:901px)').matches) closeDrawer(); });
    syncPlayerUI(); syncTime(); renderLyrics(); renderQueue();
  }

  /* ---------- boot ---------- */
  initChrome(); initPlayerUI();
  window.addEventListener('hashchange', () => route());
  if (!location.hash) location.hash = '#/home'; else route();
  S.onChange(() => { /* recent list refreshes on next visit; likes handled in place */ });
})();
