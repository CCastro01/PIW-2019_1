const UserModel = require('../models/user.model');

class UserService{

    //retorna um objeto que representa um User
    static register(req,res){
        UserModel.create(req.body).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    //retorna um vetor de users
    static list(req,res){
        UserModel.find()
        .populate('addresses')
        .then(
            (users)=>{
                res.status(201).json(users);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    //retorna um user atualizado
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

    //retorna um user
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

    //retorn um vetor de user
    static retrieveByLogin(req,res){
        UserModel.find({'login':req.params.login}).then(
            (users)=>{
                res.status(201).json(users);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

}

module.exports = UserService;