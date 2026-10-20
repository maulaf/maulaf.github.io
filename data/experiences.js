/* ==========================================================================
   experiences.js
   Timeline pengalaman kerja (urut dari paling baru → paling lama).
   ========================================================================== */

const EXPERIENCES = [
  {
    role: "QA Engineer",
    period: "Feb 2026 – Present",
    company: "PT Higo Fitur Indonesia",
    description: {
      id: "Melakukan pengujian end-to-end meliputi functional testing, integration testing, exploratory testing, dan regression testing untuk memastikan kualitas dan stabilitas sistem. Bertanggung jawab dalam menemukan defect, memvalidasi perbaikan bug, serta memastikan pengalaman pengguna berjalan dengan lancar di seluruh modul, sambil berkolaborasi dengan tim lintas fungsi untuk mendukung delivery produk yang andal.",
      en: "Perform end-to-end testing including functional, integration, exploratory, and regression testing to ensure system quality and stability. Responsible for identifying defects, validating bug fixes, and ensuring seamless user experience across modules while collaborating with cross-functional teams to support reliable product delivery."
    },
    tags: [
      { label: "End-to-End Testing", style: "green" },
      { label: "Functional & Integration", style: "green" },
      { label: "Exploratory Testing", style: "green" },
      { label: "Regression Testing", style: "green" },
      { label: "Bug Validation", style: "purple" },
      { label: "Cross-Functional", style: "" }
    ]
  },
  {
    role: "QA Engineer",
    period: "Jan 2025 – Jan 2026",
    company: "Ikonsultan · Placement at Maybank Indonesia",
    description: {
      id: "Melakukan manual dan automation testing untuk sales digital tools Maybank, termasuk mobile apps, web-based platforms, dan admin portals. Bertanggung jawab atas pembuatan test case, eksekusi pengujian, pelaporan bug, dan kolaborasi erat dengan tim developer dan business analyst.",
      en: "Performed manual and automation testing for Maybank sales digital tools, including mobile apps, web-based platforms, and admin portals. Responsible for creating test cases, executing tests, bug reporting, and collaborating closely with developers and business analysts."
    },
    tags: [
      { label: "Manual Testing", style: "green" },
      { label: "Automation Testing", style: "green" },
      { label: "Mobile & Web", style: "purple" },
      { label: "Admin Portal", style: "purple" },
      { label: "Test Case Design", style: "" },
      { label: "Banking — Maybank", style: "orange" }
    ]
  },
  {
    role: "QA Engineer",
    period: "May 2023 – Feb 2025",
    company: "Monster Group",
    description: {
      id: "Melakukan manual dan automation testing untuk berbagai proyek dan produk, termasuk mobile apps, web-based platforms, dan admin portals. Bertanggung jawab atas pembuatan test case, eksekusi pengujian, pelaporan bug, dan kolaborasi erat dengan tim developer, business analyst, dan project manager.",
      en: "Performed manual and automation testing for various projects and products, including mobile apps, web-based platforms, and admin portals. Responsible for creating test cases, executing tests, reporting bugs, and collaborating closely with developers, business analysts, and project manager."
    },
    tags: [
      { label: "Manual Testing", style: "green" },
      { label: "Automation Testing", style: "green" },
      { label: "Mobile & Web", style: "purple" },
      { label: "Admin Portal", style: "purple" },
      { label: "Multiple Projects", style: "orange" },
      { label: "Bug Reporting", style: "" }
    ]
  },
  {
    role: "QA Automation",
    period: "May 2022 – May 2023",
    company: "Sharing Vision · Placement at Bank Rakyat Indonesia (BRI)",
    description: {
      id: "Mengotomatiskan pengujian untuk New Delivery System (NDS) yang digunakan di seluruh cabang BRI untuk melayani nasabah. Membuat automation scripts untuk fitur general, finansial, dan non-finansial, serta mengintegrasikannya ke dalam CI/CD pipeline.",
      en: "Automated testing for the New Delivery System (NDS) used across all BRI branches to serve customers. Created automation scripts for general, financial, and non-financial features and integrated them into the CI/CD pipeline."
    },
    tags: [
      { label: "CI/CD Integration", style: "green" },
      { label: "Automation Scripts", style: "green" },
      { label: "Banking — BRI", style: "blue" },
      { label: "NDS System", style: "purple" }
    ]
  },
  {
    role: "QC Engineer",
    period: "May 2021 – May 2022",
    company: "Persada · Placement at Astra Credit Companies",
    description: {
      id: "Melakukan manual testing (SIT dan UAT) dengan fokus pada sistem AOL, aplikasi desktop untuk proses bisnis di Astra Credit Companies, termasuk pembayaran kendaraan baru dan bekas. Mengembangkan dokumentasi user manual untuk panduan pengguna.",
      en: "Conducted manual testing (SIT and UAT) focused on the AOL system, a desktop application for business processes at Astra Credit Companies, including new and used vehicle payments. Developed user manual documentation for users."
    },
    tags: [
      { label: "SIT", style: "green" },
      { label: "UAT", style: "green" },
      { label: "Desktop App", style: "purple" },
      { label: "Automotive Finance", style: "orange" },
      { label: "User Manual", style: "" }
    ]
  },
  {
    role: "Junior Programmer",
    period: "Oct 2019 – May 2020",
    company: "Primalogic Global Teknologi",
    description: {
      id: "Menulis dan memelihara aplikasi asuransi menggunakan C# dan Visual Studio. Bertanggung jawab atas perbaikan bugs dan pengerjaan minor change requests.",
      en: "Developed and maintained insurance applications using C# and Visual Studio. Responsible for bug fixing and handling minor change requests."
    },
    tags: [
      { label: "C#", style: "green" },
      { label: "Visual Studio", style: "purple" },
      { label: "Insurance App", style: "orange" },
      { label: "Bug Fixing", style: "" },
      { label: "Change Requests", style: "" }
    ]
  }
];
