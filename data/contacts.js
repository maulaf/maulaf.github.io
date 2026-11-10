/* ==========================================================================
   contacts.js
   Daftar channel kontak di section Contact.
   logo : URL logo aplikasi; icon (emoji) dipakai jika logo kosong / gagal dimuat.
   DEVICON didefinisikan di data/skills.js (dimuat lebih dulu).
   ========================================================================== */

const CONTACTS = [
  {
    icon: "📧",
    logo: "https://cdn.simpleicons.org/gmail",
    labelKey: "contact_label_email",
    value: "fetty.maula98@gmail.com",
    href: "mailto:fetty.maula98@gmail.com",
    external: false
  },
  {
    icon: "📱",
    logo: "https://cdn.simpleicons.org/whatsapp",
    labelKey: "contact_label_phone",
    value: "+62 851-5639-2506",
    href: "tel:+6285156392506",
    external: false
  },
  {
    icon: "💼",
    logo: `${DEVICON}/linkedin/linkedin-original.svg`,
    labelKey: "contact_label_linkedin",
    value: "Fetty Athiyatul Maula",
    href: "https://linkedin.com/in/fetty-athiyatul-maula",
    external: true
  },
  {
    icon: "🐙",
    logo: "https://cdn.simpleicons.org/github/8b949e", // abu-abu agar terlihat di tema gelap & terang
    labelKey: "contact_label_github",
    value: "github.com/maulaf",
    href: "https://github.com/maulaf",
    external: true
  }
];
