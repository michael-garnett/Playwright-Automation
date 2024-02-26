const { test, expect } = require('@playwright/test');

test('Builtin Locators test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type: 'submit'}).click()

    await page.locator('//span[normalize-space()="PIM"]').click()
    
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click()

    await page.waitForTimeout(3000)

    const options = await page.$$('//div[@role="listbox"]//span')
    for(let option of options){
        const jobTitle = await option.textContent()
        //console.log(jobTitle)
        if(jobTitle.includes('QA Engineer')){
            await option.click()
            break
        }
    }

    page.close()

})