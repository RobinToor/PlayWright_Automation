const{Given,When,Then} = require('@cucumber/cucumber'); 
const { PomManager } = require('../../pageobjects/PomManager');
let pomManager;



When('Fill the infromation {string}, {string}, {string}, {string} to subscribe and continue', async function (firstName, lastName, captchaCode, isCaptchaValid) {
    
    pomManager = new PomManager(this.page); 
    await pomManager.Subscribe.FillInfoToSubscribe(firstName, lastName,captchaCode, isCaptchaValid);
  });

