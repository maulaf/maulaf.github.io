/* ==========================================================================
   SkillsRenderer.js
   Render SKILL_CATEGORIES + TOOLS.
   ========================================================================== */

class SkillsRenderer {
  constructor() {
    this.sectionEl = document.getElementById('skills');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const categories = SKILL_CATEGORIES.map(cat => `
      <div class="skill-category">
        <div class="skill-cat-title">${I18n.pick(cat.title, lang)}</div>
        ${cat.items.map(item => `
          <div class="skill-item">
            <div class="skill-name-row">
              <span class="skill-name">${item.name}</span>
              <span class="skill-level">${I18n.t(`skill_level_${item.level.toLowerCase()}`, lang)}</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-width="${item.width}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');

    const tools = TOOLS.map((tool, i) => `
      <div class="tool-chip${i >= TOOLS_VISIBLE ? ' tool-chip--extra' : ''}"><span class="tool-icon">${this.renderToolIcon(tool)}</span> ${tool.name}</div>
    `).join('');
    const hasMore = TOOLS.length > TOOLS_VISIBLE;

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ titleKey: 'section_skills_title', lang })}
        <div class="skills-grid fade-in">${categories}</div>
        <div style="margin-top: 3rem;">
          <div class="section-tag" style="margin-bottom: 1.2rem;">${I18n.t('skills_tools_tag', lang)}</div>
          <div class="tools-grid">${tools}</div>
          ${hasMore ? `<button type="button" class="tools-toggle">${I18n.t('skills_show_more', lang)}</button>` : ''}
        </div>
      </div>
    `;

    if (hasMore) this.bindToolsToggle(lang);
  }

  // Tampilkan / sembunyikan tools di luar TOOLS_VISIBLE.
  bindToolsToggle(lang) {
    const grid = this.sectionEl.querySelector('.tools-grid');
    const btn = this.sectionEl.querySelector('.tools-toggle');
    btn.addEventListener('click', () => {
      const expanded = grid.classList.toggle('is-expanded');
      btn.textContent = I18n.t(expanded ? 'skills_show_less' : 'skills_show_more', lang);
    });
  }

  // Logo tool (satu atau beberapa); fallback ke emoji jika kosong atau gagal dimuat.
  renderToolIcon(tool) {
    const logos = [].concat(tool.logo || []);
    if (!logos.length) return tool.icon;
    return logos.map(src => `<img src="${src}" alt="" loading="lazy"
      onerror="this.parentNode.textContent='${tool.icon}'">`).join('');
  }
}
