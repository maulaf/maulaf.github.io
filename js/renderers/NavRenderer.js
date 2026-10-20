/* ==========================================================================
   NavRenderer.js
   Render daftar link di nav dari NAV_LINKS + reaktif terhadap bahasa.
   ========================================================================== */

class NavRenderer {
  constructor() {
    this.listEl = document.getElementById('navLinks');
  }

  render(lang = 'id') {
    this.listEl.innerHTML = NAV_LINKS.map(link => `
      <li><a href="${link.href}">${I18n.t(link.labelKey, lang)}</a></li>
    `).join('');
  }
}
