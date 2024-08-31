const {Given, When, Then, Before, After, AfterStep, Status} = require('@cucumber/cucumber');
const playwright  = require('@playwright/test');
const path = require('path');

Before(async function()
{
    //
    const browser =  await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();

});

AfterStep(async function ({result}) 
{
    if(result.status == Status.FAILED)
    {
        const temp = await this.page.screenshot();
        await this.page.screenshot({path: 'screenshot.png'});
        this.attach(temp.toString('base64'), 'base62:image/png');
        console.log("Screenshot logged");
    }
    
})

After(function() 
{

});