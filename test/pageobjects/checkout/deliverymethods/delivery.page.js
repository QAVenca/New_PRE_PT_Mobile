const Page = require('../../page');
const Data = require('../../data');
const login = require('../../login/login.page');
const steps = require('../../steps');
const selectors = require('./selectors');
const cart = require('../../cart/cart.page');

class Delivery extends Page {

    async checkoutPageWithUserLogged() {
        await expect($(selectors.goToPaymentButton)).toBeDisplayed();
        await expect($(selectors.goToPaymentButton)).toBeClickable();
    }

    async goToadressPageWithUserLogged() {
        await expect($(selectors.goToAdress)).toBeDisplayed();
        await expect($(selectors.goToAdress)).toBeClickable();
        await $(selectors.goToAdress).click();
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://pre.venca.es/NewCheckout?step=a');
    }

    async checkUserAdresses() {
        await expect($(selectors.defaultAdress)).toBeDisplayed();
        await expect($(selectors.defaultAdress)).toBeClickable();
        await expect($(selectors.secondAdress)).toBeDisplayed();
        await expect($(selectors.secondAdress)).toBeClickable();
    }

    async addNewAdress() {
        await browser.pause(10000);
        await expect($(selectors.addNewAdress)).toBeDisplayed();
        await expect($(selectors.addNewAdress)).toBeClickable();
        await $(selectors.addNewAdress).click();
        await this.putDataValues(Data.customer.title, Data.customer.street, Data.customer.number, Data.customer.city, Data.customer.postalCode);
        await $(selectors.submit).click();
        await browser.pause(10000);
        await expect(browser).toHaveUrl('https://pre.venca.es/NewCheckout?step=d');
    }

    async putDataValues(title, street, number, city, postalCode) { 
        await $(selectors.title).setValue(title);
        await $(selectors.adress).setValue(street);
        await $(selectors.number).setValue(number);
        await $(selectors.city).setValue(city);
        await $(selectors.postalCode).setValue(postalCode);
        await $(selectors.provinceDropdown).click();
        await $(selectors.provinceOption).click();
    }

    async checkDeliveryMethods() {
        await this.checkPackPointDeliveryMethod();
        await this.checkMailDeliveryMethod();

        //await this.checkHomeDeliveryMethod(); NO DETECTA ELS BOTONS DE REPARTIR A CASA
    }

    async checkPackPointDeliveryMethod() {
        await expect ($(selectors.deliveryPackPoint)).toBeDisplayed();
        await expect ($(selectors.deliveryPackPoint)).toBeClickable();
        //await $(selectors.deliveryPackPoint).click();
        await $(selectors.deliveryStandarPackPoint).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressPackPoint).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarPackPoint)).toBeClickable();
        await expect ($(selectors.deliveryExpressPackPoint)).toBeClickable();
        await $(selectors.deliveryExpressPackPoint).click();
        await $(selectors.deliveryStandarPackPoint).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressPackPoint).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarPackPoint)).toBeClickable();
        await expect ($(selectors.deliveryExpressPackPoint)).toBeClickable();
        await $(selectors.deliveryStandarPackPoint).click();
        await $(selectors.deliveryStandarPackPoint).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressPackPoint).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarPackPoint)).toBeClickable();
        await expect ($(selectors.deliveryExpressPackPoint)).toBeClickable();
    }

    async checkHomeDeliveryMethod() {
        await expect ($(selectors.deliveryHome)).toBeDisplayed();
        await expect ($(selectors.deliveryHome)).toBeClickable();
        await $(selectors.deliveryHome).click();    

        await $(selectors.deliveryStandarHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryUrgentHome).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarHome)).toBeClickable();
        await expect ($(selectors.deliveryExpressHome)).toBeClickable();
        await expect ($(selectors.deliveryUrgentHome)).toBeClickable();
        await $(selectors.deliveryExpressPackPoint).click();
        await $(selectors.deliveryStandarHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryUrgentHome).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarHome)).toBeClickable();
        await expect ($(selectors.deliveryExpressHome)).toBeClickable();
        await expect ($(selectors.deliveryUrgentHome)).toBeClickable();
        await $(selectors.deliveryExpressPackPoint).click();
        await $(selectors.deliveryStandarHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryExpressHome).waitForClickable({timeout: 10000});
        await $(selectors.deliveryUrgentHome).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarHome)).toBeClickable();
        await expect ($(selectors.deliveryExpressHome)).toBeClickable();
        await expect ($(selectors.deliveryUrgentHome)).toBeClickable();
    }

    async checkMailDeliveryMethod() {
        await expect ($(selectors.deliveryMail)).toBeDisplayed();
        await expect ($(selectors.deliveryMail)).toBeClickable();
        await $(selectors.deliveryMail).click();
        await $(selectors.deliveryStandarMail).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarMail)).toBeClickable();
        await $(selectors.deliveryStandarMail).click();
        await $(selectors.deliveryStandarMail).waitForClickable({timeout: 10000});
        await expect ($(selectors.deliveryStandarMail)).toBeClickable();
    }

    openCheckoutPage() {
        super.openHomePage('NewCheckout?step=d');   
    }

}

module.exports = new Delivery();