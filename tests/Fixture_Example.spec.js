const {test, expect, request}= require('@playwright/test');
const {customTest} = require('../utils/Fixtures.js');

customTest('Fixtures demo', async({authenticatedPage,creatOrder})=>{
    await authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator('[routerlink*="myorders"]').click();
    await authenticatedPage.locator("tbody").waitFor();
    //await expect(authenticatedPage.getByText(creatOrder.orderID)).toBeVisible();



});
