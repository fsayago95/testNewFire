import BooksPage from "../pageobjects/books.page.js"
import BookStorePage from "../pageobjects/bookStore.page.js"
import { books } from "../data/data.js"
import { randomNumber } from "../utils/randomNumber.js"

describe('Books Landing Page', () => {
    it('Should match our books with books in landing page', async () => {
        await BooksPage.open()
        await BooksPage.pageBody.waitForDisplayed()    
        for (let i=0; i < await BooksPage.allBooksNames.length; i++) {
           expect(await BooksPage.allBooksNames[i].getText()).toBe(books[i])
           }
        })
    it('Should find a book and click it', async () => {
        await BooksPage.open()
        await BooksPage.pageBody.waitForDisplayed()    
        const randomBook = await randomNumber()
        console.log(randomBook)
        await BooksPage.SearchBar.searchBarInput.setValue(books[randomBook])
        await BooksPage.booksNamesBtn.click()
        await BookStorePage.bookTitle.waitForDisplayed()
        expect (await BookStorePage.bookTitle.getText()).toHaveText(books[randomBook])
    })
})

