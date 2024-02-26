//import {test, expect } from require('@playwright/test');
const {test, expect } = require('@playwright/test');

test('Locator test', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //await page.locator('id=login2').click()
    await page.click('id=login2')

    await page.waitForSelector('#loginusername')
    //await page.locator('#loginusername').fill('fakeId')
    //await page.type('#loginusername', 'fakeId')
    await page.fill('#loginusername', 'fakeId');

    //await page.type("input[id$='loginpassword']", 'fakePassword')
    await page.waitForSelector("(//input[@id='loginpassword'])[1]")
    await page.fill("(//input[@id='loginpassword'])[1]", 'fakePassword');

    await page.waitForSelector("//button[normalize-space()='Log in']")
    await page.click("//button[normalize-space()='Log in']");

    await page.waitForSelector("id=logout2")
    const LogOutBtn = await page.locator("id=logout2");

    await expect(LogOutBtn).toBeVisible();

    await page.close();

})