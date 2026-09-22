import * as readline from 'readline/promises';
import PersonFactory from './factories/personFactory.js';
import StudentRepository from './repositories/studentRepository.js';
import TeacherRepository from './repositories/teacherRepository.js';
import { mainMenu } from './utils/menu.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mainMenu(rl);
