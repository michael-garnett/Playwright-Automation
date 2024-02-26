import {test, expect} from '@playwright/test'

test('page screenshot', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({ path: 'test-results\screenshots' + Date.now + 'LandingPage.png' })

})
