const {test, expect} = require('@playwright/test');

let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('id=login2')

    await page.waitForSelector('#loginusername')
    await page.fill('#loginusername', 'fakeId');
    await page.waitForSelector("(//input[@id='loginpassword'])[1]")
    await page.fill("(//input[@id='loginpassword'])[1]", 'fakePassword');
    await page.waitForSelector("//button[normalize-space()='Log in']")
    await page.click("//button[normalize-space()='Log in']");
});

test.afterEach(async()=>{
    await page.locator("id=logout2").click()

})

test('Hooks test', async()=>{

    await page.waitForSelector("id=logout2")
    const LogOutBtn = await page.locator("id=logout2");

    await expect(LogOutBtn).toBeVisible();
})

