const {expect} = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.productContent = page.locator(".cartSection h3");
        this.checkoutButton = page.locator("(//button[@class='btn btn-primary'])[3]");
    }

    async myCart(product) {
        await expect(this.productContent).toContainText(product);
        console.log(await this.productContent.textContent());
        await this.checkoutButton.click();
        
    }
}

module.exports = { CartPage };