/* ==========================================================================
   skills.js
   Kategori skill dan daftar tools.
   Skill ditulis sebagai daftar tanpa level/persentase; cantumkan hanya yang
   bisa ditunjukkan lewat pengalaman kerja atau project. Item: string atau { id, en }.
   ========================================================================== */

const SKILL_CATEGORIES = [
  {
    title: { id: "🔍 Jenis Testing", en: "🔍 Testing Types" },
    items: [
      "Functional Testing",
      "Regression Testing",
      "System Integration Testing (SIT)",
      "User Acceptance Testing (UAT)",
      "End-to-End Testing",
      "Exploratory Testing",
      "API Testing"
    ]
  },
  {
    title: { id: "🧠 Metode & Teknik", en: "🧠 Methods & Techniques" },
    items: [
      "Manual Testing",
      "Test Automation",
      "Behavior Driven Development (BDD)",
      "Data-Driven Testing",
      "Boundary Value Analysis",
      "Equivalence Partitioning",
      { id: "Integrasi CI/CD", en: "CI/CD Integration" }
    ]
  },
  {
    title: { id: "📋 Proses QA", en: "📋 QA Process" },
    items: [
      "Test Planning",
      "Test Case Design",
      "Test Execution",
      "Bug Reporting & Tracking",
      "Root Cause Analysis",
      "Test Documentation",
      "Agile / Scrum"
    ]
  },
  {
    title: { id: "🏦 Domain & Platform", en: "🏦 Domains & Platforms" },
    items: [
      { id: "Perbankan", en: "Banking" },
      { id: "Pembiayaan (Multifinance)", en: "Multifinance" },
      { id: "Asuransi", en: "Insurance" },
      "Web",
      "Mobile (Android)",
      "API",
      "Desktop"
    ]
  }
];

// logo: URL atau path lokal (mis. "assets/images/tools/katalon.png").
// icon: emoji fallback jika logo kosong / gagal dimuat.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

// Urutan = relevansi (paling relevan di atas); hanya TOOLS_VISIBLE pertama yang tampil awal.
const TOOLS_VISIBLE = 10;

const TOOLS = [
  { icon: "⚡", name: "Katalon Studio",    logo: "" },
  { icon: "🟠", name: "Selenium",          logo: `${DEVICON}/selenium/selenium-original.svg` },
  { icon: "📱", name: "Appium",            logo: "https://cdn.simpleicons.org/appium" },
  { icon: "🥒", name: "Cucumber (BDD)",    logo: `${DEVICON}/cucumber/cucumber-plain.svg` },
  { icon: "🔌", name: "Swagger / Postman", logo: [`${DEVICON}/swagger/swagger-original.svg`, `${DEVICON}/postman/postman-original.svg`] },
  { icon: "🗄️", name: "SQL",               logo: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
  { icon: "🐛", name: "Jira",              logo: `${DEVICON}/jira/jira-original.svg` },
  { icon: "☁️", name: "Azure DevOps",      logo: `${DEVICON}/azuredevops/azuredevops-original.svg` },
  { icon: "🐙", name: "Git / GitHub",      logo: [`${DEVICON}/git/git-original.svg`, "https://cdn.simpleicons.org/github/8b949e"] },
  { icon: "🌐", name: "Chrome DevTools",   logo: `${DEVICON}/chrome/chrome-original.svg` },
  { icon: "🤖", name: "Android Studio",    logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
  { icon: "⭐", name: "Groovy",            logo: `${DEVICON}/groovy/groovy-original.svg` },
  { icon: "💻", name: "Visual Studio",     logo: `${DEVICON}/visualstudio/visualstudio-original.svg` },
  { icon: "📅", name: "Monday.com",        logo: "" },
  { icon: "📝", name: "Notion",            logo: `${DEVICON}/notion/notion-original.svg` },
  { icon: "📄", name: "Google Docs",       logo: "https://cdn.simpleicons.org/googledocs" },
  { icon: "📊", name: "Google Sheets",     logo: "https://cdn.simpleicons.org/googlesheets" }
];
