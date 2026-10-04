const base = require('@playwright/test');
const {APIUtils} = require('./APIUtils.js');
const {request} = require('@playwright/test');


const loginPayLoad = {userEmail:"aranganambi.elumalai@gmail.com",userPassword:"Eras@9080068137"};
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

exports.customTest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context =await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("input#userEmail").fill("aranganambi.elumalai@gmail.com");
        await page.locator("input#userPassword").fill("Eras@9080068137");
        await page.locator("input#login").click();
        await use(page);
        await context.close();
    },

   creatOrder : async({},use) =>{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayLoad);
    const response = await apiUtils.createOrder(orderPayLoad);
    await use(response);
    
   } 
});