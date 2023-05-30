const Page = require('../../pageobjects/page');
const Selector = require('../../pageobjects/home/selectors');
const steps = require('../steps');

class HomePage extends Page {

    async openSearchModal(){
        await $(Selector.searcher).click();
    }

    async openSearcher(searchValue){
        await $(Selector.searcher).click();
        await browser.pause(3000);
        await $(Selector.searchInput).addValue(searchValue);
    }

    async openSearcherClick(searchValue){
        /*await $(Selector.searcher).click();
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();*/
        await this.search(searchValue);
    }

    async clearSearchTab(searchValue){
        //await $(Selector.clearSearchButton).click();    //DK
        await $(Selector.searchInput).clearValue();
    }

    async refillSearchTab(searchValue){
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();
    }

    async search(searchValue){
        await $(Selector.searcher).click();
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();
    }

    async closePromo(){
        await $(Selector.closePromo).click();
    }

    async scrollToNewsletter(){
        await $(Selector.languageChoice).scrollIntoView();
    }

    async checkCategories() {
        await browser.pause(1000);
        await $(Selector.categoryOne).scrollIntoView();
        await expect ($(Selector.categoryOne)).toBePresent();
        await expect ($(Selector.categorySeven)).toBePresent();
        await $(Selector.categoryTitle).scrollIntoView();
        await $(Selector.categoryOne).click();
        await browser.pause(3000);
        //Fins que no tingui ID:
        //await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('VESTIDOS DE MUJER');
        await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('ropa online');
        //Corregir quan tignui ID
        await this.openHomePage('home');
        await $(Selector.categoryOne).scrollIntoView();
        /*await $(Selector.categorySeven).click();
        await browser.pause(3000);
        //Fins que no tingui ID:
        //await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('CALZADO MUJER');
        await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('CAMISETAS Y TOPS MUJER');
        //Corregir quan tignui ID*/
    }

    async checkLinks() {
        await $(Selector.socialIconsView).scrollIntoView();
        await steps.closeNewsletter();
        await expect ($(Selector.termsAndConditions)).toBePresent();
        await expect ($(Selector.aboutUs)).toBePresent();
        await $(Selector.termsAndConditions).click();
        await expect ($(Selector.titleTermsAndContitions)).toBePresent();
        /* FINS QUE NO HI HAGI ID, NO VA
        await this.openHomePage('home');
        await $(Selector.aboutUs).scrollIntoView();
        await $(Selector.aboutUs).click();
        await browser.pause(3000);
        await expect ($(Selector.titleAboutUs)).toBePresent();*/
    }

    async clickOnCartIcon(element) {
        await element.click();
    }

    async checkLanguageButton() {
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA OTRO IDIOMA:');
    }

    async checkDifferentLanguages() {
        await $(Selector.languageChoice).click();
        await expect($(Selector.languageSpanish)).toHaveTextContaining('CASTELLANO');
        await expect($(Selector.languageCatalan)).toHaveTextContaining('CATALÀ');
        await expect($(Selector.languageGalician)).toHaveTextContaining('GALLEGO');
        await expect($(Selector.languageEuskera)).toHaveTextContaining('EUSKERA');
    }

    async checkCatalan() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageCatalan).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA UN ALTRE IDIOMA:');
    }

    async checkGalician() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageGalician).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONE OUTRO IDIOMA:');
    }

    async checkEuskera() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageEuskera).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('HAUTATU BESTE HIZKUNTZA BAT:');
    }

    async checkSpanish() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageSpanish).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA OTRO IDIOMA:');
    }

    async checkTopIcons() {
        /*await expect($(Selector.loginIcon)).toHaveTextContaining('LOGIN');
        await expect($(Selector.newIcon)).toHaveTextContaining('NEW');
        await expect($(Selector.favoritesIcon)).toHaveTextContaining('FAVORITOS');
        await expect($(Selector.helpIcon)).toHaveTextContaining('AYUDA');
        await expect($(Selector.cartIcon)).toHaveTextContaining('MI CESTA');*/
        await expect($(Selector.loginIcon)).toBePresent();
        await expect($(Selector.newIcon)).toBePresent();
        await expect($(Selector.favoritesIcon)).toBePresent();
        await expect($(Selector.cartIcon)).toBePresent();
        await $(Selector.hamburguerMenu).click();
        await $(Selector.helpIcon).scrollIntoView();
        await expect($(Selector.helpIcon)).toBePresent();
    }

    async checkLoginIcon() {
        await $(Selector.loginIcon).click();
        await expect ($(Selector.inputUsername)).toBePresent();
    }

    async checkNewIcon() {
        const baseUrl = await browser.getUrl();
        await $(Selector.newIcon).click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl(baseUrl + '?sytePage=tourPage');
    }

    async checkFavoritesIcon() {
        await $(Selector.favoritesIcon).click();
        await expect ($(Selector.titleFavoritesPage)).toBePresent();
    }

    async checkHelpIcon() {
        await $(Selector.hamburguerMenu).click();
        await $(Selector.helpIcon).scrollIntoView();
        await $(Selector.helpIcon).click();
        await expect ($(Selector.titleHelpPage)).toBePresent();
    }

    async checkBuyFromPrintedCatalogue() {
        await $(Selector.buyFromPrintedCatalog).click();
        await expect ($(Selector.titlePrintedPage)).toBePresent();
    }
}

module.exports = new HomePage();