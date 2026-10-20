/* ==========================================================================
   SummaryRenderer.js
   Render section #summary dari SUMMARY_DATA.
   ========================================================================== */

class SummaryRenderer {
  constructor() {
    this.sectionEl = document.getElementById('summary');
  }

  render(lang = 'id') {
    const paragraphs = SUMMARY_DATA.paragraphs
      .map(p => `<p>${I18n.pick(p, lang)}</p>`)
      .join('');

    const infoList = SUMMARY_DATA.infoList.map(item => `
      <div class="info-item">
        <span class="info-icon">${item.icon}</span>
        <div>
          <div class="info-label">${I18n.t(item.labelKey, lang)}</div>
          <div class="info-val">${I18n.pick(item.value, lang)}</div>
        </div>
      </div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ tagKey: 'section_about_tag', titleKey: 'section_about_title', lang })}
        <div class="summary-grid fade-in">
          <div class="summary-text">${paragraphs}</div>
          <div class="info-list">${infoList}</div>
        </div>
      </div>
    `;
  }
}
