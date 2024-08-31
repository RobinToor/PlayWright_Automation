const{Given, When, Then} = require('@cucumber/cucumber');
const { PomManager } = require('../../pageobjects/PomManager');
let pomManager;

  /**
   * @param {import('@playwright/test').Page} page
   */

When('Verify the heading {string} on the page',async function (headingText) {
    //Verify text of the heading on a page 
    pomManager = new PomManager(this.page);
    await pomManager.Common.ValidateHeadingOnPage(headingText);   
  });

  
  Then('I should see an error text message {string}', {timeout: 10 * 1000}, async function (textMessage) {
    // Write code here that turns the phrase above into concrete actions
    pomManager = new PomManager(this.page);
    await pomManager.Common.ValidateErrorTextMessageOnPage(textMessage);
  });