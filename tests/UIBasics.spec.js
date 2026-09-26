const {test, expect} = require('@playwright/test');


test('Tetscase with browser', async ({browser})=>
{
    
    //Using Wrong Credential
   const context = await browser.newContext(); //Creating new content with cookies bcz we called browser here
   const page = await context.newPage(); //New page created in the browser

    const username = page.locator("input#username");
    const password = page.locator("input#password");
    const signin = page.locator("input#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Redirecting to required page
   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); //Cheking the complete text is present
   await username.fill("rahulshetty");
   await password.fill("Learning@830$3mK2");
   await page.locator("input#terms").click();
   await signin.click();
   await expect(page.locator("[style*=block]")).toContainText('username'); //Cheking the partial text is present
   console.log(await page.locator("[style*=block]").textContent());

   //Using Correct Credential
   //await username.fill();
   await username.fill("rahulshettyacademy");
   //await password.fill();
   await password.fill("Learning@830$3mK2");
   await page.locator("input#terms").click();
   await signin.click();
   await console.log("Correct Credential Working Fine");
   await expect(page).toHaveTitle("ProtoCommerce");
   console.log(await page.title());
   console.log(await page.locator(".card-body a").nth(0).textContent());
   console.log(await page.locator(".card-body a").nth(3).textContent());
   

});


test('Tetscase with page', async ({page})=>
{
   await page.goto("https://google.com"); //Redirecting to required page
   console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});

test('Rahulshetty Academy Client Registration', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   console.log(await page.title());
   await page.locator("a.text-reset").click();
   await page.locator("input#firstName").fill("Vinoth");
   await page.locator("input#lastName").fill("Elumalai");
   await page.locator("input#userEmail").fill("aranganambi.e@gmail.com");
   await page.locator("input#userMobile").fill("7871044138");
   await page.locator('select[formcontrolname="occupation"]').selectOption("3: Engineer");
   await page.locator('input[value="Male"]').click();
   await page.locator("input#userPassword").fill("Eras@9080068137");
   await page.locator("input#confirmPassword").fill("Eras@9080068137");
   await page.locator('input[type="checkbox"]').click();
   await page.locator("input#login").click();


   
});


test('Rahulshetty Academy Client Login', async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   console.log(await page.title());
   await page.locator("input#userEmail").fill("aranganambi.elumalai@gmail.com");
   await page.locator("input#userPassword").fill("Eras@9080068137");
   await page.locator("input#login").click();
   console.log(await page.title());
   console.log(await page.locator(".card-body b").nth(0).textContent());
});

test('Dropdown', async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const documentLink = page.locator("[href*='documents']");
 await page.locator("span.checkmark").last().click();
 await page.locator("button#okayBtn").click();
 console.log(await page.locator("span.checkmark").last().isChecked());
 await expect(page.locator("span.checkmark").last()).toBeChecked();
 const dropdown = page.locator('[data-style="btn-info"]');
 await dropdown.selectOption("teach");
 await page.locator("input#terms").click();
 console.log(await page.locator("#terms").isChecked());
 await expect(documentLink).toHaveAttribute("class","blinkingText");
 await documentLink.click();
 
});



test('Child Window Handle', async({browser})=>
{   
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   const [newPage] = await Promise.all([

      context.waitForEvent('page'), //Promise.all method used to run the code parrallely
      page.locator("[href*='documents']").click(), //(it has pending, fullfill, failure)

   ])

   const text = await newPage.locator('[class="im-para red"]').textContent();
   console.log(text);

   const arr = text.split("@");
   const Name = arr[1].split(" ")[0];
   console.log(Name);
   await page.locator("input#username").fill("Name");
   console.log(await page.locator("input#username").inputValue());
})