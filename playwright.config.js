// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 4,
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],

    ['junit', {
      outputFile: 'test-results/results.xml'
    }]],
  workers: 5,
  use: {
    actionTimeout: 30000,
    navigationTimeout: 30 * 1000,
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],

    //viewport: {width:61, height:132}
    //...devices['iPhone 12'],
  },
});