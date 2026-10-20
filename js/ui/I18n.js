/* ==========================================================================
   I18n.js
   Helper statis untuk mengambil label berdasarkan bahasa aktif.
   Dictionary diambil dari global TRANSLATIONS (data/translations.js).
   ========================================================================== */

class I18n {
  static DEFAULT_LANG = 'en';

  static t(key, lang = I18n.DEFAULT_LANG) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[I18n.DEFAULT_LANG];
    return (dict && dict[key] !== undefined) ? dict[key] : key;
  }

  static pick(obj, lang = I18n.DEFAULT_LANG) {
    if (!obj) return '';
    return obj[lang] !== undefined ? obj[lang] : obj[I18n.DEFAULT_LANG];
  }
}
