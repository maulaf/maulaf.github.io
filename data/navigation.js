/* ==========================================================================
   navigation.js
   Daftar link di navigation bar.
   ========================================================================== */

const NAV_LINKS = [
  { href: "#summary",      labelKey: "nav_about" },
  { href: "#experience",   labelKey: "nav_experience" },
  { href: "#skills",       labelKey: "nav_skills" },
  { href: "#education",    labelKey: "nav_education" },
  { href: "#certificates", labelKey: "nav_certificates" },
  { href: "#projects",     labelKey: "nav_projects" },
  { href: "#contact",      labelKey: "nav_contact" }
];

const PROJECT_FILTERS = [
  { value: "all",        labelKey: "projects_filter_all" },
  { value: "manual",     labelKey: "projects_filter_manual" },
  { value: "automation", labelKey: "projects_filter_automation" },
  { value: "api",        labelKey: "projects_filter_api" },
  { value: "mobile",     labelKey: "projects_filter_mobile" },
  { value: "dummy",      labelKey: "projects_filter_dummy" },
  { value: "company",    labelKey: "projects_filter_company" }
];
