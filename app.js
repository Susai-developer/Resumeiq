/**
 * ============================================================
 * SPOTIFY WEB PLAYER - MAIN JAVASCRIPT ENGINE
 * ============================================================
 */

// 1. SPOTIFY SONGS DATA (Curated Velankanni Matha Special)
const playlistData = {
  id: "velankanni-special",
  title: "Velankanni Matha Special - Devotional Hits",
  tamilTitle: "வேளாங்கண்ணி ஆரோக்கிய மாதா சிறப்பு பாடல்கள்",
  type: "Public Playlist",
  creator: "Spotify",
  description: "Curated sacred Tamil Marian hymns and prayers dedicated to Our Lady of Good Health, Velankanni. Featuring classic hymns for inner peace, healing, and solace.",
  cover: "assets/playlist_cover.svg",
  saves: "148,239 saves",
  tracks: [
    {
      id: 1,
      title: "Umai Thedi Vanthen Sumai Theerumama",
      tamilTitle: "உம்மைத் தேடி வந்தேன் சுமை தீருமம்மா",
      artist: "Ave Maria Updates",
      album: "Ulagazhum Thaaye",
      cover: "assets/cover1.svg",
      color: "#064e3b", // Emerald Green
      duration: 320,
      durationStr: "5:20",
      dateAdded: "2 days ago",
      url: "https://res.cloudinary.com/b4venwst/video/upload/v1795004399/Umai_thedi_vanthen_sumai_theerumama___Lyricsvideo___Madha_songs__Avemariaupdates___Ulagazhum_thaaye_128k.mp3",
      localUrl: "songs/Umai thedi vanthen sumai theerumama _ Lyricsvideo _ Madha songs_@Avemariaupdates _ Ulagazhum thaaye_128k.mp3",
      lyrics: [
        { time: 0, text: "உம்மைத் தேடி வந்தேன் சுமை தீருமம்மா..." },
        { time: 14, text: "Umai thedi vanthen sumai theerumamma" },
        { time: 28, text: "என்னை ஏற்றிடவே ஒரு வழியுமம்மா" },
        { time: 42, text: "Ennai yetridave oru vazhiyumamma" },
        { time: 56, text: "தாயே ஆரோக்கிய மாதாவே" },
        { time: 70, text: "Thaaye Aarokkiya Maadhaave" },
        { time: 85, text: "தஞ்சமென்று உந்தன் பாதம் வந்தேனம்மா" },
        { time: 102, text: "Thanjam endru unthan paatham vanthenamma" },
        { time: 120, text: "கவலைகள் தீர்க்கும் தாயே நீரே" },
        { time: 138, text: "Kavalaigal theerkkum thaaye neere" },
        { time: 156, text: "கண்ணீர் துடைக்கும் அன்னையே நீரே" },
        { time: 174, text: "Kanneer thudaikkum annaiye neere" },
        { time: 194, text: "மாமரி தாயே ஆரோக்கிய தாயே" },
        { time: 212, text: "Maamari thaaye aarokkiya thaaye" },
        { time: 232, text: "அடைக்கலம் தந்தருள்வாய் மாமரியே" },
        { time: 254, text: "Adaikkalam thantharulvaai maamariye" },
        { time: 275, text: "உம்மைத் தேடி வந்தேன் சுமை தீருமம்மா" },
        { time: 295, text: "ஆரோக்கிய மாதா திருவடிகளே சரணம்" }
      ]
    },
    {
      id: 2,
      title: "Mangala Nilave Maamari Annaiye",
      tamilTitle: "மங்கள நிலவே மாமரி அன்னையே",
      artist: "Matha Devotional Choir",
      album: "Annaiye Aarokkiya Thaaye",
      cover: "assets/cover2.svg",
      color: "#4c1d95", // Deep Royal Purple
      duration: 333,
      durationStr: "5:33",
      dateAdded: "4 days ago",
      url: "https://res.cloudinary.com/b4venwst/video/upload/v1795004315/Mangala_Nilave_Maamari_Annaiye___%E0%AE%AE%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3_%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AE%B5%E0%AF%87_%E0%AE%AE%E0%AE%BE%E0%AE%AE%E0%AE%B0%E0%AE%BF_%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88%E0%AE%AF%E0%AF%87___Matha_songs_128k.mp3",
      localUrl: "songs/Mangala Nilave Maamari Annaiye _ மங்கள நிலவே மாமரி அன்னையே _ Matha songs_128k.mp3",
      lyrics: [
        { time: 0, text: "மங்கள நிலவே மாமரி அன்னையே..." },
        { time: 16, text: "Mangala nilave maamari annaiye" },
        { time: 32, text: "மகிமையின் வடிவே ஆரோக்கிய தாயே" },
        { time: 48, text: "Magimaiyin vadive aarokkiya thaaye" },
        { time: 64, text: "உந்தன் பாதம் பணிகின்றோம்" },
        { time: 80, text: "Unthan paatham panigindrom" },
        { time: 98, text: "எங்கள் வாழ்வை மலரச் செய்வாய்" },
        { time: 116, text: "Engal vaazhvai malarach seyvaai" },
        { time: 135, text: "அருள் நிறை தாயே அமைதியின் ஒளியே" },
        { time: 154, text: "Arul nirai thaaye amaithiyin oliye" },
        { time: 174, text: "கரம் பிடித்து எம்மை வழிநடத்துவாய்" },
        { time: 194, text: "Karam pidithu emmai vazhinadathuvaai" },
        { time: 215, text: "விண்ணக அரசியே வேளாங்கண்ணி தாயே" },
        { time: 236, text: "Vinnaga arasiye velankanni thaaye" },
        { time: 258, text: "வாழ்த்துகிறோம் போற்றுகிறோம் அன்னையே" },
        { time: 280, text: "மங்கள நிலவே மாமரி அன்னையே..." },
        { time: 305, text: "அமைதியின் தாய் மாமரி போற்றி" }
      ]
    },
    {
      id: 3,
      title: "Mangala Nilave (Acoustic Prayer Edition)",
      tamilTitle: "மங்கள நிலவே (அமைதி தியானம்)",
      artist: "Velankanni Devotional Ensemble",
      album: "Midnight Prayer at Velankanni",
      cover: "assets/cover3.svg",
      color: "#0369a1", // Ocean Celestial Blue
      duration: 333,
      durationStr: "5:33",
      dateAdded: "5 days ago",
      url: "https://res.cloudinary.com/b4venwst/video/upload/v1795004315/Mangala_Nilave_Maamari_Annaiye___%E0%AE%AE%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3_%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AE%B5%E0%AF%87_%E0%AE%AE%E0%AE%BE%E0%AE%AE%E0%AE%B0%E0%AE%BF_%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AF%88%E0%AE%AF%E0%AF%87___Matha_songs_128k.mp3",
      localUrl: "songs/Mangala Nilave Maamari Annaiye _ மங்கள நிலவே மாமரி அன்னையே _ Matha songs_128k.mp3",
      lyrics: [
        { time: 0, text: "மங்கள நிலவே மாமரி அன்னையே (அமைதி தியானம்)" },
        { time: 18, text: "Mangala nilave maamari annaiye" },
        { time: 38, text: "அமைதி தவழும் நள்ளிரவு தியானம்" },
        { time: 58, text: "மகிமையின் வடிவே ஆரோக்கிய தாயே" },
        { time: 80, text: "உந்தன் பாதம் பணிகின்றோம்" },
        { time: 104, text: "ஆரோக்கிய மாதா கருணை நிழல்" },
        { time: 130, text: "அருள் நிறை தாயே அமைதியின் ஒளியே" },
        { time: 155, text: "கரம் பிடித்து எம்மை வழிநடத்துவாய்" },
        { time: 185, text: "விண்ணக அரசியே வேளாங்கண்ணி தாயே" },
        { time: 215, text: "வாழ்த்துகிறோம் போற்றுகிறோம்" },
        { time: 245, text: "தூய மரியே இறைவனின் தாயே" },
        { time: 280, text: "எங்களுக்காக வேண்டிக்கொள்ளும் அம்மா" }
      ]
    },
    {
      id: 4,
      title: "Kodi Vinmeen Vanathilae",
      tamilTitle: "கோடி விண்மீன் வானத்திலே",
      artist: "Velankanni Matha Melodies",
      album: "Velankanni Geethangal",
      cover: "assets/cover4.svg",
      color: "#881337", // Crimson Rose
      duration: 264,
      durationStr: "4:24",
      dateAdded: "1 week ago",
      url: "https://res.cloudinary.com/b4venwst/video/upload/v1795004313/VELANKANNI_MATHA_-_Kodi_Vinmeen_Vanathilae-%E0%AE%95%E0%AF%8B%E0%AE%9F%E0%AE%BF_%E0%AE%B5%E0%AE%BF%E0%AE%A3%E0%AF%8D%E0%AE%AE%E0%AF%80%E0%AE%A9%E0%AF%8D_%E0%AE%B5%E0%AE%BE%E0%AE%A9%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B2%E0%AF%87_128k.mp3",
      localUrl: "songs/VELANKANNI MATHA - Kodi Vinmeen Vanathilae-கோடி விண்மீன் வானத்திலே_128k.mp3",
      lyrics: [
        { time: 0, text: "கோடி விண்மீன் வானத்திலே..." },
        { time: 15, text: "Kodi vinmeen vaanathilae" },
        { time: 30, text: "கூடி நிற்கும் நேரத்திலே" },
        { time: 45, text: "Koodi nirkum nerathilae" },
        { time: 60, text: "வேளாங்கண்ணி மாதாவே" },
        { time: 74, text: "Velankanni maadhaave" },
        { time: 88, text: "வெளிச்சம் தாரும் அன்னையே" },
        { time: 104, text: "Velicham thaarum annaiye" },
        { time: 120, text: "அலைகடல் ஓரம் ஆலயம் கொண்டாய்" },
        { time: 136, text: "Alaikadal ooram aalayam kondaai" },
        { time: 152, text: "அகிலமெல்லாம் ஒளி வீச நின்றாய்" },
        { time: 168, text: "Akilamellaam oli veesa nindraai" },
        { time: 185, text: "நோய் நொடிகள் நீக்கும் தாயே" },
        { time: 202, text: "Noi nodigal neekkum thaaye" },
        { time: 220, text: "நோயற்ற வாழ்வு தந்திடும் தாயே" },
        { time: 240, text: "கோடி விண்மீன் வானத்திலே..." }
      ]
    },
    {
      id: 5,
      title: "Arokiya Thaye Amma Amma",
      tamilTitle: "ஆரோக்கிய தாயே அம்மா அம்மா",
      artist: "Christian Catholic Devotional",
      album: "Thaayin Madiyil",
      cover: "assets/cover5.svg",
      color: "#78350f", // Warm Amber Gold
      duration: 285,
      durationStr: "4:45",
      dateAdded: "1 week ago",
      url: "https://res.cloudinary.com/b4venwst/video/upload/v1795004313/Arokiya_Thaye_Amma_Amma___Christian_Catholic_song_128k.mp3",
      localUrl: "songs/Arokiya Thaye Amma Amma _ Christian Catholic song_128k.mp3",
      lyrics: [
        { time: 0, text: "ஆரோக்கிய தாயே அம்மா அம்மா..." },
        { time: 15, text: "Arokiya thaaye amma amma" },
        { time: 30, text: "ஆதரவு நீயே அம்மா அம்மா" },
        { time: 45, text: "Aadharavu neeye amma amma" },
        { time: 60, text: "வேளாங்கண்ணி வாழ் அன்னையே" },
        { time: 75, text: "Velankanni vaazh annaiye" },
        { time: 90, text: "வேண்டிடும் வரம் தரும் அன்னையே" },
        { time: 106, text: "Vendidum varam tharum annaiye" },
        { time: 124, text: "உன்னை அன்றி யாரும் இல்லை தாயே" },
        { time: 142, text: "Unnai andri yaarum illai thaaye" },
        { time: 162, text: "என் இதயத்தின் துடிப்பும் நீயே" },
        { time: 180, text: "En idhayathin thudippum neeye" },
        { time: 200, text: "சரணம் சரணம் ஆரோக்கிய தாயே" },
        { time: 220, text: "Saranam saranam aarokkiya thaaye" },
        { time: 242, text: "அருள்மழை பொழியும் அன்பின் தாயே" },
        { time: 265, text: "ஆரோக்கிய தாயே அம்மா அம்மா..." }
      ]
    }
  ]
};

// 2. PLAYER STATE
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: Off, 1: Repeat Playlist, 2: Repeat One
let currentVolume = 0.85;
let isMuted = false;
let rightPanelMode = 'closed'; // 'now-playing' | 'lyrics' | 'queue' | 'closed'
let isFullscreen = false;
let activeView = 'home'; // 'home' | 'search' | 'liked'

// Liked Songs Storage
let likedSongIds = new Set();
try {
  const savedLikes = localStorage.getItem('spotify_liked_tracks');
  if (savedLikes) {
    likedSongIds = new Set(JSON.parse(savedLikes));
  }
} catch (e) {
  console.warn("LocalStorage unavailable:", e);
}

// 3. DOM ELEMENTS
const audio = document.getElementById('main-audio');
const tracklistTbody = document.getElementById('tracklist-tbody');
const fastAccessGrid = document.getElementById('fast-access-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const artistsGrid = document.getElementById('artists-grid');

// Hero elements
const heroBanner = document.getElementById('hero-banner');
const heroCoverArt = document.getElementById('hero-cover-art');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroTracksInfo = document.getElementById('hero-tracks-info');
const bigPlayBtn = document.getElementById('big-play-btn');
const bigPlayIcon = document.getElementById('big-play-icon');
const playlistHeartBtn = document.getElementById('playlist-heart-btn');
const playlistDownloadBtn = document.getElementById('playlist-download-btn');
const filterTracksInput = document.getElementById('filter-tracks-input');

// Bottom Player Bar
const playerThumb = document.getElementById('player-thumb');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerHeartBtn = document.getElementById('player-heart-btn');
const ctrlPlayPause = document.getElementById('ctrl-play-pause');
const ctrlPlayIcon = document.getElementById('ctrl-play-icon');
const ctrlPrevBtn = document.getElementById('ctrl-prev-btn');
const ctrlNextBtn = document.getElementById('ctrl-next-btn');
const ctrlShuffleBtn = document.getElementById('ctrl-shuffle-btn');
const ctrlRepeatBtn = document.getElementById('ctrl-repeat-btn');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const progressWrapper = document.getElementById('progress-wrapper');
const progressFill = document.getElementById('progress-fill');
const volumeWrapper = document.getElementById('volume-wrapper');
const volumeFill = document.getElementById('volume-fill');
const volumeIconBtn = document.getElementById('volume-icon-btn');
const volumeIcon = document.getElementById('volume-icon');

// Right Sidebar & Panels
const rightSidebar = document.getElementById('right-sidebar');
const panelTitle = document.getElementById('panel-title');
const panelCloseBtn = document.getElementById('panel-close-btn');
const nowPlayingPanel = document.getElementById('now-playing-panel');
const lyricsPanelView = document.getElementById('lyrics-panel-view');
const queuePanelView = document.getElementById('queue-panel-view');
const panelLyricsContainer = document.getElementById('panel-lyrics-container');
const panelCoverImg = document.getElementById('panel-cover-img');
const panelTitleText = document.getElementById('panel-title-text');
const panelArtistText = document.getElementById('panel-artist-text');
const panelHeartBtn = document.getElementById('panel-heart-btn');
const panelNextArt = document.getElementById('panel-next-art');
const panelNextTitle = document.getElementById('panel-next-title');
const panelNextArtist = document.getElementById('panel-next-artist');
const queueNowPlayingItem = document.getElementById('queue-now-playing-item');
const queueUpcomingList = document.getElementById('queue-upcoming-list');

// Fullscreen Elements
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fsCloseBtn = document.getElementById('fs-close-btn');
const fsCoverArt = document.getElementById('fs-cover-art');
const fsTitle = document.getElementById('fs-title');
const fsTamil = document.getElementById('fs-tamil');
const fsArtist = document.getElementById('fs-artist');
const fsLyricsContainer = document.getElementById('fs-lyrics-container');
const fsCurrentTime = document.getElementById('fs-current-time');
const fsTotalDuration = document.getElementById('fs-total-duration');
const fsProgressWrapper = document.getElementById('fs-progress-wrapper');
const fsProgressFill = document.getElementById('fs-progress-fill');

// View switches & Modals
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const homeViewContent = document.getElementById('home-view-content');
const searchViewContent = document.getElementById('search-view-content');
const topbarSearch = document.getElementById('topbar-search');
const globalSearchInput = document.getElementById('global-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const searchResultsSection = document.getElementById('search-results-section');
const searchResultsTbody = document.getElementById('search-results-tbody');
const itemLikedSongs = document.getElementById('item-liked-songs');
const itemVelankanni = document.getElementById('item-velankanni');
const likedCountBadge = document.getElementById('liked-count-badge');
const connectModal = document.getElementById('connect-modal');
const shortcutsModal = document.getElementById('shortcuts-modal');
const toastEl = document.getElementById('toast');

// 4. PLAY / PAUSE SVG ICONS
const SVG_PLAY = '<path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>';
const SVG_PAUSE = '<path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm8 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"/>';

// 5. INITIALIZATION
function initApp() {
  updateGreeting();
  renderTracklist();
  renderFastAccessGrid();
  renderRecommendedCards();
  renderArtistCards();
  loadTrack(currentTrackIndex, false);
  setupEventListeners();
  updateLikedBadge();
  setupMediaSession();
  setupAudioFallback();
}

// Set greeting based on time of day
function updateGreeting() {
  const greetingEl = document.getElementById('greeting-title');
  const hour = new Date().getHours();
  if (hour < 12) greetingEl.textContent = 'Good morning';
  else if (hour < 17) greetingEl.textContent = 'Good afternoon';
  else greetingEl.textContent = 'Good evening';
}

// 6. RENDER TRACKLIST TABLE
function renderTracklist(filterText = '') {
  tracklistTbody.innerHTML = '';
  const tracks = playlistData.tracks;
  const filtered = tracks.filter(t => 
    t.title.toLowerCase().includes(filterText.toLowerCase()) ||
    t.tamilTitle.toLowerCase().includes(filterText.toLowerCase()) ||
    t.artist.toLowerCase().includes(filterText.toLowerCase()) ||
    t.album.toLowerCase().includes(filterText.toLowerCase())
  );

  filtered.forEach((track, index) => {
    const originalIndex = tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);
    const isCurrentSelected = (originalIndex === currentTrackIndex);
    const isLiked = likedSongIds.has(track.id);

    const tr = document.createElement('tr');
    tr.className = `track-row ${isCurrentSelected ? 'playing' : ''}`;
    tr.dataset.index = originalIndex;

    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <div class="equalizer-bars">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
        <button class="row-play-btn" title="Play ${track.title}">
          <svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg>
        </button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="${track.title}" />
        <div class="track-meta">
          <span class="track-name" style="${isCurrentSelected ? 'color: var(--sp-green);' : ''}">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn ${isLiked ? 'liked' : ''}" data-id="${track.id}" title="${isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;

    // Row click to play
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        return;
      }
      if (originalIndex === currentTrackIndex) {
        togglePlayPause();
      } else {
        playTrack(originalIndex);
      }
    });

    tracklistTbody.appendChild(tr);
  });
}

// 7. FAST ACCESS 6-GRID (SPOTIFY TOP TILES)
function renderFastAccessGrid() {
  fastAccessGrid.innerHTML = '';
  const items = [
    { title: 'Liked Songs', cover: 'assets/liked_songs.svg', action: () => openLikedSongsView() },
    { title: playlistData.tracks[0].title, cover: playlistData.tracks[0].cover, trackIndex: 0 },
    { title: playlistData.tracks[1].title, cover: playlistData.tracks[1].cover, trackIndex: 1 },
    { title: playlistData.tracks[3].title, cover: playlistData.tracks[3].cover, trackIndex: 3 },
    { title: playlistData.tracks[4].title, cover: playlistData.tracks[4].cover, trackIndex: 4 },
    { title: 'Velankanni Matha Special', cover: 'assets/playlist_cover.svg', action: () => playTrack(0) }
  ];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'fast-card';
    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}" class="fast-card-img" />
      <span class="fast-card-title">${item.title}</span>
      <button class="fast-play-btn" title="Play">
        <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
      </button>
    `;
    card.addEventListener('click', () => {
      if (item.action) {
        item.action();
      } else if (item.trackIndex !== undefined) {
        playTrack(item.trackIndex);
      }
    });
    fastAccessGrid.appendChild(card);
  });
}

// 8. RECOMMENDED MARIAN CARDS
function renderRecommendedCards() {
  recommendedGrid.innerHTML = '';
  playlistData.tracks.forEach((track, idx) => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML = `
      <div class="card-art-wrap">
        <img src="${track.cover}" class="card-art" alt="${track.title}" />
        <button class="card-play-btn" title="Play ${track.title}">
          <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
        </button>
      </div>
      <div class="card-title">${track.title}</div>
      <div class="card-desc">${track.tamilTitle} • ${track.artist}</div>
    `;
    card.addEventListener('click', () => {
      playTrack(idx);
    });
    recommendedGrid.appendChild(card);
  });
}

// 9. FEATURED ARTISTS & CHOIRS CARDS
function renderArtistCards() {
  artistsGrid.innerHTML = '';
  const artists = [
    { name: "Our Lady of Velankanni", role: "Devotional Curations", cover: "assets/playlist_cover.svg" },
    { name: "Ave Maria Updates", role: "Artist • Marian Hymns", cover: "assets/cover1.svg" },
    { name: "Matha Devotional Choir", role: "Artist • Catholic Hymns", cover: "assets/cover2.svg" },
    { name: "Velankanni Melodies", role: "Ensemble • Tamil Geethangal", cover: "assets/cover4.svg" }
  ];

  artists.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'media-card artist-card';
    card.innerHTML = `
      <div class="card-art-wrap">
        <img src="${artist.cover}" class="card-art" alt="${artist.name}" />
        <button class="card-play-btn" title="Play">
          <svg viewBox="0 0 24 24">${SVG_PLAY}</svg>
        </button>
      </div>
      <div class="card-title">${artist.name}</div>
      <div class="card-desc">${artist.role}</div>
    `;
    card.addEventListener('click', () => {
      showToast(`Playing artist radio: ${artist.name}`);
      playTrack(0);
    });
    artistsGrid.appendChild(card);
  });
}

// 10. AUDIO LOADING & PLAYBACK CONTROL
function loadTrack(index, autoPlay = true) {
  if (index < 0 || index >= playlistData.tracks.length) return;
  currentTrackIndex = index;
  const track = playlistData.tracks[currentTrackIndex];

  // Set audio source to the user's Cloudinary link
  audio.src = track.url;
  audio.load();

  // Dynamic Theme Colors
  document.documentElement.style.setProperty('--hero-color', track.color);
  heroBanner.style.background = `linear-gradient(180deg, ${track.color} 0%, rgba(18, 18, 18, 0.9) 100%)`;

  // Update Player UI
  playerThumb.src = track.cover;
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  totalDurationEl.textContent = track.durationStr;
  currentTimeEl.textContent = "0:00";
  progressFill.style.width = "0%";

  // Update Like State on Player Bar
  if (likedSongIds.has(track.id)) {
    playerHeartBtn.classList.add('liked');
  } else {
    playerHeartBtn.classList.remove('liked');
  }

  // Update Right Panel UI
  panelCoverImg.src = track.cover;
  panelTitleText.textContent = track.title;
  panelArtistText.textContent = track.artist;
  if (likedSongIds.has(track.id)) {
    panelHeartBtn.classList.add('liked');
  } else {
    panelHeartBtn.classList.remove('liked');
  }

  // Next in queue preview
  const nextTrack = playlistData.tracks[(currentTrackIndex + 1) % playlistData.tracks.length];
  panelNextArt.src = nextTrack.cover;
  panelNextTitle.textContent = nextTrack.title;
  panelNextArtist.textContent = nextTrack.artist;

  // Fullscreen UI
  fsCoverArt.src = track.cover;
  fsTitle.textContent = track.title;
  fsTamil.textContent = track.tamilTitle;
  fsArtist.textContent = `${track.artist} • ${track.album}`;
  fsTotalDuration.textContent = track.durationStr;

  // Render Synced Lyrics
  renderLyrics(track.lyrics);

  // Update Queue Panel
  renderQueuePanel();

  // Update Table active row
  renderTracklist(filterTracksInput.value);

  // Update Media Session
  updateMediaSession(track);

  // Auto-play if requested
  if (autoPlay) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI();
    }).catch(err => {
      console.warn("Autoplay policy or audio fetch issue:", err);
      // Try local fallback if online fails
      audio.src = track.localUrl;
      audio.play().then(() => {
        isPlaying = true;
        updatePlayPauseUI();
      }).catch(e => {
        console.warn("Fallback play error:", e);
        isPlaying = false;
        updatePlayPauseUI();
      });
    });
  } else {
    isPlaying = false;
    updatePlayPauseUI();
  }
}

function playTrack(index) {
  loadTrack(index, true);
}

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI();
    }).catch(err => {
      console.warn("Audio play prevented:", err);
      // Try fallback to local copy
      const track = playlistData.tracks[currentTrackIndex];
      audio.src = track.localUrl;
      audio.play().then(() => {
        isPlaying = true;
        updatePlayPauseUI();
      }).catch(e => console.error("Could not play track:", e));
    });
  } else {
    audio.pause();
    isPlaying = false;
    updatePlayPauseUI();
  }
}

function updatePlayPauseUI() {
  const icon = isPlaying ? SVG_PAUSE : SVG_PLAY;
  ctrlPlayIcon.innerHTML = icon;
  bigPlayIcon.innerHTML = icon;
  ctrlPlayPause.title = isPlaying ? "Pause" : "Play";
  bigPlayBtn.title = isPlaying ? "Pause" : "Play";

  const track = playlistData.tracks[currentTrackIndex];
  document.title = isPlaying 
    ? `${track.title} • ${track.artist} | Spotify`
    : "Spotify - Web Player: Velankanni Matha Special";

  // Re-render table row icons
  renderTracklist(filterTracksInput.value);
}

function playNextTrack() {
  if (isShuffle) {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * playlistData.tracks.length);
    } while (nextIdx === currentTrackIndex && playlistData.tracks.length > 1);
    playTrack(nextIdx);
  } else {
    const nextIdx = (currentTrackIndex + 1) % playlistData.tracks.length;
    playTrack(nextIdx);
  }
}

function playPrevTrack() {
  // If track played more than 3 seconds, replay from start
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const prevIdx = (currentTrackIndex - 1 + playlistData.tracks.length) % playlistData.tracks.length;
  playTrack(prevIdx);
}

// 11. SYNCHRONIZED LYRICS ENGINE (SPOTIFY KARAOKE STYLE)
function renderLyrics(lyrics) {
  panelLyricsContainer.innerHTML = '';
  fsLyricsContainer.innerHTML = '';

  if (!lyrics || lyrics.length === 0) {
    const emptyMsg = '<div style="color:var(--sp-text-secondary); text-align:center; padding: 40px 0;">No lyrics available for this song.</div>';
    panelLyricsContainer.innerHTML = emptyMsg;
    fsLyricsContainer.innerHTML = emptyMsg;
    return;
  }

  lyrics.forEach((line, index) => {
    // Panel lyrics line
    const pLine = document.createElement('div');
    pLine.className = 'lyric-line';
    pLine.dataset.time = line.time;
    pLine.dataset.index = index;
    pLine.textContent = line.text;
    pLine.addEventListener('click', () => {
      audio.currentTime = line.time;
    });
    panelLyricsContainer.appendChild(pLine);

    // Fullscreen lyrics line
    const fsLine = document.createElement('div');
    fsLine.className = 'fs-lyric-line';
    fsLine.dataset.time = line.time;
    fsLine.dataset.index = index;
    fsLine.textContent = line.text;
    fsLine.addEventListener('click', () => {
      audio.currentTime = line.time;
    });
    fsLyricsContainer.appendChild(fsLine);
  });
}

function syncLyrics(currentTime) {
  const lines = panelLyricsContainer.querySelectorAll('.lyric-line');
  const fsLines = fsLyricsContainer.querySelectorAll('.fs-lyric-line');
  if (lines.length === 0) return;

  let activeIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const time = parseFloat(lines[i].dataset.time);
    if (currentTime >= time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  if (activeIndex !== -1) {
    lines.forEach((line, idx) => {
      if (idx === activeIndex) {
        line.classList.add('active');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        line.classList.remove('active');
      }
    });

    fsLines.forEach((line, idx) => {
      if (idx === activeIndex) {
        line.classList.add('active');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        line.classList.remove('active');
      }
    });
  }
}

// 12. QUEUE PANEL RENDERING
function renderQueuePanel() {
  queueNowPlayingItem.innerHTML = '';
  queueUpcomingList.innerHTML = '';

  const currentTrack = playlistData.tracks[currentTrackIndex];
  const curLi = document.createElement('li');
  curLi.className = 'playlist-item playing';
  curLi.innerHTML = `
    <img src="${currentTrack.cover}" class="playlist-thumb" alt="" />
    <div class="playlist-info">
      <span class="playlist-item-title" style="color:var(--sp-green);">${currentTrack.title}</span>
      <span class="playlist-meta">${currentTrack.artist}</span>
    </div>
  `;
  queueNowPlayingItem.appendChild(curLi);

  // Next tracks
  for (let i = 1; i < playlistData.tracks.length; i++) {
    const idx = (currentTrackIndex + i) % playlistData.tracks.length;
    const track = playlistData.tracks[idx];
    const li = document.createElement('li');
    li.className = 'playlist-item';
    li.innerHTML = `
      <img src="${track.cover}" class="playlist-thumb" alt="" />
      <div class="playlist-info">
        <span class="playlist-item-title">${track.title}</span>
        <span class="playlist-meta">${track.artist}</span>
      </div>
    `;
    li.addEventListener('click', () => {
      playTrack(idx);
    });
    queueUpcomingList.appendChild(li);
  }
}

// 13. TIME & SEEK BAR CONTROLS
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function handleTimeUpdate() {
  if (!audio.duration) return;
  const current = audio.currentTime;
  const duration = audio.duration;
  const percent = (current / duration) * 100;

  currentTimeEl.textContent = formatTime(current);
  progressFill.style.width = `${percent}%`;

  if (fsCurrentTime && fsProgressFill) {
    fsCurrentTime.textContent = formatTime(current);
    fsProgressFill.style.width = `${percent}%`;
  }

  syncLyrics(current);
}

function seekToPosition(e, wrapperElement) {
  const rect = wrapperElement.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, clickX / rect.width));
  if (audio.duration) {
    audio.currentTime = percent * audio.duration;
  }
}

// 14. VOLUME CONTROLS
function updateVolume(percent) {
  currentVolume = Math.max(0, Math.min(1, percent));
  audio.volume = currentVolume;
  volumeFill.style.width = `${currentVolume * 100}%`;
  updateVolumeIcon();
}

function updateVolumeIcon() {
  if (audio.muted || currentVolume === 0) {
    volumeIcon.innerHTML = '<path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06zM9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96z"/>';
  } else if (currentVolume < 0.4) {
    volumeIcon.innerHTML = '<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96zM11.5 5.56a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.88.75.75 0 0 1-1.06-1.06 2 2 0 0 0 0-2.76.75.75 0 0 1 0-1.06z"/>';
  } else {
    volumeIcon.innerHTML = '<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.116 2.11L3.066 6.35H1.5v3.3h1.566l5.559 3.39V2.96zm4.875 1.55a.75.75 0 0 1 1.06 0 8 8 0 0 1 0 11.314.75.75 0 0 1-1.06-1.06 6.5 6.5 0 0 0 0-9.194.75.75 0 0 1 0-1.06zm-2.121 2.121a.75.75 0 0 1 1.06 0 5 5 0 0 1 0 7.072.75.75 0 1 1-1.06-1.061 3.5 3.5 0 0 0 0-4.95.75.75 0 0 1 0-1.06z"/>';
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    audio.volume = currentVolume;
  } else {
    audio.muted = true;
  }
  updateVolumeIcon();
}

// 15. LIKES & PERSISTENCE
function toggleLikeSong(songId) {
  const track = playlistData.tracks.find(t => t.id === songId);
  if (!track) return;

  if (likedSongIds.has(songId)) {
    likedSongIds.delete(songId);
    showToast(`Removed from Liked Songs`);
  } else {
    likedSongIds.add(songId);
    showToast(`Added to your Liked Songs`, true);
  }

  try {
    localStorage.setItem('spotify_liked_tracks', JSON.stringify(Array.from(likedSongIds)));
  } catch (e) {
    console.warn("Storage write error", e);
  }

  // Update Buttons
  const isCurLiked = likedSongIds.has(playlistData.tracks[currentTrackIndex].id);
  playerHeartBtn.classList.toggle('liked', isCurLiked);
  panelHeartBtn.classList.toggle('liked', isCurLiked);

  updateLikedBadge();
  renderTracklist(filterTracksInput.value);
}

function updateLikedBadge() {
  likedCountBadge.textContent = `${likedSongIds.size} songs`;
}

// 16. TOAST NOTIFICATIONS
let toastTimer = null;
function showToast(msg, isGreen = false) {
  if (toastTimer) clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.className = `toast-container show ${isGreen ? 'green' : ''}`;
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// 17. RIGHT PANEL NAVIGATION (Now Playing / Lyrics / Queue)
function openRightPanel(mode) {
  if (rightPanelMode === mode) {
    closeRightPanel();
    return;
  }
  rightPanelMode = mode;
  rightSidebar.classList.add('open');

  nowPlayingPanel.style.display = 'none';
  lyricsPanelView.style.display = 'none';
  queuePanelView.style.display = 'none';

  document.getElementById('btn-toggle-panel').classList.remove('active');
  document.getElementById('btn-toggle-lyrics').classList.remove('active');
  document.getElementById('btn-toggle-queue').classList.remove('active');

  if (mode === 'now-playing') {
    panelTitle.textContent = "Now Playing";
    nowPlayingPanel.style.display = 'flex';
    document.getElementById('btn-toggle-panel').classList.add('active');
  } else if (mode === 'lyrics') {
    panelTitle.textContent = "Lyrics";
    lyricsPanelView.style.display = 'flex';
    document.getElementById('btn-toggle-lyrics').classList.add('active');
    syncLyrics(audio.currentTime);
  } else if (mode === 'queue') {
    panelTitle.textContent = "Play Queue";
    queuePanelView.style.display = 'flex';
    document.getElementById('btn-toggle-queue').classList.add('active');
    renderQueuePanel();
  }
}

function closeRightPanel() {
  rightPanelMode = 'closed';
  rightSidebar.classList.remove('open');
  document.getElementById('btn-toggle-panel').classList.remove('active');
  document.getElementById('btn-toggle-lyrics').classList.remove('active');
  document.getElementById('btn-toggle-queue').classList.remove('active');
}

// 18. IMMERSIVE FULLSCREEN MODE
function toggleFullscreen() {
  isFullscreen = !isFullscreen;
  if (isFullscreen) {
    fullscreenOverlay.classList.add('active');
    syncLyrics(audio.currentTime);
  } else {
    fullscreenOverlay.classList.remove('active');
  }
}

// 19. VIEW SWITCHING (HOME vs SEARCH vs LIKED SONGS)
function openHomeView() {
  activeView = 'home';
  navHome.classList.add('active');
  navSearch.classList.remove('active');
  homeViewContent.style.display = 'block';
  searchViewContent.classList.remove('active');
  topbarSearch.classList.remove('visible');
  itemVelankanni.classList.add('active');
  itemLikedSongs.classList.remove('active');

  // Reset Hero to Velankanni Special
  heroCoverArt.src = playlistData.cover;
  heroTitle.textContent = playlistData.title;
  heroDesc.textContent = playlistData.description;
  heroTracksInfo.textContent = "5 songs, 25 min 22 sec";
  renderTracklist();
}

function openSearchView() {
  activeView = 'search';
  navSearch.classList.add('active');
  navHome.classList.remove('active');
  homeViewContent.style.display = 'none';
  searchViewContent.classList.add('active');
  topbarSearch.classList.add('visible');
  globalSearchInput.focus();
}

function openLikedSongsView() {
  activeView = 'liked';
  navHome.classList.remove('active');
  navSearch.classList.remove('active');
  itemLikedSongs.classList.add('active');
  itemVelankanni.classList.remove('active');

  homeViewContent.style.display = 'block';
  searchViewContent.classList.remove('active');
  topbarSearch.classList.remove('visible');

  // Set Hero to Liked Songs
  heroCoverArt.src = 'assets/liked_songs.svg';
  heroTitle.textContent = "Liked Songs";
  heroDesc.textContent = "Your sacred collection of devotional songs and hymns.";
  heroTracksInfo.textContent = `${likedSongIds.size} songs`;
  document.documentElement.style.setProperty('--hero-color', '#450af5');
  heroBanner.style.background = 'linear-gradient(180deg, #450af5 0%, #1e1b4b 60%, #121212 100%)';

  // Render only liked songs in table
  tracklistTbody.innerHTML = '';
  const likedTracks = playlistData.tracks.filter(t => likedSongIds.has(t.id));

  if (likedTracks.length === 0) {
    tracklistTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 48px; color: var(--sp-text-secondary);">
          Songs you like will appear here.<br>
          <span style="font-size:12px; margin-top:8px; display:inline-block;">Click the heart icon on any track to add it!</span>
        </td>
      </tr>
    `;
    return;
  }

  likedTracks.forEach((track, index) => {
    const originalIndex = playlistData.tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);

    const tr = document.createElement('tr');
    tr.className = 'track-row';
    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <button class="row-play-btn"><svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg></button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="" />
        <div class="track-meta">
          <span class="track-name">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn liked" data-id="${track.id}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        openLikedSongsView();
        return;
      }
      playTrack(originalIndex);
    });
    tracklistTbody.appendChild(tr);
  });
}

// 20. SEARCH FILTERING
function handleGlobalSearch(query) {
  if (!query.trim()) {
    clearSearchBtn.classList.remove('active');
    searchResultsSection.style.display = 'none';
    document.getElementById('genre-grid').style.display = 'grid';
    return;
  }

  clearSearchBtn.classList.add('active');
  document.getElementById('genre-grid').style.display = 'none';
  searchResultsSection.style.display = 'block';
  searchResultsTbody.innerHTML = '';

  const q = query.toLowerCase();
  const matched = playlistData.tracks.filter(t => 
    t.title.toLowerCase().includes(q) ||
    t.tamilTitle.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q) ||
    t.album.toLowerCase().includes(q)
  );

  if (matched.length === 0) {
    searchResultsTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 40px; color: var(--sp-text-secondary);">
          No results found for "${query}"
        </td>
      </tr>
    `;
    return;
  }

  matched.forEach((track, index) => {
    const originalIndex = playlistData.tracks.findIndex(t => t.id === track.id);
    const isCurrentPlaying = (originalIndex === currentTrackIndex && isPlaying);

    const tr = document.createElement('tr');
    tr.className = 'track-row';
    tr.innerHTML = `
      <td class="td-num">
        <span class="track-num-text">${index + 1}</span>
        <button class="row-play-btn"><svg viewBox="0 0 24 24">${isCurrentPlaying ? SVG_PAUSE : SVG_PLAY}</svg></button>
      </td>
      <td class="td-title">
        <img src="${track.cover}" class="track-thumb" alt="" />
        <div class="track-meta">
          <span class="track-name">${track.title}</span>
          <span class="track-artist">${track.artist}</span>
        </div>
      </td>
      <td class="td-album">${track.album}</td>
      <td class="td-date">${track.dateAdded}</td>
      <td class="td-duration">
        <div class="duration-wrap">
          <button class="row-heart-btn ${likedSongIds.has(track.id) ? 'liked' : ''}">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <span>${track.durationStr}</span>
        </div>
      </td>
    `;
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-heart-btn')) {
        toggleLikeSong(track.id);
        return;
      }
      playTrack(originalIndex);
    });
    searchResultsTbody.appendChild(tr);
  });
}

// 21. NATIVE MEDIA SESSION (KEYBOARD / LOCK SCREEN / HEADPHONES)
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('pause', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime && audio.duration) {
        audio.currentTime = details.seekTime;
      }
    });
  }
}

function updateMediaSession(track) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: [
        { src: track.cover, sizes: '500x500', type: 'image/svg+xml' }
      ]
    });
  }
}

// 22. AUDIO ERROR & FALLBACK HANDLER
function setupAudioFallback() {
  audio.addEventListener('error', (e) => {
    console.warn("Audio error occurred, switching to local copy:", e);
    const track = playlistData.tracks[currentTrackIndex];
    if (audio.src !== track.localUrl) {
      audio.src = track.localUrl;
      audio.load();
      if (isPlaying) {
        audio.play().catch(err => console.error("Local audio failed:", err));
      }
    }
  });
}

// 23. EVENT LISTENERS
function setupEventListeners() {
  // Audio state
  audio.addEventListener('timeupdate', handleTimeUpdate);
  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      // Repeat current song
      audio.currentTime = 0;
      audio.play();
    } else if (repeatMode === 1 || currentTrackIndex < playlistData.tracks.length - 1) {
      playNextTrack();
    } else {
      isPlaying = false;
      updatePlayPauseUI();
    }
  });

  // Big Play Button
  bigPlayBtn.addEventListener('click', () => {
    togglePlayPause();
  });

  // Bottom player controls
  ctrlPlayPause.addEventListener('click', togglePlayPause);
  ctrlNextBtn.addEventListener('click', playNextTrack);
  ctrlPrevBtn.addEventListener('click', playPrevTrack);

  // Shuffle toggle
  ctrlShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    ctrlShuffleBtn.classList.toggle('active', isShuffle);
    showToast(`Shuffle is ${isShuffle ? 'ON' : 'OFF'}`);
  });

  // Repeat toggle (Off -> Repeat All -> Repeat One)
  ctrlRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    if (repeatMode === 0) {
      ctrlRepeatBtn.classList.remove('active');
      ctrlRepeatBtn.title = "Enable repeat";
      showToast("Repeat OFF");
    } else if (repeatMode === 1) {
      ctrlRepeatBtn.classList.add('active');
      ctrlRepeatBtn.title = "Enable repeat one";
      showToast("Repeat PLAYLIST");
    } else {
      ctrlRepeatBtn.classList.add('active');
      ctrlRepeatBtn.title = "Disable repeat";
      showToast("Repeat ONE track");
    }
  });

  // Progress Seek Bar Drag & Click
  let isProgressDragging = false;
  progressWrapper.addEventListener('mousedown', (e) => {
    isProgressDragging = true;
    seekToPosition(e, progressWrapper);
  });
  window.addEventListener('mousemove', (e) => {
    if (isProgressDragging) seekToPosition(e, progressWrapper);
  });
  window.addEventListener('mouseup', () => {
    isProgressDragging = false;
  });

  // Fullscreen Progress Seek Bar
  fsProgressWrapper.addEventListener('click', (e) => {
    seekToPosition(e, fsProgressWrapper);
  });

  // Volume Bar Drag & Click
  let isVolumeDragging = false;
  volumeWrapper.addEventListener('mousedown', (e) => {
    isVolumeDragging = true;
    const rect = volumeWrapper.getBoundingClientRect();
    updateVolume((e.clientX - rect.left) / rect.width);
  });
  window.addEventListener('mousemove', (e) => {
    if (isVolumeDragging) {
      const rect = volumeWrapper.getBoundingClientRect();
      updateVolume((e.clientX - rect.left) / rect.width);
    }
  });
  window.addEventListener('mouseup', () => {
    isVolumeDragging = false;
  });

  volumeIconBtn.addEventListener('click', toggleMute);

  // Like Track Buttons
  playerHeartBtn.addEventListener('click', () => {
    toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
  });
  panelHeartBtn.addEventListener('click', () => {
    toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
  });

  // Right Panels
  document.getElementById('btn-toggle-panel').addEventListener('click', () => openRightPanel('now-playing'));
  document.getElementById('btn-toggle-lyrics').addEventListener('click', () => openRightPanel('lyrics'));
  document.getElementById('btn-toggle-queue').addEventListener('click', () => openRightPanel('queue'));
  panelCloseBtn.addEventListener('click', closeRightPanel);
  document.getElementById('open-full-queue').addEventListener('click', () => openRightPanel('queue'));

  // Expand Cover click
  document.getElementById('player-thumb-wrap').addEventListener('click', () => {
    openRightPanel('now-playing');
  });

  // Fullscreen Overlay
  document.getElementById('btn-fullscreen').addEventListener('click', toggleFullscreen);
  fsCloseBtn.addEventListener('click', toggleFullscreen);

  // Navigation
  navHome.addEventListener('click', openHomeView);
  navSearch.addEventListener('click', openSearchView);
  document.getElementById('nav-logo').addEventListener('click', openHomeView);
  itemVelankanni.addEventListener('click', openHomeView);
  itemLikedSongs.addEventListener('click', openLikedSongsView);
  document.getElementById('item-marian').addEventListener('click', () => playTrack(0));
  document.getElementById('item-mangala').addEventListener('click', () => playTrack(1));
  document.getElementById('item-vinmeen').addEventListener('click', () => playTrack(3));
  document.getElementById('item-arokiya').addEventListener('click', () => playTrack(4));

  // Search Inputs
  globalSearchInput.addEventListener('input', (e) => {
    handleGlobalSearch(e.target.value);
  });
  clearSearchBtn.addEventListener('click', () => {
    globalSearchInput.value = '';
    handleGlobalSearch('');
  });

  filterTracksInput.addEventListener('input', (e) => {
    renderTracklist(e.target.value);
  });

  // Playlist Header buttons
  playlistHeartBtn.addEventListener('click', () => {
    playlistHeartBtn.classList.toggle('liked');
    const isLiked = playlistHeartBtn.classList.contains('liked');
    showToast(isLiked ? "Saved to Your Library" : "Removed from Your Library", isLiked);
  });

  playlistDownloadBtn.addEventListener('click', () => {
    playlistDownloadBtn.classList.toggle('downloaded');
    showToast("Downloaded all 5 songs for offline listening!", true);
  });

  document.getElementById('playlist-more-btn').addEventListener('click', () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("Playlist link copied to clipboard!");
  });

  // Spotify Connect Modal
  document.getElementById('btn-connect-device').addEventListener('click', () => {
    connectModal.classList.add('active');
  });
  document.getElementById('close-connect-modal').addEventListener('click', () => {
    connectModal.classList.remove('active');
  });
  connectModal.addEventListener('click', (e) => {
    if (e.target === connectModal) connectModal.classList.remove('active');
  });

  // Keyboard Shortcuts Modal
  document.getElementById('shortcuts-btn').addEventListener('click', () => {
    shortcutsModal.classList.add('active');
  });
  document.getElementById('close-shortcuts-modal').addEventListener('click', () => {
    shortcutsModal.classList.remove('active');
  });
  shortcutsModal.addEventListener('click', (e) => {
    if (e.target === shortcutsModal) shortcutsModal.classList.remove('active');
  });

  // Create Playlist Button
  document.getElementById('create-playlist-btn').addEventListener('click', () => {
    showToast("Created playlist #2 in Your Library!", true);
  });

  document.getElementById('install-app-pill').addEventListener('click', () => {
    showToast("Spotify Desktop & Mobile App installed!");
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      updateVolume(currentVolume + 0.05);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      updateVolume(currentVolume - 0.05);
    } else if (e.key === 'n' || e.key === 'N') {
      playNextTrack();
    } else if (e.key === 'p' || e.key === 'P') {
      playPrevTrack();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMute();
    } else if (e.key === 'l' || e.key === 'L') {
      toggleLikeSong(playlistData.tracks[currentTrackIndex].id);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === '?') {
      shortcutsModal.classList.toggle('active');
    }
  });

  // Topbar scroll effect
  const mainView = document.getElementById('main-view');
  const topbar = document.getElementById('topbar');
  mainView.addEventListener('scroll', () => {
    if (mainView.scrollTop > 80) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });
}

// Start application
document.addEventListener('DOMContentLoaded', initApp);
