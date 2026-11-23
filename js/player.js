/* ==========================================================
   AROKIYAM - PLAYER ENGINE (js/player.js)
   Owns the <audio> element, queue, shuffle, repeat, volume.
   The page never reloads (hash routing), so music keeps
   playing while you move between pages.
   Events: track, state, time, queue, error
   ========================================================== */
(function () {
  const audio = document.getElementById('audio');
  const ev = {};
  const on = (name, fn) => (ev[name] = ev[name] || []).push(fn);
  const emit = (name, data) => (ev[name] || []).forEach(f => f(data));

  let base = [];            // queue in original order (song ids)
  let order = [];           // actual play order
  let idx = -1;
  let shuffle = false;
  let repeat = 'off';       // off | all | one
  let triedFallback = false;
  let errStreak = 0;
  let wantPlay = false;

  const saved = (() => { try { return JSON.parse(localStorage.getItem('arokiyam_player')) || {}; } catch (e) { return {}; } })();
  audio.volume = typeof saved.volume === 'number' ? saved.volume : 0.8;
  let muted = false;
  shuffle = !!saved.shuffle; repeat = saved.repeat || 'off';

  const persist = () => localStorage.setItem('arokiyam_player', JSON.stringify({ volume: audio.volume, shuffle, repeat }));
  const shuffled = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const resolve = (path) => /^https?:|^blob:|^data:/.test(path) ? path : encodeURI(path);
  const cur = () => (idx >= 0 ? window.Store.song(order[idx]) : null);

  function rebuildOrder(keepId) {
    if (shuffle) {
      const rest = shuffled(base.filter(id => id !== keepId));
      order = keepId != null ? [keepId, ...rest] : rest; idx = order.length ? 0 : -1;
    } else {
      order = base.slice(); idx = keepId != null ? Math.max(0, order.indexOf(keepId)) : (order.length ? 0 : -1);
    }
  }

  function load(autoplay) {
    const s = cur(); if (!s) return;
    triedFallback = false; wantPlay = autoplay;
    audio.src = resolve(s.src);
    audio.load();
    window.Store.addRecent(s.id);
    emit('track', s); emit('queue');
    updateMediaSession(s);
    if (autoplay) play();
  }

  function play() {
    const p = audio.play();
    if (p && p.catch) p.catch(err => { if (err.name !== 'AbortError') { emit('state'); } });
  }

  function playQueue(ids, start, opts) {
    opts = opts || {};
    if (!ids || !ids.length) return;
    base = ids.slice();
    if (opts.shuffle !== undefined) shuffle = !!opts.shuffle;
    if (opts.shuffle && start == null) rebuildOrder(null);
    else rebuildOrder(start != null ? start : base[0]);
    persist(); emit('state'); load(true);
  }

  function next(auto) {
    if (!order.length) return;
    if (idx + 1 < order.length) idx++;
    else if (repeat === 'all' || !auto) { if (shuffle && auto) rebuildOrder(null); else idx = 0; }
    else { audio.pause(); audio.currentTime = 0; emit('state'); return; }
    load(true);
  }
  function prev() {
    if (!order.length) return;
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    idx = idx > 0 ? idx - 1 : order.length - 1;
    load(true);
  }
  function toggle() {
    if (!cur()) return false;
    audio.paused ? play() : audio.pause();
    return true;
  }
  function toggleShuffle() {
    shuffle = !shuffle; const c = cur(); rebuildOrder(c ? c.id : null); persist(); emit('state'); emit('queue');
  }
  function cycleRepeat() { repeat = { off: 'all', all: 'one', one: 'off' }[repeat]; persist(); emit('state'); }
  function seekTo(sec) { if (isFinite(sec)) { audio.currentTime = Math.max(0, sec); emit('time'); } }
  function setVolume(v) { audio.volume = Math.min(1, Math.max(0, v)); audio.muted = false; muted = false; persist(); emit('state'); }
  function toggleMute() { audio.muted = !audio.muted; muted = audio.muted; emit('state'); }
  function jump(i) { if (i >= 0 && i < order.length) { idx = i; load(true); } }
  function playNext(id) {
    if (!cur()) return playQueue([id], id);
    order.splice(idx + 1, 0, id); base.push(id); emit('queue');
  }
  function addToQueue(id) {
    if (!cur()) return playQueue([id], id);
    order.push(id); base.push(id); emit('queue');
  }

  audio.addEventListener('play', () => { document.body.classList.remove('paused'); emit('state'); });
  audio.addEventListener('pause', () => { document.body.classList.add('paused'); emit('state'); });
  audio.addEventListener('playing', () => { errStreak = 0; });
  audio.addEventListener('timeupdate', () => emit('time'));
  audio.addEventListener('loadedmetadata', () => emit('time'));
  audio.addEventListener('durationchange', () => emit('time'));
  audio.addEventListener('ended', () => { if (repeat === 'one') { audio.currentTime = 0; play(); } else next(true); });
  audio.addEventListener('error', () => {
    const s = cur(); if (!s) return;
    if (!triedFallback && s.fallback) {           // try the local copy of the file
      triedFallback = true; audio.src = resolve(s.fallback); audio.load(); if (wantPlay) play(); return;
    }
    errStreak++; emit('error', s);
    if (errStreak < Math.min(order.length, 4) && order.length > 1) setTimeout(() => next(true), 900);
  });

  function updateMediaSession(s) {
    if (!('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: s.title, artist: s.artist, album: 'AROKIYAM', artwork: [{ src: new URL(s.art || s.cover, location.href).href, sizes: '640x640' }] });
      navigator.mediaSession.setActionHandler('play', () => play());
      navigator.mediaSession.setActionHandler('pause', () => audio.pause());
      navigator.mediaSession.setActionHandler('previoustrack', prev);
      navigator.mediaSession.setActionHandler('nexttrack', () => next(false));
      navigator.mediaSession.setActionHandler('seekto', d => seekTo(d.seekTime));
    } catch (e) { /* not supported */ }
  }

  window.Player = {
    on, playQueue, next: () => next(false), prev, toggle, toggleShuffle, cycleRepeat, seekTo, setVolume, toggleMute, jump, playNext, addToQueue,
    get current() { return cur(); },
    get playing() { return !audio.paused; },
    get shuffle() { return shuffle; },
    get repeat() { return repeat; },
    get volume() { return audio.muted ? 0 : audio.volume; },
    get muted() { return audio.muted; },
    get time() { return audio.currentTime || 0; },
    get duration() { const c = cur(); return (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : (c ? c.duration : 0); },
    get queue() { return order.slice(); },
    get index() { return idx; }
  };
})();
