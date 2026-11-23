/* ==========================================================
   AROKIYAM - AUTH  (js/auth.js)
   The project is a static site (no server), so accounts are
   stored in this browser's localStorage. Passwords are never
   stored in plain text: they are salted and hashed with
   PBKDF2-SHA256 (Web Crypto). To use a real backend later,
   replace register / login / resetPassword with API calls -
   the pages only talk to window.ArokiyamAuth.
   ========================================================== */
(function () {
  const USERS = 'arokiyam_users';
  const SESSION = 'arokiyam_session';
  const enc = new TextEncoder();

  const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
  const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const hex = (buf) => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  const randomSalt = () => hex(crypto.getRandomValues(new Uint8Array(16)));

  async function hash(password, salt) {
    if (window.crypto && crypto.subtle) {
      const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
      const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 150000, hash: 'SHA-256' }, key, 256);
      return 'p2:' + hex(bits);
    }
    // Fallback for very old / insecure contexts only
    let h = 5381; const s = salt + password;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return 'fb:' + (h >>> 0).toString(16);
  }

  const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  const validPassword = (p) => p.length >= 8 && /[A-Za-z]/.test(p) && /\d/.test(p);

  async function register(name, email, password) {
    email = email.trim().toLowerCase();
    const users = read(USERS, {});
    if (users[email]) throw new Error('An account with this email already exists.');
    const salt = randomSalt();
    users[email] = { id: 'u_' + Date.now().toString(36), name: name.trim(), email, salt, hash: await hash(password, salt), created: Date.now() };
    write(USERS, users);
    startSession(users[email]);
    return users[email];
  }

  async function login(email, password) {
    email = email.trim().toLowerCase();
    const u = read(USERS, {})[email];
    if (!u || (await hash(password, u.salt)) !== u.hash) throw new Error('Incorrect email or password.');
    startSession(u);
    return u;
  }

  async function resetPassword(email, newPassword) {
    email = email.trim().toLowerCase();
    const users = read(USERS, {});
    if (!users[email]) throw new Error('No account found with this email.');
    users[email].salt = randomSalt();
    users[email].hash = await hash(newPassword, users[email].salt);
    write(USERS, users);
  }

  function startSession(u) { write(SESSION, { id: u.id, name: u.name, email: u.email, at: Date.now() }); }
  function currentUser() { return read(SESSION, null); }
  function logout() { localStorage.removeItem(SESSION); }
  function requireAuth() { if (!currentUser()) { location.replace('login.html'); return false; } return true; }

  window.ArokiyamAuth = { register, login, resetPassword, currentUser, logout, requireAuth, validEmail, validPassword };
})();
