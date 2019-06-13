var mongoose = require('mongoose');




var UserSchema = mongoose.Schema(
    {
        firstName: {type:String, required:true, max:100},
        lastName: {type:String, required:true, max:100},
        login: {type:String, required:true, max:100},
        email: {type:String, required:true, max:100},
        zipcode: {type:String, required:true, max:10},
        password: {type:String, required:true, max:20}
    }
);

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;