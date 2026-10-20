/* ==========================================================================
   ThemeManager.js
   Default theme = light. User bisa toggle ke dark lewat tombol; pilihan
   manual disimpan di localStorage sehingga diingat saat halaman dibuka
   kembali.
   ========================================================================== */

class ThemeManager {
  static DEFAULT_THEME = 'light';

  constructor(toggleButtonId, htmlRootId) {
    this.toggleButton = document.getElementById(toggleButtonId);
    this.htmlRoot = document.getElementById(htmlRootId);
    this.storageKey = 'portfolio-theme';

    this._bindToggle();
  }

  init() {
    const theme = this._getSavedTheme() || ThemeManager.DEFAULT_THEME;
    this._applyTheme(theme);
  }

  _getSavedTheme() {
    try { return localStorage.getItem(this.storageKey); }
    catch (err) { return null; }
  }

  _saveTheme(theme) {
    try { localStorage.setItem(this.storageKey, theme); }
    catch (err) { /* abaikan */ }
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
      this._saveTheme(nextTheme);
    });
  }
}
