/* ==========================================================================
   data.js
   ✏️  DATA PROJECTS — Edit bagian ini untuk menambah/ubah project.
   Setiap project WAJIB punya field `repoUrl`. Ganti placeholder URL di
   bawah dengan link repository GitHub/GitLab yang sebenarnya.
   ========================================================================== */

const PROJECT_RECORDS = [
  {
    id: 1,
    name: "OrangeHRM Automation",
    subtitle: "Web Automation Testing · Dummy Project",
    icon: "🤖",
    repoUrl: "https://github.com/fettymaula/orangehrm-automation",
    type: ["automation", "dummy"],
    tags: [
      { label: "Dummy", style: "orange" },
      { label: "Automation", style: "green" },
      { label: "Web", style: "purple" }
    ],
    shortDesc: {
      id: "Automation scripts menggunakan Katalon Studio untuk testing web OrangeHRM (dummy HRM system).",
      en: "Automation scripts built with Katalon Studio for testing the OrangeHRM web app (a dummy HRM system)."
    },
    description: {
      id: `
        Project ini merupakan latihan automation testing menggunakan Katalon Studio pada website dummy OrangeHRM. 
        OrangeHRM adalah sistem manajemen SDM yang digunakan sebagai target pengujian untuk mengasah skill automation.
        Fokus pengujian meliputi fitur login, manajemen karyawan, absensi, dan laporan.
      `,
      en: `
        This project is an automation testing exercise using Katalon Studio against the OrangeHRM dummy website. 
        OrangeHRM is an HR management system used as the test target to sharpen automation skills.
        The testing focus covers login, employee management, attendance, and reporting features.
      `
    },
    techStack: ["Katalon Studio", "Groovy", "Git", "Chrome Driver", "TestNG"],
    projectStructure: `OrangeHRM-Automation/
├── Test Cases/
│   ├── TC_Login/
│   │   ├── TC_Login_Valid.tc
│   │   └── TC_Login_Invalid.tc
│   ├── TC_Employee/
│   │   ├── TC_Add_Employee.tc
│   │   └── TC_Edit_Employee.tc
│   └── TC_Leave/
│       └── TC_Apply_Leave.tc
├── Object Repository/
│   ├── Login/
│   └── Employee/
├── Test Suites/
│   └── Regression_Suite.ts
└── Reports/`,
    testCases: [
      { id: "TC-001", name: "Login dengan kredensial valid", input: "Username: Admin, Password: admin123", expected: "Berhasil masuk ke dashboard", status: "pass" },
      { id: "TC-002", name: "Login dengan password salah", input: "Username: Admin, Password: wrong", expected: "Muncul pesan error 'Invalid credentials'", status: "pass" },
      { id: "TC-003", name: "Tambah karyawan baru", input: "Nama: John Doe, Employee ID: 001", expected: "Karyawan berhasil ditambahkan", status: "pass" },
      { id: "TC-004", name: "Edit data karyawan", input: "Ubah nama karyawan yang sudah ada", expected: "Data berhasil diupdate", status: "pass" },
      { id: "TC-005", name: "Apply cuti karyawan", input: "Pilih jenis cuti dan tanggal", expected: "Permohonan cuti berhasil diajukan", status: "fail" },
    ],
    pattern: `Pola Implementasi: Page Object Model (POM)
─────────────────────────────────────────
1. Object Repository  → Simpan semua locator element (XPath, CSS)
2. Test Cases         → Script pengujian yang memanggil object
3. Custom Keywords    → Fungsi reusable (login, logout, dll)
4. Test Suites        → Kumpulan test case yang dijalankan bersama
5. Reports            → Hasil eksekusi otomatis (pass/fail/screenshot)`
  },
  {
    id: 2,
    name: "Petstore API Testing",
    subtitle: "API Automation · Dummy Project",
    icon: "🔌",
    repoUrl: "https://github.com/fettymaula/petstore-api-testing",
    type: ["automation", "api", "dummy"],
    tags: [
      { label: "Dummy", style: "orange" },
      { label: "API", style: "purple" },
      { label: "Automation", style: "green" }
    ],
    shortDesc: {
      id: "Automation scripts untuk testing dummy Swagger Petstore API menggunakan Katalon Studio.",
      en: "Automation scripts for testing the dummy Swagger Petstore API using Katalon Studio."
    },
    description: {
      id: `
        Project ini fokus pada API testing menggunakan Swagger Petstore sebagai dummy endpoint. 
        Pengujian mencakup semua HTTP methods (GET, POST, PUT, DELETE) dan validasi response body, 
        status code, serta schema response. Digunakan sebagai latihan API automation dengan Katalon Studio.
      `,
      en: `
        This project focuses on API testing using Swagger Petstore as the dummy endpoint. 
        Testing covers all HTTP methods (GET, POST, PUT, DELETE) along with response body validation, 
        status codes, and response schema. Used as an API automation exercise with Katalon Studio.
      `
    },
    techStack: ["Katalon Studio", "Swagger", "REST API", "JSON", "Groovy", "Git"],
    projectStructure: `Petstore-API-Testing/
├── Test Cases/
│   ├── Pet/
│   │   ├── TC_GET_Pet_By_ID.tc
│   │   ├── TC_POST_Add_Pet.tc
│   │   ├── TC_PUT_Update_Pet.tc
│   │   └── TC_DELETE_Pet.tc
│   ├── Store/
│   │   └── TC_GET_Inventory.tc
│   └── User/
│       ├── TC_POST_Create_User.tc
│       └── TC_GET_User_By_Name.tc
├── Test Suites/
│   └── API_Regression.ts
└── Reports/`,
    testCases: [
      { id: "API-001", name: "GET Pet by ID", input: "GET /pet/{petId} → ID: 1", expected: "Status 200, response berisi data pet", status: "pass" },
      { id: "API-002", name: "POST Add new Pet", input: "POST /pet body: {name, status}", expected: "Status 200, pet berhasil ditambahkan", status: "pass" },
      { id: "API-003", name: "PUT Update Pet", input: "PUT /pet body: {id, name baru}", expected: "Status 200, data terupdate", status: "pass" },
      { id: "API-004", name: "DELETE Pet", input: "DELETE /pet/{petId}", expected: "Status 200, pet terhapus", status: "pass" },
      { id: "API-005", name: "GET Pet with invalid ID", input: "GET /pet/99999", expected: "Status 404, Pet not found", status: "fail" },
    ],
    pattern: `Pola Implementasi: API Automation with Katalon
─────────────────────────────────────────────────
1. Buat Web Service Object (endpoint URL + method)
2. Set Request Headers (Content-Type: application/json)
3. Set Request Body (JSON payload)
4. Tambahkan Verification Point:
   - verifyResponseStatusCode(200)
   - verifyElementPropertyValue('id', expectedId)
5. Run dalam Test Suite untuk regression`
  },
  {
    id: 3,
    name: "Automation Tiket.com (BDD)",
    subtitle: "Web Automation · BDD · Dummy Project",
    icon: "🎫",
    repoUrl: "https://github.com/fettymaula/tiketcom-bdd-automation",
    type: ["automation", "dummy"],
    tags: [
      { label: "Dummy", style: "orange" },
      { label: "BDD", style: "purple" },
      { label: "Web", style: "green" }
    ],
    shortDesc: {
      id: "Demonstrasi BDD testing menggunakan Katalon Studio terintegrasi dengan Cucumber untuk website Tiket.com.",
      en: "A demonstration of BDD testing using Katalon Studio integrated with Cucumber for the Tiket.com website."
    },
    description: {
      id: `
        Project ini mendemonstrasikan penerapan Behavior Driven Development (BDD) menggunakan Katalon Studio 
        yang diintegrasikan dengan Cucumber framework. Test scenario ditulis dalam bahasa Gherkin (Given-When-Then) 
        sehingga bisa dipahami oleh tim non-teknis seperti business analyst dan product owner.
      `,
      en: `
        This project demonstrates the application of Behavior Driven Development (BDD) using Katalon Studio 
        integrated with the Cucumber framework. Test scenarios are written in Gherkin language (Given-When-Then) 
        so they can be understood by non-technical teams such as business analysts and product owners.
      `
    },
    techStack: ["Katalon Studio", "Cucumber", "Gherkin", "BDD", "Git", "Chrome Driver"],
    projectStructure: `Tiket-BDD-Automation/
├── Features/
│   ├── search_flight.feature
│   ├── search_hotel.feature
│   └── checkout.feature
├── Step Definitions/
│   ├── SearchFlightSteps.groovy
│   ├── SearchHotelSteps.groovy
│   └── CheckoutSteps.groovy
├── Object Repository/
│   ├── Search/
│   └── Checkout/
├── Test Suites/
│   └── BDD_Suite.ts
└── Reports/`,
    testCases: [
      { id: "BDD-001", name: "Search penerbangan Jakarta-Bali", input: "Given user di halaman utama / When search JKT-DPS tanggal besok / Then tampil list penerbangan", expected: "Hasil pencarian muncul dengan filter aktif", status: "pass" },
      { id: "BDD-002", name: "Filter maskapai penerbangan", input: "Given hasil search tampil / When pilih filter 'Garuda' / Then hanya Garuda yang muncul", expected: "List terfilter sesuai maskapai", status: "pass" },
      { id: "BDD-003", name: "Search hotel di Bali", input: "Given user di tab Hotel / When search 'Bali' check-in besok / Then tampil list hotel", expected: "Hasil pencarian hotel muncul", status: "pass" },
      { id: "BDD-004", name: "Tambah penumpang ke keranjang", input: "Given flight dipilih / When klik 'Pilih' / Then redirect ke halaman passenger", expected: "Form pengisian penumpang tampil", status: "pass" },
    ],
    pattern: `Pola Implementasi: BDD dengan Cucumber + Katalon
─────────────────────────────────────────────────
Feature File (.feature) — Gherkin language:
  Scenario: Search penerbangan
    Given user berada di halaman utama tiket.com
    When user mencari penerbangan dari "Jakarta" ke "Bali"
    And user memilih tanggal "besok"
    Then sistem menampilkan daftar penerbangan tersedia

Step Definition — Groovy/Java:
  @Given("user berada di halaman utama tiket.com")
  def givenUserAtHomePage() {
    WebUI.openBrowser('https://tiket.com')
  }

Keunggulan BDD:
  ✓ Test mudah dipahami non-teknis
  ✓ Living documentation
  ✓ Kolaborasi developer + QA + BA`
  },
  {
    id: 4,
    name: "Automation redBus (Mobile)",
    subtitle: "Mobile Automation · Dummy Project",
    icon: "📱",
    repoUrl: "https://github.com/fettymaula/redbus-mobile-automation",
    type: ["automation", "mobile", "dummy"],
    tags: [
      { label: "Dummy", style: "orange" },
      { label: "Mobile", style: "purple" },
      { label: "Automation", style: "green" }
    ],
    shortDesc: {
      id: "Automation scripts menggunakan Katalon Studio untuk testing mobile application redBus.",
      en: "Automation scripts built with Katalon Studio for testing the redBus mobile application."
    },
    description: {
      id: `
        Project ini berfokus pada mobile automation testing untuk aplikasi redBus menggunakan Katalon Studio 
        dengan Appium framework sebagai backbone. Testing dilakukan pada Android device/emulator untuk memvalidasi 
        alur pemesanan tiket bus, pencarian rute, dan fitur-fitur utama aplikasi.
      `,
      en: `
        This project focuses on mobile automation testing for the redBus application using Katalon Studio 
        with the Appium framework as its backbone. Testing is performed on an Android device/emulator to validate 
        the bus ticket booking flow, route search, and the app's core features.
      `
    },
    techStack: ["Katalon Studio", "Appium", "Android", "Mobile Testing", "Groovy", "Git"],
    projectStructure: `redBus-Mobile-Automation/
├── Test Cases/
│   ├── TC_Onboarding/
│   │   └── TC_App_Launch.tc
│   ├── TC_Search/
│   │   ├── TC_Search_Route.tc
│   │   └── TC_Filter_Bus.tc
│   └── TC_Booking/
│       └── TC_Select_Seat.tc
├── Object Repository/
│   ├── Onboarding/
│   ├── Search/
│   └── Booking/
├── Test Suites/
│   └── Mobile_Regression.ts
└── Reports/`,
    testCases: [
      { id: "MOB-001", name: "Launch aplikasi & Onboarding", input: "Buka app redBus pertama kali", expected: "Splash screen muncul, redirect ke onboarding", status: "pass" },
      { id: "MOB-002", name: "Search rute bus", input: "From: Jakarta, To: Bandung, Tanggal: besok", expected: "List bus tersedia muncul", status: "pass" },
      { id: "MOB-003", name: "Filter bus berdasarkan waktu", input: "Filter 'Pagi' (06:00 - 12:00)", expected: "Hanya bus berangkat pagi yang tampil", status: "pass" },
      { id: "MOB-004", name: "Pilih kursi", input: "Tap pada kursi yang tersedia", expected: "Kursi berubah warna (selected) dan harga update", status: "pass" },
      { id: "MOB-005", name: "Checkout tanpa login", input: "Tap Checkout tanpa akun", expected: "Redirect ke halaman login/register", status: "pass" },
    ],
    pattern: `Pola Implementasi: Mobile Testing dengan Katalon + Appium
────────────────────────────────────────────────────────
Setup:
  1. Install Appium Server
  2. Connect Android device / start emulator
  3. Set desired capabilities di Katalon:
     - platformName: Android
     - deviceName: [device ID]
     - appPackage: com.redbus.in
     - appActivity: .ui.SplashActivity

Locator Strategy (Mobile):
  - Accessibility ID (recommended)
  - XPath
  - ID Resource

Best Practice:
  ✓ Gunakan explicit wait (tidak hardcode sleep)
  ✓ Screenshot on failure
  ✓ Modular test dengan Custom Keywords`
  },
  {
    id: 5,
    name: "NDS (New Delivery System) — BRI",
    subtitle: "Automation Testing · Company Project · Banking",
    icon: "🏦",
    repoUrl: "https://github.com/fettymaula/nds-bri-automation",
    type: ["automation", "company"],
    tags: [
      { label: "BRI", style: "orange" },
      { label: "Company Project", style: "purple" },
      { label: "CI/CD", style: "green" },
      { label: "Banking", style: "green" }
    ],
    shortDesc: {
      id: "Automation testing untuk sistem NDS yang digunakan di seluruh cabang BRI, mencakup fitur general, finansial, dan non-finansial dengan integrasi CI/CD pipeline.",
      en: "Automation testing for the NDS system used across all BRI branches, covering general, financial, and non-financial features with CI/CD pipeline integration."
    },
    description: {
      id: `
        New Delivery System (NDS) adalah sistem utama yang digunakan di seluruh cabang Bank Rakyat Indonesia (BRI) 
        untuk melayani nasabah. Project ini melibatkan pembuatan automation scripts komprehensif yang mencakup 
        transaksi finansial (setor, tarik, transfer) dan non-finansial (pembukaan rekening, perubahan data), 
        serta diintegrasikan ke CI/CD pipeline untuk pengujian berkelanjutan.
      `,
      en: `
        The New Delivery System (NDS) is the core system used across all Bank Rakyat Indonesia (BRI) branches 
        to serve customers. This project involved building comprehensive automation scripts covering 
        financial transactions (deposit, withdrawal, transfer) and non-financial ones (account opening, data changes), 
        integrated into a CI/CD pipeline for continuous testing.
      `
    },
    techStack: ["Katalon Studio", "Java/Groovy", "CI/CD Pipeline", "Git", "Jenkins", "SQL", "Banking Core System"],
    projectStructure: `NDS-Automation/
├── Test Cases/
│   ├── General/
│   │   ├── TC_Login_Teller.tc
│   │   └── TC_Navigation.tc
│   ├── Financial/
│   │   ├── TC_Setoran_Tunai.tc
│   │   ├── TC_Penarikan.tc
│   │   └── TC_Transfer.tc
│   └── NonFinancial/
│       ├── TC_Buka_Rekening.tc
│       └── TC_Update_Data_Nasabah.tc
├── Custom Keywords/
│   ├── BankingUtils.groovy
│   └── DatabaseValidator.groovy
├── Test Suites/
│   ├── Smoke_Test.ts
│   └── Regression_Full.ts
├── Profiles/
│   ├── dev.glbl
│   └── staging.glbl
└── pipeline.yml`,
    testCases: [
      { id: "NDS-001", name: "Login teller ke sistem NDS", input: "ID Teller + Password + Kode Cabang", expected: "Berhasil masuk ke dashboard teller", status: "pass" },
      { id: "NDS-002", name: "Setoran tunai ke rekening", input: "No. Rekening, Nominal, Mata Uang", expected: "Saldo bertambah, struk tercetak", status: "pass" },
      { id: "NDS-003", name: "Penarikan tunai dari rekening", input: "No. Rekening, Nominal ≤ saldo", expected: "Saldo berkurang, uang dikeluarkan", status: "pass" },
      { id: "NDS-004", name: "Transfer antar rekening BRI", input: "Rekening asal, rekening tujuan, nominal", expected: "Saldo ter-debet/kredit sesuai", status: "pass" },
      { id: "NDS-005", name: "Pembukaan rekening tabungan", input: "Data KTP nasabah baru", expected: "Rekening baru terbuat dengan nomor unik", status: "pass" },
      { id: "NDS-006", name: "Penarikan melebihi saldo", input: "Nominal > saldo tersedia", expected: "Transaksi ditolak, pesan error muncul", status: "pass" },
    ],
    pattern: `Pola Implementasi: Automation Banking System + CI/CD
────────────────────────────────────────────────────
Arsitektur:
  Developer push code → Git trigger Jenkins → 
  Jenkins run Katalon → Report ke tim QA

Environment Management:
  - Profile 'dev' untuk development environment
  - Profile 'staging' untuk UAT environment
  - Konfigurasi URL, DB, kredensial per environment

Data-Driven Testing:
  - Test data disimpan di Excel/CSV
  - Tidak ada hardcode data di test script
  - Mendukung multi-skenario dalam 1 test case

Database Validation:
  - Setelah transaksi, query DB untuk verifikasi
  - Pastikan data konsisten antara UI dan database
  
Security Note:
  - Semua test menggunakan dummy/UAT data
  - Tidak ada data nasabah asli`
  },
  {
    id: 6,
    name: "AOL System — Astra Credit Companies",
    subtitle: "Manual Testing (SIT & UAT) · Company Project",
    icon: "🚗",
    repoUrl: "https://github.com/fettymaula/aol-astra-credit-testing",
    type: ["manual", "company"],
    tags: [
      { label: "Astra Credit", style: "orange" },
      { label: "Company Project", style: "purple" },
      { label: "SIT", style: "green" },
      { label: "UAT", style: "green" }
    ],
    shortDesc: {
      id: "Manual testing (SIT & UAT) untuk sistem AOL — aplikasi desktop untuk proses bisnis pembiayaan kendaraan di Astra Credit Companies.",
      en: "Manual testing (SIT & UAT) for the AOL system — a desktop application for vehicle financing business processes at Astra Credit Companies."
    },
    description: {
      id: `
        AOL (Automotive Online) System adalah aplikasi desktop yang digunakan oleh Astra Credit Companies 
        untuk mengelola proses pembiayaan kendaraan baru dan bekas. Sebagai QC Engineer, saya bertanggung jawab 
        melakukan System Integration Testing (SIT) dan User Acceptance Testing (UAT), serta membuat dokumentasi 
        user manual untuk panduan pengguna di lapangan.
      `,
      en: `
        The AOL (Automotive Online) System is a desktop application used by Astra Credit Companies 
        to manage new and used vehicle financing processes. As a QC Engineer, I was responsible for 
        conducting System Integration Testing (SIT) and User Acceptance Testing (UAT), as well as creating 
        user manual documentation as a field guide for users.
      `
    },
    techStack: ["Manual Testing", "Microsoft Excel", "Word (User Manual)", "SIT", "UAT", "Jira", "SQL"],
    projectStructure: `AOL-Testing/
├── Test Plan/
│   └── Test_Plan_AOL_v1.xlsx
├── Test Cases/
│   ├── SIT/
│   │   ├── TC_Payment_New_Car.xlsx
│   │   ├── TC_Payment_Used_Car.xlsx
│   │   └── TC_Integration_Core.xlsx
│   └── UAT/
│       ├── TC_UAT_Dealer_Flow.xlsx
│       └── TC_UAT_Admin_Flow.xlsx
├── Bug Reports/
│   └── Bug_Report_AOL.xlsx
├── User Manual/
│   └── User_Manual_AOL_v2.docx
└── Test Summary Report/
    └── TSR_AOL_Sprint_1.pdf`,
    testCases: [
      { id: "AOL-001", name: "Input pengajuan pembiayaan mobil baru", input: "Data customer + data kendaraan + DP", expected: "Pengajuan berhasil dengan nomor aplikasi unik", status: "pass" },
      { id: "AOL-002", name: "Perhitungan cicilan otomatis", input: "Harga OTR, DP, tenor 36 bulan", expected: "Cicilan dihitung sesuai bunga yang berlaku", status: "pass" },
      { id: "AOL-003", name: "Proses pembayaran angsuran", input: "Nomor kontrak + nominal bayar", expected: "Status pembayaran update, receipt tercetak", status: "pass" },
      { id: "AOL-004", name: "Integrasi data ke sistem core", input: "Approval dari credit analyst", expected: "Data otomatis terinput ke sistem core banking", status: "fail" },
      { id: "AOL-005", name: "UAT: Alur pembiayaan end-to-end", input: "Business user menjalankan skenario nyata", expected: "Seluruh alur berjalan sesuai SOP dealer", status: "pass" },
    ],
    pattern: `Pola Implementasi: Manual Testing Methodology
──────────────────────────────────────────────
1. TEST PLANNING
   - Pelajari requirement & SRS dokumen
   - Identifikasi scope testing (in/out of scope)
   - Estimasi effort & resources

2. TEST CASE DESIGN
   - Equivalence Partitioning
   - Boundary Value Analysis
   - Error Guessing
   - Decision Table

3. EXECUTION TRACKING
   - Status: Pass / Fail / Blocked / Skip
   - Screenshot untuk setiap failure
   - Link ke bug report di Jira

4. BUG LIFECYCLE
   New → Assigned → In Progress → 
   Fixed → Retest → Verified → Closed

5. UAT SIGN-OFF
   - Business user validasi skenario
   - Sign-off document dari stakeholder`
  },
  {
    id: 7,
    name: "Sales4u — Maybank",
    subtitle: "Manual & Automation Testing · Company Project · Banking",
    icon: "💳",
    repoUrl: "https://github.com/fettymaula/sales4u-maybank-testing",
    type: ["manual", "automation", "company"],
    tags: [
      { label: "Maybank", style: "orange" },
      { label: "Company Project", style: "purple" },
      { label: "Mobile + Web", style: "green" }
    ],
    shortDesc: {
      id: "Testing komprehensif untuk sales digital tools Maybank meliputi mobile app, web platform, dan admin portal untuk tim sales perbankan.",
      en: "Comprehensive testing for Maybank's sales digital tools, covering a mobile app, web platform, and admin portal for the banking sales team."
    },
    description: {
      id: `
        Sales4u adalah ekosistem digital tools yang digunakan oleh tim sales Maybank Indonesia untuk menjual 
        produk perbankan (tabungan, deposito, kredit, kartu kredit). Project ini mencakup pengujian pada 3 platform: 
        mobile app untuk sales di lapangan, web platform untuk supervisor, dan admin portal untuk back office. 
        Melibatkan manual testing intensif dan automation untuk regression.
      `,
      en: `
        Sales4u is an ecosystem of digital tools used by Maybank Indonesia's sales team to sell 
        banking products (savings, deposits, loans, credit cards). This project covered testing across 3 platforms: 
        a mobile app for field sales, a web platform for supervisors, and an admin portal for back office. 
        It involved intensive manual testing along with automation for regression.
      `
    },
    techStack: ["Katalon Studio", "Jira", "Azure DevOps", "Swagger", "SQL", "Mobile Testing", "Web Testing"],
    projectStructure: `Sales4u-Testing/
├── Mobile App/
│   ├── Test Cases/
│   │   ├── TC_Login_Sales.xlsx
│   │   ├── TC_Customer_Registration.xlsx
│   │   └── TC_Product_Application.xlsx
│   └── Automation/
│       └── Mobile_Regression.ts
├── Web Platform/
│   ├── Test Cases/
│   │   ├── TC_Dashboard_Supervisor.xlsx
│   │   └── TC_Performance_Report.xlsx
│   └── Automation/
│       └── Web_Regression.ts
├── Admin Portal/
│   └── Test Cases/
│       ├── TC_User_Management.xlsx
│       └── TC_Product_Config.xlsx
└── API Testing/
    └── Sales4u_API_Collection.json`,
    testCases: [
      { id: "S4U-001", name: "Login sales ke mobile app", input: "Employee ID + Password + OTP", expected: "Berhasil masuk dengan role 'Sales'", status: "pass" },
      { id: "S4U-002", name: "Registrasi calon nasabah baru", input: "Data KTP, foto selfie, data diri", expected: "Lead tersimpan, notifikasi ke supervisor", status: "pass" },
      { id: "S4U-003", name: "Pengajuan produk tabungan", input: "Data nasabah + pilih produk + submit", expected: "Aplikasi terinput dengan status 'Pending Review'", status: "pass" },
      { id: "S4U-004", name: "Supervisor approval di web platform", input: "Login supervisor + review + approve", expected: "Status aplikasi berubah ke 'Approved'", status: "pass" },
      { id: "S4U-005", name: "Sinkronisasi data mobile ke web", input: "Data input di app mobile", expected: "Tampil real-time di web dashboard", status: "pass" },
      { id: "S4U-006", name: "API: Get product list", input: "GET /api/products?type=savings", expected: "Response 200 dengan list produk tabungan", status: "pass" },
    ],
    pattern: `Pola Implementasi: Multi-Platform Testing Strategy
──────────────────────────────────────────────────
Koordinasi Testing 3 Platform:
  Mobile App ←→ API ←→ Web Platform ←→ Admin Portal

Testing Layers:
  1. Unit API  → Swagger/Postman: validasi endpoint
  2. Mobile UI → Katalon + Appium: alur sales
  3. Web UI    → Katalon + Chrome: alur supervisor
  4. Integration: end-to-end flow lintas platform

Sprint Workflow (Agile/Scrum):
  Sprint Planning → Dev → QA (1-2 day testing) → 
  Bug Fix → Retest → Sprint Review → Release

Jira Workflow:
  To Do → In Progress → In Review → Done
  Bug: Open → In Progress → Fixed → Retest → Closed`
  }
];

/* ==========================================================================
   Project (Model)
   Membungkus satu record project mentah menjadi object dengan behavior,
   alih-alih array of plain object yang diakses langsung di banyak tempat.
   ========================================================================== */
class Project {
  constructor(record) {
    this.id = record.id;
    this.name = record.name;
    this.subtitle = record.subtitle;
    this.icon = record.icon;
    this.repoUrl = record.repoUrl;
    this.type = record.type;
    this.tags = record.tags;
    this.shortDesc = record.shortDesc;
    this.description = record.description;
    this.techStack = record.techStack;
    this.projectStructure = record.projectStructure;
    this.testCases = record.testCases;
    this.pattern = record.pattern;
  }

  hasType(filterType) {
    return filterType === 'all' || this.type.includes(filterType);
  }

  hasRepo() {
    return Boolean(this.repoUrl);
  }

  getShortDesc(lang = 'id') {
    return this.shortDesc[lang] || this.shortDesc.id;
  }

  getDescription(lang = 'id') {
    return this.description[lang] || this.description.id;
  }
}

/* ==========================================================================
   ProjectRepository
   Satu titik akses ke koleksi data project (pola "Repository"), sehingga
   logic render/filter di app.js tidak pernah menyentuh array mentah.
   ========================================================================== */
class ProjectRepository {
  constructor(records) {
    this._projects = records.map(record => new Project(record));
  }

  getAll() {
    return this._projects;
  }

  getById(id) {
    return this._projects.find(project => project.id === id) || null;
  }

  filterByType(type) {
    return this._projects.filter(project => project.hasType(type));
  }
}
