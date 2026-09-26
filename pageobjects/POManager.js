const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {CheckoutPage} = require('./CheckoutPage');
const {CartPage} =require('./CartPage');
const {ViewOrdersPage} = require('./ViewOrdersPage');

class POManager{
    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.viewOrdersPage = new ViewOrdersPage(this.page);
        
    }

    getLoginPage(){
        return this.loginPage;
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

}
module.exports = {POManager};