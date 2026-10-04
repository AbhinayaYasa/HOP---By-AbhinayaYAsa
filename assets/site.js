// Theme toggle (remembers the visitor's choice) and copy-to-clipboard buttons.
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('ay-theme'); if (saved) root.dataset.theme = saved; } catch (e) {}

  var btn = document.querySelector('.theme-btn');
  if (btn) {
    var isDark = function () {
      return root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    };
    var paint = function () { btn.textContent = isDark() ? '☀' : '☾'; btn.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme'); };
    paint();
    btn.addEventListener('click', function () {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('ay-theme', root.dataset.theme); } catch (e) {}
      paint();
    });
  }

  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.dataset.copy);
      var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
      var select = function () { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selected'; };
      try { navigator.clipboard.writeText(el.textContent).then(done, select); } catch (e) { select(); }
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
