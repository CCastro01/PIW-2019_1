var express = require('express');
var router = express.Router();
var productService = require('../services/product.service.mongo');

router.get('/list', function (req, res, next) {
    productService.list(req, res);
});

router.post('/register', function (req, res, next) {
    productService.register(req, res);
});

module.exports = router;
