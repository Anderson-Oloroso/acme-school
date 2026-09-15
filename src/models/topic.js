class Topic{
    constructor(id = null, courseId, code, title, description, active){
        this.id = id;
        this.courseId = courseId;
        this.code = code;
        this.title = title;
        this.description = description;
        this.active = active;
    }
}

module.exports = Topic;