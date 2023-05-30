const Page = require('../page');
const storefront = require('./selectors');
const SelectorHome = require('../../pageobjects/home/selectors');
const steps = require('../steps');

class Storefront extends Page {

    async scrollToNextPage() {
        await $(storefront.buttons).scrollIntoView(false);
        await browser.pause(1500);
        await steps.closeNewsletter();
    }

    async buttons() {
        await $(storefront.next).waitForClickable();
        await $(storefront.next).click();
        await browser.pause(3000);
        await $(storefront.prev).waitForClickable();
        await $(storefront.prev).click();
    }

    async storefrontPage() {
        await this.open();
        await steps.closeCookies();
        await browser.pause(1500);
        await steps.closeAppModal();
        await $(SelectorHome.hamburguerMenu).moveTo();
        await browser.pause(500);
        await $(SelectorHome.hamburguerMenu).click();
        await browser.pause(500);
        await $(storefront.storefront).moveTo();
        await browser.pause(500);
        await $(storefront.storefront).click();
        await browser.pause(1500);
        await $(storefront.allCollection).moveTo();
        await browser.pause(500);
        await $(storefront.allCollection).click();
        await browser.pause(1500);
    }
    
    open() {
        return super.openHomePage('home');
    }
    
}

module.exports = new Storefront();