const { test, expect } = require('@playwright/test');

test.describe.configure({mode: 'serial'});
test('Alert', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByRole('button',{name: 'Alert'}).click();
    await page.getByRole('button', { name: 'Start Practicing' }).nth(3).click();
    await page.getByRole('textbox', { name: 'Your Name*' }).fill("Aranganambi");
    await page.getByRole('textbox', { name: 'Your Email*' }).fill("aranganambi.elumalai@gmail.com");
    await page.getByRole('button', { name: 'Verify & Continue' }).click();

    //Alert Handling
    page.on('dialog', dialog => dialog.accept()); // Need to add dialog handler before clicking the button
    await page.locator("#confirmbtn").waitFor();
    await page.locator("#confirmbtn").click();


    //Mousehower Handling
    page.locator("#mousehover").hover();



})


test('Screenshot', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.getByRole('button', {name: 'Hide'}).click();
    await page.screenshot({ path: 'screenshot.png' });
    await page.getByPlaceholder("Hide/Show Example").screenshot({ path: 'Partial.png' });

})

test('Visual Comparison', async ({ page }) => {
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})
