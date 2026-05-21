function toggleTheme() {
  var current = localStorage.getItem('finsight-theme') || 'light';
  var next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('finsight-theme', next);
  applyTheme(next);
}

function applyTheme(mode) {
  var html = document.documentElement;
  var isDark = mode === 'dark';
  var setTheme = function() {
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(mode);
  };
  if (document.startViewTransition) {
    document.startViewTransition(function() { setTheme(); });
  } else {
    html.classList.add('theme-transition');
    setTheme();
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        html.classList.remove('theme-transition');
      });
    });
  }
}

function updateThemeIcon(mode) {
  document.getElementById('themeIconSun').style.display = mode === 'light' ? 'block' : 'none';
  document.getElementById('themeIconMoon').style.display = mode === 'dark' ? 'block' : 'none';
  document.getElementById('themeToggleBtn').title = mode === 'dark' ? '暗色模式' : '亮色模式';
}

(function() {
  var mode = localStorage.getItem('finsight-theme') || 'light';
  applyTheme(mode);
})();