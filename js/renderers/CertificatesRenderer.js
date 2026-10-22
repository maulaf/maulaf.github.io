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
}
