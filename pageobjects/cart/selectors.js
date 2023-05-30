module.exports = {
    pageTitle: "#logoHeader",
    visitOurColection: "body > main > div.text-center.voffset3.antiVoffset3 > a > div",
    startOrderButton: "#summaryCart > aside > div > div.row.mx-0.mt-1 > a",
    //addToWishlist: "#guardarFavorito1", 
    addToWishlist: "[name=\"wishListSaved\"]",
    modifyProduct: "[data-uitest=\"modify\"]",
    deleteProduct: "[data-uitest=\"delete\"]",
    productPrice: "[data-uitest=\"decimalPrice\"]",
    productReference: "[data-uitest=\"productReference\"]",
    productDetails: "[data-uitest=\"productDetails\"]",
    productList: "#productDetails",
    wishlistCart: "#cartWishlist",
    addToCartFromWishlistCart: "#addToBasket_0",
    syteSection: "#syte-personalization-container",
    addProductToCart: "#addToBasket",
    cartIcon: "#cartZone",
}

/*class CartSelectors {
    get  startOrderButton() {
        return $('a[href*="/Cart/Buy"]');
    }
    get visitOurCollectionButton() {
        return $('a[haref*="/e/38/moda-mujer"]');
    }
    get addToWishlist() {
        return $('#guardarFavorito1');
    }
    get modifyProduct() {
        return $('[data-uitest="modify"]');
    }
    get deleteProduct() {
        return $('[data-uitest="delete"]');
    }
    get productPrice() {
        return $('[data-uitest="decimalPrice"]');
    }
    get productReference() {
        return $('[data-uitest="productReference"]');
    }
    get productDetails() {
        return $('[data-uitest="productDetails"]');
    }
    get productList() {
        return $('#productDetails');
    }
    get wishlistCart() {
        return $('#cartWishlist');
    }
    get addToCartFromWishlistCart() {
        return $('#addToBasket_0');
    }
    get syteSection() {
        return $('#syte-personalization-container');
    }

}

module.exports = new CartSelectors();*/