class ViewOrdersPage{
    
    constructor(page){
        this.page = page;
        this.ordersButton = page.locator("ul button");
        this.viewButton = page.locator("tbody tr");
    }

    async clickingViewButton(orderId){
        await this.ordersButton.filter({hasText: "  ORDERS"}).click();
        await this.viewButton.filter({hasText: orderId}).getByRole('button', {name: "View"}).click();
        //await browser.close(); 
    }
}
module.exports = {ViewOrdersPage};