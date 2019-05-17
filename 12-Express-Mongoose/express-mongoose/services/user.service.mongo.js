const UserModel = require('../models/user.model');

class UserService{

    //retorna um objeto que representa um User
    static register(req,res){
        UserModel.create(req.body).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    //retorna um vetor de users
    static list(req,res){
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        );    
    }

    //retorna um user atualizado
    static update(req,res){
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    static delete(req,res){
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    //retorna um user
    static retrieve(req,res){
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    //retorn um vetor de user
    static retrieveByLogin(req,res){
        UserModel.find({'login':req.params.login}).then(
            (users)=>{
                res.status(201).json(users);
            }
        );
    }

}

module.exports = UserService;