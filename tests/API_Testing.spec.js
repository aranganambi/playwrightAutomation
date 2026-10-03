const {test, expect, request} = require('@playwright/test');
const {APIUtils} = require('../utils/APIUtils');


//Taking data from the payloads section
const loginPayLoad = {userEmail:"aranganambi.elumalai@gmail.com",userPassword:"Eras@9080068137"}
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}

let response;

//API calls
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);

  // Validate API response
   expect(response).toBeTruthy();
   expect(response.token).toBeTruthy();
   expect(response.orderId).toBeTruthy();
});

test('@API End_To_End_locator_Practice', async({browser}) =>
{
  const context = await browser.newContext();
  const page = await context.newPage();

  // Integrating API Calls In The Testcase
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  // Validate login page loaded
  await expect(page).toHaveURL(/\/client\/#/);

  // Open orders page
  await page.getByRole('button', {name:/orders/i}).click();

  //Clicking to view the orders
  const orderRow = page.locator("tr").filter({hasText: response.orderId});
  await expect(orderRow).toBeVisible();

  await orderRow.getByRole('button', {name: /view/i}).click();

  console.log(response.orderId);
});