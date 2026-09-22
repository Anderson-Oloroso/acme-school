import { connection } from '../utils/dbConnection.js'

class BaseRepository{
    constructor(entity){
        this.entityName = entity;
        this.pool = connection;
    }

    async list(){
        console.log(`[${this.entityName.toUpperCase()}] -> Listando todos los registros ...`);
        const [ data ] = await this.pool.query(`SELECT * FROM ${this.entityName}`);
        return data;
    }

    async findOne(id){
        console.log(`[${this.entityName.toUpperCase()}] -> Buscando el registro con id: ${id} ...`);
        const [ data ] = await this.pool.query(`SELECT * FROM ${this.entityName} WHERE id = ${id}`);
        return data[0] || null;
    }

    async delete(id){
        console.log(`[${this.entityName.toUpperCase()}] -> Eliminando el registro con id: ${id} ...`);
        const [ result ] = await this.pool.execute(`DELETE FROM ${this.entityName} WHERE id = ?`, [id]);
        return result.insertId;
    }
}

export default BaseRepository;