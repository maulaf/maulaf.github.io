/* ==========================================================================
   ProjectCardRenderer.js
   Bertanggung jawab membangun markup HTML untuk satu project card.
   ========================================================================== */

class ProjectCardRenderer {
  render(project, lang = 'id') {
    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-header">
          <div style="font-size:1.8rem">${project.icon}</div>
          <div style="font-size:0.75rem;font-family:var(--mono);color:var(--muted)">${I18n.t('project_card_detail_arrow', lang)}</div>
        </div>
        <div class="project-name">${project.name}</div>
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
