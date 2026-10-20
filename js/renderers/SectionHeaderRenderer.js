/* ==========================================================================
   SectionHeaderRenderer.js
   Markup header section reusable (tag + title + divider).
   ========================================================================== */

class SectionHeaderRenderer {
  static render({ tagKey, titleKey, lang = 'id' }) {
    return `
      <div class="section-header fade-in">
        <div class="section-tag">${I18n.t(tagKey, lang)}</div>
        <h2 class="section-title">${I18n.t(titleKey, lang)}</h2>
        <div class="divider"></div>
      </div>
    `;
  }
}
