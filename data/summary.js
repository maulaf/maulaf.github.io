/* ==========================================================================
   summary.js
   Konten "About / Ringkasan" + info-list sebelah kanan.
   ========================================================================== */

const SUMMARY_DATA = {
  paragraphs: [
    {
      id: "Saya adalah QA Engineer dengan pengalaman lebih dari 5 tahun di industri perbankan, pembiayaan, dan teknologi. Saya terbiasa bekerja di lingkungan agile yang cepat, berkolaborasi lintas tim untuk menghasilkan produk berkualitas tinggi.",
      en: "I am a QA Engineer with more than 5 years of experience in the banking, multifinance, and technology industries. I have experience working in fast-paced agile environments and collaborating across teams to deliver high-quality products."
    },
    {
      id: "Keahlian saya mencakup <strong>manual testing</strong> (SIT, UAT, regression) hingga <strong>automation testing</strong> menggunakan Katalon Studio, Selenium, Appium, dan Cucumber (BDD) yang terintegrasi dengan CI/CD. Saya menguji aplikasi <strong>web, mobile, desktop</strong>, serta <strong>API</strong> menggunakan Postman dan Swagger, dengan SQL untuk validasi data.",
      en: "My expertise includes <strong>manual testing</strong> (SIT, UAT, regression) and <strong>automation testing</strong> using Katalon Studio, Selenium, Appium, and Cucumber (BDD) integrated with CI/CD. I test <strong>web, mobile, and desktop</strong> applications as well as <strong>APIs</strong> using Postman and Swagger, with SQL for data validation."
    }
  ],
  infoList: [
    {
      icon: "📍",
      labelKey: "info_location",
      value: { id: "Tangerang Selatan, Banten, Indonesia", en: "Tangerang Selatan, Banten, Indonesia" }
    },
    {
      icon: "🎯",
      labelKey: "info_specialization",
      value: { id: "Manual & Automation Testing", en: "Manual & Automation Testing" }
    },
    {
      icon: "🖥️",
      labelKey: "info_platform",
      value: { id: "Web, Mobile, Desktop, API", en: "Web, Mobile, Desktop, API" }
    },
    {
      icon: "🏦",
      labelKey: "info_domain",
      value: { id: "Perbankan, Pembiayaan, Teknologi", en: "Banking, Multifinance, Technology" }
    }
  ]
};
