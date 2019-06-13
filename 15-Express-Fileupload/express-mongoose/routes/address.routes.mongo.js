var express = require('express');
var router = express.Router();
var addressService = require('../services/address.service.mongo');

router.get('/list', function (req, res, next) {
    addressService.list(req, res);
});

router.post('/register', function (req, res, next) {
    addressService.register(req, res);
});

module.exports = router;