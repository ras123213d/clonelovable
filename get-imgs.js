const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const imgs = [];
  page.on('response', async (r) => {
    const url = r.url();
    const ct = r.headers()['content-type'] || '';
    if (ct.includes('image') || /\.(png|jpg|jpeg|webp|gif|svg)(\?|$)/i.test(url)) {
      imgs.push(url);
    }
  });
  await page.goto('https://pay.lowify.com.br/checkout?product_id=sUcPan', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  console.log(JSON.stringify(imgs, null, 2));
  await browser.close();
})();
