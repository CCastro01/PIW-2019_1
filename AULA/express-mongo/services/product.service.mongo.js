const ProductModel = require('../models/product.model');

class ProductService{

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

    static list(req,res){
        ProductModel.find().then(
            (prds)=>{
                res.status(201).json(prds);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    static update(req,res){
        ProductModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (prd)=>{
                res.status(201).json(prd);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        ProductModel.findByIdAndRemove(req.params.id).then(
            (prd)=>{
                res.status(201).json(prd);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req,res){
        ProductModel.findById(req.params.id).then(
            (prd)=>{
                res.status(201).json(prd);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

}

module.exports = ProductService