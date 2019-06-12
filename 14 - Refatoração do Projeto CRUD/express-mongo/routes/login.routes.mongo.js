var loginService = require('../services/login.service.mongo');
var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    loginService.login(req, res);
});

router.post('/register', function (req, res, next) {
    loginService.register(req, res);
});



module.exports = router;