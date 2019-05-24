const UserModel = require("../models/user.model");

let users = [];
let id = 0;

class UserService{

    static register(data){
        let user = new UserModel(id++,data.firstName,data.lastName,data.login,
                                 data.email,data.zipcode,data.password);
        users.push(user);
        return user;
    }

    static list(){
        return users;
    }

}

module.exports = UserService;