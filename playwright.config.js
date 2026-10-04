// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],
  workers: 5,
  use: {
    actionTimeout: 30000,
    navigationTimeout: 30 * 1000,
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    permissions:['geolocation'],
  
    //viewport: {width:61, height:132}
    //...devices['iPhone 12'],
  },
});