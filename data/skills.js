/* ==========================================================================
   skills.js
   Kategori skill (dengan skill bar) dan daftar tools.
   ========================================================================== */

const SKILL_CATEGORIES = [
  {
    title: "🔍 Testing Types",
    items: [
      { name: "Manual Testing",      level: "Expert",       width: 95 },
      { name: "Automation Testing",  level: "Advanced",     width: 85 },
      { name: "API Testing",         level: "Advanced",     width: 80 },
      { name: "Mobile Testing",      level: "Intermediate", width: 75 },
      { name: "Regression Testing",  level: "Expert",       width: 90 }
    ]
  },
  {
    title: "⚙️ Testing Methodologies",
    items: [
      { name: "System Integration Testing (SIT)",   level: "Expert",       width: 92 },
      { name: "User Acceptance Testing (UAT)",      level: "Expert",       width: 90 },
      { name: "Behavior Driven Development (BDD)",  level: "Intermediate", width: 75 },
      { name: "CI/CD Integration",                  level: "Intermediate", width: 70 }
    ]
  },
  {
    title: "📋 QA Processes",
    items: [
      { name: "Test Case Design",         level: "Expert",   width: 95 },
      { name: "Bug Reporting & Tracking", level: "Expert",   width: 95 },
      { name: "Test Planning",            level: "Advanced", width: 85 },
      { name: "Test Documentation",       level: "Expert",   width: 90 },
      { name: "Root Cause Analysis",      level: "Advanced", width: 80 }
    ]
  }
];

const TOOLS = [
  { icon: "⚡", name: "Katalon Studio" },
  { icon: "🟠", name: "Selenium" },
  { icon: "🥒", name: "Cucumber (BDD)" },
  { icon: "🐙", name: "Git" },
  { icon: "☁️", name: "Azure DevOps" },
  { icon: "🐛", name: "Jira" },
  { icon: "📅", name: "Monday.com" },
  { icon: "🔌", name: "Swagger / Postman" },
  { icon: "🗄️", name: "SQL" },
  { icon: "📝", name: "Notion" },
  { icon: "📄", name: "Google Docs" },
  { icon: "💻", name: "Visual Studio" }
];
