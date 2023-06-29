const selectorCookies = require('./cookies/selectors');
const selectorNews = require('./newsletter/selectors');
const selectorAppModal = require('./appmodal/selectors');
const selectorHome = require('./home/selectors');
const login = require('./login/login.page');
const selectorAccount = require('./account/selectors');
const Page = require('./page');
const Data = require('./data');
let cookies_check = false;
let news_check = false;
let login_check = false;
let app_modal = false;

class Steps extends Page {

    async initialCloseAll(){
        await this.closeCookies();
        await $(selectorHome.footer).scrollIntoView();
        await this.closeNewsletter();
        await $(selectorHome.footer).scrollIntoView();
    }

    async closeCookies() {
        const cookies_are_present = await $(selectorCookies.cookieID);
        let cookiesClickable = await cookies_are_present.isClickable();

        if (cookiesClickable) {
            await $(selectorCookies.cookieID).waitForClickable();
            await browser.pause(1500);
            await $(selectorCookies.cookieID).click();
        }

        /*if(cookies_check == false){
            await $(selectorCookies.cookieID).waitForDisplayed();
            await $(selectorCookies.cookieID).click();
            cookies_check = true;
        }*/
    }

    async closeNewsletter(){
        const newsletter_is_present = await $(selectorNews.modalClose);
        let newsletterClickable = await newsletter_is_present.isClickable();

        if (newsletterClickable) {
            await $(selectorNews.modalClose).waitForClickable();
            await $(selectorNews.modalClose).click();
        }
    }

    async closeAppModal(){
        let appModal;
        try {
            appModal = await $(selectorAppModal.modalClose).waitForClickable(); 
        } catch (error) {
            appModal = false;
        }

        if (appModal) {

            await $(selectorAppModal.modalClose).waitForClickable();
            await $(selectorAppModal.modalClose).click();
        }
    }

    async goHome() {
        await this.openHomePage('home');
        await browser.pause(1500);
        await this.closeCookies();
        await browser.pause(1500);
        await this.closeAppModal();
        await browser.pause(1500);
    }

    async goToMyAccount() {
        await this.openHomePage('home');
        //await browser.pause(5000);
        await this.closeCookies();
        await browser.pause(1500);
        await this.closeAppModal();
        await browser.pause(1500);
        if(login_check == false) {
            await $(selectorHome.loginIcon).click();
            await login.login(Data.customer.email, Data.customer.currentPassword);
            await browser.pause(3000);
            await $(selectorHome.loginIcon).click();
            //await $(selectorAccount.myAccount).click();
            login_check = true;
            await browser.pause(3000);
        } else if(login_check == true) { 
            await $(selectorHome.loginIcon).click();
            //await $(selectorAccount.myAccount).click();
        }
    }

    async goToLanguageButton() {
        await this.openHomePage('home');
        await this.closeCookies();
        await browser.pause(500);
        await this.closeAppModal();
        await browser.pause(500);
        await $(selectorHome.languageChoice).scrollIntoView();
        await this.closeNewsletter();
        await $(selectorHome.ekomiFooter).scrollIntoView();
    }

    async goToCategories() {
        await this.openHomePage('home');
        await this.closeCookies();
        await browser.pause(500);
        await this.closeAppModal();
        await browser.pause(3000);
        /*await $(selectorHome.categoryOne).scrollIntoView();
        await this.closeNewsletter();
        await $(selectorHome.loginIcon).scrollIntoView();*/
    }

    async manageIFrame() {
        
    }

    openHomePage(path) {
        return super.openHomePage(path);
    }

    async login() {
        await this.openHomePage('home');
        await this.closeCookies();        
        await browser.pause(1500);
        await this.closeAppModal();
        await browser.pause(3000);
        if(login_check == false) {
            await $(selectorHome.loginIcon).click();
            await login.login(Data.customer.email, Data.customer.currentPassword);
            login_check = true;
        }
    }

    async scrollToElement(element) {
        element.scrollIntoView();
    }
}

module.exports = new Steps();