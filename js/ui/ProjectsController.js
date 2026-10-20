/* ==========================================================================
   ProjectsController.js
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
