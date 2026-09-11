class IdentificationType{
    #id;
    #code;
    #name;
    #description;
    constructor(id = null,code, name, description){
        this.#id = id;
        this.#code = code;
        this.#name = name;
        this.#description = description;
    }

    getIdtypes(){
        return`Código: ${this.#code} - Nombre: ${this.#name} - Descripción: ${this.#description}`
    }
}

class Person{
    #id;
    #firstName;
    #lastName;
    #idtTypeId;
    #identificationNumber;
    #email;
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#idtTypeId = idtTypeId;
        this.#identificationNumber = identificationNumber;
        this.#email = email;
    }
}

class Student extends Person{
    #code;
    #gender;
    #birthday;
    #address;
    #cityId;
    constructor(id = null, code, firstName, lastName, idtTypeId, identificationNumber, gender, birthday, email, address, cityId){
        super(id, firstName, lastName, idtTypeId, identificationNumber, email);
        this.#code = code;
        this.#gender = gender;
        this.#birthday = birthday;
        this.#address = address;
        this.#cityId = cityId;
    }

}

class Teacher extends Person{
    constructor(id = null, firstName, lastName, idtTypeId, identificationNumber, email){
        super(id, firstName, lastName, idtTypeId, identificationNumber, email);
    }
}

class City{
    #id;
    #code;
    #name;
    constructor(id = null,code, name){
        this.#id = id;
        this.#code = code;
        this.#name = name;
    }

}

class Rate{
    #id;
    #inscriptionId;
    #rate;
    #comments;
    constructor(id = null, inscriptionId, rate, comments){
        this.#id = id;
        this.#inscriptionId = inscriptionId;
        this.#rate = rate;
        this.#comments = comments;
    }
}

class Inscription{
    #id;
    #courseSchedule;
    #studentId;
    #registerDate;
    #active;
    constructor(id = null, courseSchedule, studentId, registerDate, active){
        this.#id = id;
        this.#courseSchedule = courseSchedule;
        this.#studentId = studentId;
        this.#registerDate = registerDate;
        this.#active = active;
    }
}

class CourseSchedule{
    #id;
    #courseId;
    #teacherId;
    #classroomId;
    #startDate;
    #endDate;
    #active;
    constructor(id = null, courseId, teacherId, classroomId, startDate, endDate, active){
        this.#id = id;
        this.#courseId = courseId;
        this.#teacherId = teacherId;
        this.#classroomId = classroomId;
        this.#startDate = startDate;
        this.#endDate = endDate;
        this.#active = active;
    }
}

class Course{
    #id;
    #code;
    #description;
    #intensity;
    #weight;
    #active;
    constructor(id = null, code, description, intensity, weight, active){
        this.#id = id;
        this.#code = code;
        this.#description = description;
        this.#intensity = intensity;
        this.#weight = weight;
        this.#active = active;
    }
}

class Classroom{
    #id;
    #code;
    #description;
    #capacity;
    #active;
    constructor(id = null, code, description, capacity, active){
        this.#id = id;
        this.#code = code;
        this.#description = description;
        this.#capacity = capacity;
        this.#active = active;
    }
}

class Topic{
    #id;
    #courseId;
    #code;
    #title;
    #description;
    #active;
    constructor(id = null,courseId, code, title, description, active){
        this.#id = id;
        this.#courseId = courseId;
        this.#code = code;
        this.#title = title;
        this.#description = description;
        this.#active = active;
    }
}