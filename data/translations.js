/* ==========================================================================
   translations.js
   Semua label statis UI dalam dua bahasa (ID / EN).
   Akses via I18n.t('key') atau langsung TRANSLATIONS[lang][key].
   ========================================================================== */

const TRANSLATIONS = {
  id: {
    // Nav
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_skills: "Keahlian",
    nav_education: "Pendidikan",
    nav_certificates: "Sertifikat",
    nav_projects: "Proyek",
    nav_contact: "Kontak",

    // Section tags & titles
    section_about_tag: "// 01. Tentang",
    section_about_title: "Ringkasan",
    section_experience_tag: "// 02. Perjalanan",
    section_experience_title: "Pengalaman Kerja",
    section_skills_tag: "// 03. Keahlian",
    section_skills_title: "Keahlian & Kompetensi",
    section_education_tag: "// 04. Pendidikan",
    section_education_title: "Pendidikan",
    section_certificates_tag: "// 05. Sertifikat",
    section_certificates_title: "Sertifikat",
    section_projects_tag: "// 06. Proyek",
    section_projects_title: "Proyek",
    section_contact_tag: "// 07. Kontak",
    section_contact_title: "Mari Terhubung",

    // Hero
    hero_label: "// Portofolio QA Engineer",
    hero_cta_projects: "Lihat Proyek →",
    hero_cta_contact: "Hubungi Saya",
    hero_badge: "Terbuka untuk Kerja",
    stat_years: "Tahun Pengalaman",
    stat_companies: "Perusahaan",
    stat_certs: "Sertifikat",

    // Summary info list
    info_location: "Lokasi",
    info_email: "Email",
    info_phone: "Telepon",
    info_specialization: "Spesialisasi",
    info_domain: "Bidang",

    // Skills category titles
    skills_tools_tag: "🛠️ Tools & Teknologi",
    skill_level_expert: "Ahli",
    skill_level_advanced: "Mahir",
    skill_level_intermediate: "Menengah",

    // Education
    education_relevant: "Mata Kuliah Relevan:",

    // Projects
    projects_filter_all: "Semua",
    projects_filter_manual: "Manual Testing",
    projects_filter_automation: "Automation",
    projects_filter_api: "API Testing",
    projects_filter_mobile: "Mobile",
    projects_filter_dummy: "Latihan/Dummy",
    projects_filter_company: "Proyek Perusahaan",
    project_card_detail: "🔍 Lihat Detail",
    project_card_repo: "🔗 Repo",
    project_card_detail_arrow: "Detail →",

    // Modal
    modal_description: "Deskripsi Proyek",
    modal_tech_stack: "Tech Stack",
    modal_structure: "Struktur Proyek",
    modal_test_cases: "Contoh Test Case",
    modal_test_case: "Test Case",
    modal_input: "Input",
    modal_expected: "Hasil yang Diharapkan",
    modal_status: "Status",
    modal_pass: "Lulus",
    modal_fail: "Gagal",
    modal_pattern: "Pola Implementasi",
    modal_repository: "Repository",
    modal_view_repo: "Lihat Repository",
    modal_tags: "Tag",

    // Contact
    contact_heading: "Ada proyek atau<br>peluang menarik?",
    contact_body: "Saya terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi tentang QA dan software testing. Jangan ragu untuk menghubungi saya!",
    contact_cta_email: "Kirim Email →",
    contact_label_email: "Email",
    contact_label_phone: "WhatsApp / Telepon",
    contact_label_linkedin: "LinkedIn",

    // Footer
    footer_text: "© {year} Fetty Athiyatul Maula · Portofolio QA Engineer · Dibuat dengan ❤️ menggunakan HTML/CSS/JS"
  },

  en: {
    // Nav
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_certificates: "Certificates",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Section tags & titles
    section_about_tag: "// 01. About",
    section_about_title: "Summary",
    section_experience_tag: "// 02. Journey",
    section_experience_title: "Work Experience",
    section_skills_tag: "// 03. Skills",
    section_skills_title: "Skills & Expertise",
    section_education_tag: "// 04. Education",
    section_education_title: "Education",
    section_certificates_tag: "// 05. Certificates",
    section_certificates_title: "Certificates",
    section_projects_tag: "// 06. Projects",
    section_projects_title: "Projects",
    section_contact_tag: "// 07. Contact",
    section_contact_title: "Let’s Connect",

    // Hero
    hero_label: "// QA Engineer Portfolio",
    hero_cta_projects: "View Projects →",
    hero_cta_contact: "Contact Me",
    hero_badge: "Open to Work",
    stat_years: "Years Exp",
    stat_companies: "Companies",
    stat_certs: "Certs",

    // Summary info list
    info_location: "Location",
    info_email: "Email",
    info_phone: "Phone",
    info_specialization: "Specialization",
    info_domain: "Domain",

    // Skills category titles
    skills_tools_tag: "🛠️ Tools & Technologies",
    skill_level_expert: "Expert",
    skill_level_advanced: "Advanced",
    skill_level_intermediate: "Intermediate",

    // Education
    education_relevant: "Relevant Coursework:",

    // Projects
    projects_filter_all: "All",
    projects_filter_manual: "Manual Testing",
    projects_filter_automation: "Automation",
    projects_filter_api: "API Testing",
    projects_filter_mobile: "Mobile",
    projects_filter_dummy: "Dummy/Practice",
    projects_filter_company: "Company Project",
    project_card_detail: "🔍 View Details",
    project_card_repo: "🔗 Repo",
    project_card_detail_arrow: "Detail →",

    // Modal
    modal_description: "Project Description",
    modal_tech_stack: "Tech Stack",
    modal_structure: "Project Structure",
    modal_test_cases: "Sample Test Cases",
    modal_test_case: "Test Case",
    modal_input: "Input",
    modal_expected: "Expected Result",
    modal_status: "Status",
    modal_pass: "Pass",
    modal_fail: "Fail",
    modal_pattern: "Implementation Pattern",
    modal_repository: "Repository",
    modal_view_repo: "View Repository",
    modal_tags: "Tags",

    // Contact
    contact_heading: "Have an interesting<br>project or opportunity?",
    contact_body: "I’m open to new opportunities, collaborations, or simply discussing QA and software testing. Feel free to contact me!",
    contact_cta_email: "Send Email →",
    contact_label_email: "Email",
    contact_label_phone: "WhatsApp / Phone",
    contact_label_linkedin: "LinkedIn",

    // Footer
    footer_text: "© {year} Fetty Athiyatul Maula · QA Engineer Portfolio · Built with ❤️ using HTML/CSS/JS"
  }
};
