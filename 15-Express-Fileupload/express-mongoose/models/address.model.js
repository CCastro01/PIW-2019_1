var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var AdressSchema = mongoose.Schema(
    {
        street: {type:String, required:true, max:20},
        number: {type:Number, required:true},
    }
);

//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias (documentos)
var AdressModel = mongoose.model('ADDRESS', AdressSchema);

//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = AdressModel;

