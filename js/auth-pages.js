/* AROKIYAM - login & signup page behaviour (js/auth-pages.js) */
(function () {
  const A = window.ArokiyamAuth;
  const $ = (s, r = document) => r.querySelector(s);
  const page = document.body.dataset.page;

  if (A.currentUser()) { location.replace('index.html'); return; }

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2600);
  }
  function setErr(input, msg) {
    const f = input.closest('.field'); const e = f.querySelector('.err');
    f.classList.toggle('invalid', !!msg); e.textContent = msg || '';
    return !msg;
  }
  // show / hide password
  document.querySelectorAll('.eye').forEach(b => b.addEventListener('click', () => {
    const inp = b.parentElement.querySelector('input');
    const show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    b.classList.toggle('on', show);
  }));
  document.querySelectorAll('[data-soon]').forEach(b => b.addEventListener('click', () => toast(b.dataset.soon + ' sign-in needs a server and is not enabled in this version.')));

  function busy(btn, on, label) { btn.disabled = on; btn.textContent = on ? 'Please wait…' : label; }

  if (page === 'login') {
    const form = $('#loginForm'), email = $('#email'), pw = $('#password'), btn = $('#submitBtn');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const ok1 = setErr(email, A.validEmail(email.value.trim()) ? '' : 'Enter a valid email address.');
      const ok2 = setErr(pw, pw.value ? '' : 'Enter your password.');
      if (!ok1 || !ok2) return;
      busy(btn, true, 'Login');
      try { await A.login(email.value, pw.value); location.replace('index.html'); }
      catch (err) { setErr(pw, err.message); busy(btn, false, 'Login'); }
    });

    // forgot password dialog
    const dlg = $('#forgot');
    $('#forgotLink').addEventListener('click', (e) => { e.preventDefault(); dlg.classList.add('open'); $('#fEmail').focus(); });
    $('#fClose').addEventListener('click', () => dlg.classList.remove('open'));
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.classList.remove('open'); });
    $('#forgotForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fe = $('#fEmail'), fp = $('#fPass');
      const a = setErr(fe, A.validEmail(fe.value.trim()) ? '' : 'Enter a valid email address.');
      const b = setErr(fp, A.validPassword(fp.value) ? '' : 'Use 8+ characters with a letter and a number.');
      if (!a || !b) return;
      try { await A.resetPassword(fe.value, fp.value); dlg.classList.remove('open'); toast('Password updated. You can log in now.'); email.value = fe.value; pw.value = ''; }
      catch (err) { setErr(fe, err.message); }
    });
  }

  if (page === 'signup') {
    const form = $('#signupForm'), btn = $('#submitBtn');
    const name = $('#name'), email = $('#email'), pw = $('#password'), cf = $('#confirm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const r = [
        setErr(name, name.value.trim().length >= 2 ? '' : 'Enter your full name.'),
        setErr(email, A.validEmail(email.value.trim()) ? '' : 'Enter a valid email address.'),
        setErr(pw, A.validPassword(pw.value) ? '' : 'Use 8+ characters with a letter and a number.'),
        setErr(cf, cf.value === pw.value && cf.value ? '' : 'Passwords do not match.')
      ];
      if (r.includes(false)) return;
      busy(btn, true, 'Create Account');
      try { await A.register(name.value, email.value, pw.value); location.replace('index.html'); }
      catch (err) { setErr(email, err.message); busy(btn, false, 'Create Account'); }
    });
  }
})();
