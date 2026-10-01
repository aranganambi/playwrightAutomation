const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('abort example', async ({ page }) => {
    //Aborting CSS by choosing .file (eg: image)
    page.route('**/*.{jpg,jpeg,png}', route => route.abort());

    //Printing all API URLs
    page.on('request', request => console.log(request.url()));

    // Printing all API Response URL & Status Code
    page.on('response', Response => console.log(Response.url(), Response.status()));
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByRole('textbox', { name: 'email@example.com' }).fill("aranganambi.elumalai@gmail.com");
    await page.locator("input#userPassword").fill("Eras@9080068137");
    await page.locator("input#login").click();

})