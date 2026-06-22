(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',   label: 'Historia' },
    { href: 'sitios.html',  label: 'Sitios' },
    { href: 'comida.html',  label: 'Gastronomía' },
    { href: 'cultura.html', label: 'Cultura' },
  ]
  .map(({ href, label }) =>
    href === page
      ? `<a href="${href}" class="text-xs tracking-[0.22em] uppercase text-gold border-b border-gold pb-0.5">${label}</a>`
      : `<a href="${href}" class="text-xs tracking-[0.22em] uppercase text-stone-400 hover:text-gold transition-colors duration-300">${label}</a>`
  )
  .join('');

  document.getElementById('site-nav').outerHTML = `
    <nav class="nav-glass fixed top-0 inset-x-0 z-50 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="index.html" class="font-display text-xl tracking-[0.25em] text-gold uppercase">GDL</a>
        <div class="hidden md:flex items-center gap-8">${navLinks}</div>
      </div>
    </nav>`;

  document.getElementById('site-footer').outerHTML = `
    <footer class="py-14 px-6 border-t border-d4 text-center bg-dark">
      <p class="font-display text-2xl gold-gradient italic mb-2">Guadalajara</p>
      <p class="text-xs tracking-[0.4em] text-stone-600 uppercase">Donde la Tradición Encuentra el Futuro · 2025</p>
    </footer>`;
})();
