/* ==========================================================================
   ExperienceRenderer.js
   Render timeline pengalaman kerja dari EXPERIENCES.
   ========================================================================== */

class ExperienceRenderer {
  constructor() {
    this.sectionEl = document.getElementById('experience');
  }

  render(lang = 'id') {
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
          <div class="timeline-tags">
            ${exp.tags.map(t => `<span class="tag ${t.style}">${t.label}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ tagKey: 'section_experience_tag', titleKey: 'section_experience_title', lang })}
        <div class="timeline fade-in">${items}</div>
      </div>
    `;
  }
}
