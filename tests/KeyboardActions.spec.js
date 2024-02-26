const {test, expect} = require('@playwright/test')

test('Keyboard Actions', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    const leftTextbow = await page.locator('//textarea[@placeholder="Paste one version of the text here."]')
    const rightTextbox = await page.locator('//textarea[@placeholder="Paste another version of the text here."]')

    //await leftTextbow.fill('Welcome to automation')
    await leftTextbow.pressSequentially('Welcome to automation')
    await leftTextbow.press('Control+A')
    await leftTextbow.press('Control+C')

    await rightTextbox.press('Control+V')

    await page.close()
    
})