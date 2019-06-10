const UserModel = require('../models/user.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class UserService{

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

    static list(req,res){
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    static update(req,res){
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req,res){
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieveByLogin(req,res){
        UserModel.find({'login':req.params.login}).then(
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
                    //LOGIN ENCONTRADO E CHAVES BATEM
                    let token = jwt.sign({user: user}, 'secret');
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

module.exports = UserService