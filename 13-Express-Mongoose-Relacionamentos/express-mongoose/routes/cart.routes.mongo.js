var express = require('express');
var router = express.Router();
var cartService = require('../services/cart.service.mongo');

router.get('/list', function (req, res, next) {
    cartService.list(req, res);
});

router.post('/register', function (req, res, next) {
    cartService.register(req, res);
});

module.exports = router;
