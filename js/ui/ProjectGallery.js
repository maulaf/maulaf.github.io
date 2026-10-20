/* ==========================================================================
   ProjectGallery.js
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
      if (repoLink) return;

      const card = event.target.closest('.project-card');
      if (!card) return;

      const id = Number(card.dataset.projectId);
      if (this.onCardSelect) this.onCardSelect(id);
    });
  }
}
