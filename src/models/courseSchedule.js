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

export default CourseSchedule;