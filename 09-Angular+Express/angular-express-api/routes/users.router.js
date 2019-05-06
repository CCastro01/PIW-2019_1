var express = require('express');
var router = express.Router();
var UserService = require('../services/user.service');

router.post('/register', async (req,res,next) =>{
  const user = await UserService.setUser(req.body);
  return res.status(201).json(user);

});

router.get('/show', async (req, res, next) =>{

  const user = await UserService.getUser();
  return res.json(user);

});



module.exports = router;
