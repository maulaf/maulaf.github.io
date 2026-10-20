/* ==========================================================================
   NavRenderer.js
   Render daftar link di nav dari NAV_LINKS + reaktif terhadap bahasa.
   Di layar kecil, link tampil sebagai dropdown lewat tombol hamburger.
   ========================================================================== */

class NavRenderer {
  constructor() {
    this.navEl = document.querySelector('nav');
    this.listEl = document.getElementById('navLinks');
    this.toggleEl = document.getElementById('navToggle');
    this._bindMenuToggle();
  }

  render(lang = I18n.DEFAULT_LANG) {
    this.listEl.innerHTML = NAV_LINKS.map(link => `
      <li><a href="${link.href}">${I18n.t(link.labelKey, lang)}</a></li>
    `).join('');
  }

  _setMenuOpen(open) {
    this.navEl.classList.toggle('menu-open', open);
    this.toggleEl.textContent = open ? '✕' : '☰';
    this.toggleEl.setAttribute('aria-expanded', String(open));
    this.toggleEl.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  _bindMenuToggle() {
    this.toggleEl.addEventListener('click', () => {
      this._setMenuOpen(!this.navEl.classList.contains('menu-open'));
    });
    // Tutup menu setelah link dipilih atau saat klik di luar nav
    this.listEl.addEventListener('click', (event) => {
      if (event.target.closest('a')) this._setMenuOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!this.navEl.contains(event.target)) this._setMenuOpen(false);
    });
  }
}
