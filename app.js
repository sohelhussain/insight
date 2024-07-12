const express = require('express');
const app = express();
const PORT = 3000;
const indexRoute = require('./routes/index-router');
require('dotenv').config();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));