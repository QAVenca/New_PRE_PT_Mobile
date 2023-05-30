const Page = require('../page');
const Steps = require('../steps');
const Selectors = require('./selectors');
let total_of_products = 0;

class Product extends Page {
    
    async productPage() {
        await this.open();
        await Steps.closeCookies();
    }

    async checkAddButton() {
        await $(Selectors.addButton).scrollIntoView();
        //await Steps.closeNewsletter();
        await $(Selectors.addButton).waitForClickable();
        await expect($(Selectors.addButton)).toBeClickable();
        await expect($(Selectors.addButton)).toBeDisplayed();
    }

    async setSize(){
        await $(Selectors.sizeList).scrollIntoView();
        await Steps.closeNewsletter();
        await $(Selectors.sizeList).waitForClickable();
        await $(Selectors.sizeList).click();
        browser.waitUntil( async ()=> await $(Selectors.size).isClickable());
        await browser.pause(1000);
        await $(Selectors.size).click();
        await expect($(Selectors.sizeList)).toHaveTextContaining('L');
    }

    async checkProperties() {
        await $(Selectors.sellersReview).scrollIntoView();
        await Steps.closeNewsletter();
        await $(Selectors.carrousselImages).scrollIntoView();
        await $(Selectors.color).waitForDisplayed();
        await $(Selectors.price).waitForDisplayed();
        await $(Selectors.picture).waitForDisplayed();
        await $(Selectors.sizeList).waitForDisplayed();
        await $(Selectors.headBanner).scrollIntoView();
        await $(Selectors.wishlist).waitForDisplayed();
    }

    async checkSections() {
        await browser.pause(1500);
        await $(Selectors.similar_products).scrollIntoView();
        await Steps.closeNewsletter();
        await $(Selectors.similar_products).waitForDisplayed();
        await browser.pause(1500);
        await $(Selectors.personalization_products).scrollIntoView();
        await expect($(Selectors.personalization_products)).toBeDisplayed();
    }
    
    open() {
        return super.openHomePage('p/117003/');
    }

    openProductWithDiscount() {
        return super.openHomePage('p/059586/');
    }
}

module.exports = new Product();