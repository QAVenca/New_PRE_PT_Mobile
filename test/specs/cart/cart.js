const cart = require('../../pageobjects/cart/cart.page');

describe('Cart Activity', () => {
    it('Display \"Visita nuestra colección\" when cart is empty', async ()=>{
        await cart.cartPageWithLogin();
        await browser.pause(1500);
        await cart.checkVisitOurColectionButton();
    })
    it('Button \'Comenzar Pedido\' should be displayed when cart is not empty', async () => {
        await cart.cartPageWithLoginAndProduct();
        //await cart.addProductToCart();
        await cart.checkStartOrderButton();
        await cart.deleteProductFromCart();
    });
    it('A product, should have properties displayed', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.checkProductProperties();
        await cart.deleteProductFromCart();
    });
    it('When \'Añadir a favoritos\' is pushed, product moves to wishlist, and it can be added to cart again', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.moveProductToWishlist();
        await cart.moveProductFromWishlistToCart();
        await cart.deleteProductFromCart();
    });
    it('Section \'Quizás te guste\' should be displayed', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.checkSyteSection();
        await cart.deleteProductFromCart();
    });
    it('Press the button \'Comenzar Pedido\' with user logged, should redirect to checkout', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.startOrderWithUserLogged();
        await cart.deleteProductFromCart();
    });
});