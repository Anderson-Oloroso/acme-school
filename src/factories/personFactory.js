const Student = require('../models/student.js');
const Teacher = require('../models/teacher.js');

class PersonFactory{
    static createPerson(type, data){
        switch(type.toLowerCase()){
            case 'student':
                return new Student(
                    data.id, data.code, data.firstName, data.lastName,
                    data.idtTypeId, data.identificationNumber, data.gender,
                    data.birthday, data.email, data.address, data.cityId
                );
            
            case 'teacher':
                return new Teacher(
                    data.id, data.firstName, data.lastName,
                    data.idtTypeId, data.identificationNumber, data.email
                );
            
            default:
                throw new Error(`Tipo de persona desconocido: ${type}`);
        }
    }
}

module.exports = PersonFactory;