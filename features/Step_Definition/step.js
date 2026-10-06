const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const datas1 = JSON.parse(JSON.stringify(require('../../utils/testDatas1.json')));

//Using for invoke the  static orderId from the CheckoutPage
const { CheckoutPage } = require('../../pageobjects/CheckoutPage');

setDefaultTimeout(30*1000);

Given('Login to ecommerce application with {string} and {string}', async function (username, password) {
    const loginpage = this.poManager.getLoginPage();
    await loginpage.goingTo();
    await loginpage.validLogin(username, password);
});

When('Add {string} to cart', async function (productName) {
    const dashboard = this.poManager.getdashboardPage();
    await dashboard.addCart(productName);
});

Then('Verify {string} is displayed in the cart', async function (productName) {
    const cart = this.poManager.getcartPage();
    await cart.myCart(productName);
});

Then('Enter valid detatails and place the order', async function () {
    const checkouts = this.poManager.getcheckoutPage();
    await checkouts.placingOrder(datas1.cardNum, datas1.couponcode, datas1.cvv, datas1.name, datas1.country, datas1.mail, datas1.Coupon, datas1.message);
});

Then('Verify order present in the order history page', async function () {
    const vieworders = this.poManager.getviewOrdersPage();
    await vieworders.clickingViewButton(CheckoutPage.orderId);
});