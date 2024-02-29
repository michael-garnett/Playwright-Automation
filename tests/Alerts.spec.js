const{test, expect} = require('@playwright/test')
const exp = require('constants')

test('Alert with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.locator('button[onclick="myFunctionAlert()"]').click()

    await page.close()

})


test('Confirmation Dialog-Alert with Ok and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
        //await dialog.dismiss()
    })

    await page.locator('button[onclick="myFunctionConfirm()"]').click()
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    //await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

    await page.close()

})


test('Prompt Dialog-Alert with Textbox and Ok and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Senior QA')
    })

    await page.locator('button[onclick="myFunctionPrompt()"]').click()
    await expect(page.locator('#demo')).toHaveText('Hello SDET-QA! How are you today?')

    await page.close()

})