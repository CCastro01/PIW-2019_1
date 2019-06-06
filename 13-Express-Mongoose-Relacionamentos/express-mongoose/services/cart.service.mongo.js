const CartModel = require('../models/cart.model');

class CartService{

    //retorna um objeto que representa um Cart
    static register(req,res){
        CartModel.create(req.body).then(
            (cart)=>{
                res.status(201).json(cart);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    //retorna um vetor de Products
    static list(req,res){
        CartModel.find()
        .populate('user') //nome da propriedade em cart
        .populate('product') //nome da propriedade em cart
        .then(
            (carts)=>{
                res.status(201).json(carts);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }
}

module.exports = CartService