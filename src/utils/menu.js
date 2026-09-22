export async function mainMenu(rl) {
    let opc = '1';

    while (opc !== '0') {
    console.clear();
    
    console.log('===============================================');
    console.log('              GESTIÓN DE ACME SCHOOL');
    console.log('===============================================');
    console.log('1. Gestión de estudiantes');
    console.log('2. Gestión de profesores');
    console.log('3. Gestión de cursos');
    console.log('4. Gestión de temas');
    console.log('5. Gestión de aulas');
    console.log('6. Gestión de ciudades');
    console.log('7. Gestión de tipos de identificación');
    console.log('8. Gestión de horarios');
    console.log('9. Gestión de inscripciones');
    console.log('0. Salir');
    opc = await rl.question('\n-->> Elija una opción: ');
    switch (opc) {
        case '1':
            await entityMenu(rl, 'ESTUDIANTES');
            break;
        case '2':
            await entityMenu(rl, 'PROFESORES');
            break;
        case '3':
            await entityMenu(rl, 'CURSOS');
            break;
        case '4':
            await entityMenu(rl, 'TEMAS');
            break;
        case '5':
            await entityMenu(rl, 'AULAS');
            break;
        case '6':
            await entityMenu(rl, 'CIUDADES');
            break;
        case '7':
            await entityMenu(rl, 'TIPOS DE IDENTIFICACIÓN');
            break;
        case '8':
            await entityMenu(rl, 'HORARIOS');
            break;
        case '9':
            await entityMenu(rl, 'INSCRIPCIONES');
            break;
        case '0':
            console.log('\n------ SALIENDO... ------');
            break;
        default:
            console.log('\n------ Opción inválida ------');
            await rl.question('\nPresione ENTER para continuar...');
        }
    }
}

async function entityMenu(rl, entityName) {
    let opc = '1';

    while (opc !== '6') {
        console.clear();

        console.log('===============================================');
        console.log(`              GESTIÓN DE ${entityName}`);
        console.log('===============================================');
        console.log('1. Crear registro');
        console.log('2. Listar registros');
        console.log('3. Buscar registro');
        console.log('4. Actualizar registro');
        console.log('5. Eliminar registro');
        console.log('6. Regresar al menú principal');

        opc = await rl.question('\n-->> Elija una opción: ');

        switch (opc) {
            case '1':
                console.log(`\n------ Creando registro en ${entityName} ------`);
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '2':
                console.log(`\n------ Listando registros de ${entityName} ------`);
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '3':
                console.log(`\n------ Buscando registro en ${entityName} ------`);
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '4':
                console.log(`\n------ Actualizando registro en ${entityName} ------`);
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '5':
                console.log(`\n------ Eliminando registro de ${entityName} ------`);
                await rl.question('\nPresione ENTER para continuar...');
                break;

            case '6':
                break;

            default:
                console.log('\n------ Opción inválida ------');
                await rl.question('\nPresione ENTER para continuar...');
        }
    }
}
