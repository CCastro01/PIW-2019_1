var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  return res.json(userService.list());
});

router.post('/register', function(req, res, next){
  const user = userService.register(req.body);
  return res.json(user);
});

router.put('/update/:id', function(req, res, next){
  const user = userService.update(req.params.id, req.body);
  return res.json(user);
});

router.delete('/delete/:id', function(req, res, next){
  const ok = userService.delete(req.params.id);
  if(ok) return res.json({"sucess":true});
  else return res.json({"sucess":false});
});

router.get('/retrieve/:id', function(req, res, next){
  const out = userService.retrieve(req.params.id);
  return res.json(out);
});

router.get('/retrieve/login/:login', function(req, res, next){
  const out = userService.retrieveByLogin(req.params.login);
  return res.json(out);
});

module.exports = router;
