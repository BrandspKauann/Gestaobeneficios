import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.QA_URL || 'http://localhost:4180';
const output = '../.codex-tmp/gestao-payroll';
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: process.env.QA_BROWSER_PATH });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.addInitScript(() => {
    window.dataLayer = [];
    const push = window.dataLayer.push.bind(window.dataLayer);
    window.dataLayer.push = (...items) => {
      const events = JSON.parse(sessionStorage.getItem('qa:events') || '[]');
      for (const item of items) if (item?.[0] === 'event') events.push({ event: item[1], params: item[2] });
      sessionStorage.setItem('qa:events', JSON.stringify(events));
      return push(...items);
    };
  });
  const page = await context.newPage();
  const errors = [];
  const submissions = [];
  let failNext = true;
  page.on('pageerror', error => errors.push(error.message));
  await page.route('https://**/*', async route => {
    if (route.request().url() === 'https://formspree.io/f/xeaodraa' && route.request().method() === 'POST') {
      submissions.push(route.request().postData());
      await route.fulfill({ status: failNext ? 503 : 200, contentType: 'application/json', body: JSON.stringify({ ok: !failNext }) });
      failNext = false;
    } else await route.abort();
  });
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${base}/pagamento-de-folha?utm_source=dux&utm_medium=email&utm_campaign=folha`);
    await page.locator('.payroll-hero img').evaluate(img => img.decode());
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.floating-socials').isVisible(), false);
    await page.waitForFunction(() => !!document.querySelector('#payroll-form').getAttribute('aria-busy'));
    assert.doesNotMatch(await page.content(), /somapay|mbdppnkr|GTM-T636X4P7|G-G9HSX541BN/i);
    assert.equal(await page.locator('.payroll-features article').count(), 6);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}`);
    await page.screenshot({ path: `${output}/hero-${width}.png` });
    await page.locator('.payroll-hero .button').click();
    assert.equal(new URL(page.url()).hash, '#analise-folha');
    await page.locator('#payroll-form').screenshot({ path: `${output}/form-${width}.png` });
    await page.locator('.payroll-faq details').first().locator('summary').click();
    assert.equal(await page.locator('.payroll-faq details').first().getAttribute('open'), '');
    console.log(`Gestão payroll: ${width}px, brand, image, CTA, FAQ and overflow passed`);
  }
  const form = page.locator('#payroll-form');
  await form.locator('[name=name]').fill('Teste local');
  await form.locator('[name=role]').selectOption({ index: 1 });
  await form.locator('[name=company]').fill('Empresa QA');
  await form.locator('[name=cnpj]').fill('18166550000141');
  await form.locator('[name=email]').fill('qa@empresa.example');
  await form.locator('[name=phone]').fill('11999991234');
  await form.locator('[name=employees]').selectOption({ index: 2 });
  await form.locator('[name=payroll_flow]').selectOption({ index: 1 });
  await form.locator('[name=priority]').selectOption({ index: 1 });
  await form.locator('[name=consent]').check();
  await form.locator('[type=submit]').click();
  assert.equal(submissions.length, 0);
  await form.locator('[name=cnpj]').fill('18166550000140');
  await form.locator('[name=email]').fill('qa@gmail.com');
  await form.locator('[type=submit]').click();
  assert.equal(submissions.length, 0);
  await form.locator('[name=email]').fill('qa@empresa.example');
  await form.locator('[type=submit]').click();
  await page.getByRole('alert').waitFor();
  assert.equal(await form.locator('[name=email]').inputValue(), 'qa@empresa.example');
  assert.equal(submissions.length, 1);
  assert.ok(!await page.evaluate(() => JSON.parse(sessionStorage.getItem('qa:events')).some(x => x.event === 'generate_lead')));
  await form.locator('[type=submit]').click();
  await page.locator('.payroll-confirmation').waitFor();
  assert.equal(submissions.length, 2);
  for (const value of ['Pagamento de folha', '/pagamento-de-folha', 'dux', 'email', 'folha', 'Gestão de Benefícios']) assert.ok(submissions[1].includes(value));
  const events = await page.evaluate(() => JSON.parse(sessionStorage.getItem('qa:events')));
  assert.equal(events.filter(x => x.event === 'generate_lead').length, 1);
  assert.ok(!JSON.stringify(events).includes('qa@empresa.example'));
  assert.ok(!await page.evaluate(() => Object.values(sessionStorage).some(x => /qa@empresa.example|18166550000140|11999991234/.test(x))));
  assert.deepEqual(errors, []);
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJs.newPage();
  await staticPage.goto(`${base}/pagamento-de-folha`);
  assert.equal(await staticPage.locator('.payroll-features article:visible').count(), 6);
  assert.equal(await staticPage.locator('#payroll-form').getAttribute('action'), 'https://formspree.io/f/xeaodraa');
  console.log('Gestão payroll: validations, retry, correct endpoint, attribution, one GA conversion, no PII and no-JS passed. No real leads sent.');
} finally {
  await browser.close();
}
