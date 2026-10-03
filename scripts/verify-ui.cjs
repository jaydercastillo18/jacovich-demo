const { chromium } = require('@playwright/test');
const { default: AxeBuilder } = require('@axe-core/playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');

async function main() {
  const browser = await chromium.launch({ headless: true, ...(process.env.UI_BROWSER_CHANNEL ? { channel: process.env.UI_BROWSER_CHANNEL } : {}) });
  const report = [];
  fs.mkdirSync('test-results', { recursive: true });
  for (const width of [375, 390, 768, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.addInitScript(() => {
      window.__metrics = { lcp: 0, cls: 0 };
      new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__metrics.lcp = entry.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__metrics.cls += entry.value; }).observe({ type: 'layout-shift', buffered: true });
    });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    const response = await page.goto(process.env.UI_BASE_URL || 'http://localhost:3000', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    assert.match(response.headers()['x-robots-tag'], /noindex, nofollow/);
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.hero-image').evaluate(el => el.decode());
    const metrics = await page.evaluate(() => ({ ...window.__metrics, scriptTransferBytes: performance.getEntriesByType('resource').filter(r => r.initiatorType === 'script').reduce((sum, r) => sum + r.transferSize, 0) }));
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Overflow at ${width}`);
    const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash));
    assert.deepEqual(brokenAnchors, []);
    assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /noindex/);
    await page.screenshot({ path: `test-results/hero-${width}.png` });
    for (const img of await page.locator('main img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el.decode());
    }
    await page.locator('#ubicacion').scrollIntoViewIfNeeded();
    await page.locator('footer').scrollIntoViewIfNeeded();
    const images = await page.evaluate(() => [...document.images].map(img => ({ src: img.currentSrc, loaded: img.complete && img.naturalWidth > 0, alt: !!img.alt })));
    assert.equal(images.every(img => img.loaded && img.alt), true, `Image issue at ${width}`);
    await page.screenshot({ path: `test-results/page-${width}.png`, fullPage: true });
    await page.evaluate(() => scrollTo(0, 0));
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Saltar al contenido');
    if (width < 901) {
      await page.getByRole('button', { name: 'Abrir menú de navegación' }).click();
      assert.equal(await page.locator('.mobile-menu').evaluate(el => el.open), true);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.mobile-menu').evaluate(el => el.open), false);
      assert.equal(await page.getByRole('button', { name: 'Abrir menú de navegación' }).evaluate(el => el === document.activeElement), true);
    }
    await page.locator('.hero-actions').getByRole('button', { name: /Reservar cita/ }).click();
    assert.equal(await page.locator('.contact-dialog').evaluate(el => el.open), true);
    const dialogAxe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    await page.keyboard.press('Escape');
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    const violations = [...axe.violations, ...dialogAxe.violations].map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }));
    report.push({ width, errors, violations, images: images.length, metrics });
    console.log(`Verified ${width}px: ${errors.length} console errors, ${violations.length} accessibility violations.`);
    await context.close();
  }
  await browser.close();
  fs.writeFileSync('test-results/ui-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  assert.equal(report.every(r => !r.errors.length && !r.violations.length), true, 'UI errors or accessibility violations');
}
main().catch(e => { console.error(e); process.exit(1); });
