const {test, expect} = require('@playwright/test');
const { execPath } = require('process');

test('locator_Practice', async({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   const producdName = "Samsung Note 8";

   //maximum execution time of that particular Playwright test
   test.setTimeout(60000);

   //Assertion timiout increased for slow running application
   const slowExpect = expect.configure({timeout: 9000});

   //getByLabel Locator
   await page.goto("https://rahulshettyacademy.com/angularpractice/");
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Gender").selectOption("Male");
   await page.getByLabel("Employed").click();

   await page.getByPlaceholder("Password").fill("Eras@2020");
   await page.getByRole('button', {name: 'Submit'}).click();
   const visible = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
   console.log(visible);
   await page.getByRole('link', {name: 'Shop'}).click();
   await page.locator("app-card").filter({hasText: producdName}).getByRole("button").click();


   await page.locator("li a").nth(2).click();
   await slowExpect(page.locator(".media-heading").nth(0)).toBeVisible();

})


test('End_To_End_locator_Practice', async({browser})=>
{

   const context = await browser.newContext();
   const page = await context.newPage();

   const products = page.locator(".card-body");
   const producdName = "iphone 13 pro";


   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.getByPlaceholder("email@example.com").fill("aranganambi.elumalai@gmail.com");
   await page.getByPlaceholder("enter your passsword").fill("Eras@9080068137");
   await page.getByRole('button', {name: 'Login'}).click();
   await page.locator(".card-body").nth(0).waitFor();

   //Clicking the required Add To Cart button
   await page.locator(".card-body").filter({hasText:producdName}).getByRole('button', {name: " Add To Cart"}).click();

   await page.locator("ul button").nth(0).waitFor();
   await page.locator("ul button").filter({hasText: "  Cart "}).click();
   await page.locator(".itemImg").nth(0).waitFor();
   await expect(page.getByText("iphone 13 pro")).toBeVisible();
   await page.getByRole('button', {name: "Checkout"}).click();
   await page.getByPlaceholder("Select Country").waitFor();

   //Filling Checkout Page
   await page.locator("[class*=input]").nth(0).fill("123456789012");
   await page.locator("[class*=input]").nth(1).selectOption("05");
   await page.locator("[class*=input]").nth(2).selectOption("20");
   await page.locator("[class*=input]").nth(3).fill("786");
   await page.locator("[class*=input]").nth(4).fill("Aranganambi Elumalai");
   await page.locator("[class*=input]").nth(5).fill("rahulshettyacademy");
   await page.getByText("Apply Coupon").nth(1).click();
   await page.getByPlaceholder("Select Country").waitFor();
   await expect(page.getByText("* Coupon Applied")).toBeVisible();



   //Selecting Country Dropdown
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.locator(".ta-results").filter({hasText: " India"}).click();
   await page.locator('[class*="input"]').nth(7).fill("aranganambi.elumalai@gmail.com");
   await page.getByText("Place Order ").click();
   await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();

   console.log(await page.getByText("Thankyou for the order."));
   const rawOrderId = await page.locator(".ng-star-inserted").nth(1).textContent();
   const orderId = await rawOrderId.replace(/\|/g, "").trim(); //Trimming before & after empty places
   await page.locator("ul button").filter({hasText: "  ORDERS"}).click();

   //Clicking to view the oders
   await page.locator("tr").filter({hasText: orderId}).getByRole('button', {name: "View"}).click();

})