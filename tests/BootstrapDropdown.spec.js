const { test, expect } = require('@playwright/test');

test('Multi Select Drop down test', async ({ page }) => {

    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click()

    //const options = await page.locator('//input')
    //await expect(options).toHaveCount(11)

    //const options = await page.$$('//input')
    //await expect(options.length).toBe(11)

    const options = await page.$$('ul>li')
    for(let option of options){
        const value = await option.textContent()
        //console.log('the value is', value)
        if (value.includes('Angular') || value.includes('Java') ) {
            await option.click()
        }
    }

    await page.close()

})