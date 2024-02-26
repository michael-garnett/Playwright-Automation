import {test, expect} from '@playwright/test'

// Get the current date object
const currentDate = new Date();

// Format the date as YYYY-MM-DD (ISO 8601 format) for filename compatibility
const formattedDate = currentDate.toISOString().slice(0, 10);

test('page screenshot', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({ path: 'test-results/Screenshots/' + formattedDate + 'LandingPage.png' })

})

test('full page screenshot', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({ path: 'test-results/Screenshots/' + formattedDate + 'FullLandingPage.png', fullPage:true })

})

test.only('locator screenshot', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#productTable").screenshot({ path: 'test-results/Screenshots/' + formattedDate + 'Locator.png'})

})
