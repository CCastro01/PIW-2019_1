var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const auth = require('./services/auth.service');


require('./db/mongo.connection');

var login = require('./routes/login.routes.mongo');
var users = require('./routes/user.routes.mongo');
var products = require('./routes/product.routes.mongo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/login', login);

app.use('/user',
    (req, res, next) => {
        auth.check(req.headers.authorization,res,next);
    },
    users);
app.use('/product',
    (req, res, next) => {
        auth.check(req.headers.authorization,res,next);
    },
    products);

module.exports = app;
