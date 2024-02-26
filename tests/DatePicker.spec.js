const {test, expect} = require('@playwright/test')

test.fixme('Date Picker@old', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.fill(#datepicker','02/20/2024')

    const year = '2024'
    const month = 'May'
    const day = '1'

    await page.click('#datepicker') // acalendar activator
    while (true) {
        const CurrentMonth = await page.locator('.ui-datepicker-month').textContent()
        const CurrentYear = await page.locator('.ui-datepicker-year').textContent()
        if (CurrentYear == year && CurrentMonth == month) {
            break
        }
        await page.locator('[title="Next"]').click()
    }

    await page.click(`//*[@class="ui-state-default ui-state-hover"][text()='${day}']`)
    
    const days = await page.$$('.ui-state-default')
    for(const dt of dates){
        if(dt.textContent() ==day)
        await dt.click()
        break
    }

    page.close()
})