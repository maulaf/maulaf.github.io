/* ==========================================================================
   skills.js
   Kategori skill (dengan skill bar) dan daftar tools.
   ========================================================================== */

const SKILL_CATEGORIES = [
  {
    title: { id: "🔍 Jenis Testing", en: "🔍 Testing Types" },
    items: [
      { name: "Manual Testing",      level: "Expert",       width: 95 },
      { name: "Automation Testing",  level: "Advanced",     width: 85 },
      { name: "API Testing",         level: "Advanced",     width: 80 },
      { name: "Mobile Testing",      level: "Intermediate", width: 75 },
      { name: "Regression Testing",  level: "Expert",       width: 90 }
    ]
  },
  {
    title: { id: "⚙️ Metodologi Testing", en: "⚙️ Testing Methodologies" },
    items: [
      { name: "System Integration Testing (SIT)",   level: "Expert",       width: 92 },
      { name: "User Acceptance Testing (UAT)",      level: "Expert",       width: 90 },
      { name: "Behavior Driven Development (BDD)",  level: "Intermediate", width: 75 },
      { name: "CI/CD Integration",                  level: "Intermediate", width: 70 }
    ]
  },
  {
    title: { id: "📋 Proses QA", en: "📋 QA Processes" },
    items: [
      { name: "Test Case Design",         level: "Expert",   width: 95 },
      { name: "Bug Reporting & Tracking", level: "Expert",   width: 95 },
      { name: "Test Planning",            level: "Advanced", width: 85 },
      { name: "Test Documentation",       level: "Expert",   width: 90 },
      { name: "Root Cause Analysis",      level: "Advanced", width: 80 }
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
  { icon: "🐙", name: "Git",               logo: `${DEVICON}/git/git-original.svg` },
  { icon: "☁️", name: "Azure DevOps",      logo: `${DEVICON}/azuredevops/azuredevops-original.svg` },
  { icon: "🐛", name: "Jira",              logo: `${DEVICON}/jira/jira-original.svg` },
  { icon: "📅", name: "Monday.com",        logo: "" },
  { icon: "🔌", name: "Swagger / Postman", logo: [`${DEVICON}/swagger/swagger-original.svg`, `${DEVICON}/postman/postman-original.svg`] },
  { icon: "🗄️", name: "SQL",               logo: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
  { icon: "📝", name: "Notion",            logo: `${DEVICON}/notion/notion-original.svg` },
  { icon: "📄", name: "Google Docs",       logo: "https://cdn.simpleicons.org/googledocs" },
  { icon: "💻", name: "Visual Studio",     logo: `${DEVICON}/visualstudio/visualstudio-original.svg` }
];
