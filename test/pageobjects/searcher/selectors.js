module.exports = {
    suggestedItems: "#suggestedItems",
    searchIcon: "//*[@id=\"top-search-bar-container\"]/div/div/form/button[2]",
    searchInput: "[data-uitest=\"Input Box\"]",
    firstItemPageResult: "#df-result-product-24fee85f5eccf0864ec253a874945d53",
    checkProductPage: "#addToBasket",
    wrongSearchResult: "#dfd-tabs-66WwR",
}

/*class SelectorsHome{
    get suggestedItems() {
        return $('#suggestedItems');
    }

    get searchIcon() {
        return $('//*[@id="top-search-bar-container"]/div/div/form/button[2]');
    }

    get searchInput(){
        //return $('[name="syte-ts-input"]');
        return $('#top-search-bar-container > div > div > form > input');
    }

    get suggestedSearch(){
        return $('#suggestedItems');
    }

    get firsItemPageResult() {
        //return $('//*[@id="112004FA011751XS"]');
        //return $('//*[@id="112004FA011746XS"]');
        return $('#filter-search-container > div.products-styles__ProductsListingSection-sc-1qarpt3-0.kzZpor.syte-ts-products-listing > ul > div:nth-child(1)');
    }

    get checkProductPage(){
        return $('#mainTextFeatures');
    }

    get wrongSearchResult(){
        return $('//*[@id="filter-search-container"]/div[3]/div[2]/div/h5/span/span');
    }
}
module.exports = new SelectorsHome();*/