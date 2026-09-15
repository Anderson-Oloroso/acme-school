const BaseRepository = require('./baseRepository');

class StudentRepository extends BaseRepository {
    constructor(){
        super('Student');
    }
}

module.exports = StudentRepository;