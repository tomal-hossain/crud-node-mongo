const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index')
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(process.env.PORT);
