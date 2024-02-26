const { test, expect } = require('@playwright/test');

test('Multi Select Drop down test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.selectOption('#colors',['Blue','Red','Yellow'])

    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(5)

    //const options = await page.$$('#colors option')
    //await expect(options.length).toBe(5)

    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    await page.close()

})