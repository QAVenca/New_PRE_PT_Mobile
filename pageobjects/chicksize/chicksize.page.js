const Page = require('../page');
const SelectorHome = require('../../pageobjects/home/selectors');
const Selector = require('./selectors');
const Steps = require('../steps');

class Storefront extends Page {

    async scrollToNextPage() {
        await $(Selector.next).scrollIntoView();
        await browser.pause(1500);
        await Steps.closeNewsletter();
    }

    async buttons() {
        await $(Selector.next).waitForClickable();
        await $(Selector.next).click();
        await browser.pause(3000);
        await $(Selector.prev).waitForClickable();
        await $(Selector.prev).click();
    }

    async chicksizePage() {
        await this.open();
        await Steps.closeCookies();
        await Steps.closeAppModal();
        await $(SelectorHome.hamburguerMenu).moveTo();
        await browser.pause(500);
        await $(SelectorHome.hamburguerMenu).click();
        await browser.pause(500);
        await $(Selector.chicksize).moveTo();
        await browser.pause(500);
        await $(Selector.chicksize).click();
        await browser.pause(1500);
        await $(Selector.allChicksize).moveTo();
        await browser.pause(500);
        await $(Selector.allChicksize).click();
        await browser.pause(500);
    }

    async sortByVenca() {
        await $(Selector.filters).click();
        await $(Selector.onlyVencaCheckBox).click();
    }
    
    open() {
        return super.openHomePage('home');
    }
    
}

module.exports = new Storefront();