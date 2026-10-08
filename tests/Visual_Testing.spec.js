const { test, expect } = require('@playwright/test');

test.describe.configure({mode: 'parallel'});
test('Alert', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByRole('textbox', { name: 'Type to Select Countries' }).pressSequentially("ind");
    await page.locator("#ui-id-1").filter({hasText: "India"}).click();
    await page.getByPlaceholder("Enter Your Name").fill("Aranganambi");

    //Alert Handling
    page.on('dialog', dialog => dialog.accept()); // Need to add dialog handler before clicking the button
    await page.locator("#confirmbtn").waitFor();
    await page.locator("#confirmbtn").click();
})


test('Screenshot', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.getByRole('button', {name: 'Hide'}).click();
    await page.screenshot({ path: 'screenshot.png' });
    await page.getByPlaceholder("Hide/Show Example").screenshot({ path: 'Partial.png' });

})

test.skip('Visual Comparison', async ({ page }) => {
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})
