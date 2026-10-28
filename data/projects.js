/* ==========================================================================
   projects.js
   ✏️  DATA PROJECTS — edit di sini untuk menambah/ubah project.
   Setiap project WAJIB punya `id` unik. `repoUrl` boleh kosong (mis. proyek
   perusahaan yang kodenya tidak publik) — tombol repo otomatis disembunyikan.

   Prinsip isi: semua yang ditulis di sini HARUS bisa dicek di repo.
   Jangan menulis modul, teknik, atau tool yang tidak ada di repo.
   Proyek perusahaan (tag Company): tulis hanya yang benar-benar dikerjakan,
   tanpa data rahasia klien; angka/tools ditambahkan bila sudah dikonfirmasi.

   Konvensi agar semua modal detail seragam:
   - tags      : urutan Jenis → Metode → Platform; warna otomatis dari TAG_STYLES.
   - techStack : urutan Tool → Framework/Library → Bahasa → Platform → Build → Git.
                 Hanya tools/teknologi, bukan metodologi (BDD, Mobile Testing).
   - coverage  : [{ module, count, scope }] — jumlah test case per modul di repo (opsional).
   - testCases : 4–5 sampel dari repo, campur positive & negative (opsional).
                 `id` = ID/nama asli di repo. `name` & `expected` selalu { id, en };
                 `input` boleh string bila murni teknis (endpoint, kredensial).
   - approach  : teknik yang benar-benar dipakai, bukan tutorial umum.
                 { steps?, code?: [{label, content}], notes?: [{title, items}] }
   - Teks yang tampil di UI ditulis string atau { id, en }.
   ========================================================================== */

/* Warna tag per kategori: orange = jenis project, green = metode, purple = platform. */
const TAG_STYLES = {
  Practice: "orange",
  Company: "orange",
  Manual: "green",
  Automation: "green",
  BDD: "green",
  Web: "purple",
  API: "purple",
  Mobile: "purple",
  Desktop: "purple"
};

const PROJECT_RECORDS = [
  {
    id: 1,
    name: "OrangeHRM Automation",
    subtitle: { id: "Web Automation · DDT & BDD · Proyek Latihan", en: "Web Automation · DDT & BDD · Practice Project" },
    icon: "🤖",
    repoUrl: "https://github.com/maulaf/Katalon-OrangeHRM",
    type: ["automation", "dummy"],
    tags: ["Practice", "Automation", "BDD", "Web"],
    shortDesc: {
      id: "79 test case automation Katalon Studio untuk 4 modul OrangeHRM (Login, PIM, Admin, Buzz), dengan Data-Driven Testing dan BDD.",
      en: "79 Katalon Studio automated test cases across 4 OrangeHRM modules (Login, PIM, Admin, Buzz), using Data-Driven Testing and BDD."
    },
    description: {
      id: `
        Automation testing pada aplikasi demo OrangeHRM menggunakan Katalon Studio (WebUI).
        Cakupannya meliputi login, manajemen karyawan (PIM), menu Admin (Job Titles, Pay Grades, User Management),
        dan fitur sosial Buzz — termasuk skenario negatif seperti field wajib kosong, kredensial salah,
        dan URL video tidak valid. Login diuji dengan Data-Driven Testing dari Excel,
        sedangkan penambahan karyawan ditulis dalam format BDD (Cucumber).
      `,
      en: `
        Automation testing of the OrangeHRM demo application using Katalon Studio (WebUI).
        Coverage includes login, employee management (PIM), the Admin menu (Job Titles, Pay Grades, User Management),
        and the Buzz social feature — including negative scenarios such as empty required fields, wrong credentials,
        and invalid video URLs. Login is tested with Data-Driven Testing from Excel,
        while adding an employee is written in BDD format (Cucumber).
      `
    },
    techStack: ["Katalon Studio", "Cucumber", "JavaFaker", "Groovy", "Gradle", "Git"],
    coverage: [
      { module: "Login", count: 5, scope: { id: "Kredensial valid/invalid, field kosong, DDT dari Excel", en: "Valid/invalid credentials, empty fields, DDT from Excel" } },
      { module: "PIM", count: 3, scope: { id: "Tambah karyawan (termasuk versi BDD), detail karyawan", en: "Add employee (including a BDD version), employee details" } },
      { module: "Admin · Job Titles", count: 13, scope: { id: "Tambah & edit, validasi field kosong, upload file", en: "Add & edit, empty-field validation, file upload" } },
      { module: "Admin · Pay Grades", count: 6, scope: { id: "Tambah & edit, validasi field kosong", en: "Add & edit, empty-field validation" } },
      { module: "Admin · User Management", count: 17, scope: { id: "Pencarian, reset, sorting ASC/DESC, tambah user", en: "Search, reset, ASC/DESC sorting, add user" } },
      { module: "Buzz", count: 35, scope: { id: "Post, share foto & video, edit, hapus, like, komentar", en: "Post, share photos & videos, edit, delete, like, comment" } }
    ],
    testCases: [
      {
        id: "DDT - Login",
        name: { id: "Login data-driven dari Excel", en: "Data-driven login from Excel" },
        input: { id: "Kolom username & password dari sheet Login (Test Data.xlsx)", en: "Username & password columns from the Login sheet (Test Data.xlsx)" },
        expected: { id: "Teks pada kolom expectedText muncul di halaman", en: "Text from the expectedText column appears on the page" }
      },
      {
        id: "Log_TC.002",
        name: { id: "Login dengan kredensial salah", en: "Login with invalid credentials" },
        input: "Username: test, Password: test123",
        expected: { id: "Pesan \"Invalid credentials\" muncul", en: "\"Invalid credentials\" message is displayed" }
      },
      {
        id: "JOB_TC.003",
        name: { id: "Simpan Job Title dengan nama kosong", en: "Save a Job Title with an empty name" },
        input: { id: "Klik Add lalu Save tanpa mengisi form", en: "Click Add, then Save without filling the form" },
        expected: { id: "Pesan validasi \"Required\" muncul", en: "\"Required\" validation message is displayed" }
      },
      {
        id: "UM_TC.008",
        name: { id: "Sorting Username ascending", en: "Sort Username ascending" },
        input: { id: "Klik header Username → Ascending", en: "Click the Username header → Ascending" },
        expected: { id: "Isi tabel sama dengan salinannya yang diurutkan A–Z", en: "Table values equal a copy of themselves sorted A–Z" }
      },
      {
        id: "BUZZ_TC.016",
        name: { id: "Share video dengan URL tidak valid", en: "Share a video with an invalid URL" },
        input: "URL: \"test\"",
        expected: { id: "Pesan \"This URL is not a valid URL of a video…\" muncul", en: "\"This URL is not a valid URL of a video…\" message is displayed" }
      }
    ],
    approach: {
      notes: [
        {
          title: { id: "Teknik yang dipakai", en: "Techniques used" },
          items: [
            { id: "Data-Driven Testing: data login dari Excel (username, password, expectedText) lewat Test Suite DDT - Login", en: "Data-Driven Testing: login data from Excel (username, password, expectedText) via the DDT - Login Test Suite" },
            { id: "BDD: feature Employee Management + step definition Groovy", en: "BDD: Employee Management feature + Groovy step definitions" },
            { id: "Test Listener: login otomatis sebelum tiap test case, screenshot & tutup browser sesudahnya", en: "Test Listener: automatic login before each test case, screenshot & browser close afterwards" },
            { id: "Custom Keyword createPost() & createPostVideo() untuk menyiapkan data Buzz", en: "Custom Keywords createPost() & createPostVideo() to set up Buzz data" },
            { id: "Data acak dengan JavaFaker & RandomStringUtils (mis. Employee ID)", en: "Random data with JavaFaker & RandomStringUtils (e.g. Employee ID)" },
            { id: "Verifikasi sorting: isi tabel dibandingkan dengan salinan yang diurutkan", en: "Sorting check: table values compared against a sorted copy" }
          ]
        }
      ],
      code: [
        {
          label: "employeeManagement.feature",
          content: `Feature: Employee Management

Scenario: Add employee
  Given user login as admin
  When navigate to menu PIM
  And user click add button
  And user fill add form
  And user click save button
  Then data employee should be successfully saved`
        }
      ]
    }
  },
  {
    id: 2,
    name: "Petstore API Testing",
    subtitle: { id: "API Automation · Proyek Latihan", en: "API Automation · Practice Project" },
    icon: "🔌",
    repoUrl: "https://github.com/maulaf/Katalon-Petstore-API",
    type: ["automation", "api", "dummy"],
    tags: ["Practice", "Automation", "API"],
    shortDesc: {
      id: "26 test case API (16 positive, 10 negative) untuk resource Pet, Store, dan User di Swagger Petstore, dengan Katalon Studio.",
      en: "26 API test cases (16 positive, 10 negative) for the Pet, Store, and User resources of Swagger Petstore, using Katalon Studio."
    },
    description: {
      id: `
        Automation testing REST API Swagger Petstore (petstore.swagger.io/v2) menggunakan Katalon Studio.
        Test case dibagi menjadi positive case (happy path) dan negative case (error handling)
        untuk ketiga resource: Pet, Store, dan User. Data uji dibuat acak dengan JavaFaker agar unik di setiap run,
        dan ID hasil satu request diteruskan ke test case berikutnya.
      `,
      en: `
        Automation testing of the Swagger Petstore REST API (petstore.swagger.io/v2) using Katalon Studio.
        Test cases are split into positive cases (happy path) and negative cases (error handling)
        for all three resources: Pet, Store, and User. Test data is randomly generated with JavaFaker so each run is unique,
        and IDs returned by one request are passed on to the next test case.
      `
    },
    techStack: ["Katalon Studio", "Swagger", "JavaFaker", "Groovy", "REST API", "JSON", "Gradle", "Git"],
    coverage: [
      { module: "Pet", count: 12, scope: { id: "7 positive · 5 negative — tambah, cari (ID & status), update, hapus", en: "7 positive · 5 negative — add, find (ID & status), update, delete" } },
      { module: "Store", count: 7, scope: { id: "4 positive · 3 negative — inventory, order, hapus order", en: "4 positive · 3 negative — inventory, order, delete order" } },
      { module: "User", count: 7, scope: { id: "5 positive · 2 negative — create, login/logout, update, hapus", en: "5 positive · 2 negative — create, login/logout, update, delete" } }
    ],
    testCases: [
      {
        id: "POS TC.001",
        name: { id: "Create User", en: "Create User" },
        input: { id: "POST /user dengan data acak dari Faker", en: "POST /user with random data from Faker" },
        expected: { id: "Status 200; GET /user/{username} mengembalikan data yang sama", en: "Status 200; GET /user/{username} returns the same data" }
      },
      {
        id: "POS TC.011",
        name: { id: "Pesan order untuk pet", en: "Place an order for a pet" },
        input: { id: "POST /store/order — quantity acak, shipDate ≤ 10 hari ke depan, status placed", en: "POST /store/order — random quantity, shipDate ≤ 10 days ahead, status placed" },
        expected: { id: "Status 200; ID order disimpan untuk test berikutnya", en: "Status 200; order ID is stored for the next test" }
      },
      {
        id: "NEG TC.001",
        name: { id: "Tambah pet tanpa field wajib", en: "Add pet without required fields" },
        input: "POST /pet — name, category, tags = null",
        expected: { id: "Status 405", en: "Status 405" }
      },
      {
        id: "NEG TC.003",
        name: { id: "Cari pet dengan ID yang tidak ada", en: "Find pet by a non-existent ID" },
        input: { id: "GET /pet/{petId} — ID acak 10 digit", en: "GET /pet/{petId} — random 10-digit ID" },
        expected: { id: "Status 404", en: "Status 404" }
      },
      {
        id: "NEG TC.009",
        name: { id: "Login user dengan kredensial salah", en: "Login user with wrong credentials" },
        input: "GET /user/login — username: test",
        expected: { id: "Status 400", en: "Status 400" }
      }
    ],
    approach: {
      notes: [
        {
          title: { id: "Teknik yang dipakai", en: "Techniques used" },
          items: [
            { id: "Data dinamis dengan JavaFaker (nama, email, telepon, tanggal) agar tiap run unik", en: "Dynamic data with JavaFaker (name, email, phone, date) so every run is unique" },
            { id: "Chaining: ID dari response disimpan di GlobalVariable untuk test case berikutnya", en: "Chaining: IDs from responses are stored in a GlobalVariable for the next test case" },
            { id: "Test case reusable lewat callTestCase (mis. Update User memanggil Create User)", en: "Reusable test cases via callTestCase (e.g. Update User calls Create User)" },
            { id: "Verifikasi status code dan nilai properti di response body", en: "Verification of status codes and property values in the response body" },
            { id: "20 request object di Object Repository, satu per endpoint", en: "20 request objects in the Object Repository, one per endpoint" }
          ]
        }
      ],
      code: [
        {
          label: "TC.001 - Create User (Groovy)",
          content: `ResponseObject getUserResponse = WS.sendRequest(findTestObject('Object Repository/getUserByName',
	[('username') : username]))

WS.verifyResponseStatusCode(getUserResponse, 200)
WS.verifyElementPropertyValue(getUserResponse, 'username', username)
WS.verifyElementPropertyValue(getUserResponse, 'email', email)

GlobalVariable.id = WS.getElementPropertyValue(getUserResponse, 'id')`
        }
      ]
    }
  },
  {
    id: 3,
    name: "Automation Tiket.com (BDD)",
    subtitle: { id: "Web Automation · BDD · Kereta API · Proyek Latihan", en: "Web Automation · BDD · Train Tickets · Practice Project" },
    icon: "🎫",
    repoUrl: "https://github.com/maulaf/Katalon-Tiket.com",
    type: ["automation", "dummy"],
    tags: ["Practice", "Automation", "BDD", "Web"],
    shortDesc: {
      id: "BDD automation alur pemesanan tiket Kereta API di Tiket.com — cari, filter kelas, isi data penumpang, sampai verifikasi total harga.",
      en: "BDD automation of the Tiket.com train ticket booking flow — search, class filter, passenger details, through to total price verification."
    },
    description: {
      id: `
        Automation testing alur pemesanan tiket Kereta API di Tiket.com dengan Katalon Studio dan Cucumber.
        Skenario ditulis dalam Gherkin berbahasa Indonesia, memakai Scenario Outline + Examples untuk data uji
        dan tag per skenario agar bisa dijalankan terpisah maupun digabung menjadi alur booking end-to-end.
        Alur booking berakhir dengan verifikasi bahwa total harga sesuai dengan harga tiket ditambah biaya-biaya.
      `,
      en: `
        Automation testing of the Tiket.com train ticket booking flow with Katalon Studio and Cucumber.
        Scenarios are written in Indonesian Gherkin, using Scenario Outline + Examples for test data
        and per-scenario tags so they can run on their own or be chained into an end-to-end booking flow.
        The booking flow ends by verifying that the total price equals the ticket price plus fees.
      `
    },
    techStack: ["Katalon Studio", "Cucumber", "Gherkin", "Groovy", "Gradle", "Git"],
    coverage: [
      { module: { id: "Cari kereta", en: "Search trains" }, count: 1, scope: { id: "Scenario Outline: kota asal/tujuan, tanggal, jumlah penumpang", en: "Scenario Outline: origin/destination, date, passenger count" } },
      { module: { id: "Filter kelas", en: "Class filter" }, count: 1, scope: { id: "Pilih kelas, cek kelas di setiap hasil", en: "Select a class, check the class of every result" } },
      { module: { id: "Data penumpang", en: "Passenger details" }, count: 1, scope: { id: "Isi data pemesan & semua penumpang", en: "Fill in booker & all passenger details" } },
      { module: { id: "Booking end-to-end", en: "End-to-end booking" }, count: 1, scope: { id: "Gabungan skenario + verifikasi total harga", en: "Chained scenarios + total price verification" } }
    ],
    testCases: [
      {
        id: "@cariKereta",
        name: { id: "Mencari Kereta API", en: "Search trains" },
        input: { id: "Jakarta → Bandung, 19-07-2024, 1 dewasa + 1 bayi", en: "Jakarta → Bandung, 19-07-2024, 1 adult + 1 infant" },
        expected: { id: "Daftar kereta Jakarta–Bandung pada tanggal tersebut tampil", en: "List of Jakarta–Bandung trains on that date is shown" }
      },
      {
        id: "@filterKereta",
        name: { id: "Memfilter kelas Kereta API", en: "Filter train class" },
        input: { id: "Kelas: EKO (Ekonomi)", en: "Class: EKO (Economy)" },
        expected: { id: "Setiap hasil yang tampil berkelas Ekonomi", en: "Every displayed result is Economy class" }
      },
      {
        id: "@inputDataPenumpang",
        name: { id: "Mengisi data penumpang", en: "Fill in passenger details" },
        input: { id: "Data pemesan + data tiap penumpang", en: "Booker data + each passenger's data" },
        expected: { id: "Halaman Kursi & Perlindungan tampil", en: "Seat & Protection page is shown" }
      },
      {
        id: "Booking Train",
        name: { id: "Booking end-to-end", en: "End-to-end booking" },
        input: { id: "@cariKereta + @inputDataPenumpang, lalu Lanjut Bayar", en: "@cariKereta + @inputDataPenumpang, then Continue to Pay" },
        expected: { id: "Countdown pembayaran tampil; total = harga tiket + biaya pemesanan + jasa + asuransi", en: "Payment countdown is shown; total = ticket price + booking fee + service fee + insurance" }
      }
    ],
    approach: {
      notes: [
        {
          title: { id: "Teknik yang dipakai", en: "Techniques used" },
          items: [
            { id: "Scenario Outline + Examples untuk memisahkan data uji dari langkah", en: "Scenario Outline + Examples to separate test data from steps" },
            { id: "Tag per skenario, dijalankan dengan CucumberKW.runFeatureFileWithTags", en: "Per-scenario tags, run with CucumberKW.runFeatureFileWithTags" },
            { id: "XPath dinamis + loop untuk memeriksa semua kartu hasil dan form penumpang", en: "Dynamic XPath + loops to check every result card and passenger form" },
            { id: "Menangani kondisi tiket habis (klik \"Lihat Kereta Lain\")", en: "Handles the sold-out case (clicks \"Lihat Kereta Lain\")" },
            { id: "Total harga dihitung ulang dan dibandingkan dengan yang tampil di halaman", en: "Total price is recalculated and compared with the one shown on the page" }
          ]
        }
      ],
      code: [
        {
          label: "pemesananTiketKA.feature",
          content: `@cariKereta
Scenario Outline: Mencari Kereta API
  Given pengguna berada di halaman utama aplikasi tiket.com
  When pengguna memilih menu Kereta Api
  And pengguna memasukkan kota asal <departureCity>
  And pengguna memasukkan kota tujuan <arrivalCity>
  And pengguna memilih tanggal keberangkatan <departDate>
  And pengguna memilih penumpang : <totalAdult> dewasa, <totalInfant> bayi
  And pengguna menekan tombol Cari
  Then sistem menampilkan daftar kereta api yang tersedia dari <departureCity> ke <arrivalCity> pada tanggal <departDate>

  Examples:
    | departureCity | arrivalCity | departDate | totalAdult | totalInfant |
    | jakarta       | bandung     | 19-07-2024 | 1          | 1           |`
        }
      ]
    }
  },
  {
    id: 4,
    name: "Automation redBus (Mobile)",
    subtitle: { id: "Mobile Automation · Android · Proyek Latihan", en: "Mobile Automation · Android · Practice Project" },
    icon: "📱",
    repoUrl: "https://github.com/maulaf/Katalon-redBus",
    type: ["automation", "mobile", "dummy"],
    tags: ["Practice", "Automation", "Mobile"],
    shortDesc: {
      id: "Mobile automation aplikasi Android redBus dengan Katalon Studio + Appium: alur pencarian bus dan filter jam keberangkatan.",
      en: "Mobile automation of the redBus Android app with Katalon Studio + Appium: bus search flow and departure time filter."
    },
    description: {
      id: `
        Eksplorasi mobile automation pada aplikasi Android redBus menggunakan Katalon Studio dengan Appium.
        Project ini mengotomasi satu alur end-to-end pencarian bus: memilih kota asal dan tujuan,
        tanggal keberangkatan, lalu memfilter jam keberangkatan. Aplikasi dibuka dan ditutup otomatis
        oleh Test Listener sebelum dan sesudah setiap test case.
      `,
      en: `
        An exploration of mobile automation on the redBus Android app using Katalon Studio with Appium.
        The project automates one end-to-end bus search flow: choosing origin and destination cities,
        the departure date, then filtering by departure time. The app is opened and closed automatically
        by a Test Listener before and after each test case.
      `
    },
    techStack: ["Katalon Studio", "Appium", "Groovy", "Android", "Gradle", "Git"],
    coverage: [
      { module: { id: "Pencarian bus", en: "Bus search" }, count: 1, scope: { id: "Kota asal & tujuan, tanggal, filter jam keberangkatan", en: "Origin & destination, date, departure time filter" } }
    ],
    testCases: [
      {
        id: "TC.001",
        name: { id: "Cari bus", en: "Search bus" },
        input: { id: "Dari: Jakarta, Ke: Bandung, Tanggal: Besok, Jam: 12:00–15:00", en: "From: Jakarta, To: Bandung, Date: Tomorrow, Time: 12:00–15:00" },
        expected: { id: "Alur pencarian berjalan sampai langkah Lanjutkan", en: "Search flow runs through to the Continue step" }
      }
    ],
    approach: {
      notes: [
        {
          title: { id: "Teknik yang dipakai", en: "Techniques used" },
          items: [
            { id: "Test Listener: buka aplikasi yang sudah terpasang, atau install dari APK di project bila belum ada", en: "Test Listener: opens the installed app, or installs it from the project's APK if missing" },
            { id: "Aplikasi ditutup otomatis setelah setiap test case", en: "The app is closed automatically after each test case" },
            { id: "Object Repository untuk elemen Android (TextView, Button, input)", en: "Object Repository for Android elements (TextView, Button, input)" }
          ]
        }
      ],
      code: [
        {
          label: "NewTestListener.groovy",
          content: `@BeforeTestCase
def sampleBeforeTestCase(TestCaseContext testCaseContext) {
  String applicationID = 'in.redbus.android'
  String apk = RunConfiguration.getProjectDir() + '/Data Files/redbus.apk'
  try {
    Mobile.startExistingApplication(applicationID)
  } catch (Exception e) {
    Mobile.startApplication(apk, false)
  }
}`
        }
      ]
    }
  },
  {
    id: 5,
    name: "QA Test Case & Documentation Template",
    subtitle: { id: "Manual Testing · Dokumentasi QA · CMS Login & Logout", en: "Manual Testing · QA Documentation · CMS Login & Logout" },
    icon: "📝",
    repoUrl: "https://docs.google.com/spreadsheets/d/1ti-W6N4cHmFuzOGHcpuczSbHgsDhGAPZXv86eDGMbFA",
    type: ["manual"],
    tags: ["Manual", "Web"],
    shortDesc: {
      id: "Template dokumentasi QA standar, dengan contoh 38 test case Login & Logout CMS.",
      en: "A standardized QA documentation template, with 38 sample CMS Login & Logout test cases."
    },
    description: {
      id: `
        Template dokumentasi QA yang saya buat agar dokumentasi testing tim lebih seragam.
        Berisi ringkasan test case per komponen, dokumentasi project, dan lembar test case
        dengan penilaian kelayakan rilis. Contoh isinya: 38 test case Login & Logout CMS.
      `,
      en: `
        A QA documentation template I created to keep the team's testing documentation consistent.
        It includes a per-component test case summary, project documentation, and a test case sheet
        with a release-readiness assessment. Sample content: 38 CMS Login & Logout test cases.
      `
    },
    techStack: ["Spreadsheet"],
    approach: {
      notes: [
        {
          title: { id: "Teknik desain test case", en: "Test design techniques" },
          items: [
            { id: "Boundary Value Analysis: email 5/6 dan 50/51 karakter, kata sandi 7/8 dan 20/21 karakter", en: "Boundary Value Analysis: email at 5/6 and 50/51 characters, password at 7/8 and 20/21 characters" },
            { id: "Equivalence Partitioning: variasi huruf email, format email valid/tidak valid, karakter spesial yang tidak diizinkan", en: "Equivalence Partitioning: email casing, valid/invalid email formats, disallowed special characters" },
            { id: "State-based: akun banned, suspend, inactive, dihapus — sebelum dan sesudah diaktifkan kembali, serta kata sandi lama/baru setelah reset", en: "State-based: banned, suspended, inactive, and deleted accounts — before and after reactivation, plus old/new password after a reset" },
            { id: "Kondisi error lingkungan: tanpa koneksi internet dan server down", en: "Environment errors: no internet connection and server down" }
          ]
        }
      ]
    }
  },
  {
    id: 6,
    name: "BRI New Delivery System (NDS)",
    subtitle: { id: "Test Automation · Perbankan · Bank Rakyat Indonesia", en: "Test Automation · Banking · Bank Rakyat Indonesia" },
    icon: "🏦",
    repoUrl: "",
    type: ["automation", "company"],
    tags: ["Company", "Automation"],
    shortDesc: {
      id: "Membangun test automation untuk sistem layanan nasabah yang dipakai di seluruh cabang BRI, terintegrasi ke CI/CD pipeline.",
      en: "Built test automation for the customer service system used across all BRI branches, integrated into the CI/CD pipeline."
    },
    description: {
      id: `
        New Delivery System (NDS) adalah sistem layanan nasabah yang digunakan di seluruh cabang Bank Rakyat Indonesia.
        Sebagai QA Automation (Sharing Vision, Mei 2022 – Mei 2023), saya membuat automation script
        untuk fitur general, finansial, dan non-finansial, lalu mengintegrasikannya ke dalam CI/CD pipeline
        agar pengujian berjalan otomatis di setiap rilis.
      `,
      en: `
        New Delivery System (NDS) is the customer service system used across all Bank Rakyat Indonesia branches.
        As a QA Automation engineer (Sharing Vision, May 2022 – May 2023), I built automation scripts
        for general, financial, and non-financial features, then integrated them into the CI/CD pipeline
        so tests run automatically on every release.
      `
    },
    techStack: [],
    approach: {
      notes: [
        {
          title: { id: "Cakupan pekerjaan", en: "Scope of work" },
          items: [
            { id: "Automation script untuk fitur general, finansial, dan non-finansial", en: "Automation scripts for general, financial, and non-financial features" },
            { id: "Integrasi automation test ke dalam CI/CD pipeline", en: "Integration of automated tests into the CI/CD pipeline" }
          ]
        }
      ]
    }
  },
  {
    id: 7,
    name: "Maybank Sales Digital Tools",
    subtitle: { id: "Manual & Automation · Perbankan · Maybank Indonesia", en: "Manual & Automation · Banking · Maybank Indonesia" },
    icon: "💳",
    repoUrl: "",
    type: ["manual", "automation", "mobile", "company"],
    tags: ["Company", "Manual", "Automation", "Mobile", "Web"],
    shortDesc: {
      id: "Pengujian manual & automation sales digital tools Maybank Indonesia di mobile app, platform web, dan admin portal.",
      en: "Manual & automation testing of Maybank Indonesia's sales digital tools across the mobile app, web platform, and admin portal."
    },
    description: {
      id: `
        Sales digital tools adalah aplikasi yang dipakai tim sales Maybank Indonesia, tersedia di mobile app,
        platform web, dan admin portal. Sebagai QA Engineer (Ikonsultan, Jan 2025 – Jan 2026), saya menyusun
        test case dari kebutuhan bisnis, mengeksekusi pengujian manual dan automation, serta bekerja erat dengan
        developer dan business analyst untuk menyamakan pemahaman requirement sampai setiap isu terselesaikan.
      `,
      en: `
        Sales digital tools are the applications used by Maybank Indonesia's sales team, available as a mobile app,
        a web platform, and an admin portal. As a QA Engineer (Ikonsultan, Jan 2025 – Jan 2026), I designed
        test cases from business requirements, ran manual and automated tests, and worked closely with
        developers and business analysts to align on requirements and see every issue through to resolution.
      `
    },
    techStack: [],
    approach: {
      notes: [
        {
          title: { id: "Cakupan pekerjaan", en: "Scope of work" },
          items: [
            { id: "Pengujian tiga platform: mobile app, web, dan admin portal", en: "Testing across three platforms: mobile app, web, and admin portal" },
            { id: "Desain test case berdasarkan kebutuhan bisnis", en: "Test case design based on business requirements" },
            { id: "Eksekusi manual dan automation testing", en: "Manual and automated test execution" },
            { id: "Klarifikasi requirement bersama developer dan business analyst", en: "Requirement clarification with developers and business analysts" }
          ]
        }
      ]
    }
  },
  {
    id: 8,
    name: "Astra Credit Companies — AOL",
    subtitle: { id: "Manual Testing · Multifinance · SIT & UAT", en: "Manual Testing · Multifinance · SIT & UAT" },
    icon: "🚗",
    repoUrl: "",
    type: ["manual", "company"],
    tags: ["Company", "Manual", "Desktop"],
    shortDesc: {
      id: "SIT dan UAT aplikasi desktop AOL yang menjalankan proses bisnis Astra Credit Companies, termasuk pembayaran kendaraan baru dan bekas.",
      en: "SIT and UAT of AOL, the desktop application that runs Astra Credit Companies' business processes, including new and used vehicle payments."
    },
    description: {
      id: `
        AOL adalah aplikasi desktop yang menjalankan proses bisnis Astra Credit Companies (ACC), perusahaan pembiayaan kendaraan,
        termasuk pembayaran kendaraan baru dan bekas. Sebagai QC Engineer (Persada, Mei 2021 – Mei 2022),
        saya melakukan manual testing pada tahap SIT dan UAT, serta menyusun user manual sebagai panduan pengguna.
      `,
      en: `
        AOL is the desktop application that runs the business processes of Astra Credit Companies (ACC), a vehicle financing company,
        including new and used vehicle payments. As a QC Engineer (Persada, May 2021 – May 2022),
        I performed manual testing during SIT and UAT, and wrote user manuals to guide end users.
      `
    },
    techStack: [],
    approach: {
      notes: [
        {
          title: { id: "Cakupan pekerjaan", en: "Scope of work" },
          items: [
            { id: "System Integration Testing (SIT) dan User Acceptance Testing (UAT)", en: "System Integration Testing (SIT) and User Acceptance Testing (UAT)" },
            { id: "Alur pembayaran kendaraan baru dan bekas", en: "New and used vehicle payment flows" },
            { id: "Penyusunan user manual untuk pengguna akhir", en: "User manuals for end users" }
          ]
        }
      ]
    }
  }
];
