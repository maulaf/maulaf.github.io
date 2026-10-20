/* ==========================================================================
   LanguageSwitcher.js
   Mengatur toggle ID/EN. Pilihan tidak disimpan, jadi setiap halaman dibuka
   selalu kembali ke bahasa default (I18n.DEFAULT_LANG).
   Pemanggil mendaftar via onLanguageChange(lang); hook hanya dipicu saat
   user mengubah bahasa (bukan saat init), supaya tidak terjadi double-render
   pada pertama kali page load.
   ========================================================================== */

class LanguageSwitcher {
  constructor() {
    this.idButton = document.getElementById('btn-id');
    this.enButton = document.getElementById('btn-en');
    this.currentLang = I18n.DEFAULT_LANG;
    this.onLanguageChange = null;
    this._bindButtons();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.applyUiState();
    if (this.onLanguageChange) this.onLanguageChange(lang);
  }

  applyUiState() {
    const isId = this.currentLang === 'id';
    this.idButton.classList.toggle('active', isId);
    this.enButton.classList.toggle('active', !isId);
    document.documentElement.setAttribute('lang', this.currentLang);
  }

  _bindButtons() {
    this.idButton.addEventListener('click', () => this.setLanguage('id'));
    this.enButton.addEventListener('click', () => this.setLanguage('en'));
  }
}
