const { test, expect } = require('@playwright/test');

//allure generate allure-results -o allure-report --clean
//allure open  allure-report

test('Test1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})


test('Test3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})
