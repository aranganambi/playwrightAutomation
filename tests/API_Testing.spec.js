//Autor: Aranganambi
const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');

// Load the login credentials from the existing JSON test data.
const testData = JSON.parse(
  JSON.stringify(require('../utils/testDatas1.json'))
);

// Prepare the login payload for the API.
const loginPayload = {
  userEmail: testData.username,
  userPassword: testData.password,
};

// Prepare the order payload for the API.
const orderPayload = {
  orders: [
    {
      country: 'India',
      productOrderedId: '6960eae1c941646b7a8b3ed3',
    },
  ],
};

let apiContext;
let order;

test.beforeAll(async () => {
  // Create an API request context for the setup API calls.
  apiContext = await request.newContext();

  // Log in and create an order before the UI test runs.
  const apiUtils = new APIUtils(apiContext, loginPayload);
  order = await apiUtils.createOrder(orderPayload);

  // Confirm the API returned the values needed by the UI test.
  expect(order.token).toBeTruthy();
  expect(order.orderId).toBeTruthy();
});

test.afterAll(async () => {
  // Release the API request context after the suite completes.
  await apiContext.dispose();
});

test('@API End_To_End_locator_Practice', async ({ page }) => {
  // Store the API login token in the browser before the page loads.
  await page.addInitScript(token => {
    window.localStorage.setItem('token', token);
  }, order.token);

  // Open the client application and verify that its route loaded.
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await expect(page).toHaveURL(/\/client\/#/);

  // Open the orders page in the client application.
  await page.getByRole('button', { name: /orders/i }).click();

  // Find and verify the row for the order created by the API.
  const orderRow = page.locator('tr').filter({ hasText: order.orderId });
  await expect(orderRow).toBeVisible();

  // Open the details page for that order.
  await orderRow.getByRole('button', { name: /view/i }).click();
});