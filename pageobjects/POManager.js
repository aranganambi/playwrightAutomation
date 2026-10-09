const {LoginPage} = require('./LoginPage');
const {LoginPagePractise} = require('./LoginPagePractise');
const {DashboardPage} = require('./DashboardPage');
const {CheckoutPage} = require('./CheckoutPage');
const {CartPage} =require('./CartPage');
const {ViewOrdersPage} = require('./ViewOrdersPage');
const {ShopPage} = require('./ShopPage');

class POManager{
    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.loginPagePractise = new LoginPagePractise(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.viewOrdersPage = new ViewOrdersPage(this.page);
        this.shopPage = new ShopPage(this.page);
        
    }

    getLoginPage(){
        return this.loginPage;
    }

    getLoginPagePractise(){
        return this.loginPagePractise;
    }

    getdashboardPage(){
        return this.dashboardPage;
    }

    getcartPage(){
        return this.cartPage;
    }

    getcheckoutPage(){
        return this.checkoutPage;
    }

    getviewOrdersPage(){
        return this.viewOrdersPage;
    }

    getShopPage(){
        return this.shopPage;
    }

}
module.exports = {POManager};