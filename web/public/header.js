/*
  Inject shared header into static HTML pages.
  Include with: <script src="/header.js" defer></script>
  The header is inserted as the first child of <body>.
*/
(function () {
  const d = document;
  // avoid double-injection
  if (d.getElementById('site-header')) return;

  const header = d.createElement('header');
  header.id = 'site-header';
  header.className = 'site-header';
  header.innerHTML = '<a href="/">Home</a><a href="/guides">Guides</a><a href="/about">About</a>';

  d.body.insertBefore(header, d.body.firstChild);
})();