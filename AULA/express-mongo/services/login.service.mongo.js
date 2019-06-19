const UserModel = require('../models/user.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class LoginService{

    static register(req,res){
        let rcvUser =  req.body;
        rcvUser.password = bcrypt.hashSync(rcvUser.password, 10)
        UserModel.create(rcvUser).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static login(req,res){
        let loginForm = req.body;
        UserModel.findOne({'login':loginForm.login})
        .then(
            (user)=>{
                if(bcrypt.compareSync(loginForm.password,user.password)){
                    //LOGIN ENCONTRADO E CHAVES BATEM (CRIAR TOKEN)
                    let token = jwt.sign({user: user}, 'secret', {expiresIn:600});//10 minutos
                    res.status(201).json({
                        'firstName':user.firstName,
                        'lastName': user.lastName,
                        'login':user.login,
                        'token':token
                    });
                }else{
                    //LOGIN ENCONTRADO MAS CHAVES NÃO BATEM
                    res.status(201).json(null);
                }
            }
        )
        .then(undefined,
            (err)=>{
                //ERRO EM CASO DE LOGIN NÃO ENCONTRADO
                res.status(201).json(null);
            })
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        );

    }

}

module.exports = LoginService