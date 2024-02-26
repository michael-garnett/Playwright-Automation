const {test, expect} = require('@playwright/test')

test.skip('select one item from table', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("#productTable")

    // total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log('Number of colums:', await columns.count())

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await matchedRow.locator('input').check()
    await expect(matchedRow.locator('input')).toBeChecked()

    await page.close()

})


async function selectProduct(rows, page, name) {
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
    await expect(matchedRow.locator('input')).toBeChecked
}


test.skip('select multiple items from table', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("#productTable")

    // total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log('Number of colums:', await columns.count())

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 3')
    await selectProduct(rows, page, 'Product 5')

    await page.close()

})


test('for loop to select multiple items from table', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("#productTable")

    // total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log('Number of colums:', await columns.count())

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)


    const pages = await page.locator('.pagination li a')
    console.log('Number of pages: ', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p>0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
        
            const row = rows.nth(i)
            const tds = row.locator('td')
    
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
                
            }
    
        }
    }

    await page.close()

})
