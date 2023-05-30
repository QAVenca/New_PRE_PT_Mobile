const Storefront = require('../../pageobjects/storefront/storefront.page');
const Selectors = require('../../pageobjects/storefront/selectors')

describe('Storefront Activity', () => {
    it('Storefront shows an appropriate title', async () => {
        await Storefront.storefrontPage();
        await expect($(Selectors.title)).toHaveTextContaining('os nossos best');
    });

    it('Buttons \'Anterior\' and \'Siguiente\' should go to before/next storefront page', async () => {
        await Storefront.storefrontPage();
        await Storefront.scrollToNextPage();
        await Storefront.buttons();
        await expect($(Selectors.next)).toBeClickable();
    });

    it('Links on header storefront should go to a correct page', async () =>{
        await Storefront.storefrontPage();
        await $(Selectors.dressLink).click();
        await expect($(Selectors.dressStorefront)).toHaveTextContaining('vestidos');
    });
});