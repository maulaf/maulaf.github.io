/* ==========================================================================
   SectionHeaderRenderer.js
   Markup header section reusable (title + divider).
   ========================================================================== */

class SectionHeaderRenderer {
  static render({ titleKey, lang = I18n.DEFAULT_LANG }) {
    return `
      <div class="section-header fade-in">
        <h2 class="section-title">${I18n.t(titleKey, lang)}</h2>
        <div class="divider"></div>
      </div>
    `;
  }
}
