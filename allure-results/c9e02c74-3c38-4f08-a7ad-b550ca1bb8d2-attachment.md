# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Injecting_Fack_OrderID.spec.js >> Fack OrderID In The URL
- Location: tests\Injecting_Fack_OrderID.spec.js:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('p').last()
Expected: "You are not authorize to view this order"
Received: " Country - India "
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('p').last() with timeout 5000ms
  - waiting for locator('p').last()
    13 × locator resolved to <p class="text" _ngcontent-cxe-c46=""> Country - India </p>
       - unexpected value " Country - India "

```

```yaml
- paragraph: Country - India
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Fack OrderID In The URL', async ({ page }) => {
  4  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  5  |     await page.locator("input#userEmail").fill("aranganambi.elumalai@gmail.com");
  6  |     await page.locator("input#userPassword").fill("Eras@9080068137");
  7  |     await page.locator("input#login").click();
  8  |     await page.waitForLoadState('networkidle');
  9  |     await page.locator('[routerlink*="myorders"]').click();
  10 | 
  11 |     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6aa4e9d3e7cd69710fd3cd6a",
  12 |         
  13 |         //Injecting fack order id via url
  14 |         route => route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6aa4e9d3e7cd69710f200596'})
  15 |     )
  16 | 
  17 |     await page.locator("button:has-text('View')").first().click();
> 18 |     await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  19 | })
```