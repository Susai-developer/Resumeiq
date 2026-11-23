/* ==========================================================
   AROKIYAM - STORE (js/store.js)
   Library lookups + per-user saved data (likes, recently played)
   ========================================================== */
(function () {
  const user = window.ArokiyamAuth.currentUser() || { id: 'guest' };
  const K_LIKES = 'arokiyam_likes_' + user.id;
  const K_RECENT = 'arokiyam_recent_' + user.id;
  const rd = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };

  const songs = window.AROKIYAM_SONGS;
  const playlists = window.AROKIYAM_PLAYLISTS;
  const songById = new Map(songs.map(s => [s.id, s]));
  const playlistById = new Map(playlists.map(p => [p.id, p]));
  const songPlaylists = new Map();                       // songId -> [playlist]
  playlists.forEach(p => p.songs.forEach(id => {
    if (!songById.has(id)) { console.warn('Playlist', p.id, 'references missing song', id); return; }
    (songPlaylists.get(id) || songPlaylists.set(id, []).get(id)).push(p);
  }));
  // Album artwork: a song uses its own `art` image if you set one in songs.js,
  // otherwise the cover of its main playlist (so the art always matches the category).
  const ART_PRIORITY = ['velankanni', 'jesus', 'worship', 'prayer', 'christmas', 'easter', 'traditional', 'peaceful', 'hits', 'other'];
  songs.forEach(s => {
    if (s.art) return;
    const pls = songPlaylists.get(s.id) || [];
    const main = ART_PRIORITY.map(id => pls.find(p => p.id === id)).find(Boolean) || pls[0];
    s.art = main ? main.cover : s.cover;
  });
  // drop unknown ids so a typo never breaks a playlist
  playlists.forEach(p => { p.songs = p.songs.filter(id => songById.has(id)); });

  // likes (migrate from the older single-user key once)
  let likes = rd(K_LIKES, null);
  if (!likes) {
    const old = rd('arokiyam_liked_tracks', null) || rd('spotify_liked_tracks', []);
    likes = (old || []).filter(id => songById.has(id));
  }
  const likeSet = new Set(likes);
  let recent = rd(K_RECENT, []).filter(id => songById.has(id));

  const listeners = new Set();
  const emit = () => listeners.forEach(f => f());
  const saveLikes = () => localStorage.setItem(K_LIKES, JSON.stringify([...likeSet]));

  window.Store = {
    songs, playlists, user,
    song: (id) => songById.get(id),
    playlist: (id) => playlistById.get(id),
    playlistsOf: (id) => songPlaylists.get(id) || [],
    isLiked: (id) => likeSet.has(id),
    toggleLike(id) {
      likeSet.has(id) ? likeSet.delete(id) : likeSet.add(id);
      saveLikes(); emit(); return likeSet.has(id);
    },
    likedIds: () => [...likeSet].reverse(),                // newest first
    addRecent(id) {
      recent = [id, ...recent.filter(x => x !== id)].slice(0, 24);
      localStorage.setItem(K_RECENT, JSON.stringify(recent)); emit();
    },
    recentIds: () => recent.slice(),
    onChange(fn) { listeners.add(fn); },
    durationOf: (s) => s.duration || 0
  };
  saveLikes();
})();
