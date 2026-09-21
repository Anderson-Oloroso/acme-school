import * as readline from 'readline/promises';
import PersonFactory from './factories/personFactory.js';
import StudentRepository from './repositories/studentRepository.js';
import TeacherRepository from './repositories/teacherRepository.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    let opc = '1';

    while (opc !== '6'){
        console.clear();
        console.log('=============== GESTION DE ACME SCHOOL ===============');
        console.log('1. Crear registro');
        console.log('2. Listar registros de una entidad');
        console.log('3. Buscar un registro');
        console.log('4. Actualizar un registro');
        console.log('5. Eliminar un registro');
        console.log('6. Salir');

        opc = await rl.question('-->> ELija una opción: ');

        switch(opc){
            case '1':
                console.log('------ Creando un registro ------');
                await rl.question('\nPresione ENTER para continuar...');
                break;
            
            case '2':
                console.log('------ Listando registros de una entidad ------');
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '3':
                console.log('------ Buscar un registro ------');
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '4':
                console.log('------ Actualizando un registro ------');
                await rl.question('\nPresione ENTER para continuar...')
                break;

            case '5':
                console.log('------ Eliminando un registro ------');
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '6':
                console.log('------ SALIENDO ... ------');
                break;

            default:
                console.log('------ Opción inválida ------');
                await rl.question('\nPresione ENTER para continuar...');
        }
    }
}

await main();
rl.close();
