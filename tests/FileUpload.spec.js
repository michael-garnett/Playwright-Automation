const {test, expect} = require('@playwright/test')
const path = require('path');

test.skip('Upload file', async({page})=>{

    await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')

    await page.waitForSelector('input[name="userfile"]')
    await page.locator('input[name="userfile"]').setInputFiles('tests\Alerts.spec.js')

    await page.waitForTimeout(5000)

    await page.close()
})

test.skip('Upload multiple files', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.waitForSelector('//input[@id="filesToUpload"]')
    await page.locator('//input[@id="filesToUpload"]')
                                    .setInputFiles(['tests\Alerts.spec.js',
                                    'tests\Assertions.spec.js'])
    
    await page.waitForTimeout(5000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testsAlerts.spec.js')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testsAssertions.spec.js')

    await page.close()
})


test('Upload multiple files with better handling', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  
    // Wait for the file input to become visible and interactable
    await page.waitForSelector('//input[@id="filesToUpload"]', { state: 'visible' });
  
    const filePaths = [
      path.resolve(__dirname, 'tests/Alerts.spec.js'), // Ensure absolute paths
      path.resolve(__dirname, 'tests/Assertions.spec.js'),
    ];
  
    // Increase timeout cautiously if needed
    await page.locator('//input[@id="filesToUpload"]').setInputFiles(filePaths, { timeout: 60000 });
  
    // Ensure files are uploaded before assertions
    await page.waitForFunction(() => {
      const fileList = document.querySelector('#fileList');
      return fileList.querySelectorAll('li').length === 2;
    }, { timeout: 10000 }); // Adjust timeout as needed
  
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Alerts.spec.js');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Assertions.spec.js');

    await page.locator('//input[@id="filesToUpload"]').setInputFiles([]);
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
  
    await page.close();
  });
  