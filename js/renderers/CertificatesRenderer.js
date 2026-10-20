/* ==========================================================================
   CertificatesRenderer.js
   Render daftar sertifikat dari CERTIFICATES.
   ========================================================================== */

class CertificatesRenderer {
  constructor() {
    this.sectionEl = document.getElementById('certificates');
  }

  render(lang = 'id') {
    const cards = CERTIFICATES.map(cert => `
      <a href="${cert.url}" target="_blank" rel="noopener" class="cert-link">
        <div class="cert-card">
          <div class="cert-icon">${cert.icon}</div>
          <div>
            <div class="cert-name">${cert.name}</div>
            <div class="cert-issuer">${cert.issuer}</div>
          </div>
        </div>
      </a>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ tagKey: 'section_certificates_tag', titleKey: 'section_certificates_title', lang })}
        <div class="cert-grid fade-in">${cards}</div>
      </div>
    `;
  }
}
