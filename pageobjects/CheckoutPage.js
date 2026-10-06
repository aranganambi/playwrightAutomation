const { expect } = require('@playwright/test');
class CheckoutPage {
    static orderId = null;

    constructor(page) {
        this.page = page;
        this.creditCardNum = page.locator("(//input[@class='input txt text-validated'])[1]");
        this.monthSelection = page.locator("(//select[@class='input ddl'])[1]");
        this.yearSelection = page.locator("(//select[@class='input ddl'])[2]");
        this.cvvNumber = page.locator("(//input[@class='input txt'])[1]");
        this.name = page.locator("(//input[@class='input txt'])[2]");
        this.couponCode = page.locator("(//input[@type='text'])[4]");
        this.applyCoupon = page.locator('[class="btn btn-primary mt-1"]');
        this.confirmMessage = page.locator('[class="mt-1 ng-star-inserted"]');
        this.mailID = page.locator('[class="input txt text-validated ng-untouched ng-pristine ng-valid"]');
        this.country = page.locator('[placeholder="Select Country"]');
        this.placeOrder = page.locator('[class="btnn action__submit ng-star-inserted"]');
        this.countryList = page.locator(".ta-results");
        this.thankYouMessage = page.locator(".hero-primary");
        this.orderid = page.locator(".ng-star-inserted");
        this.ordersButton = page.locator("ul button");
        this.viewButton = page.locator("tbody tr");
    }

    async placingOrder(cardNum, couponcode, cvv, name, country, mail, Coupon, message) {

        await this.creditCardNum.fill(cardNum);
        await this.monthSelection.selectOption('05');
        await this.yearSelection.selectOption('20');
        await this.cvvNumber.fill(cvv);
        await this.name.fill(name);
        await this.couponCode.fill(couponcode);
        await this.applyCoupon.click();
        await expect(this.confirmMessage).toContainText(Coupon);
        console.log(await this.confirmMessage.textContent());
        await this.mailID.fill(mail);
        await this.country.pressSequentially(country);
        await this.countryList.filter({ hasText: " India" }).click();
        await this.placeOrder.click();

        await expect(this.thankYouMessage).toContainText(message);
        console.log(await this.thankYouMessage.textContent());
        const rawId = await this.orderid.nth(1).textContent();
        CheckoutPage.orderId = await rawId.replace(/\|/g, "").trim();
        console.log(CheckoutPage.orderId);
    }
}
module.exports = { CheckoutPage };
