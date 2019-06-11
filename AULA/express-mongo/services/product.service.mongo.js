const ProductModel = require('../models/product.model');
const auth = require('./auth.service');


class ProductService{

    static register(req,res){
        if(!auth.check(req.headers.authorization,res)) return;
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
        if(!auth.check(req.headers.authorization,res)) return;
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
        if(!auth.check(req.headers.authorization,res)) return;
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
        if(!auth.check(req.headers.authorization,res)) return;
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
        if(!auth.check(req.headers.authorization,res)) return;
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