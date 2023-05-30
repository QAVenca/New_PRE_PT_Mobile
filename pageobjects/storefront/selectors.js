module.exports = {
    storefront: "#heading-navigation-17",
    allCollection: "[data-uitest=\"navigateProductSubcategories\"]",
    title: "#mainContent > div.row.asyncprod > article.col-xs-12.dflex.px-10 > div.newCommercialTitle.pt-4.pb-3 > h1",
    dressLink: "[class=\"tab swiper-slide bold700 swiper-slide-next\"]",
    dressStorefront: "#mainContent > div.row.asyncprod > article.col-xs-12.dflex.px-10 > div.newCommercialTitle.pt-4.pb-3 > h1",
    product: "[data-uitest=\"storefrontProductsImage\"]",
    buttons: "#btBotons",
    prev: "#btBotons > div:nth-child(1) > a",
    //next: "[data-uitest=\"btnStrAfter\"]",
    next: "#btBotons > div:nth-child(3) > a",
    nextPage: "https://pre.venca.es/e/38/moda-mujer?page=2",
    prevPage: "https://pre.venca.es/e/38/moda-mujer?page=1",
}

/* class SelectorsStorefront {
    get storefront(){
        return $('[data-vc-node-id="5"]');
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
}

module.exports = new SelectorsStorefront(); */