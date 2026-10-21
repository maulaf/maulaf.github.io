/* ==========================================================================
   skills.js
   Kategori skill (dengan skill bar) dan daftar tools.
   ========================================================================== */

const SKILL_CATEGORIES = [
  {
    title: { id: "🔍 Jenis Testing", en: "🔍 Testing Types" },
    items: [
      { name: "Functional Testing",                level: "Expert",       width: 95 },
      { name: "Regression Testing",                level: "Expert",       width: 90 },
      { name: "System Integration Testing (SIT)",  level: "Expert",       width: 92 },
      { name: "User Acceptance Testing (UAT)",     level: "Expert",       width: 90 },
      { name: "End-to-End Testing",                level: "Advanced",     width: 85 },
      { name: "Exploratory Testing",               level: "Advanced",     width: 80 },
      { name: "API Testing",                       level: "Advanced",     width: 80 }
    ]
  },
  {
    title: { id: "⚙️ Pendekatan & Metodologi Testing", en: "⚙️ Testing Approaches & Methodologies" },
    items: [
      { name: "Manual Testing",                     level: "Expert",       width: 95 },
      { name: "Automation Testing",                 level: "Advanced",     width: 85 },
      { name: "Agile / Scrum",                      level: "Advanced",     width: 85 },
      { name: "Behavior Driven Development (BDD)",  level: "Intermediate", width: 75 },
      { name: "Continuous Testing (CI/CD)",         level: "Intermediate", width: 70 }
    ]
  },
  {
    title: { id: "📋 Proses QA", en: "📋 QA Processes" },
    items: [
      { name: "Test Planning",            level: "Advanced", width: 85 },
      { name: "Test Case Design",         level: "Expert",   width: 95 },
      { name: "Test Execution",           level: "Expert",   width: 95 },
      { name: "Bug Reporting & Tracking", level: "Expert",   width: 95 },
      { name: "Root Cause Analysis",      level: "Advanced", width: 80 },
      { name: "Test Documentation",       level: "Expert",   width: 90 }
    ]
  }
];

// logo: URL atau path lokal (mis. "assets/images/tools/katalon.png").
// icon: emoji fallback jika logo kosong / gagal dimuat.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const TOOLS = [
  { icon: "⚡", name: "Katalon Studio",    logo: "" },
  { icon: "🟠", name: "Selenium",          logo: `${DEVICON}/selenium/selenium-original.svg` },
  { icon: "🥒", name: "Cucumber (BDD)",    logo: `${DEVICON}/cucumber/cucumber-plain.svg` },
  { icon: "📱", name: "Appium",            logo: "https://cdn.simpleicons.org/appium" },
  { icon: "🤖", name: "Android Studio",    logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
  { icon: "🌐", name: "Chrome DevTools",   logo: `${DEVICON}/chrome/chrome-original.svg` },
  { icon: "⭐", name: "Groovy",            logo: `${DEVICON}/groovy/groovy-original.svg` },
  { icon: "🐙", name: "Git / GitHub",      logo: [`${DEVICON}/git/git-original.svg`, "https://cdn.simpleicons.org/github/8b949e"] },
  { icon: "☁️", name: "Azure DevOps",      logo: `${DEVICON}/azuredevops/azuredevops-original.svg` },
  { icon: "🐛", name: "Jira",              logo: `${DEVICON}/jira/jira-original.svg` },
  { icon: "📅", name: "Monday.com",        logo: "" },
  { icon: "🔌", name: "Swagger / Postman", logo: [`${DEVICON}/swagger/swagger-original.svg`, `${DEVICON}/postman/postman-original.svg`] },
  { icon: "🗄️", name: "SQL",               logo: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
  { icon: "📝", name: "Notion",            logo: `${DEVICON}/notion/notion-original.svg` },
  { icon: "📄", name: "Google Docs",       logo: "https://cdn.simpleicons.org/googledocs" },
  { icon: "📊", name: "Google Sheets",     logo: "https://cdn.simpleicons.org/googlesheets" },
  { icon: "💻", name: "Visual Studio",     logo: `${DEVICON}/visualstudio/visualstudio-original.svg` }
];
