import Person from './person.js';

class Teacher extends Person{
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        super(id, firstName, lastName, idtTypeId, identificationNumber, email);
    }

    getInfo(){
        return `${super.getInfo()} | Rol: Docente`;
    }
}

export default Teacher;
