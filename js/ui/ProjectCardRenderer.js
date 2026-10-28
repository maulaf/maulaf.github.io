/* ==========================================================================
   ProjectCardRenderer.js
   Bertanggung jawab membangun markup HTML untuk satu project card.
   ========================================================================== */

class ProjectCardRenderer {
  render(project, lang = I18n.DEFAULT_LANG) {
    return `
      <div class="project-card" data-project-id="${project.id}" tabindex="0" aria-haspopup="dialog" aria-labelledby="project-name-${project.id}">
        <div class="project-card-header">
          <div class="project-type-icon" aria-hidden="true">${project.icon}</div>
        </div>
        <h3 class="project-name" id="project-name-${project.id}">${project.name}</h3>
        <div class="project-desc">${project.getShortDesc(lang)}</div>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tag ${t.style}">${t.label}</span>`).join('')}
        </div>
        <div class="project-card-footer-row">
          <div class="project-footer">${I18n.t('project_card_detail', lang)}</div>
          ${this._renderRepoLink(project, lang)}
        </div>
      </div>
    `;
  }

  _renderRepoLink(project, lang) {
    if (!project.hasRepo()) return '';
    return `<a href="${project.repoUrl}" target="_blank" rel="noopener" class="repo-link" data-role="repo-link" onclick="event.stopPropagation()">${I18n.t('project_card_repo', lang)}</a>`;
  }
}
