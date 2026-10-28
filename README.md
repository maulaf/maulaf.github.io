Portofolio ini adalah **website statis tanpa framework**: tidak ada `package.json`, library npm, maupun proses build. Semua kode ditulis langsung dengan HTML, CSS, dan JavaScript.

| Lapisan | Teknologi |
|---|---|
| **Struktur** | HTML5: satu halaman [index.html](index.html), dan isi tiap section dibuat lewat JavaScript |
| **Styling** | CSS3 murni, dipecah per komponen di [css/components/](css/components/). Memakai CSS Variables untuk tema light/dark (atribut `data-theme`), CSS Grid untuk layout, dan `@media` di [responsive.css](css/responsive.css) |
| **Font** | Google Fonts: Plus Jakarta Sans dan Space Mono |
| **Logika** | JavaScript (ES6+) tanpa framework, ditulis dengan class |
| **Data** | File JavaScript biasa di [data/](data/), misalnya `projects.js`, `skills.js`, dan `translations.js`. Konten diubah di sini tanpa perlu menyentuh kode tampilan |
| **Browser API** | IntersectionObserver untuk animasi fade-in saat scroll dan animasi skill bar |
| **Hosting** | GitHub Pages: nama repo `maulaf.github.io` menunjukkan ini, dan tidak ada proses build |
| **Version control** | Git dan GitHub |

**Struktur kode JavaScript:**
- **Data:** berisi konten dalam dua bahasa (`{ id, en }`).
- **Model:** [js/models/](js/models/), yaitu `Project` dan `ProjectRepository`.
- **Renderer:** [js/renderers/](js/renderers/), satu class per section (Hero, Skills, Experience, dan lainnya).
- **UI:** [js/ui/](js/ui/), berisi fitur interaktif:
  - I18n dan LanguageSwitcher untuk pilihan bahasa ID/EN
  - ThemeManager untuk dark/light mode
  - ProjectGallery dan ProjectModal untuk filter proyek dan modal detail
  - ScrollFadeAnimator dan SkillBarAnimator untuk animasi
  - DevToolsGuard
