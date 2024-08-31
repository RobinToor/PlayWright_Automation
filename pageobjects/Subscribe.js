const{expect} = require('@playwright/test');
const { Common } = require('./Common');
let commonFunctions;

class Subscribe
{
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page)
    {
        this.page = page;
        commonFunctions = new Common(this.page);
        this.txtBoxFirstName = page.getByLabel('First Name');
        this.txtBoxLastName = page.getByLabel('Last Name');
        this.txtBoxEmail = page.getByLabel('E-mail:');
        this.txtBoxCatpchaCode = page.getByLabel('Enter code:');
        this.buttonContinue = page.getByRole('button', { name: ' Continue' });
    }


    async FillInfoToSubscribe(firstName, lastName, captchaCode, isCaptchaValid)
    {
        await this.txtBoxFirstName.fill(firstName);
        await this.txtBoxLastName.fill(lastName);
        //value = await commonFunctions.stringToBoolean(isCaptchaValid);
        
        if(!false)
        {
            await this.txtBoxCatpchaCode.fill(captchaCode);
        }
        if(false)
        {
            //Implement code here If you need to provide a valid capthca code
        }
        this.buttonContinue.click();
    }

   

}
module.exports  = {Subscribe};


