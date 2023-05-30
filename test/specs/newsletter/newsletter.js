const Steps = require('../../pageobjects/steps');
const Newsletter = require('../../pageobjects/newsletter/news.page');

describe('Subscribe to newsletter', () => {
    it('Should check if there is a floating newsletter modal present', async () => {
        await Steps.goHome();
        await Newsletter.checkModalNewsletter();
    });

    it.skip('Should introduce incorrect values to the modal and check the error', async () => {    // al prémer el checkbox de de termes i condicoons, , et porta a la seva pàgina en comptes de marcar-lo
        await Steps.goHome();
        await Newsletter.checkIncorrectValues();
    });

    it.skip('Should check if it shows an error message when you submit without accepting Terms&Conditions', async () => {
        await Steps.goHome();
        await Newsletter.checkTermsAndConditions();        
    });

    it.skip('should select terms and conditions button and submit the data, return to the home page \n\t\t\t\t\t and check if exists the newsletter section', async () => {
        await Steps.goHome();
        await Newsletter.checkTermsWithoutValues();      
        await Steps.goHome();
        await Newsletter.checkNewsletterFooter();        
    });

    it.skip('Should introduce correct values and submit them', async () => {
        await Steps.goHome();
        await Newsletter.checkCorrectValues();
    });
});