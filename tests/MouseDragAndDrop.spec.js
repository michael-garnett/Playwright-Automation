const {test, expect} = require('@playwright/test')

test('Mouse Drag and Drop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Rome = await page.locator('(//div[@class="dragableBox"][normalize-space()="Rome"])[2]')

    const Italy = await page.locator('//div[normalize-space()="Italy"]')

    /*
    await Rome.hover
    await page.mouse.down
    await Italy.hover
    await page.mouse.up
    */

    await Rome.dragTo(Italy)

    await page.close

})