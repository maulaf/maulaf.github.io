/* ==========================================================================
   ExperienceRenderer.js
   Render timeline pengalaman kerja dari EXPERIENCES.
   ========================================================================== */

class ExperienceRenderer {
  constructor() {
    this.sectionEl = document.getElementById('experience');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const items = EXPERIENCES.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-top">
            <div class="timeline-role">${exp.role}</div>
            <div class="timeline-period">${exp.period}</div>
          </div>
          <div class="timeline-company">${exp.company}</div>
          <div class="timeline-desc">${I18n.pick(exp.description, lang)}</div>
        </div>
      </div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ titleKey: 'section_experience_title', lang })}
        <div class="timeline-wrap fade-in">
          <div class="timeline-nav">
            <button type="button" class="timeline-prev" aria-label="${lang === 'en' ? 'Previous' : 'Sebelumnya'}">←</button>
            <button type="button" class="timeline-next" aria-label="${lang === 'en' ? 'Next' : 'Berikutnya'}">→</button>
          </div>
          <div class="timeline" tabindex="0">${items}</div>
        </div>
      </div>
    `;

    this.bindNav();
  }

  // Tombol kiri/kanan menggeser satu kartu; dinonaktifkan di ujung track.
  bindNav() {
    const track = this.sectionEl.querySelector('.timeline');
    const prev = this.sectionEl.querySelector('.timeline-prev');
    const next = this.sectionEl.querySelector('.timeline-next');
    const step = () => {
      const item = track.querySelector('.timeline-item');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.offsetWidth + gap : track.clientWidth;
    };
    const update = () => {
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    if (!this.resizeBound) {
      window.addEventListener('resize', () => this.updateNav && this.updateNav());
      this.resizeBound = true;
    }
    this.updateNav = update;
    update();
  }
}
