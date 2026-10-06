const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After, BeforeAll, AfterAll, Status, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const { before } = require('node:test');
const path = require('node:path');

Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(async function() {
    
});

AfterStep(async function({result}) {
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'screenshot.png'});
    }
});

After(async function() {
    console.log("I am the last executor");
});