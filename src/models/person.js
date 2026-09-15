class Person{
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idtTypeId = idtTypeId;
        this.identificationNumber = identificationNumber;
        this.email = email;
    }

    getInfo() {
    return `ID: ${this.id} | Nombre: ${this.firstName} ${this.lastName} | Tipo de Identificación: ${this.idtTypeId} | Número de Identificación: ${this.identificationNumber} | Email: ${this.email}`;
    }
}

module.exports = Person;