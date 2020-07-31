const express = require('express');
const router = express();

const bookRoute = require('./book.routes');

router.use('/api/books', bookRoute);

module.exports = router