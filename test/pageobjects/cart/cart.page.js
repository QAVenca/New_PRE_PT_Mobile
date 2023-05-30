const Page = require('../page');
const login = require('../login/login.page');
const selectors = require('./selectors');
const selectorHome = require('../home/selectors');
const steps = require('../steps');
const Data = require('../data');

class Cart extends Page{

    openHomePage(path) {
        return super.openHomePage(path);
    }

    async cartPage() {
        await this.openCartPage();
        await steps.closeCookies();
    }

    async cartPageWithLogin() {
        //await steps.login();
        await this.openHomePage('home');
        await steps.closeCookies();
        await browser.pause(3000);
        await $(selectorHome.loginIcon).click();
        await login.login(Data.customer.email, Data.customer.currentPassword);

        await this.cartPage();
    }

    async cartPageWithLoginAndProduct() {
        await steps.login();
        await this.cartPage();
        await this.addProductToCart();
    }

    async addProductToCart() {
        await browser.pause(1500);
        await steps.openHomePage('p/117003/pitillo-largo-mujer-tipo-legging-sin-costuras-de-punto-elastico#reference=1FA010859&size=L');
        //await steps.closeNewsletter();
        await $(selectors.addProductToCart).click();
        await $(selectors.cartIcon).waitForClickable({timeout: 10000});
        await $(selectors.cartIcon).click();
    }

    async checkStartOrderButton() {
        await browser.pause(1500);
        await $(selectors.startOrderButton).scrollIntoView();
        // await steps.closeNewsletter();
        await $(selectors.startOrderButton).waitForClickable({timeout: 10000});
        await expect($(selectors.startOrderButton)).toBeClickable();
        await expect($(selectors.startOrderButton)).toBeDisplayed();
    }

    async checkVisitOurColectionButton() {
        //await $(selectors.visitOurColection).scrollIntoView();
        //await steps.closeNewsletter();
        await $(selectors.visitOurColection).waitForClickable({timeout: 10000});
        await expect($(selectors.visitOurColection)).toBeClickable();
        await expect($(selectors.visitOurColection)).toBeDisplayed();
    }

    async checkProductProperties() {
        await browser.pause(5000);
        await expect($(selectors.addToWishlist)).toBeDisplayed();
        await expect($(selectors.addToWishlist)).toBeClickable();
        await expect($(selectors.modifyProduct)).toBeDisplayed();
        await expect($(selectors.modifyProduct)).toBeClickable();
        await expect($(selectors.deleteProduct)).toBeDisplayed();
        await expect($(selectors.deleteProduct)).toBeClickable();
        await expect($(selectors.productPrice)).toBeDisplayed();
        await expect($(selectors.productPrice)).toBeClickable();
        await expect($(selectors.productReference)).toBeDisplayed();
        await expect($(selectors.productReference)).toBeClickable();
        await expect($(selectors.productDetails)).toBeDisplayed();
        await expect($(selectors.productDetails)).toBeClickable();
        await expect($(selectors.productList)).toBeDisplayed();
        await expect($(selectors.productList)).toBeClickable();
    }

    async moveProductToWishlist() {
        await $(selectors.addToWishlist).click();
        await $(selectors.wishlistCart).waitForDisplayed({timeout: 10000});
        await $(selectors.wishlistCart).scrollIntoView();
        await expect($(selectors.wishlistCart)).toBeDisplayedInViewport();
    }

    async moveProductFromWishlistToCart() {
        await expect($(selectors.addToCartFromWishlistCart)).toBeDisplayed();
        await $(selectors.addToCartFromWishlistCart).click();
        await $(selectors.cartIcon).scrollIntoView();
    }

    async checkSyteSection(){
        await $(selectors.syteSection).scrollIntoView();
        await expect($(selectors.syteSection)).toBeDisplayed();
        await $(selectors.pageTitle).scrollIntoView();
    }

    async startOrderWithUserLogged() {
        await $(selectors.startOrderButton).click();
        await expect(browser).toHaveUrl('https://pre.venca.es/NewCheckout?step=d');
        //await this.cartPage();
    }

    openCartPage() {
        return super.openHomePage('cart/');
    }

    async deleteProductFromCart() {
        await this.cartPage();
        await browser.pause(3000);
        await $(selectors.deleteProduct).click();
        await browser.pause(5000);
    }
    
}

module.exports = new Cart();