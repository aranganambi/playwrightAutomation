const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

//Using for invoke the  static orderId from the CheckoutPage
const { CheckoutPage } = require('../pageobjects/CheckoutPage');

//JSON -> String -> js object
const datas = JSON.parse(JSON.stringify(require('../utils/testDatas.json')));
const datas1 = JSON.parse(JSON.stringify(require('../utils/testDatas1.json')));

//Using POManager (Single Data Set)
test('End ${datas1.productName}', async ({ page }) => {
   //Login
   //const loginPage = new LoginPage(page);
   const poManager = new POManager(page);
   const loginpage = poManager.getLoginPage();
   await loginpage.goingTo();
   await loginpage.validLogin(datas1.username, datas1.password);

   //dashboard page
   const dashboard = poManager.getdashboardPage();
   await dashboard.addCart(datas1.productName);

   //cart page
   const cart = poManager.getcartPage();
   await cart.myCart(datas1.product);

   //checkout page
   const checkouts = poManager.getcheckoutPage();
   await checkouts.placingOrder(datas1.cardNum, datas1.couponcode, datas1.cvv, datas1.name, datas1.country, datas1.mail, datas1.Coupon, datas1.message);
   

   //view order page
   const vieworders = poManager.getviewOrdersPage();
   await vieworders.clickingViewButton(CheckoutPage.orderId);
   

});



//Using Page Objects (Multiple Data Set)
for(const dataSets of datas){
test(`@smoke End_To_End ${dataSets.productName}`, async ({ page }) => {
   
   //Login
   //const loginPage = new LoginPage(page);
   const poManager = new POManager(page);
   const loginpage = poManager.getLoginPage();
   await loginpage.goingTo();
   await loginpage.validLogin(dataSets.username, dataSets.password);

   

   //dashboard page
   const dashboard = poManager.getdashboardPage();
   await dashboard.addCart(dataSets.productName);

   //cart page
   const cart = poManager.getcartPage();
   await cart.myCart(dataSets.product);

   //checkout page
   const checkouts = poManager.getcheckoutPage();
   await checkouts.placingOrder(dataSets.cardNum, dataSets.couponcode, dataSets.cvv, dataSets.name, dataSets.country, dataSets.mail, dataSets.Coupon, dataSets.message);

   //view order page
   const vieworders = poManager.getviewOrdersPage();
   await vieworders.clickingViewButton(CheckoutPage.orderId);
});}