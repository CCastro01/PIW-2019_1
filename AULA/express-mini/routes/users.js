var express = require('express');
var router = express.Router();
var userService = require("../services/user.service");

router.get('/list', function(req, res) {
  res.json(userService.list());
});

router.post('/register', function(req, res) {
  const user = userService.register(req.body);
  res.json(user);
});

module.exports = router;
