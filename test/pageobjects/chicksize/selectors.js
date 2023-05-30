module.exports = {
    chicksize: "[data-vc-node-id=\"12\"]",
    allCollection: "#collapse-navigation-20 > div:nth-child(1) > ul > li > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > b > a",
    allChicksize: "[data-uitest=\"navigateProductSubcategories\"]",
    title: "#mainContent > div > article.col-xs-12.dflex.flex-column.px-10 > div.newCommercialTitle.dflex.align-items-center.pt-3.pb-3 > h1",
    dressLink: "[class=\"tab swiper-slide bold700 swiper-slide-next\"]",
    dressStorefront: "#mainContent > div > article.col-xs-12.dflex.px-10 > div.newCommercialTitle.pt-4.pb-3 > h1",
    product: "[data-uitest=\"storefrontProductsImage\"]",
    numPag: "#btBotons > div:nth-child(2) > p",
    prev: "#btBotons > div:nth-child(1) > a",
    //next: "[data-uitest=\"btnStrAfter\"]",
    next: "#btBotons > div:nth-child(3) > a",
    nextPage: "https://pre.venca.es/e/38/moda-mujer?page=2",
    prevPage: "https://pre.venca.es/e/38/moda-mujer?page=2",
    filters: "[data-uitest=\"storefrontOpenFilterIcon\"]",
    onlyVencaCheckBox: "#summaryResults > div.col-sm-12.col-md-7 > div > div.pt-05.pr-30",
}

/*class SelectorsStorefront {

    get chicksize(){
        return $('[data-vc-node-id="8"]');
    }

    get allChicksize(){
        return $('[data-uitest="navigateProductSubcategories"]');
    }

    get title() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get dressLink() {
        return $('[class="tab swiper-slide bold700 swiper-slide-next"]');
    }

    get dressStorefront() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get product() {
        return $('[data-uitest="storefrontProductsImage"]');
    }
    
    get prev() {
        return $('[data-ui-test="btnStrBefore"]');
    }

    get next() {
        return $('[data-uitest="btnStrAfter"]');
    }

    get nextPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

    get prevPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

    get onlyVencaCheckBox(){
        return $('#summaryResults > div.col-sm-12.col-md-7 > div > div.pt-05.pr-30');
    }

}

module.exports = new SelectorsStorefront();*/

