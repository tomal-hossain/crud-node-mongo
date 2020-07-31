const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        require: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);