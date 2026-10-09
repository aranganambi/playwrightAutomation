const { test, expect } = require('@playwright/test');

test('@API GET request returns a post', async ({ request }) => {
  const response = await request.get("https://rahulshettyacademy.com/client/#/auth/login");

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const post = await response.json();
  expect(post).toMatchObject({
    userId: 1,
    id: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
});
