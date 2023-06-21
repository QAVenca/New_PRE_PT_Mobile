module.exports = {
    visitColectionButton: "#results > div.text-center.voffset3.antiVoffset3 > a > div",
    storefrontTitle: "#mainContent > div > article.col-xs-12.dflex.flex-column.px-10 > div.newCommercialTitle.dflex.align-items-center.pt-3.pb-3 > h1",
    storefrontFirstArticle: "[data-uitest=\"storefrontProductsList\"]",
    storefrontFirstArticleWishlistButton: "#addToWishListS_0",
    removeWishlistButton: "#results > div:nth-child(8) > div > section > div > span:nth-child(1) > i",
    emptyWishlist2: "//*[@id=\"results\"]/div[2]/div[2]",
    wishlistTotalProducts: "#totalProductsTitle",
    colorDropdownMenu: "#colorName",
    defaultColor: "#modalChooseColor_0 > div > div > div.modal-body > div > div:nth-child(1)",
    sizeDropDownMenu: "#selectedSize_0",
    defaultSize: "#sizes_0 > ul > li:nth-child(1) > a",
    addToCart: "#addToBasket_0",
    //favoritesIcon: "",
    //cartAddToFavourites: "//*[@id=\"guardarFavorito1\"]",
    cartAddToFavourites: "#saveForLater",
    
}

/* class SelectorWishlist{
    get visitColectionButton(){
        return $('//*[@id="results"]/div[2]/a/div');
    }
    get storefrontTittle(){
        return $('[data-uitest="storefrontTitle"]');
    }
    get storefrontFirstArticle(){
        return $('[data-uitest="storefrontProductsList"]');
    }
    get storefrontFirstArticleWishlistButton(){
        return $('//*[@id="results"]/section[2]/div[1]/div/a/div[2]/div[2]/button/i');
    }
    get removeWishlistButton(){
        return $('//*[@id="wishList"]/section/section/div/div[1]');
    }
    get emptyWishlist2(){
        return $('//*[@id="results"]/div[2]/div[2]');
    }
    get colorDropdownMenu(){
        return $('//*[@id="selectedColor_0"]');
    }
    get defaultColor(){
        return $('//*[@id="colors_0"]/ul/li[1]/button');
    }
    get sizeDropDownMenu(){
        return $('#dropdownSize_0');
    }
    get defaultSize(){
        return $('//*[@id="sizes_0"]/ul/li[1]/a');
    }
    get addToCart(){
        return $('#addToBasket_0');
    }
    get cartAddToFavourites(){
        return $('//*[@id="guardarFavorito1"]');
    }
}

module.exports = new SelectorWishlist(); */