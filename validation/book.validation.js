const Joi = require('joi');

exports.validateBook = (book) => {
    const schema =Joi.object({
        name: Joi.string().required().min(5).max(30),
        authorName: Joi.string().required().min(8).max(20),
        publishDate: Joi.date().required()
    });
    return schema.validate(book);
}