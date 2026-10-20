/* ==========================================================================
   FooterRenderer.js
   Render teks footer dari translations (menggantikan placeholder {year}).
   ========================================================================== */

class FooterRenderer {
  constructor() {
    this.footerEl = document.getElementById('siteFooter');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const year = new Date().getFullYear();
    const text = I18n.t('footer_text', lang).replace('{year}', year);
    this.footerEl.innerHTML = `<p>${text}</p>`;
  }
}
