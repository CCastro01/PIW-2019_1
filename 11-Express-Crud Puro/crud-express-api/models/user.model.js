class UserModel{

    constructor(id, firstName, lastName, login, email, zipcode, password){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.email = email;
        this.zipcode = zipcode;
        this.password = password;
    }
}

module.exports = UserModel;