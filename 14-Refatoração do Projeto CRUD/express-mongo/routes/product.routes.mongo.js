var productService = require('../services/product.service.mongo');
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    productService.list(req, res);
});

router.post('/register', function (req, res, next) {
    productService.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    productService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    productService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    productService.retrieve(req, res);
});

module.exports = router;