/* ==========================================================================
   ProjectRepository.js
   Satu titik akses ke koleksi data project (pola "Repository"), sehingga
   logic render/filter di UI layer tidak pernah menyentuh array mentah.
   ========================================================================== */

class ProjectRepository {
  constructor(records) {
    this._projects = records.map(record => new Project(record));
  }

  getAll() {
    return this._projects;
  }

  getById(id) {
    return this._projects.find(project => project.id === id) || null;
  }

  filterByType(type) {
    return this._projects.filter(project => project.hasType(type));
  }
}
