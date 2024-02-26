const { test, expect } = require('@playwright/test')

test('frames', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //const AllFrames = await page.frames()
    //console.log('Total number of frames: ', AllFrames.length)

    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill('//input[@name="mytext1"]', 'learning frames')

    const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('//input[@name="mytext1"]')
    await inputbox.fill('test text')

    await page.close()
})

test('Nested frames', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //const AllFrames = await page.frames()
    //console.log('Total number of frames: ', AllFrames.length)

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //await frame3.fill('(//input[@name="mytext3"])[1]', 'learning frames')

    //Nested frame
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator('//*[@aria-label="I am a human"]').check()

    //const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('//input[@name="mytext1"]')
    //await inputbox.fill('test text')

    await page.close()
})