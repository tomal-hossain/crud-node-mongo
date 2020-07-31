const bookService = require('../services/book.services');
const bookValidation = require('../validation/book.validation');

module.exports = {
    getBooks: async(req, res) => {
        const books = await bookService.getBooks();
        if(books) {
            return res.status(200).send(books);
        }
        return res.status(404).send('No books found!');
    },

    getBook: async(req, res) => {
        const book = await bookService.getBook(req.params.id);
        if(book) {
            return res.status(200).send(book);
        }
        return res.status(404).send('Book not found!');
    },

    addBook: async(req, res) => {
        const model = Object.freeze(req.body);
        const {error} = bookValidation.validateBook(model);
        if(error) {
           return res.status(400).send(error.details[0].message)
        } else {
            const book = await bookService.addBook(model);
            if(book) {
                return res.status(200).send(book);
            }
        }
        return res.status(500).send('Unable to add book, please try again!');
    },

    updateBook: async(req, res) => {
        const model = Object.freeze(req.body);
        let book = await bookService.getBook(req.params.id);
        if(!book) {
            return res.status(404).send('Book not found!')
        }
        const {error} = bookValidation.validateBook(model);
        if(error) {
           return res.status(400).send(error.details[0].message)
        }
        book = await bookService.updateBook(book, model);
        if(book) {
            return res.status(200).send(book);
        }
        return res.status(500).send('Unable to update book, please try again!');
    },

    deleteBook: async(req, res) => {
        const book = await bookService.getBook(req.params.id);
        if(!book) {
            return res.status(404).send('Book not found!')
        }
        const status = await bookService.deleteBook(book);
        if(status) {
            return res.status(200).send('Successfully deleted!')
        }
        return res.status(500).send('Unable to deleted, please try again!')
    }
}
