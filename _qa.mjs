export default async function run(page, ui) {
  await page.waitForSelector('#projectsGrid .project-card');

  // Snapshot stats BEFORE language switch
  const beforeNav = await page.$$eval('.nav-links a', els => els.map(e => e.textContent.trim()));
  const beforeHero = await page.$eval('.hero-role', e => e.textContent.trim());
  const beforeFilter = await page.$$eval('.filter-btn', els => els.map(e => e.textContent.trim()));
  const projectCount = await page.$$eval('#projectsGrid .project-card', els => els.length);

  // Switch to EN
  await page.click('#btn-en');
  await page.waitForTimeout(200);

  const afterNav = await page.$$eval('.nav-links a', els => els.map(e => e.textContent.trim()));
  const afterHero = await page.$eval('.hero-role', e => e.textContent.trim());
  const afterFilter = await page.$$eval('.filter-btn', els => els.map(e => e.textContent.trim()));
  const projectCountEn = await page.$$eval('#projectsGrid .project-card', els => els.length);

  // Open modal of the first project (click on the card body, not the repo link)
  await page.evaluate(() => document.querySelector('#projectsGrid .project-card .project-name').click());
  await page.waitForTimeout(200);
  const modalOpen = await page.$eval('#projectModal', e => e.classList.contains('open'));
  const modalTitle = await page.$eval('#modalTitle', e => e.textContent.trim());
  const techStack = await page.$$eval('#modalBody .tech-badge', els => els.length);

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
  const modalClosed = await page.$eval('#projectModal', e => !e.classList.contains('open'));

  // Click a filter (API)
  await page.evaluate(() => document.querySelector('.filter-btn[data-filter="api"]').click());
  await page.waitForTimeout(100);
  const filteredCount = await page.$$eval('#projectsGrid .project-card', els => els.length);

  // Switch theme
  const beforeTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  await page.click('#themeToggle');
  const afterTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

  return {
    beforeNav, afterNav,
    beforeHero, afterHero,
    beforeFilter, afterFilter,
    projectCount, projectCountEn,
    modal: { opened: modalOpen, title: modalTitle, techBadges: techStack, closedAfterEsc: modalClosed },
    filterApi: { count: filteredCount },
    theme: { before: beforeTheme, after: afterTheme }
  };
}
