/* ==========================================================================
   Project.js
   Model yang membungkus satu record project mentah menjadi object
   dengan behavior (bukan array of plain object yang diakses langsung).
   ========================================================================== */

class Project {
  constructor(record) {
    this.id = record.id;
    this.name = record.name;
    this.subtitle = record.subtitle;
    this.icon = record.icon;
    this.repoUrl = record.repoUrl;
    this.type = record.type;
    this.tags = record.tags;
    this.shortDesc = record.shortDesc;
    this.description = record.description;
    this.techStack = record.techStack;
    this.projectStructure = record.projectStructure;
    this.testCases = record.testCases;
    this.pattern = record.pattern;
  }

  hasType(filterType) {
    return filterType === 'all' || this.type.includes(filterType);
  }

  hasRepo() {
    return Boolean(this.repoUrl);
  }

  getShortDesc(lang = I18n.DEFAULT_LANG) {
    return this.shortDesc[lang] || this.shortDesc.id;
  }

  getDescription(lang = I18n.DEFAULT_LANG) {
    return this.description[lang] || this.description.id;
  }
}
