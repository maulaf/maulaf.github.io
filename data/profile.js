/* ==========================================================================
   profile.js
   Data identitas, hero section, dan kartu profil.
   ========================================================================== */

const PROFILE_DATA = {
  name: {
    first: "Fetty Athiyatul",
    last: "Maula"
  },
  shortName: "Fetty A. Maula",
  role: {
    id: "Quality Assurance Engineer",
    en: "Quality Assurance Engineer"
  },
  bio: {
    id: "4+ tahun pengalaman di software testing — manual, automation, mobile, web, dan API. Passionate dalam meningkatkan kualitas produk dan memastikan pengalaman terbaik bagi pengguna.",
    en: "4+ years of experience in software testing — manual, automation, mobile, web, and API testing. Passionate about improving product quality and ensuring the best experience for users."
  },
  avatarImage: "assets/images/QA.jpg",  // foto profil; kosongkan untuk pakai emoji
  avatarEmoji: "👩‍💻",                         // fallback jika foto tidak ada / gagal dimuat
  location: {
    id: "QA Engineer · Tangerang Selatan, Indonesia",
    en: "QA Engineer · Tangerang Selatan, Indonesia"
  },
  stats: [
    { num: "4+", labelKey: "stat_years" },
    { num: "5",  labelKey: "stat_companies" },
    { num: "3",  labelKey: "stat_certs" }
  ],
  pageTitle: "Fetty Athiyatul Maula — QA Engineer"
};
