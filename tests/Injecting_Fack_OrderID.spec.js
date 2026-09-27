const { test, expect } = require('@playwright/test');

test('@API Fack OrderID In The URL', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill("aranganambi.elumalai@gmail.com");
    await page.locator("input#userPassword").fill("Eras@9080068137");
    await page.locator("input#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator('[routerlink*="myorders"]').click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6ab8f45f2be7a4bc2b72a8e4",
        
        //Injecting fack order id via url
        route => route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6aa4e9d3e7cd69710f200596'})
    )

    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
})