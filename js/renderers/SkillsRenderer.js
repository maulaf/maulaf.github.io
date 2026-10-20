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

    const tools = TOOLS.map(tool => `
      <div class="tool-chip"><span class="tool-icon">${tool.icon}</span> ${tool.name}</div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ tagKey: 'section_skills_tag', titleKey: 'section_skills_title', lang })}
        <div class="skills-grid fade-in">${categories}</div>
        <div style="margin-top: 3rem;">
          <div class="section-tag" style="margin-bottom: 1.2rem;">${I18n.t('skills_tools_tag', lang)}</div>
          <div class="tools-grid">${tools}</div>
        </div>
      </div>
    `;
  }
}
