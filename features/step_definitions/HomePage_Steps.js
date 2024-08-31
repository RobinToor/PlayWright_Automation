const {Given,When,Then} = require('@cucumber/cucumber');
let pomManager;
const {PomManager} =  require('../../pageobjects/PomManager');
const {test, expect, playwright} = require('@playwright/test');
const { homedir } = require('os');
const { timeout } = require('../../playwright.config');

 /**
   * @param {import('@playwright/test').Page} page
   */

Given('I navigate to LetsTestTogether Store site', {timeout: 20 * 1000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  pomManager = new PomManager(this.page);
  this.LandingPage = pomManager.getHomePage();
  await this.LandingPage.NavigateToTheWebsite();
});

  When('I enter {string} to subscribe for newsletter', async function (emailAddress) {
    await this.LandingPage.EnterdetailsToSubscribe(emailAddress);
  });

  When('Click {string}', async function (buttonName) {
    await this.LandingPage.ClickButton(buttonName);      
  });

