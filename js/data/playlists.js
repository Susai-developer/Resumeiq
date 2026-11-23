/* ==========================================================
   AROKIYAM - PLAYLISTS  (js/data/playlists.js)
   A playlist is just a list of song ids from songs.js.
   A song may appear in several playlists.

   To add a playlist: copy one block, give it a unique id, a cover
   image (assets/covers/...) and the ids of its songs.
   ========================================================== */
window.AROKIYAM_PLAYLISTS = [
  {"id": "velankanni", "name": "Velankanni Matha Songs", "tamilName": "வேளாங்கண்ணி மாதா பாடல்கள்", "description": "Devotional hymns to Our Lady of Good Health, Velankanni.", "cover": "assets/covers/velankanni.jpg", "color": "#1e6fe0", "songs": [3, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 59, 60, 61, 62, 63, 64, 65]},
  {"id": "jesus", "name": "Jesus Songs", "tamilName": "இயேசு பாடல்கள்", "description": "Songs of love, grace and salvation in Jesus Christ.", "cover": "assets/covers/jesus.jpg", "color": "#c0392b", "songs": [1, 2, 6, 8, 9, 12, 13, 14, 16, 17, 18, 56]},
  {"id": "worship", "name": "Praise & Worship", "tamilName": "துதி & ஆராதனை", "description": "Lift your voice and praise Him with joyful worship.", "cover": "assets/covers/worship.jpg", "color": "#7c3aed", "songs": [4, 7, 14, 15, 17, 19, 13, 41]},
  {"id": "prayer", "name": "Prayer Songs", "tamilName": "ஜெப பாடல்கள்", "description": "Quiet songs of prayer, petition and surrender.", "cover": "assets/covers/prayer.jpg", "color": "#e67e22", "songs": [5, 23, 43, 44, 49, 50, 52, 57, 66]},
  {"id": "christmas", "name": "Christmas Songs", "tamilName": "கிறிஸ்துமஸ் பாடல்கள்", "description": "Carols celebrating the birth of Christ.", "cover": "assets/covers/christmas.svg", "color": "#16a34a", "songs": [58]},
  {"id": "easter", "name": "Easter Songs", "tamilName": "உயிர்ப்பு பாடல்கள்", "description": "Songs of the resurrection and victory over death.", "cover": "assets/covers/easter.svg", "color": "#f59e0b", "songs": [10]},
  {"id": "peaceful", "name": "Peaceful Devotional Songs", "tamilName": "அமைதி பக்தி பாடல்கள்", "description": "Gentle, calming songs to find your peace.", "cover": "assets/covers/peaceful.jpg", "color": "#0ea5e9", "songs": [18, 24, 25, 39, 46, 52, 61, 64, 65]},
  {"id": "hits", "name": "Tamil Christian Hits", "tamilName": "தமிழ் கிறிஸ்தவ ஹிட்ஸ்", "description": "Best-loved Tamil Christian songs, all in one place.", "cover": "assets/covers/hits.jpg", "color": "#0284c7", "songs": [3, 6, 9, 14, 20, 21, 22, 23, 26, 27, 28, 29, 30, 59, 60, 62, 63]},
  {"id": "traditional", "name": "Traditional Christian Songs", "tamilName": "பாரம்பரிய கிறிஸ்தவ பாடல்கள்", "description": "Timeless hymns and classical Tamil Christian compositions.", "cover": "assets/covers/traditional.svg", "color": "#8b5e34", "songs": [11, 12, 13, 15, 19, 31, 34]},
  {"id": "other", "name": "Other Devotional Songs", "tamilName": "மற்ற பக்தி பாடல்கள்", "description": "More devotional songs, chants and recordings.", "cover": "assets/covers/other.svg", "color": "#0891b2", "songs": [2, 4, 41, 57, 66]}
];
