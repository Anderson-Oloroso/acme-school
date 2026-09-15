class IdentificationType{
    constructor(id = null,code, name, description){
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }

    getIdtypes(){
        return`Código: ${this.code} - Nombre: ${this.name} - Descripción: ${this.description}`
    }
}

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

class Teacher extends Person{
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        super(id, firstName, lastName, idtTypeId, identificationNumber, email);
    }
}

class City{
    constructor(id = null,code, name){
        this.id = id;
        this.code = code;
        this.name = name;
    }

}

class Rate{
    constructor(id = null, inscriptionId, rate, comments){
        this.id = id;
        this.inscriptionId = inscriptionId;
        this.rate = rate;
        this.comments = comments;
    }
}

class Inscription{
    constructor(id = null, courseSchedule, studentId, registerDate, active){
        this.id = id;
        this.courseSchedule = courseSchedule;
        this.studentId = studentId;
        this.registerDate = registerDate;
        this.active = active;
    }
}

class CourseSchedule{
    constructor(id = null, courseId, teacherId, classroomId, startDate, endDate, active){
        this.id = id;
        this.courseId = courseId;
        this.teacherId = teacherId;
        this.classroomId = classroomId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
    }
}

class Course{
    constructor(id = null, code, description, intensity, weight, active){
        this.id = id;
        this.code = code;
        this.description = description;
        this.intensity = intensity;
        this.weight = weight;
        this.active = active;
    }
}

class Classroom{
    constructor(id = null, code, description, capacity, active){
        this.id = id;
        this.code = code;
        this.description = description;
        this.capacity = capacity;
        this.active = active;
    }
}

class Topic{
    constructor(id = null,courseId, code, title, description, active){
        this.id = id;
        this.courseId = courseId;
        this.code = code;
        this.title = title;
        this.description = description;
        this.active = active;
    }
}

class Connection{
    static open(){
        return  console.log(`[CONNECTION] -> Openning connection ...`);
    }
    
    static close(){
        return console.log(`[CONNECTION] -> Closing connection ...`);
    }
}

Connection.close();

class IdentificationTypeMethods{
    create(idtTypes){
        console.log('[IDENTIFICATION_TYPE] -> Guardando registro de Tipo de identificación ...');
    }

    findAll(){
        console.log('[IDENTIFICATION_TYPE] -> Consultando todos los registros de Tipo de identificación ...');
    }

    findOne(id){
        console.log(`[IDENTIFICATION_TYPE] -> Consultando registro de Tipo de identificación con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[IDENTIFICATION_TYPE] -> Actualizando registro de Tipo de identificación con id: ${id} ...`);
    }

    delete(id){
        console.log(`[IDENTIFICATION_TYPE] -> Eliminando registro de Tipo de identificación con id: ${id} ...`);
    }
}
 

class StudentMethods{
    create(student){
        console.log('[STUDENT] -> Guardando registro de Estudiante...');
    }

    findAll(){
        console.log('[STUDENT] -> Consultando todos los registros de Estudiante ...');
    }

    findOne(id){
        console.log(`[STUDENT] -> Consultando registro de Estudiante con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[STUDENT] -> Actualizando registro de Estudiante con id: ${id} ...`);
    }

    delete(id){
        console.log(`[STUDENT] -> Eliminando registro de Estudiante con id: ${id} ...`);
    }
}

class TeacherMethods{
    create(teacher){
        console.log('[TEACHER] -> Guardando registro de Docente ...');
    }

    findAll(){
        console.log('[TEACHER] -> Consultando todos los registros de Docente ...');
    }

    findOne(id){
        console.log(`[TEACHER] -> Consultando registro de Docente con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[TEACHER] -> Actualizando el registro de Docente con id: ${id} ...`);
    }

    delete(id){
        console.log(`[TEACHER] -> Eliminando registro de Docente con id: ${id} ...`);
    }
}

class CityMethods{
    create(city){
        console.log('[CITY] -> Guardando registro de Ciudad ...');
    }

    findAll(){
        console.log(`[CITY] -> Consultando todos los registros de Ciudad ...`);
    }

    findOne(id){
        console.log(`[CITY] -> Consultando registro de Ciudad con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[CITY] -> Actualizando registro de Ciudad con id: ${id} ...`);
    }

    delete(id){
        console.log(`[CITY] -> Eliminando registro de Ciudad con id: ${id} ...`);
    }
}

class RateMethods{
    create(rate){
        console.log('[RATE] -> Guardando registro de Calificación ...');
    }

    findAll(){
        console.log('[RATE] -> Consultando todos los registros de Calificación ...');
    }

    findOne(id){
        console.log(`[RATE] -> Consultando registro de Calificación con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[RATE] -> Actualizando registro de Calificación con id: ${id} ...`);
    }

    delete(id){
        console.log(`[RATE] -> Eliminando registro de Calificación con id: ${id} ...`);
    }
}

class InscriptionMethods{
    create(inscription){
        console.log('[INSCRIPTION] -> Guardando registro de Inscripción ...');
    }

    findAll(){
        console.log('[INSCRIPTION] -> Consultando todos los registros de Inscripción ...');
    }

    findOne(id){
        console.log(`[INSCRIPTION] -> Consultando registro de Inscripción con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[INSCRIPTION] -> Actualizando registro de Inscripción con id: ${id} ...`);
    }

    delete(id){
        console.log(`[INSCRIPTION] -> Eliminando registro de Inscripción con id: ${id} ...`);
    }
}

class CourseScheduleMethods{
    create(courseSchedule){
        console.log('[COURSE_SCHEDULE] -> Guardando registro de Horario de Curso ...');
    }

    findAll(){
        console.log('[COURSE_SCHEDULE] -> Consultando todos los registros de Horario de Curso ...');
    }

    findOne(id){
        console.log(`[COURSE_SCHEDULE] -> Consultando registro de Horario de Curso con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[COURSE_SCHEDULE] -> Actualizando registro de Horario de Curso con id: ${id} ...`);
    }

    delete(id){
        console.log(`[COURSE_SCHEDULE] -> Eliminando registro de Horario de Curso con id: ${id} ...`);
    }
}

class CourseMethods{
    create(course){
        console.log('[COURSE] -> Guardando registro de Curso ...');
    }

    findAll(){
        console.log('[COURSE] -> Consultando todos los registros de Curso ...');
    }

    findOne(id){
        console.log(`[COURSE] -> Consultando registro de Curso con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[COURSE] -> Actualizando registro de Curso con id: ${id} ...`);   
    }

    delete(id){
        console.log(`[COURSE] -> Eliminando registro de Curso con id: ${id} ...`);
    }
}

class ClassroomMethods{
    create(classrom){
        console.log('[CLASSROOM] -> Guardando registro de Classroom ...');
    }

    findAll(){
        console.log('[CLASSROOM] -> Consultando todos los registros de Classroom ...');
    }

    findOne(id){
        console.log(`[CLASSROOM] -> Consultando registro de Classrooms con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[CLASSROOM] -> Actualizando registro de Classroom con id: ${id} ...`);
    }

    delete(id){
        console.log(`[CLASSROOM] -> Eliminando registro de Classroom con id: ${id} ...`)
    }
}

class TopicMethods{
    create(topic){
        console.log('[TOPIC] -> Guardando registro de Topic ...');
    }

    findAll(){
        console.log('[TOPIC] -> Consultando todos los registros de Topic ...');
    }

    findOne(id){
        console.log(`[TOPIC] -> Consultando el registro de Topic con id: ${id} ...`);
    }

    update(id, newRecord){
        console.log(`[TOPIC] -> Actualizando registro de Topic con id: ${id} ...`);
    }

    delete(id){
        console.log(`[TOPIC] -> Eliminando registro de Topic con id: ${id} ...`);
    }
} 