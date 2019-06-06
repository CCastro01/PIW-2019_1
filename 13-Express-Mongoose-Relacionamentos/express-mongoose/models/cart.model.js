var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var CartSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'USER',
            required: true
        },
        product:{
            type: mongoose.Schema.ObjectId,
            ref: 'PRODUCT',
            required: true
        }
    }
);

//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias (documentos)
var CartModel = mongoose.model('CART', CartSchema);

//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = CartModel;