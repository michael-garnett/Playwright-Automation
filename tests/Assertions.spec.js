
/*
1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio / Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/

const { test, expect } = require('@playwright/test')

test('Assertions Test', async({page})=>{

    await page.goto('https://www.petsmart.com/account/')

    await expect(page).toHaveURL('https://www.petsmart.com/account/')

    await expect(page).toHaveTitle('Account Sign In | PetSmart')

    const logo = await page.locator('.dp-logo-container.col-lg-3')
    await expect(logo).toBeVisible()

    const searchStore = await page.locator('(//input[@placeholder="search"])[1]')
    await expect(searchStore).toBeEnabled()

    //const radioBtn = await page.locator(null)
    //await expect(radioBtn).toBeChecked()

    //const checkBox = await page.locator(null)
    //await expect(checkBox).toBeChecked()
    //await expect(checkBox).isChecked().toBeTruthy()
    //await expect(checkBox).isChecked().toBeFalsy()

    const passwordField = await page.locator('(//*[@name="password"])[2]')
    await expect(passwordField).toHaveAttribute('aria-required', 'true')

    const textBox = await page.locator('//div[@class="col-md-5 login-col"]//button[@id="login"]')
    await expect(textBox).toHaveText('login')  //Element matches text
    
    await expect(textBox).toContainText('in')  //Element contains text

    const usernameField = await page.locator('//form[@id="signInForm"]//input[@name="username"]')
    await usernameField.fill('fakeUsername')
    await expect(usernameField).toHaveValue('fakeUsername') //Input has a value

    //const options = await page.locator('select[name="DateOfBirthMonth"] option')
    //await expect(options).toHaveCount(13)  //List of elements has given length

})