/* ==========================================================================
   certificates.js
   Daftar sertifikat profesional (urut dari paling baru → paling lama).
   issued     : tanggal terbit, format YYYY-MM-DD (ditampilkan sesuai bahasa).
   instructor : opsional, untuk kursus yang diajarkan oleh instruktur.
   ========================================================================== */

const CERTIFICATES = [
  {
    icon: "🏅",
    name: "Automation Testing using Selenium & Katalon Studio",
    issuer: "Udemy",
    instructor: "Rahul Singh Rathore",
    issued: "2024-01-23",
    url: "https://www.udemy.com/certificate/UC-bb1d967a-1fd9-458c-b993-00f6835c3104/"
  },
  {
    icon: "🏅",
    name: "Katalon Professional Certification",
    issuer: "Katalon Academy",
    issued: "2023-03-31",
    url: "https://academy.katalon.com/mcertificate/6426e60fd9dd4"
  },
  {
    icon: "🏅",
    name: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    issued: "2022-03-26",
    url: "https://www.hackerrank.com/certificates/63bfc01e3d4b"
  }
];
