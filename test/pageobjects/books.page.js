import Page from './page.js'
import SearchBar from '../components/searchBar.js';

class BookPage extends Page {

    get SearchBar() { 
        return SearchBar
    }

    get pageBody(){
        return $('.container.playgound-body')
    }

    get allBooksNames(){
        return $$('.action-buttons')
    }

    get booksNamesBtn(){
        return $('.action-buttons')
    }

    open () {
        return super.open('books');
    }

    
}

export default new BookPage();
