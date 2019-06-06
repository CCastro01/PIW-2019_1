var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//mongo conn
require('./db/mongo.connection');

//router
var users = require('./routes/user.routes.mongo');
var products = require('./routes/product.routes.mongo');
var carts = require('./routes/cart.routes.mongo');

//main
var app = express();

//configuração
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//endpoint para users
app.use('/users', users);
app.use('/products', products);
app.use('/carts', carts);

module.exports = app;
