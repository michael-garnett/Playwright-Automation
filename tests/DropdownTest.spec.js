const { test, expect } = require('@playwright/test');

test('Drop down test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown')

    //await page.locator('#dropdown').selectOption({ label:'Option 1' })
    //await page.locator('#dropdown').selectOption('Option 1')
    //await page.locator('#dropdown').selectOption({ value:'1' })
    //await page.locator('#dropdown').selectOption({ index: 1 })

    //const options = await page.locator('#dropdown option')
    //await expect(options).toHaveCount(3)
    //await expect(options).not.toHaveCount(2)
    //await expect(options).not.toHaveCount(4)

    //const options = await page.$$('#dropdown option')
    //await console.log('Number of options ', options.length)
    //await expect(options.length).toBe(3)

    //const content = await page.locator('#dropdown').textContent()
    //await expect(content.includes('xye')).toBeTruthy()
    //await expect(content.includes('Option 1')).toBeTruthy()

    /*
    const options = await page.$$('#dropdown option')
    let status = false
    for (const option of options) {
        let value = await option.textContent()
        if (value.includes('Option 1')) {
            status = true
            break
        }
    }
    expect(status).toBeTruthy()
    */

    const options = await page.$$('#dropdown option')
    for (const option of options) {
        let value = await option.textContent()
        if (value.includes('Option 1')) {
            await page.locator('#dropdown').selectOption(value)
            break
        }
    }

    
    await page.close();

})
