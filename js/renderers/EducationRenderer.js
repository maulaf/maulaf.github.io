/* ==========================================================================
   EducationRenderer.js
   Render daftar pendidikan dari EDUCATION.
   ========================================================================== */

class EducationRenderer {
  constructor() {
    this.sectionEl = document.getElementById('education');
  }

  render(lang = I18n.DEFAULT_LANG) {
    const cards = EDUCATION.map(edu => `
      <div class="edu-card">
        <div class="edu-degree">${I18n.pick(edu.degree, lang)}</div>
        <div class="edu-school">${edu.school}</div>
        <div class="edu-year">${edu.year}</div>
        ${edu.gpa ? `<div class="edu-gpa">${I18n.t('education_gpa', lang)}: <strong>${edu.gpa}</strong></div>` : ''}
        ${edu.coursework ? `
          <div class="coursework-list">
            <strong>${I18n.t('education_relevant', lang)}</strong><br>
            ${I18n.pick(edu.coursework, lang)}
          </div>
        ` : ''}
      </div>
    `).join('');

    this.sectionEl.innerHTML = `
      <div class="section-inner section-container">
        ${SectionHeaderRenderer.render({ titleKey: 'section_education_title', lang })}
        <div class="edu-grid fade-in">${cards}</div>
      </div>
    `;
  }
}
