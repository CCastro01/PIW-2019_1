const UserModel = require("../models/user.model");

let user = null;

class UserService{

    static setUser(data){
        console.log("set");
        user = new UserModel(data.firstName,data.lastName,data.email,data.zipCode,data.password);
        return user;
    }

    static getUser(){
        return user;
    }
    
}

module.exports = UserService;