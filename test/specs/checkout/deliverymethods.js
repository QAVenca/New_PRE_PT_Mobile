const delivery = require('../../pageobjects/checkout/deliverymethods/delivery.page');
const cart = require('../../pageobjects/cart/cart.page');

describe('Checkout - Delivery Methods Activity', () => {
    it('Should go from Cart to Checkout', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.startOrderWithUserLogged();
        await delivery.checkoutPageWithUserLogged();
        await cart.deleteProductFromCart();
    });

    it('Should be able to go backwards and change adress', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.startOrderWithUserLogged();
        await delivery.goToadressPageWithUserLogged();
        await delivery.checkUserAdresses();
        //await delivery.addNewAdress(); (No detecta el botó d'afegir direcció)
        await cart.deleteProductFromCart();
    });

    it.only('Should check if all the delivery methods are present and clickable', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.startOrderWithUserLogged();
        await delivery.checkDeliveryMethods();

        await cart.deleteProductFromCart();
    });

    /*it.only('Should try mail delivery method', async () => {
        await cart.cartPageWithLoginAndProduct();
        await cart.startOrderWithUserLogged();
        await delivery.checkMailDeliveryMethod();
    });*/
});