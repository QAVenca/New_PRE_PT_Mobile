const Selector = require('../../pageobjects/newsletter/selectors');
let news_check = false;

class Newsletter {

    async close(Element){
        await Element.waitForClickable({timeout: 10000});
        await Element.click();
    }

    async closeNewsletter(){
        if(news_check == false) {
            await $(Selector.modalClose).waitForClickable({timeout: 10000});
            await $(Selector.modalClose).click();
            news_check = true;
        }
    }

    async wrongTerms(){
        const checkBoxError = await $(Selector.newsletterTermsError);
        await $(Selector.newsletterSubmit).click();
        return checkBoxError;
    }

    async wrongCredential(userEmail){
        await $(Selector.newsletterEmailFooter).waitForEnabled({timeout: 10000});
        await $(Selector.newsletterEmailFooter).setValue(userEmail);
        await $(Selector.newsletterSubmitFooter).click();
    }

    async rightCredential(userEmail){
        await $(Selector.newsletterEmailFooter).waitForEnabled({timeout: 10000});
        await $(Selector.newsletterEmailFooter).setValue(userEmail);
        await $(Selector.newsletterTermsFooter).click();
        await $(Selector.newsletterSubmitFooter).click();
        
    }

    async checkModalNewsletter() {
        await expect($(Selector.popupNewsletter)).toBePresent();
    }

    async checkIncorrectValues() {        
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.wrongCredential('asdfgh@sdad@asd');
        await browser.pause(500);
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await expect ($(Selector.newsletterMailError)).toHaveTextContaining('El formato de e-mail no es correcto');
    }

    async checkTermsAndConditions() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await this.wrongCredential('vencaautomatedtest@gmail.com');
        await expect ($(Selector.newsletterTermsError)).toHaveTextContaining('Debes aceptar las condiciones para poder continuar');
    }

    async checkTermsWithoutValues() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await $(Selector.newsletterTermsCheckbox).click();
        await $(Selector.newsletterSubmitFooter).click();
    }

    async checkNewsletterFooter() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await expect ($(Selector.newsletterEmailFooter)).toBeDisplayedInViewport();
    }

    async checkCorrectValues() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await this.rightCredential('vencaautomatedtest@gmail.com');
        await expect ($(Selector.newsletterThankYou)).toBeDisplayedInViewport();
    }
}

module.exports = new Newsletter();