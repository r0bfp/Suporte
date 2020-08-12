const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./src/app/public'));

app.set('view engine', 'ejs');
app.set('views', './src/app/views/');

const sessionAuthentification = require('./session-authentification');
sessionAuthentification(app);

app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;
