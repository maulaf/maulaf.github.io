/* ==========================================================================
   ProjectModalRenderer.js
   Bertanggung jawab membangun markup HTML untuk konten dalam modal detail.
   ========================================================================== */

class ProjectModalRenderer {
  render(project, lang = I18n.DEFAULT_LANG) {
    return `
      <div class="modal-section">
        <div class="modal-section-title">📋 ${I18n.t('modal_description', lang)}</div>
        <div class="modal-desc">${project.getDescription(lang)}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⚡ ${I18n.t('modal_tech_stack', lang)}</div>
        <div class="tech-stack">${project.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
      </div>
      ${project.coverage.length ? `<div class="modal-section">
        <div class="modal-section-title">📊 ${I18n.t('modal_coverage', lang)}</div>
        ${this._renderCoverage(project.coverage, lang)}
      </div>` : ''}
      ${project.testCases.length ? `<div class="modal-section">
        <div class="modal-section-title">🧪 ${I18n.t('modal_test_cases', lang)}</div>
        <div class="tc-table-wrap">
          <table class="tc-table">
            <thead><tr>
              <th>ID</th>
              <th>${I18n.t('modal_test_case', lang)}</th>
              <th>${I18n.t('modal_input', lang)}</th>
              <th>${I18n.t('modal_expected', lang)}</th>
            </tr></thead>
            <tbody>${project.testCases.map(tc => `
              <tr>
                <td><code class="tc-id">${tc.id}</code></td>
                <td>${I18n.pick(tc.name, lang)}</td>
                <td class="tc-detail">${I18n.pick(tc.input, lang)}</td>
                <td class="tc-detail">${I18n.pick(tc.expected, lang)}</td>
              </tr>
            `).join('')}</tbody>
          </table>
        </div>
      </div>` : ''}
      <div class="modal-section">
        <div class="modal-section-title">⚙️ ${I18n.t('modal_approach', lang)}</div>
        ${this._renderApproach(project.approach, lang)}
      </div>
      ${this._renderRepoSection(project, lang)}
      <div class="modal-section">
        <div class="modal-section-title">🏷️ ${I18n.t('modal_tags', lang)}</div>
        <div class="modal-tags">${project.tags.map(tag => `<span class="tag ${tag.style}">${tag.label}</span>`).join('')}</div>
      </div>
    `;
  }

  /* coverage = [{ module, count, scope }] — jumlah test case per modul di repo. */
  _renderCoverage(coverage, lang) {
    const total = coverage.reduce((sum, c) => sum + c.count, 0);
    return `
      <div class="tc-table-wrap">
        <table class="tc-table">
          <thead><tr>
            <th>${I18n.t('modal_module', lang)}</th>
            <th>${I18n.t('modal_count', lang)}</th>
            <th>${I18n.t('modal_scope', lang)}</th>
          </tr></thead>
          <tbody>${coverage.map(c => `
            <tr>
              <td>${I18n.pick(c.module, lang)}</td>
              <td class="coverage-count">${c.count}</td>
              <td class="tc-detail">${I18n.pick(c.scope, lang)}</td>
            </tr>
          `).join('')}</tbody>
          ${coverage.length > 1 ? `<tfoot><tr>
            <td>${I18n.t('modal_total', lang)}</td>
            <td class="coverage-count">${total}</td>
            <td></td>
          </tr></tfoot>` : ''}
        </table>
      </div>
    `;
  }

  /* approach = { name?, steps?: [], code?: [{label, content}], notes?: [{title, items: []}] }
     Setiap teks boleh berupa string atau { id, en }. */
  _renderApproach(approach, lang) {
    const steps = approach.steps || [];
    const code = approach.code || [];
    const notes = approach.notes || [];
    return `
      <div class="approach-box">
        ${approach.name ? `<div class="approach-name">${I18n.pick(approach.name, lang)}</div>` : ''}
        ${steps.length ? `<ol class="approach-steps">${steps.map(s => `<li>${I18n.pick(s, lang)}</li>`).join('')}</ol>` : ''}
        ${notes.map(n => `
          <div class="approach-note">
            <div class="approach-label">${I18n.pick(n.title, lang)}</div>
            <ul class="approach-list">${n.items.map(i => `<li>${I18n.pick(i, lang)}</li>`).join('')}</ul>
          </div>
        `).join('')}
        ${code.map(c => `
          <div class="approach-code">
            <div class="approach-label">${I18n.pick(c.label, lang)}</div>
            <pre>${this._escape(I18n.pick(c.content, lang))}</pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  _escape(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
