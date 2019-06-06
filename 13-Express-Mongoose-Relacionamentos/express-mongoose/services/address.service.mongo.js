const AddressModel = require('../models/address.model');

class AddressService{

    //retorna um objeto que representa um Address
    static register(req,res){
        AddressModel.create(req.body).then(
            (add)=>{
                res.status(201).json(add);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    //retorna um vetor de Addresses
    static list(req,res){
        AddressModel.find().then(
            (addresses)=>{
                res.status(201).json(addresses);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }
}

module.exports = AddressService;