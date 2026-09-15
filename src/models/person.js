class Person{
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idtTypeId = idtTypeId;
        this.identificationNumber = identificationNumber;
        this.email = email;
    }
}

module.exports = Person;