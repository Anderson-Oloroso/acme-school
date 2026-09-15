const BaseRepository = require('./baseRepository');

class TeacherRepository extends BaseRepository {
    constructor(){
        super('Teacher');
    }
}

module.exports = TeacherRepository;