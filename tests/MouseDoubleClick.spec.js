const {test, expect} = require('@playwright/test')

test('Mouse Double Click', async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy = await page.locator('//button[normalize-space()="Copy Text"]')

    await btnCopy.dblclick()
    const text2 = await page.locator("//input[@id='field2']")

    await expect(text2).toHaveValue('Hello World!', { timeout: 2000 })

    page.close()

})