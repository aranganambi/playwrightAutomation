const{expect} = require('@playwright/test');
class DashboardPage {

    constructor(page) {
        this.page = page;
        this.containsText = page.locator("#products");
        this.addToCart = page.locator(".col-lg-4");
        this.cartButton = page.locator("(//button[@class='btn btn-custom'])[3]");

    }

    async addCart(producdName) {
        await this.containsText.waitFor();
        await expect((this.containsText).filter({hasText: producdName}));
        console.log(await this.containsText.textContent());
        await this.addToCart.filter({hasText: producdName}).getByRole('button', {name: " Add To Cart"}).click();
        await this.cartButton.click();
    }

}

module.exports = { DashboardPage };