/* ==========================================================================
   HeroRenderer.js
   Render hero section (judul, bio, CTA) + kartu profil kanan.
   ========================================================================== */

class HeroRenderer {
  constructor() {
    this.sectionEl = document.getElementById('hero');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const p = PROFILE_DATA;
    this.sectionEl.innerHTML = `
      <div class="hero-grid">
        <div>
          <div class="hero-label">${I18n.t('hero_label', lang)}</div>
          <h1 class="hero-title">${p.name.first} <span>${p.name.last}</span></h1>
          <div class="hero-role">${I18n.pick(p.role, lang)}</div>
          <p class="hero-bio">${I18n.pick(p.bio, lang)}</p>
          <div class="btn-group">
            <a href="#projects" class="btn btn-primary">${I18n.t('hero_cta_projects', lang)}</a>
            <a href="#contact" class="btn btn-outline">${I18n.t('hero_cta_contact', lang)}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="profile-card">
            <div class="available-badge"><span class="pulse-dot"></span> ${I18n.t('hero_badge', lang)}</div>
            <div class="profile-avatar">${this.renderAvatar(p)}</div>
            <h3>${p.shortName}</h3>
            <p>${I18n.pick(p.location, lang)}</p>
            <div class="stat-row">
              ${p.stats.map(s => `
                <div class="stat">
                  <div class="stat-num">${s.num}</div>
                  <div class="stat-label">${I18n.t(s.labelKey, lang)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Foto profil dari project; fallback ke emoji jika path kosong atau gambar gagal dimuat.
  renderAvatar(p) {
    if (!p.avatarImage) return p.avatarEmoji;
    return `<img src="${p.avatarImage}" alt="${p.shortName}"
      onerror="this.replaceWith(document.createTextNode('${p.avatarEmoji}'))">`;
  }
}
