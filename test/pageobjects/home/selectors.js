module.exports = {
    popupModal: "#onetrust-group-container",
    cookieID: "#onetrust-accept-btn-handler",
    searcher: "#Search",
    searchInput: "#top-search-bar-container > div > div > form > input",
    suggestedSearch: "#suggestedItems",
    //clearSearchButton: "#top-search-bar-container > div > div > form > button.sc-hKwDye.ikvZUT.syte-ts-search-form__clear-button",
    searchButton: "#top-search-bar-container > div > div > form > button.sc-dkPtRN.fabHvK.syte-ts-search-form__submit-button",
    checkProductPage: "//*[@id=\"addToBasket\"]/span[1]",
    wrongSearchResult: "[class=\"no-items-found\"]",
    loginIcon: "#user",
    newIcon: "#camera > a",
    favoritesIcon: "#heart",
    helpIcon: "#heading15",
    cartIcon: "#cartZone",
    buyFromPrintedCatalog: "[data-uitest=\"catalog\"]",
    hamburguerMenu: "#navToggle",
    categoryTitle: "#mainContent > div:nth-child(4) > a",
    categoryOne: "#mainContent > div:nth-child(5) > a",
    categorySeven: "#mainContent > div:nth-child(8) > a",
    termsAndConditions: "#corporateZone > ul.col-xs-6.FS07.list-unstyled.pl-5 > li:nth-child(4) > span",
    titleTermsAndContitions: "#section-14",
    aboutUs: "#corporateZone > ul.col-xs-6.list-unstyled.pl-5 > li:nth-child(2) > a",
    titleAboutUs: "#quienes_somos",
    languageChoiceText: "#socialIcons > div > div.text-uppercase.text-center.posRelative.antiVoffset2.googtrans > label",
    socialIconsView: "#socialIcons",
    closePromo: "//*[@id=\"BtPopin_1647271517350-6481\"]/b",
    numberOfElements: "[data-uitest=\"numberOfElements\"]",
    promoFrame: "BtPopin_1647271731828-6481 .close",
    inputUsername: "[data-uitest=\"emailLogin\"]",
    titleNewPage: "#syte-camera-tour-screen-container\ syte-camera-tour-screen-container-venca > div > div > div.sc-hKwDye.fbFoyL.syte-tourV2-main-wrapper > div > div.start-btns-sectionstyled__StartWrapper-sc-1k3rvi4-0.ktwMWj.syte-tourV2-start-wrapper",
    titleFavoritesPage: "//*[@id=\"results\"]/div[1]/section/div/h1",
    titleHelpPage: "//*[@id=\"newHelp\"]/div/section[1]/h1",
    titleCartPage: "body > main > div:nth-child(4) > h1",
    /*titlePrintedPage: "body > main > div:nth-child(4) > h1",*/
    titlePrintedPage: "body > main > div.col-sm-12.antiVoffset3 > div.clickable > div > span",
    //titleCategoryOne: "[data-uitest=\"storefrontTitle\"]",
    titleCategoryOne: "#mainContent > div.row.asyncprod > article.col-xs-12.dflex.px-10 > div.newCommercialTitle.pt-4.pb-3 > h1",
    titleCategorySeven: "[data-uitest=\"storefrontTitle\"]",
    languageSpanish: "#socialIcons > div > div.text-uppercase.text-center.posRelative.antiVoffset2.googtrans > div.langContainer.posRelative.notranslate.open > ul > li:nth-child(1) > span",
    languageCatalan: "#socialIcons > div > div.text-uppercase.text-center.posRelative.antiVoffset2.googtrans > div.langContainer.posRelative.notranslate.open > ul > li:nth-child(2) > span",
    languageGalician: "#socialIcons > div > div.text-uppercase.text-center.posRelative.antiVoffset2.googtrans > div.langContainer.posRelative.notranslate.open > ul > li:nth-child(3) > span",
    languageEuskera: "#socialIcons > div > div.text-uppercase.text-center.posRelative.antiVoffset2.googtrans > div.langContainer.posRelative.notranslate.open > ul > li:nth-child(4) > span",
    ekomiFooter: "#newsletter > div.pl-3.pr-3.voffset20 > span:nth-child(1)",
    cartWishlist: "#furtherProducts", 
}

/*class SelectorsHome{
    get popupModal() {
        return $('#onetrust-group-container');
    }

    get cookieID() {
        return $('#onetrust-accept-btn-handler');
    }

    get searcher(){
        return $('#searcher');
    }

    get searchInput(){
        //return $('[name="syte-ts-input"]');
        return $('#top-search-bar-container > div > div > form > input');
    }

    get suggestedSearch(){
        return $('#suggestedItems');
    }

    get clearSearchButton(){
        //return $('//*[@id="top-search-bar-container"]/div/div/form/button[1]');
        return $('#top-search-bar-container > div > div > form > button.sc-hKwDye.ikvZUT.syte-ts-search-form__clear-button');
    }

    get searchButton(){
        //return $('//*[@id="top-search-bar-container"]/div/div/form/div/button');
        return $('#top-search-bar-container > div > div > form > button.sc-dkPtRN.fabHvK.syte-ts-search-form__submit-button');
    }

    get checkProductPage(){
        return $('//*[@id="addToBasket"]/span[1]')
    }

    get wrongSearchResult(){
        return $('[class="no-items-found"]');
    }

    get loginIcon(){
        return $('[data-uitest="userName"]');
    }

    get newIcon(){
        //return $('//*[@id="camera"]/a/span');
        return $('#camera > a');
    }
    get favoritesIcon(){
        //return $('//*[@id="WishMenu"]/span/span');
        return $('#WishMenu > span');
    }
    get helpIcon(){
        //return $('//*[@id="helpHeader"]/span/span');
        return $('#helpHeader > span');
    }
    get cartIcon(){
        //return $('//*[@id="cartZone"]/span[1]');
        return $('#cartZone > span.dflex.flex-column.align-items-center.cPointer');
    }

    get buyFromPrintedCatalog(){
        return $('[data-uitest="catalog"]');
    }

    get categoryOne(){
        //return $('/html/body/main/div[6]/div/div/div/div/div[1]/a/img');
        return $('body > main > div:nth-child(7) > div > div > div > div > div:nth-child(1)');
    }

    get categorySeven(){
        //return $('/html/body/main/div[5]/div/div/div/div/div[3]/a/img');
        return $('body > main > div:nth-child(8) > div > div > div > div > div:nth-child(3) > a');
    }

    get termsAndConditions(){
        //return $('//*[@id="corporateZone"]/ul[3]/li[2]/span');
        return $('#corporateZone > ul:nth-child(3) > li:nth-child(2) > span');
    }

    get titleTermsAndContitions(){
        return $('#section-12');
    }

    get aboutUs(){
        //return $('//*[@id="corporateZone"]/ul[4]/li[2]/a');
        return $('#corporateZone > ul.col-sm-3.list-unstyled.antiVoffset3 > li:nth-child(2) > a');
    }

    get titleAboutUs(){
        return $('#quienes_somos');
    }

    get languageChoiceText(){
        return $('/html/body/footer/div/label'); 
    }

    get languageChoice() {
        return $('#flag_link');
    }

    get closePromo(){
        return $('//*[@id="BtPopin_1647271517350-6481"]/b');
    }

    get numberOfElements() {
        return $('[data-uitest="numberOfElements"]');
    }

    get promoFrame() {
        return $('BtPopin_1647271731828-6481 .close');
    }

    get inputUsername() {
        return $('[data-uitest="emailLogin"]');
    }

    get titleNewPage(){
        return $('#syte-camera-tour-screen-container\ syte-camera-tour-screen-container-venca > div > div > div.sc-hKwDye.fbFoyL.syte-tourV2-main-wrapper > div > div.start-btns-sectionstyled__StartWrapper-sc-1k3rvi4-0.ktwMWj.syte-tourV2-start-wrapper');
        //return $('#syte-camera-tour-screen-container\ syte-camera-tour-screen-container-venca > div > div > div.sc-hKwDye.fbFoyL.syte-tourV2-main-wrapper > div > div.titlesstyled__TitleWrapper-sc-12zjo9r-0.eCykUL.syte-tourV2-title-wrapper');
    }
    
    get titleFavoritesPage(){
        return $('//*[@id="results"]/div[1]/section/div/h1');
    }

    get titleHelpPage(){
        return $('//*[@id="newHelp"]/div/section[1]/h1');
    }

    get titleCartPage(){
        //return $('/html/body/main/div[2]/h1');
        return $('body > main > div:nth-child(4) > h1');
    }

    get titlePrintedPage(){
        return $('body > main > div:nth-child(4) > h1');
    }

    get titleCategoryOne(){
        return $('[data-uitest="storefrontTitle"]');
    }

    get titleCategorySeven(){
        return $('[data-uitest="storefrontTitle"]');
    }

   
    get languageSpanish(){
        return $('/html/body/footer/div/div[2]/ul/li[1]/span');
    }
    
    get languageCatalan(){
        return $('/html/body/footer/div/div[2]/ul/li[2]/span');
    }

    get languageGalician(){
        return $('/html/body/footer/div/div[2]/ul/li[3]/span');
    }

    get languageEuskera(){
        return $('/html/body/footer/div/div[2]/ul/li[4]/span');
    }

}
module.exports = new SelectorsHome();*/

