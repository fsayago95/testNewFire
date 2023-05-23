import Page from '../pageobjects/page.js';

class SearchBar extends Page {

    get searchBarInput() {
        return $('#searchBox')
    }
}
export default new SearchBar();
