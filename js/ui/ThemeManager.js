/* ==========================================================================
   ThemeManager.js
   Default theme = light. User bisa toggle ke dark lewat tombol; pilihan
   tidak disimpan, jadi setiap halaman dibuka selalu kembali ke light.
   ========================================================================== */

class ThemeManager {
  static DEFAULT_THEME = 'light';

  constructor(toggleButtonId, htmlRootId) {
    this.toggleButton = document.getElementById(toggleButtonId);
    this.htmlRoot = document.getElementById(htmlRootId);

    this._bindToggle();
  }

  init() {
    this._applyTheme(ThemeManager.DEFAULT_THEME);
  }

  _applyTheme(theme) {
    this.htmlRoot.setAttribute('data-theme', theme);
    this.toggleButton.textContent = theme === 'dark' ? '🌙' : '☀️';
    this.toggleButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  _currentTheme() {
    return this.htmlRoot.getAttribute('data-theme') || ThemeManager.DEFAULT_THEME;
  }

  _bindToggle() {
    this.toggleButton.addEventListener('click', () => {
      const nextTheme = this._currentTheme() === 'dark' ? 'light' : 'dark';
      this._applyTheme(nextTheme);
    });
  }
}
