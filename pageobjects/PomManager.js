const {Landingpage} = require('./Landingpage');
const {Storepage} = require('./Storepage');
const{Subscribe} = require('./Subscribe');
const{Common} = require('./Common');

class PomManager
{

    constructor(page)
    {
        this.page = page;
        this.Landingpage = new Landingpage(page);
        this.Storepage = new Storepage(page);
        this.Subscribe = new Subscribe(page);
        this.Common = new Common(page);
    }

    getHomePage()
    {
        return this.Landingpage;
    }

    getStorePage()
    {
        return this.Storepage;
    }

    getSubscribePage()
    {
        return this.Subscribe;
    }

    getCommonPage()
    {
        return this.Common;
    }

}
module.exports = {PomManager};