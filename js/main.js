/* ==========================================================================
   main.js
   Orchestrator: menginisialisasi semua modul saat DOM siap.
   Alur:
     1. ThemeManager terapkan tema tersimpan / preferensi sistem.
     2. Setiap section di-render dari data array via Renderer-nya masing-masing.
     3. ProjectsController dilampirkan ke section #projects yang baru di-render.
     4. Animator (scroll fade, skill bar) menempel ke DOM final.
     5. LanguageSwitcher memicu _fullRender ulang saat bahasa diganti.
   ========================================================================== */

class PortfolioApp {
  constructor(projectRecords) {
    this.repository = new ProjectRepository(projectRecords);

    this.themeManager = new ThemeManager('themeToggle', 'htmlRoot');
    this.languageSwitcher = new LanguageSwitcher();

    this.renderers = [
      new NavRenderer(),
      new HeroRenderer(),
      new SummaryRenderer(),
      new ExperienceRenderer(),
      new SkillsRenderer(),
      new EducationRenderer(),
      new CertificatesRenderer(),
      new ProjectsSectionRenderer(),
      new ContactRenderer(),
      new FooterRenderer()
    ];

    this.projectsController = null;
    this.scrollFadeAnimator = new ScrollFadeAnimator();
    this.skillBarAnimator = null;
    this.devToolsGuard = new DevToolsGuard();
  }

  start() {
    this.themeManager.init();
    document.title = PROFILE_DATA.pageTitle;

    const lang = this.languageSwitcher.currentLang;
    this._fullRender(lang);
    this.languageSwitcher.applyUiState();

    this.devToolsGuard.enable();

    this.languageSwitcher.onLanguageChange = (newLang) => this._fullRender(newLang);
  }

  _fullRender(lang) {
    this.renderers.forEach(r => r.render(lang));

    // #projects baru saja di-render → ProjectsController perlu dibuat ulang
    // supaya mengambil referensi #projectsGrid dan tombol filter yang baru.
    this.projectsController = new ProjectsController(this.repository);
    this.projectsController.gallery.setLanguage(lang);
    this.projectsController.init();
    window.closeProjectModal = () => this.projectsController.closeModal();

    // Animator menempel ke DOM yang baru di-render
    this.scrollFadeAnimator.observe();
    this.skillBarAnimator = new SkillBarAnimator('skills');
    this.skillBarAnimator.observe();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp(PROJECT_RECORDS);
  app.start();
});
