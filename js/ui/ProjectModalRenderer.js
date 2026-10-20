/* ==========================================================================
   ProjectModalRenderer.js
   Bertanggung jawab membangun markup HTML untuk konten dalam modal detail.
   ========================================================================== */

class ProjectModalRenderer {
  render(project, lang = 'id') {
    return `
      <div class="modal-section">
        <div class="modal-section-title">📋 ${I18n.t('modal_description', lang)}</div>
        <div class="modal-desc">${project.getDescription(lang)}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⚡ ${I18n.t('modal_tech_stack', lang)}</div>
        <div class="tech-stack">${project.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">📁 ${I18n.t('modal_structure', lang)}</div>
        <div class="structure-tree">${project.projectStructure}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">🧪 ${I18n.t('modal_test_cases', lang)}</div>
        <div style="overflow-x:auto">
          <table class="tc-table">
            <thead><tr>
              <th>ID</th>
              <th>${I18n.t('modal_test_case', lang)}</th>
              <th>${I18n.t('modal_input', lang)}</th>
              <th>${I18n.t('modal_expected', lang)}</th>
              <th>${I18n.t('modal_status', lang)}</th>
            </tr></thead>
            <tbody>${project.testCases.map(tc => `
              <tr>
                <td><code style="color:var(--accent);font-size:0.75rem">${tc.id}</code></td>
                <td>${tc.name}</td>
                <td style="font-size:0.78rem">${tc.input}</td>
                <td style="font-size:0.78rem">${tc.expected}</td>
                <td class="${tc.status}">${tc.status === 'pass' ? `✓ ${I18n.t('modal_pass', lang)}` : `✗ ${I18n.t('modal_fail', lang)}`}</td>
              </tr>
            `).join('')}</tbody>
          </table>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⚙️ ${I18n.t('modal_pattern', lang)}</div>
        <div class="pattern-box">${project.pattern}</div>
      </div>
      ${this._renderRepoSection(project, lang)}
      <div class="modal-section">
        <div class="modal-section-title">🏷️ ${I18n.t('modal_tags', lang)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem">${project.tags.map(tag => `<span class="tag ${tag.style}">${tag.label}</span>`).join('')}</div>
      </div>
    `;
  }

  _renderRepoSection(project, lang) {
    if (!project.hasRepo()) return '';
    return `
      <div class="modal-section">
        <div class="modal-section-title">🔗 ${I18n.t('modal_repository', lang)}</div>
        <a href="${project.repoUrl}" target="_blank" rel="noopener" class="modal-repo-link">🔗 ${I18n.t('modal_view_repo', lang)} →</a>
      </div>
    `;
  }
}
