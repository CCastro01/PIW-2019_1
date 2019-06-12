var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema(
    {
        name: {type:String, required:true, max:100},
        price: {type:Number, required:true},
        qty: {type:Number, required:true},
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;