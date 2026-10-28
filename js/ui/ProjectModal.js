/* ==========================================================================
   ProjectModal.js
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
    this.currentLang = I18n.DEFAULT_LANG;
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
    this.subtitleEl.textContent = project.getSubtitle(this.currentLang);
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
