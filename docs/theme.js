// Applies the saved theme before the page is drawn, so it never flashes light then dark.
// A separate file, not inline in index.html: the server's security headers (CSP) block inline scripts.
// Same logic as src/lib/theme.ts, which takes over once the app has loaded.
(function () {
  var choice = null
  try { choice = localStorage.getItem('tulga-theme') } catch (e) { /* storage blocked: follow the system */ }
  var dark = choice === 'dark' || (choice !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
})()
