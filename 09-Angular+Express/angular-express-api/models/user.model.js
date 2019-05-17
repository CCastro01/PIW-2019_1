class UserModel{

    constructor(firstName, lastName, login, email, zipCode, password){
       
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.zipCode = zipCode;
        this.password = password;
    }
}

module.exports = UserModel;