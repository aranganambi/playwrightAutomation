// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  projects: [
    {
      name: 'chrome',
      use: {
        actionTimeout: 30000,
        navigationTimeout: 30 * 1000,
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'safari',
      use: {
        actionTimeout: 30000,
        navigationTimeout: 30 * 1000,
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'firefox',
      use: {
        actionTimeout: 30000,
        navigationTimeout: 30 * 1000,
        browserName: 'firefox',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    }

  ]


});