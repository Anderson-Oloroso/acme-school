const Person = require('./person.js');

class Student extends Person{
    constructor(id = null, code, firstName, lastName, idtTypeId, identificationNumber, gender, birthday, email, address, cityId){
        super(id, firstName, lastName, idtTypeId, identificationNumber, email);
        this.code = code;
        this.gender = gender;
        this.birthday = birthday;
        this.address = address;
        this.cityId = cityId;
    }

}

module.exports = { Student };