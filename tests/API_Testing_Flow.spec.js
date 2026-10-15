
const { test, expect, request } = require('@playwright/test');

// Load login credentials
const testData = require('../utils/testDatas1.json');

const loginPayload = {
    userEmail: testData.username,
    userPassword: testData.password
};

// Order payload
const orderPayload = {
    orders: [
        {
            country: 'India',
            productOrderedId: '6960eae1c941646b7a8b3ed3'
        }
    ]
};

let authToken;
let orderId;
let apiContext;

test.beforeAll(async () => {
    apiContext = await request.newContext();

    // Step 1: Login through API
    const loginResponse = await apiContext.post(
        'https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: loginPayload
        }
    );

    await expect(loginResponse).toBeOK();

    const loginResponseJson = await loginResponse.json();
    authToken = loginResponseJson.token;

    expect(authToken, 'Login token was not returned').toBeTruthy();

    // Step 2: Create an order through API
    const orderResponse = await apiContext.post(
        'https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: orderPayload,
            headers: {
                Authorization: authToken,
                'Content-Type': 'application/json'
            }
        }
    );

    await expect(orderResponse).toBeOK();

    const orderResponseJson = await orderResponse.json();

    // Extract the created order ID
    orderId = orderResponseJson.orders?.[0];

    expect(orderId, 'Order ID was not returned').toBeTruthy();

    console.log('Order created successfully:', orderId);
});

test.afterAll(async () => {
    if (apiContext) {
        await apiContext.dispose();
    }
});

test('@API End_To_End_locator_Practice', async ({ page }) => {
    // Step 3: Set the API login token in browser localStorage
    await page.addInitScript((token) => {
        window.localStorage.setItem('token', token);
    }, authToken);

    // Step 4: Open the client application
    await page.goto(
        'https://rahulshettyacademy.com/client/#/auth/login'
    );

    await expect(page).toHaveURL(/client\/#/);

    // Step 5: Navigate to the Orders page
    await page.getByRole('button', { name: /orders/i }).click();

    // Step 6: Verify the API-created order in the UI
    const orderRow = page.locator('tr').filter({
        hasText: orderId
    });

    await expect(orderRow).toBeVisible();

    // Step 7: Open the order details
    await orderRow.getByRole('button', { name: /view/i }).click();

    // Verify the order ID on the details page
    await expect(page.getByText(orderId, { exact: false }).first())
        .toBeVisible();
});
