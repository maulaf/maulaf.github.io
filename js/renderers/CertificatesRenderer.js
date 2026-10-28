/* ==========================================================================
   CertificatesRenderer.js
   Render daftar sertifikat dari CERTIFICATES.
   ========================================================================== */

class CertificatesRenderer {
  constructor() {
    this.sectionEl = document.getElementById('certificates');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const cards = CERTIFICATES.map(cert => `
      <div class="cert-card">
        <div class="cert-head">
          <div class="cert-icon">${cert.icon}</div>
          <div class="cert-body">
            <div class="cert-name">${cert.name}</div>
            <div class="cert-issuer">${cert.issuer}</div>
            ${cert.instructor ? `<div class="cert-meta">${I18n.t('cert_instructor', lang)}: ${cert.instructor}</div>` : ''}
            ${cert.issued ? `<div class="cert-meta">${I18n.t('cert_issued', lang)}: <time datetime="${cert.issued}">${this._formatDate(cert.issued, lang)}</time></div>` : ''}
          </div>
        </div>
        <a href="${cert.url}" target="_blank" rel="noopener" class="cert-btn">${I18n.t('cert_view_credential', lang)}</a>
      </div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ titleKey: 'section_certificates_title', lang })}
        <div class="cert-grid fade-in">${cards}</div>
      </div>
    `;
  }

  // "2023-03-31" → "31 Maret 2023" (id) / "March 31, 2023" (en)
  _formatDate(isoDate, lang) {
    const [y, m, d] = isoDate.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US',
      { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
