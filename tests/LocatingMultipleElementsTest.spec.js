const { test, expect } = require('@playwright/test');

test('Locating Multiple Elements test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a')
    const links = await page.$$('//div[@id="tbodyid"]//h4/a')

    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }

    await page.close();

})