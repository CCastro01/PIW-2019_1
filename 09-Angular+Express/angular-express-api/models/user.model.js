class UserModel{

    constructor(firstName, lastName, email, zipCode, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.zipCode = zipCode;
        this.password = password;
    }
}

module.exports = UserModel;