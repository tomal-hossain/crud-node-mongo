const Book = require('../models/book.model');

module.exports = {
    getBooks: async() => {
        try {
            return await Book.find();
        } catch {
            return false;
        }
    },

    getBook: async(id) => {
        try {
            return await Book.findById(id);
        } catch {
            return false;
        }
    },

    addBook: async(bookModel) => {
        try {
            const book = createBook(bookModel)
            return await book.save();
        } catch {
            return false;
        }
    },

    updateBook: async(book, bookModel) => {
        try {
            book.name = bookModel.name,
            book.authorName = bookModel.authorName,
            book.publishDate = bookModel.publishDate
            await Book.updateOne(book);
            return book;
        } catch {
            return false;
        }
    },

    deleteBook: async(book) => {
        try{
            await Book.deleteOne(book);
            return true;
        } catch {
            return false;
        }
    }
}

function createBook(model) {
    let book = new Book();
    book.name = model.name;
    book.authorName = model.authorName;
    book.publishDate = model.publishDate;
    return book;
}