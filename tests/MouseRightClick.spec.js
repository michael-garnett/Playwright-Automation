const {test, expect} = require('@playwright/test')

test('Mouse Right Click', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const Button = await page.locator(".context-menu-one.btn.btn-neutral")

    await Button.click({button: 'right'})

    await page.waitForTimeout(5000)

})