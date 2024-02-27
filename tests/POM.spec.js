import { test, expect } from '@playwright/test';

test('Page Object Model test', async ({ page }) => {

    //Login
    //home
    //cart

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('fakeId');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('fakePassword');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();
});