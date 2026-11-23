# AROKIYAM – Tamil Christian Music

Spotify-inspired Tamil Christian devotional streaming site. Pure HTML / CSS / JavaScript (no framework, no build step).

## Run locally
Open a terminal in this folder and run ONE of:

    python -m http.server 8000        (Python)
    npx serve .                       (Node)

Then open http://localhost:8000/login.html . In VS Code you can also use the "Live Server" extension.
(Opening index.html by double-click also works in most browsers, but a local server is recommended.)

First time: click **Sign Up**, create an account, and you are taken to the player.

## Folder structure
    index.html            main app (sidebar, pages, player)
    login.html / signup.html
    css/app.css  css/auth.css
    js/data/songs.js      <- ALL songs (one entry per audio file)
    js/data/playlists.js  <- ALL playlists (lists of song ids)
    js/store.js           library lookups, likes, recently played
    js/player.js          audio engine (queue, shuffle, repeat, volume)
    js/app.js             router + all pages + player UI
    js/auth.js            accounts (salted PBKDF2 hashes in localStorage)
    js/auth-pages.js      login / signup forms
    songs/                your local audio files (unchanged)
    assets/               logo, covers, playlist artwork
    _legacy/              your previous version + unrelated ResumeIQ pages (kept, not used)

## Add a song
1. Put the file in `songs/` (or use a hosted URL).
2. Add an entry to `js/data/songs.js` with a NEW unique `id`.
3. Add that id to one or more playlists in `js/data/playlists.js`.
Optional per-song fields: `fallback` (second audio path), `art` (custom cover image).

## Add a playlist
Copy any block in `js/data/playlists.js`, give it a new `id`, `name`, `cover` and `songs: [ids]`.
A song can be in many playlists – the audio file is stored once.

## Notes
* Accounts are stored in the browser (no server). Passwords are salted + hashed, but this is not a
  substitute for a real backend. Google/Apple buttons are placeholders until a server is added.
* Likes and recently played are saved per account in localStorage.
