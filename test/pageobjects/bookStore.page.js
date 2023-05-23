import Page from './page.js'


class BookStorePage extends Page {
    
    get bookTitle() {
        return $('#title-wrapper')
    }

    open () {
        return super.open('books');
    }
    
}

export default new BookStorePage();
