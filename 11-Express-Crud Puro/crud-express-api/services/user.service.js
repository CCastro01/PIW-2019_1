const UserModel = require("../models/user.model");

let users = [];
let id = 0;

class UserService{

    static register(data){
        let user = new UserModel(id++,
                             data.firstName,
                             data.lastName,
                             data.login,
                             data.email,
                             data.zipcode,
                             data.password);
        users.push(user);
        return user;
    }

    static list(){
        return users;
    }

    static update(id,data){
        for(let u of users){
            if(u.id==id){
                u.firstName = data.firstName;
                u.lastName = data.lastName;
                u.login = data.login;
                u.zipcode = data.zipcode;
                u.password = data.password;
                u.email = data.email;
                return u;
            }
        }
        return null;
    }

    static delete(id){
        
        for( let i = 0; i < users.length; i++){ 
            if(users[i].id == id){
                users.splice(i,1);
                return true;
            }
        }
        return false;
    }

}

module.exports = UserService;