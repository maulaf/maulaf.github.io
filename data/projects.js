/* ==========================================================================
   projects.js
   ✏️  DATA PROJECTS — edit di sini untuk menambah/ubah project.
   Setiap project WAJIB punya `id` unik dan `repoUrl`.
   ========================================================================== */

const PROJECT_RECORDS = [
  {
    id: 1,
    name: "OrangeHRM Automation",
    subtitle: "Web Automation Testing · Dummy Project",
    icon: "🤖",
    repoUrl: "https://github.com/maulaf/Katalon-OrangeHRM",
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
      {
        id: "TC-001",
        name: { id: "Login dengan kredensial valid", en: "Login with valid credentials" },
        input: "Username: Admin, Password: admin123",
        expected: { id: "Berhasil masuk ke dashboard", en: "Successfully redirected to the dashboard" },
        status: "pass"
      },
      {
        id: "TC-002",
        name: { id: "Login dengan password salah", en: "Login with wrong password" },
        input: "Username: Admin, Password: wrong",
        expected: { id: "Muncul pesan error 'Invalid credentials'", en: "Error message 'Invalid credentials' is displayed" },
        status: "pass"
      },
      {
        id: "TC-003",
        name: { id: "Tambah karyawan baru", en: "Add new employee" },
        input: { id: "Nama: John Doe, Employee ID: 001", en: "Name: John Doe, Employee ID: 001" },
        expected: { id: "Karyawan berhasil ditambahkan", en: "Employee added successfully" },
        status: "pass"
      },
      {
        id: "TC-004",
        name: { id: "Edit data karyawan", en: "Edit employee data" },
        input: { id: "Ubah nama karyawan yang sudah ada", en: "Change an existing employee's name" },
        expected: { id: "Data berhasil diupdate", en: "Data updated successfully" },
        status: "pass"
      },
      {
        id: "TC-005",
        name: { id: "Apply cuti karyawan", en: "Apply employee leave" },
        input: { id: "Pilih jenis cuti dan tanggal", en: "Select leave type and date" },
        expected: { id: "Permohonan cuti berhasil diajukan", en: "Leave request submitted successfully" },
        status: "fail"
      }
    ],
    pattern: {
      id: `Pola Implementasi: Page Object Model (POM)<br>
─────────────────────────────────────────<br>
1. Object Repository → Simpan semua locator element (XPath, CSS)<br>
2. Test Cases → Script pengujian yang memanggil object<br>
3. Custom Keywords → Fungsi reusable (login, logout, dll)<br>
4. Test Suites → Kumpulan test case yang dijalankan bersama<br>
5. Reports → Hasil eksekusi otomatis (pass/fail/screenshot)`,
      en: `Implementation Pattern: Page Object Model (POM)<br>
─────────────────────────────────────────<br>
1. Object Repository → Store all element locators (XPath, CSS)<br>
2. Test Cases → Test scripts that call the objects<br>
3. Custom Keywords → Reusable functions (login, logout, etc.)<br>
4. Test Suites → Groups of test cases run together<br>
5. Reports → Automated execution results (pass/fail/screenshot)`
    }
  },
  {
    id: 2,
    name: "Petstore API Testing",
    subtitle: "API Automation · Dummy Project",
    icon: "🔌",
    repoUrl: "https://github.com/maulaf/Katalon-Petstore-API",
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
      {
        id: "API-001",
        name: "GET Pet by ID",
        input: "GET /pet/{petId} → ID: 1",
        expected: { id: "Status 200, response berisi data pet", en: "Status 200, response contains pet data" },
        status: "pass"
      },
      {
        id: "API-002",
        name: "POST Add new Pet",
        input: "POST /pet body: {name, status}",
        expected: { id: "Status 200, pet berhasil ditambahkan", en: "Status 200, pet added successfully" },
        status: "pass"
      },
      {
        id: "API-003",
        name: "PUT Update Pet",
        input: { id: "PUT /pet body: {id, name baru}", en: "PUT /pet body: {id, new name}" },
        expected: { id: "Status 200, data terupdate", en: "Status 200, data updated" },
        status: "pass"
      },
      {
        id: "API-004",
        name: "DELETE Pet",
        input: "DELETE /pet/{petId}",
        expected: { id: "Status 200, pet terhapus", en: "Status 200, pet deleted" },
        status: "pass"
      },
      {
        id: "API-005",
        name: "GET Pet with invalid ID",
        input: "GET /pet/99999",
        expected: "Status 404, Pet not found",
        status: "fail"
      }
    ],
    pattern: {
      id: `Pola Implementasi: API Automation dengan Katalon
─────────────────────────────────────────────────
1. Buat Web Service Object (endpoint URL + method)<br>
2. Set Request Headers (Content-Type: application/json)<br>
3. Set Request Body (JSON payload)<br>
4. Tambahkan Verification Point:<br>
   - verifyResponseStatusCode(200)<br>
   - verifyElementPropertyValue('id', expectedId)<br>
5. Jalankan dalam Test Suite untuk regression`,
      en: `Implementation Pattern: API Automation with Katalon
─────────────────────────────────────────────────
1. Create a Web Service Object (endpoint URL + method)<br>
2. Set Request Headers (Content-Type: application/json)<br>
3. Set Request Body (JSON payload)<br>
4. Add Verification Points:<br>
   - verifyResponseStatusCode(200)<br>
   - verifyElementPropertyValue('id', expectedId)<br>
5. Run in a Test Suite for regression`
    }
  },
  {
    id: 3,
    name: "Automation Tiket.com (BDD)",
    subtitle: "Web Automation · BDD · Dummy Project",
    icon: "🎫",
    repoUrl: "https://github.com/maulaf/Katalon-Tiket.com",
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
      {
        id: "BDD-001",
        name: { id: "Search penerbangan Jakarta-Bali", en: "Search Jakarta-Bali flights" },
        input: {
          id: "Given user di halaman utama / When search JKT-DPS tanggal besok / Then tampil list penerbangan",
          en: "Given user is on the home page / When searching JKT-DPS for tomorrow / Then the flight list is shown"
        },
        expected: { id: "Hasil pencarian muncul dengan filter aktif", en: "Search results appear with active filters" },
        status: "pass"
      },
      {
        id: "BDD-002",
        name: { id: "Filter maskapai penerbangan", en: "Filter by airline" },
        input: {
          id: "Given hasil search tampil / When pilih filter 'Garuda' / Then hanya Garuda yang muncul",
          en: "Given search results are shown / When selecting the 'Garuda' filter / Then only Garuda appears"
        },
        expected: { id: "List terfilter sesuai maskapai", en: "List is filtered by airline" },
        status: "pass"
      },
      {
        id: "BDD-003",
        name: { id: "Search hotel di Bali", en: "Search hotels in Bali" },
        input: {
          id: "Given user di tab Hotel / When search 'Bali' check-in besok / Then tampil list hotel",
          en: "Given user is on the Hotel tab / When searching 'Bali' with check-in tomorrow / Then the hotel list is shown"
        },
        expected: { id: "Hasil pencarian hotel muncul", en: "Hotel search results appear" },
        status: "pass"
      },
      {
        id: "BDD-004",
        name: { id: "Tambah penumpang ke keranjang", en: "Add passenger to cart" },
        input: {
          id: "Given flight dipilih / When klik 'Pilih' / Then redirect ke halaman passenger",
          en: "Given a flight is selected / When clicking 'Select' / Then redirect to the passenger page"
        },
        expected: { id: "Form pengisian penumpang tampil", en: "Passenger details form is displayed" },
        status: "pass"
      }
    ],
    pattern: {
      en: `Implementation Pattern: BDD with Cucumber + Katalon
─────────────────────────────────────────────────
Feature File (.feature) — Gherkin language:
  Scenario: Search flights
    Given the user is on the tiket.com home page
    When the user searches for flights from "Jakarta" to "Bali"
    And the user selects the date "tomorrow"
    Then the system displays the list of available flights

Step Definition — Groovy/Java:
  @Given("the user is on the tiket.com home page")
  def givenUserAtHomePage() {
    WebUI.openBrowser('https://tiket.com')
  }

BDD Advantages:
  ✓ Tests are easy for non-technical people to understand
  ✓ Living documentation
  ✓ Collaboration between developers + QA + BA`,
      id: `Pola Implementasi: BDD dengan Cucumber + Katalon
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
    }
  },
  {
    id: 4,
    name: "Automation redBus (Mobile)",
    subtitle: "Mobile Automation · Dummy Project",
    icon: "📱",
    repoUrl: "https://github.com/maulaf/Katalon-redBus",
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
      {
        id: "MOB-001",
        name: { id: "Launch aplikasi & Onboarding", en: "App launch & onboarding" },
        input: { id: "Buka app redBus pertama kali", en: "Open the redBus app for the first time" },
        expected: { id: "Splash screen muncul, redirect ke onboarding", en: "Splash screen appears, redirects to onboarding" },
        status: "pass"
      },
      {
        id: "MOB-002",
        name: { id: "Search rute bus", en: "Search bus route" },
        input: { id: "From: Jakarta, To: Bandung, Tanggal: besok", en: "From: Jakarta, To: Bandung, Date: tomorrow" },
        expected: { id: "List bus tersedia muncul", en: "List of available buses appears" },
        status: "pass"
      },
      {
        id: "MOB-003",
        name: { id: "Filter bus berdasarkan waktu", en: "Filter buses by time" },
        input: { id: "Filter 'Pagi' (06:00 - 12:00)", en: "Filter 'Morning' (06:00 - 12:00)" },
        expected: { id: "Hanya bus berangkat pagi yang tampil", en: "Only morning departures are shown" },
        status: "pass"
      },
      {
        id: "MOB-004",
        name: { id: "Pilih kursi", en: "Select seat" },
        input: { id: "Tap pada kursi yang tersedia", en: "Tap an available seat" },
        expected: { id: "Kursi berubah warna (selected) dan harga update", en: "Seat changes color (selected) and price updates" },
        status: "pass"
      },
      {
        id: "MOB-005",
        name: { id: "Checkout tanpa login", en: "Checkout without login" },
        input: { id: "Tap Checkout tanpa akun", en: "Tap Checkout without an account" },
        expected: { id: "Redirect ke halaman login/register", en: "Redirects to the login/register page" },
        status: "pass"
      }
    ],
    pattern: {
      en: `Implementation Pattern: Mobile Testing with Katalon + Appium
────────────────────────────────────────────────────────
Setup:
  1. Install Appium Server
  2. Connect Android device / start emulator
  3. Set desired capabilities in Katalon:
     - platformName: Android
     - deviceName: [device ID]
     - appPackage: com.redbus.in
     - appActivity: .ui.SplashActivity

Locator Strategy (Mobile):
  - Accessibility ID (recommended)
  - XPath
  - ID Resource

Best Practice:
  ✓ Use explicit waits (no hardcoded sleep)
  ✓ Screenshot on failure
  ✓ Modular tests with Custom Keywords`,
      id: `Pola Implementasi: Mobile Testing dengan Katalon + Appium
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
    }
  }
];
