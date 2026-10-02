import { defineConfig } from '@playwright/test';
import {
  createAzurePlaywrightConfig,
  ServiceOS,
  ServiceAuth
} from '@azure/playwright';
import { AzureCliCredential } from '@azure/identity';

import config from './playwright.config';

export default defineConfig(
  config,

  createAzurePlaywrightConfig(config, {
    serviceAuthType: ServiceAuth.ENTRA_ID,

    os: ServiceOS.LINUX,

    credential: new AzureCliCredential(),

    exposeNetwork: '<loopback>',

    connectTimeout: 30000,

    runName: 'Azure DevOps Playwright Run'
  })
);