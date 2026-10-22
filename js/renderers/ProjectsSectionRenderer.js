/* ==========================================================================
   ProjectsSectionRenderer.js
   Render kerangka section #projects (header, tombol filter, grid kosong).
   Isi grid di-render oleh ProjectGallery.
   ========================================================================== */

class ProjectsSectionRenderer {
  constructor() {
    this.sectionEl = document.getElementById('projects');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const filters = PROJECT_FILTERS.map((f, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${f.value}">${I18n.t(f.labelKey, lang)}</button>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ titleKey: 'section_projects_title', lang })}
        <div class="project-filters fade-in">${filters}</div>
        <div class="projects-grid fade-in" id="projectsGrid"></div>
      </div>
    `;
  }
}
