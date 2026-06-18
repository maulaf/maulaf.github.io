/* ==========================================================================
   app.js
   ⚙️  RENDER & FILTER LOGIC — Tidak perlu diedit
   Struktur OOP: setiap class punya satu tanggung jawab (single responsibility).
   PortfolioApp adalah orchestrator yang menginisialisasi semua modul saat
   DOM siap.
   ========================================================================== */

/* ==========================================================================
   ProjectCardRenderer
   Bertanggung jawab membangun markup HTML untuk satu project card.
   ========================================================================== */
class ProjectCardRenderer {
  render(project, lang = 'id') {
    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-header">
          <div style="font-size:1.8rem">${project.icon}</div>
          <div style="font-size:0.75rem;font-family:var(--mono);color:var(--muted)">Detail →</div>
        </div>
        <div class="project-name">${project.name}</div>
        <div class="project-desc">${project.getShortDesc(lang)}</div>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tag ${t.style}">${t.label}</span>`).join('')}
        </div>
        <div class="project-card-footer-row">
          <div class="project-footer">🔍 Lihat Detail</div>
          ${this._renderRepoLink(project)}
        </div>
      </div>
    `;
  }

  _renderRepoLink(project) {
    if (!project.hasRepo()) return '';
    return `<a href="${project.repoUrl}" target="_blank" rel="noopener" class="repo-link" data-role="repo-link" onclick="event.stopPropagation()">🔗 Repo</a>`;
  }
}

/* ==========================================================================
   ProjectGallery
   Mengatur grid project: render daftar, dan filter berdasarkan tipe.
   Klik pada card (di luar link repo) akan memicu callback onCardSelect.
   ========================================================================== */
class ProjectGallery {
  constructor(repository, gridElementId, cardRenderer) {
    this.repository = repository;
    this.gridElement = document.getElementById(gridElementId);
    this.cardRenderer = cardRenderer;
    this.currentFilter = 'all';
    this.currentLang = 'id';
    this.onCardSelect = null;

    this._bindCardClicks();
  }

  render(filterType = this.currentFilter) {
    this.currentFilter = filterType;
    const projects = this.repository.filterByType(filterType);
    this.gridElement.innerHTML = projects.map(p => this.cardRenderer.render(p, this.currentLang)).join('');
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.render(this.currentFilter);
  }

  setActiveFilterButton(clickedButton) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
  }

  _bindCardClicks() {
    this.gridElement.addEventListener('click', (event) => {
      const repoLink = event.target.closest('[data-role="repo-link"]');
      if (repoLink) return; // biarkan link repo membuka tab baru secara normal

      const card = event.target.closest('.project-card');
      if (!card) return;

      const id = Number(card.dataset.projectId);
      if (this.onCardSelect) this.onCardSelect(id);
    });
  }
}

/* ==========================================================================
   ProjectModalRenderer
   Bertanggung jawab membangun markup HTML untuk konten dalam modal detail.
   ========================================================================== */
class ProjectModalRenderer {
  render(project, lang = 'id') {
    const t = this._labels(lang);
    return `
      <div class="modal-section">
        <div class="modal-section-title">📋 ${t.description}</div>
        <div class="modal-desc">${project.getDescription(lang)}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⚡ ${t.techStack}</div>
        <div class="tech-stack">${project.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">📁 ${t.structure}</div>
        <div class="structure-tree">${project.projectStructure}</div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">🧪 ${t.testCases}</div>
        <div style="overflow-x:auto">
          <table class="tc-table">
            <thead><tr><th>ID</th><th>${t.testCase}</th><th>${t.input}</th><th>${t.expected}</th><th>${t.status}</th></tr></thead>
            <tbody>${project.testCases.map(tc => `
              <tr>
                <td><code style="color:var(--accent);font-size:0.75rem">${tc.id}</code></td>
                <td>${tc.name}</td>
                <td style="font-size:0.78rem">${tc.input}</td>
                <td style="font-size:0.78rem">${tc.expected}</td>
                <td class="${tc.status}">${tc.status === 'pass' ? `✓ ${t.pass}` : `✗ ${t.fail}`}</td>
              </tr>
            `).join('')}</tbody>
          </table>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⚙️ ${t.pattern}</div>
        <div class="pattern-box">${project.pattern}</div>
      </div>
      ${this._renderRepoSection(project, t)}
      <div class="modal-section">
        <div class="modal-section-title">🏷️ ${t.tags}</div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem">${project.tags.map(tag => `<span class="tag ${tag.style}">${tag.label}</span>`).join('')}</div>
      </div>
    `;
  }

  _renderRepoSection(project, t) {
    if (!project.hasRepo()) return '';
    return `
      <div class="modal-section">
        <div class="modal-section-title">🔗 ${t.repository}</div>
        <a href="${project.repoUrl}" target="_blank" rel="noopener" class="modal-repo-link">🔗 ${t.viewRepo} →</a>
      </div>
    `;
  }

  _labels(lang) {
    const labels = {
      id: {
        description: "Deskripsi Project",
        techStack: "Tech Stack",
        structure: "Struktur Project",
        testCases: "Sample Test Cases",
        testCase: "Test Case",
        input: "Input",
        expected: "Expected Result",
        status: "Status",
        pass: "Pass",
        fail: "Fail",
        pattern: "Pola Implementasi",
        repository: "Repository",
        viewRepo: "Lihat Repository",
        tags: "Tags"
      },
      en: {
        description: "Project Description",
        techStack: "Tech Stack",
        structure: "Project Structure",
        testCases: "Sample Test Cases",
        testCase: "Test Case",
        input: "Input",
        expected: "Expected Result",
        status: "Status",
        pass: "Pass",
        fail: "Fail",
        pattern: "Implementation Pattern",
        repository: "Repository",
        viewRepo: "View Repository",
        tags: "Tags"
      }
    };
    return labels[lang] || labels.id;
  }
}

/* ==========================================================================
   ProjectModal
   Mengatur buka/tutup modal detail project serta mengisi kontennya.
   ========================================================================== */
class ProjectModal {
  constructor(repository, modalRenderer, overlayElementId) {
    this.repository = repository;
    this.modalRenderer = modalRenderer;
    this.overlay = document.getElementById(overlayElementId);
    this.titleEl = document.getElementById('modalTitle');
    this.subtitleEl = document.getElementById('modalSubtitle');
    this.bodyEl = document.getElementById('modalBody');
    this.currentLang = 'id';
    this.currentProject = null;

    this._bindDismissEvents();
  }

  open(projectId) {
    const project = this.repository.getById(projectId);
    if (!project) return;

    this.currentProject = project;
    this._renderContent();

    this.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  setLanguage(lang) {
    this.currentLang = lang;
    if (this.currentProject && this.overlay.classList.contains('open')) {
      this._renderContent();
    }
  }

  _renderContent() {
    const project = this.currentProject;
    this.titleEl.textContent = project.name;
    this.subtitleEl.textContent = project.subtitle;
    this.bodyEl.innerHTML = this.modalRenderer.render(project, this.currentLang);
  }

  _bindDismissEvents() {
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) this.close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.close();
    });
  }
}

/* ==========================================================================
   ProjectsController
   Menjembatani ProjectGallery, ProjectModal, dan tombol filter di DOM.
   ========================================================================== */
class ProjectsController {
  constructor(repository) {
    this.gallery = new ProjectGallery(repository, 'projectsGrid', new ProjectCardRenderer());
    this.modal = new ProjectModal(repository, new ProjectModalRenderer(), 'projectModal');

    this.gallery.onCardSelect = (id) => this.modal.open(id);

    this._bindFilterButtons();
  }

  init() {
    this.gallery.render('all');
  }

  closeModal() {
    this.modal.close();
  }

  setLanguage(lang) {
    this.gallery.setLanguage(lang);
    this.modal.setLanguage(lang);
  }

  _bindFilterButtons() {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(button => {
      button.addEventListener('click', () => {
        this.gallery.setActiveFilterButton(button);
        this.gallery.render(button.dataset.filter);
      });
    });
  }
}

/* ==========================================================================
   LanguageSwitcher
   Mengatur toggle tampilan teks ID/EN di seluruh halaman.
   ========================================================================== */
class LanguageSwitcher {
  constructor() {
    this.idButton = document.getElementById('btn-id');
    this.enButton = document.getElementById('btn-en');
    this.onLanguageChange = null;
    this._bindButtons();
  }

  setLanguage(lang) {
    const isIndonesian = lang === 'id';

    document.querySelectorAll('.lang-id').forEach(el => {
      el.style.display = isIndonesian ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = isIndonesian ? 'none' : 'inline';
    });

    this.idButton.classList.toggle('active', isIndonesian);
    this.enButton.classList.toggle('active', !isIndonesian);

    if (this.onLanguageChange) this.onLanguageChange(lang);
  }

  _bindButtons() {
    this.idButton.addEventListener('click', () => this.setLanguage('id'));
    this.enButton.addEventListener('click', () => this.setLanguage('en'));
  }
}

/* ==========================================================================
   SkillBarAnimator
   Mengisi width skill-fill berdasarkan data-width saat section Skills
   terlihat di viewport.
   ========================================================================== */
class SkillBarAnimator {
  constructor(sectionElementId) {
    this.section = document.getElementById(sectionElementId);
    this._hasAnimated = false;
  }

  observe() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) this._animate();
    }, { threshold: 0.3 });

    observer.observe(this.section);
  }

  _animate() {
    if (this._hasAnimated) return;
    this._hasAnimated = true;

    document.querySelectorAll('.skill-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = `${width}%`;
    });
  }
}

/* ==========================================================================
   ScrollFadeAnimator
   Menambahkan class "visible" pada elemen .fade-in saat masuk viewport.
   ========================================================================== */
class ScrollFadeAnimator {
  observe() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}

/* ==========================================================================
   DevToolsGuard
   Menonaktifkan klik kanan dan shortcut umum untuk membuka DevTools.
   ========================================================================== */
class DevToolsGuard {
  enable() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', (event) => {
      const isBlockedShortcut =
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'u');

      if (isBlockedShortcut) event.preventDefault();
    });
  }
}

/* ==========================================================================
   PortfolioApp
   Orchestrator utama: menginisialisasi seluruh modul di atas saat DOM siap.
   ========================================================================== */
class PortfolioApp {
  constructor(projectRecords) {
    this.repository = new ProjectRepository(projectRecords);
    this.projectsController = new ProjectsController(this.repository);
    this.languageSwitcher = new LanguageSwitcher();
    this.skillBarAnimator = new SkillBarAnimator('skills');
    this.scrollFadeAnimator = new ScrollFadeAnimator();
    this.devToolsGuard = new DevToolsGuard();

    this.languageSwitcher.onLanguageChange = (lang) => this.projectsController.setLanguage(lang);
  }

  start() {
    this.projectsController.init();
    this.skillBarAnimator.observe();
    this.scrollFadeAnimator.observe();
    this.devToolsGuard.enable();

    // Expose modal close ke tombol close di markup HTML
    window.closeProjectModal = () => this.projectsController.closeModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp(PROJECT_RECORDS);
  app.start();
});
