var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var ProductSchema = mongoose.Schema(
    {
        name: {type:String, required:true, max:20},
        price: {type:Number, required:true},
        qty: {type:Number, required:true}
    }
);

//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias (documentos)
var ProductModel = mongoose.model('PRODUCT', ProductSchema);

//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = ProductModel;

