class Inscription{
    constructor(id = null, courseSchedule, studentId, registerDate, active){
        this.id = id;
        this.courseSchedule = courseSchedule;
        this.studentId = studentId;
        this.registerDate = registerDate;
        this.active = active;
    }
}

export default Inscription;