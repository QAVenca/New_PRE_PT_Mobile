const Page = require('../../pageobjects/page');
const HomePage = require('../../pageobjects/home/home.page');
const Selector = require('../../pageobjects/searcher/selectors');
const Steps = require('../../pageobjects/steps');
const clearSearchValue = '';

class Searcher extends Page {

    async search(item) {
        await browser.pause(3000);
        await HomePage.openSearcher(item);
        await browser.pause(1500);
        await expect($(Selector.searchInput)).toHaveValue(item);
    }

    async verifySuggestedItems() {
        await ($(Selector.suggestedItems)).waitForEnabled({timeout: 3000});
        await expect($(Selector.suggestedItems)).toBeDisplayed();
    }

    async clear() {
        await browser.pause(1000);
        await $(Selector.searchInput).clearValue();
        //await HomePage.clearSearchTab();
        //await browser.pause(3000);
        await expect($(Selector.searchInput)).toHaveValue(clearSearchValue);
    }

    async goToResultPage(item) {
        await expect($(Selector.searchInput)).toHaveValue(item);
        await browser.keys("\uE007");
        //await $(Selector.searchIcon).click();
        await browser.pause(3000);
        await $(Selector.firstItemPageResult).scrollIntoView();
        await Steps.closeNewsletter();
        await expect($(Selector.firstItemPageResult)).toBeDisplayedInViewport();
    }

    async goToProduct() {
        await browser.pause(1000);
        await $(Selector.firstItemPageResult).click();
        await browser.pause(1000);
        await $(Selector.checkProductPage).scrollIntoView();
        await expect ($(Selector.checkProductPage)).toBeDisplayedInViewport();
    }

    async wrongSearch(item) {
        await HomePage.openSearcher(item);
        await browser.keys("\uE007");
        //await $(Selector.searchIcon).click();
        await browser.pause(3000);
        //await expect($(Selector.wrongSearchResult)).toHaveTextContaining(item.toUpperCase());
        await expect($(Selector.wrongSearchResult)).toHaveTextContaining(item);
    }
}

module.exports = new Searcher();