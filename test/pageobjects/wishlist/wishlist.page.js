const HomePage = require('../../pageobjects/home/home.page');
const Selector = require('../../pageobjects/home/selectors');
const SelectorWishlist = require('../../pageobjects/wishlist/selectors');
let total_of_products = 0;
let wishlistTotalProducts = 0;

class Wishlist {

    getNumProducts(){
        browser.waitUntil( async ()=> await $(Selector.numberOfElements).isClickable());
	    return $(Selector.numberOfElements).getText();
    }

    totalProducts(){
        return total_of_products;
    }

    async addProduct(num) {
        total_of_products =+ num;
        total_of_products =+ 1;
    }
    
    async goToWishlist() {
        await $(Selector.favoritesIcon).waitForClickable();
        await $(Selector.favoritesIcon).click();
        await browser.pause(3000);
        //await expect ($(Selector.titleFavoritesPage)).toHaveTextContaining('LISTA DE FAVORITOS');
        await expect(browser).toHaveUrlContaining('WishList');
    }

    async checkItemsAndRemoveThem() {
        wishlistTotalProducts = $(SelectorWishlist.wishlistTotalProducts).getText();
        /*await $(SelectorWishlist.removeWishlistButton).waitForClickable();
        await $(SelectorWishlist.removeWishlistButton).click();*/
       if (!(wishlistTotalProducts === 0)) {
            this.removeItemFromWishlist();
       }
    }

    async goToStorefront() {
        await browser.pause(1500);
        await $(SelectorWishlist.visitColectionButton).waitForClickable();
        await $(SelectorWishlist.visitColectionButton).click();
        await expect ($(SelectorWishlist.storefrontTitle)).toHaveTextContaining('ROUPA ONLINE DE MULHER');
    }

    async checkIconFirstProduct() {
        await expect ($(SelectorWishlist.storefrontFirstArticleWishlistButton)).toBeDisplayed();
    }

    async checkAddProdutToWishlist() {
        await $(SelectorWishlist.storefrontFirstArticleWishlistButton).waitForClickable();
        await $(SelectorWishlist.storefrontFirstArticleWishlistButton).click();
        await browser.pause(5000);
        await $(Selector.favoritesIcon).waitForClickable();
        await $(Selector.favoritesIcon).click();
        await browser.pause(5000);
        //await expect ($(SelectorWishlist.removeWishlistButton)).toBePresent();
    }

    async removeItemFromWishlist() {
        await $(SelectorWishlist.removeWishlistButton).waitForClickable();
        await $(SelectorWishlist.removeWishlistButton).click();
        //await browser.pause(3000);
        await ($(SelectorWishlist.visitColectionButton)).waitForClickable();
        await expect ($(SelectorWishlist.visitColectionButton)).toBePresent();
    }

    async addToCart() {
        await $(SelectorWishlist.colorDropdownMenu).click();
        await $(SelectorWishlist.defaultColor).click();
        await $(SelectorWishlist.sizeDropDownMenu).click();
        await $(SelectorWishlist.defaultSize).click();
        await $(SelectorWishlist.addToCart).click();
        await browser.pause(1500);
    }

    async checkEmptyWishList() {
        const initialTotal = await this.getNumProducts();
        await this.addProduct(initialTotal);
        //await browser.pause(3000);
        await ($(SelectorWishlist.emptyWishlist2)).waitForClickable();
        await expect ($(SelectorWishlist.emptyWishlist2)).toHaveText('Navegue no site e clique no coração junto do artigo que quer guardar nesta lista.');
    }

    async goToCart() {
        await HomePage.clickOnCartIcon($(Selector.cartIcon));
    }

    async addToWishlistFromCart() {
        await browser.pause(1000);
        await $(SelectorWishlist.cartAddToFavourites).click();
        await browser.pause(3000);
        await $(Selector.cartWishlist).scrollIntoView();
        await expect($(Selector.cartWishlist)).toBePresent();
        //await $(Selector.favoritesIcon).waitForClickable();
        await $(Selector.favoritesIcon).click();
        await expect ($(SelectorWishlist.removeWishlistButton)).toBePresent();
    }

    async removeFromWishlistInCart() {
        await $(SelectorWishlist.removeWishlistButton).click();
        await browser.pause(1500);
        await ($(SelectorWishlist.emptyWishlist2)).waitForClickable();
        await expect ($(SelectorWishlist.emptyWishlist2)).toHaveText('Navegue no site e clique no coração junto do artigo que quer guardar nesta lista.');
    }
}

module.exports = new Wishlist();