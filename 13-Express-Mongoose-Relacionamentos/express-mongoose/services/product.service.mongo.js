const ProductModel = require('../models/product.model');

class ProductService{

    //retorna um objeto que representa um Product
    static register(req,res){
        ProductModel.create(req.body).then(
            (prd)=>{
                res.status(201).json(prd);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    //retorna um vetor de Products
    static list(req,res){
        ProductModel.find().then(
            (products)=>{
                res.status(201).json(products);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }
}

module.exports = ProductService;