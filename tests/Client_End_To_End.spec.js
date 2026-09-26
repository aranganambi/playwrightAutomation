const {test, expect} = require('@playwright/test');
const { execPath } = require('process');


test('End', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();

   const products = page.locator(".card-body");
   const producdName = "iphone 13 pro";

   //Login
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.getByRole('textbox', { name: 'email@example.com' }).fill("aranganambi.elumalai@gmail.com");
   await page.locator("input#userPassword").fill("Eras@9080068137");
   await page.locator("input#login").click();
   

   await expect(page.locator(".card-body b").nth(1)).toContainText('ZARA');
   console.log(await page.locator(".card-body b").nth(1).textContent());
   await page.locator("(//button[@class='btn w-10 rounded'])[2]").click();
   await page.locator("(//button[@class='btn btn-custom'])[3]").click();
   await expect(page.locator(".cartSection h3")).toContainText('COAT')
   console.log(await page.locator(".cartSection h3").textContent());
   await page.locator("(//button[@class='btn btn-primary'])[3]").click();
   await page.locator("(//input[@class='input txt text-validated'])[1]").fill("123456789012");
   await page.locator("(//select[@class='input ddl'])[1]").selectOption('05');
   await page.locator("(//select[@class='input ddl'])[2]").selectOption('20');
   await page.locator("(//input[@class='input txt'])[1]").fill("786");
   await page.locator("(//input[@class='input txt'])[2]").fill("Aranganambi Elumalai");
   await page.locator("(//input[@type='text'])[4]").fill("rahulshettyacademy");
   await page.locator('[class="btn btn-primary mt-1"]').click();
   await expect(page.locator('[class="mt-1 ng-star-inserted"]')).toContainText("Coupon")
   console.log(await page.locator('[class="mt-1 ng-star-inserted"]').textContent());
   await page.locator('[class="input txt text-validated ng-untouched ng-pristine ng-valid"]').fill("aranganambi.elumalai@gmail.com");
   await page.locator('[placeholder="Select Country"]').pressSequentially("ind");

   await page.locator(".ta-results").filter({hasText: " India"}).click();

   await page.locator('[class="btnn action__submit ng-star-inserted"]').click();
   await expect(page.locator("h1.hero-primary")).toContainText("Thankyou");
   console.log(await page.locator("h1.hero-primary").textContent());
   const text= page.locator(".ng-star-inserted").nth(1).textContent();
   console.log(text);

});



test('End_To_End', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();

   const products = page.locator(".card-body");
   const producdName = "ADIDAS ORIGINAL";
   const userName = "aranganambi.elumalai@gmail.com";


   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator("input#userEmail").fill(userName);
   await page.locator("input#userPassword").fill("Eras@9080068137");
   await page.locator("input#login").click();
   

   await page.waitForLoadState('networkidle');
   await page.locator(".card-body").first().waitFor();
   const titles = await page.locator(".card-body").allTextContents();
   console.log(titles);
   const count = await products.count();

   for(let i=0; i<count; ++i)
   {
      if(await products.nth(i).locator("b").textContent()===producdName)
      {
         await products.nth(i).locator('[class="btn w-10 rounded"]').click();
         break;
      }
   }   
   await page.locator("(//button[@class='btn btn-custom'])[3]").click();
   await page.locator("div li").first().waitFor();
   //const boolean = await page.locator('h3:has-text("${producdName}")').isVisible();
   const bool = await expect(page.locator("h3").filter({hasText: producdName})).toBeVisible();

   //Checkout
   await page.locator("(//button[@class='btn btn-primary'])[3]").click();
   await page.locator("[class*=input]").nth(0).fill("123456789012");
   await page.locator("[class*=input]").nth(1).selectOption("05");
   await page.locator("[class*=input]").nth(2).selectOption("20");
   await page.locator("[class*=input]").nth(3).fill("786");
   await page.locator("[class*=input]").nth(4).fill("Aranganambi Elumalai");
   await page.locator("[class*=input]").nth(5).fill("rahulshettyacademy");
   await page.locator('[class="btn btn-primary mt-1"]').click();
   await page.locator("[class*=input]").nth(0).waitFor();
   expect(await page.locator('[style="color: green;"]')).toContainText("Coupon");
   console.log(await page.locator('[style="color: green;"]').textContent());
   await page.locator("[class*=input]").nth(6).fill(userName);

   //Selecting dropdown in shipping information
   await page.locator("[placeholder*=Select]").pressSequentially("ind",{delay:100});
   const dropdown = page.locator("[class*=ta-results]"); //pressSequentially method is used press the text one by one
   await dropdown.waitFor();
   const dropdownCount = await dropdown.locator("button").count();

   for(let i=0; i<dropdownCount; ++i)
   {
      const text = await dropdown.locator("button").nth(i).textContent();

      if(text === " India")
      {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }  

   await page.locator('[class="btnn action__submit ng-star-inserted"]').click();
   await expect(page.locator(".hero-primary")).toContainText("Thankyou");
   console.log(await page.locator(".hero-primary").textContent());
   const orderId = await page.locator(".ng-star-inserted").nth(1).textContent();
   console.log(orderId);
   


   //Going to view the orders
   await page.locator('[routerlink*="myorders"]').nth(1).click();
   await page.locator(".table-bordered").waitFor();
   const rows = await page.locator("tbody tr");
   const rowCount = await rows.count();

   for(let i=0; i<rowCount; ++i)
   {
      const rowID = await rows.nth(i).locator("th").textContent();

      if(orderId.includes(rowID))
      {
         await rows.nth(i).locator("button").first().click();
         break;
      }

   }  
   
   const orderDetails = await page.locator("div.-main").textContent();
   console.log(orderDetails);
   await expect (orderId.includes(orderDetails)).toBeTruthy();
   
   //await page.pause();

});