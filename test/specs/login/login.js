const Login = require('../../pageobjects/login/login.page');
const Steps = require('../../pageobjects/steps');
const HomeSelectors = require('../../pageobjects/home/selectors');
const LoginSelectors = require('../../pageobjects/login/selectors');

describe('Login Activity', () => {
    it('should login with valid credentials & account name have to be \'Maria\'', async () => {
        await Login.openLoginPage();
        await Steps.closeCookies();
        await browser.pause(1500);
        await Login.login('vencaautomatedtest@gmail.com', 'testing1');
        await expect($(HomeSelectors.loginIcon)).toHaveTextContaining('MARIA');
        //await expect($(HomeSelectors.loginIcon)).toHaveTextContaining('VENCAMOD');
    });
    
    it('Login should fail and error missage have to be present', async () => {
        await Login.openLoginPage();
        await Login.login('vencaautomatedtest@gmail.com', 'testing3');
        await expect($(LoginSelectors.failLogin)).toHaveTextContaining('Email e/ou palavra-chave inválidos');
    });
});