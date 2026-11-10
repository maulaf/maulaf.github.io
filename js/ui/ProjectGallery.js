/* ==========================================================================
   ProjectGallery.js
   Mengatur grid project: render daftar, dan filter berdasarkan tipe.
   Klik pada card (di luar link repo) akan memicu callback onCardSelect.
   ========================================================================== */

class ProjectGallery {
  constructor(repository, gridElementId, cardRenderer, toggleElementId) {
    this.repository = repository;
    this.gridElement = document.getElementById(gridElementId);
    this.toggleElement = document.getElementById(toggleElementId);
    this.cardRenderer = cardRenderer;
    this.currentFilter = 'all';
    this.currentLang = I18n.DEFAULT_LANG;
    this.expanded = false;
    this.onCardSelect = null;

    this._bindCardClicks();
    this._bindToggle();
  }

  render(filterType = this.currentFilter) {
    // Ganti filter → kembali ke tampilan ringkas.
    if (filterType !== this.currentFilter) this.expanded = false;
    this.currentFilter = filterType;

    const projects = this.repository.filterByType(filterType);
    const hasMore = projects.length > PROJECTS_VISIBLE;
    const visible = hasMore && !this.expanded ? projects.slice(0, PROJECTS_VISIBLE) : projects;

    this.gridElement.innerHTML = visible.map(p => this.cardRenderer.render(p, this.currentLang)).join('');
    this._renderToggle(hasMore);
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.render(this.currentFilter);
  }

  setActiveFilterButton(clickedButton) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
  }

  // Tombol Show More / Show Less hanya tampil jika project > PROJECTS_VISIBLE.
  _renderToggle(hasMore) {
    if (!this.toggleElement) return;
    this.toggleElement.hidden = !hasMore;
    this.toggleElement.textContent = I18n.t(this.expanded ? 'skills_show_less' : 'skills_show_more', this.currentLang);
    this.toggleElement.setAttribute('aria-expanded', String(this.expanded));
  }

  _bindToggle() {
    if (!this.toggleElement) return;
    this.toggleElement.addEventListener('click', () => {
      this.expanded = !this.expanded;
      this.render(this.currentFilter);
      // Saat diciutkan, kembalikan posisi ke awal grid agar pengguna tidak "tertinggal" di bawah.
      if (!this.expanded) this.gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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

    // Card bisa dibuka dengan keyboard (Enter / Space) saat sedang difokus.
    this.gridElement.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const card = event.target.closest('.project-card');
      if (!card || event.target !== card) return;

      event.preventDefault();
      if (this.onCardSelect) this.onCardSelect(Number(card.dataset.projectId));
    });
  }
}
