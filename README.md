# Fetty Athiyatul Maula — QA Engineer Portfolio

Portfolio statis (HTML + CSS + Vanilla JS) tanpa build tool. Semua konten di-render dari data array JavaScript sehingga mudah diedit tanpa menyentuh markup.

## Struktur Folder

```
maulaf.github.io-main/
├── index.html                    # Shell: section placeholder + urutan <script>
├── README.md
│
├── css/
│   ├── base.css                  # Reset, CSS variables (dark + light theme)
│   ├── layout.css                # Nav, section wrapper, bg-glow, footer, responsive
│   └── components/
│       ├── controls.css          # Button, language toggle, theme toggle
│       ├── hero.css              # Hero + profile card
│       ├── summary.css           # Section About
│       ├── timeline.css          # Section Experience + tag chip
│       ├── skills.css            # Skill bar + tool chip
│       ├── education.css         # Kartu pendidikan
│       ├── certificates.css      # Kartu sertifikat
│       ├── projects.css          # Filter + project card
│       ├── modal.css             # Modal detail project
│       ├── contact.css           # Section contact
│       └── animations.css        # Fade-in on scroll
│
├── data/                         # ✏️ EDIT DI SINI UNTUK UBAH KONTEN
│   ├── translations.js           # Semua label statis UI (ID/EN)
│   ├── navigation.js             # Link nav + opsi filter project
│   ├── profile.js                # Hero + kartu profil
│   ├── summary.js                # Section About
│   ├── experiences.js            # Timeline pengalaman kerja
│   ├── skills.js                 # Skill bar + tools
│   ├── education.js              # Pendidikan
│   ├── certificates.js           # Sertifikat
│   ├── contacts.js               # Daftar kontak
│   └── projects.js               # Project cards + detail modal
│
└── js/
    ├── models/                   # Wrapper OOP untuk data mentah
    │   ├── Project.js
    │   └── ProjectRepository.js
    │
    ├── ui/                       # Class generik (reusable logic)
    │   ├── I18n.js               # Helper translate (static t() dan pick())
    │   ├── ThemeManager.js       # Dark/light + localStorage
    │   ├── LanguageSwitcher.js   # Toggle ID/EN + localStorage
    │   ├── SkillBarAnimator.js   # Animasi width skill bar
    │   ├── ScrollFadeAnimator.js # Fade-in on scroll
    │   ├── DevToolsGuard.js      # Blok klik kanan / F12
    │   ├── ProjectCardRenderer.js
    │   ├── ProjectGallery.js
    │   ├── ProjectModalRenderer.js
    │   ├── ProjectModal.js
    │   └── ProjectsController.js
    │
    ├── renderers/                # Konversi data → markup DOM per section
    │   ├── SectionHeaderRenderer.js
    │   ├── NavRenderer.js
    │   ├── HeroRenderer.js
    │   ├── SummaryRenderer.js
    │   ├── ExperienceRenderer.js
    │   ├── SkillsRenderer.js
    │   ├── EducationRenderer.js
    │   ├── CertificatesRenderer.js
    │   ├── ProjectsSectionRenderer.js
    │   ├── ContactRenderer.js
    │   └── FooterRenderer.js
    │
    └── main.js                   # Entry point (PortfolioApp orchestrator)
```

## Alur Render

1. `index.html` memuat seluruh CSS, lalu seluruh data (`data/*.js`), model, UI, renderer, terakhir `main.js`.
2. `main.js` membuat `PortfolioApp` dan memanggil `start()`:
   - `ThemeManager.init()` → terapkan dark/light.
   - Setiap `*Renderer.render(lang)` → tulis markup ke placeholder `<section>` yang ada di `index.html`.
   - `ProjectsController` → mengatur filter + modal detail.
   - `ScrollFadeAnimator`, `SkillBarAnimator` → menempel ke DOM yang baru.
   - `LanguageSwitcher.init()` → set bahasa awal + bind toggle.
3. Saat user klik `ID`/`EN`, seluruh section di-render ulang dengan bahasa baru.

## Cara Edit Konten

| Mau ubah…                      | Edit file                       |
|--------------------------------|---------------------------------|
| Nama, bio, stat profil         | `data/profile.js`               |
| Paragraf About + info kontak   | `data/summary.js`               |
| Pengalaman kerja               | `data/experiences.js`           |
| Skill bar + tools              | `data/skills.js`                |
| Pendidikan                     | `data/education.js`             |
| Sertifikat                     | `data/certificates.js`          |
| Kontak (email, WA, LinkedIn)   | `data/contacts.js`              |
| Project (card + modal detail)  | `data/projects.js`              |
| Teks tombol / label UI ID & EN | `data/translations.js`          |
| Warna, font, spacing           | `css/base.css` (CSS variables)  |

## Menjalankan

Karena tidak ada build tool, cukup buka `index.html` di browser. Untuk pengembangan sebaiknya pakai local server (CORS-safe) — misalnya:

```powershell
# Python 3
python -m http.server 8000

# atau Node (jika ada http-server global)
npx http-server . -p 8000
```

Lalu buka `http://localhost:8000/`.

## Catatan Teknis

- Tidak ada build step, tidak ada ES modules — semua file JS adalah skrip klasik, class di-expose sebagai global. Urutan `<script>` di `index.html` jadi penting.
- Preferensi tema dan bahasa disimpan di `localStorage` (`portfolio-theme`, `portfolio-lang`).
- `DevToolsGuard` hanya menghalangi casual view-source; bukan security control.
