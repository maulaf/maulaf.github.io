/* ==========================================================================
   ContactRenderer.js
   Render section #contact dari CONTACTS + translations.
   ========================================================================== */

class ContactRenderer {
  constructor() {
    this.sectionEl = document.getElementById('contact');
  }

  render(lang = 'id') {
    const email = (CONTACTS.find(c => c.labelKey === 'contact_label_email') || {}).href || '#';

    const cards = CONTACTS.map(c => {
      const external = c.external ? 'target="_blank" rel="noopener"' : '';
      return `
        <a href="${c.href}" ${external} class="contact-card">
          <span class="contact-icon">${c.icon}</span>
          <div>
            <div class="contact-label">${I18n.t(c.labelKey, lang)}</div>
            <div class="contact-val">${c.value}</div>
          </div>
        </a>
      `;
    }).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ tagKey: 'section_contact_tag', titleKey: 'section_contact_title', lang })}
        <div class="contact-grid fade-in">
          <div class="contact-cta">
            <h3>${I18n.t('contact_heading', lang)}</h3>
            <p>${I18n.t('contact_body', lang)}</p>
            <a href="${email}" class="btn btn-primary">${I18n.t('contact_cta_email', lang)}</a>
          </div>
          <div class="contact-cards">${cards}</div>
        </div>
      </div>
    `;
  }
}
