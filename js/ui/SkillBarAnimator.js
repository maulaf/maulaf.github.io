/* ==========================================================================
   SkillBarAnimator.js
   Mengisi width .skill-fill berdasarkan atribut data-width saat section
   Skills terlihat di viewport.
   ========================================================================== */

class SkillBarAnimator {
  constructor(sectionElementId) {
    this.sectionId = sectionElementId;
    this._hasAnimated = false;
  }

  observe() {
    const section = document.getElementById(this.sectionId);
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) this._animate();
    }, { threshold: 0.3 });

    observer.observe(section);
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
