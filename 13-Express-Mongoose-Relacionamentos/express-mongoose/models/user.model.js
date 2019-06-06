var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var UserSchema = mongoose.Schema(
    {
        firstName: {type:String, required:true, max:100},
        login: {type:String, required:true, max:100},
        password: {type:String, required:true, max:20},
        addresses: [{type:mongoose.Schema.Types.ObjectId,ref:'ADDRESS'}] 
    }
);

//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias (documentos)
var UserModel = mongoose.model('USER', UserSchema);

//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = UserModel;

