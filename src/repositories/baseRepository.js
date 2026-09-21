class BaseRepository{
    constructor(entity){
        this.entityName = entity;
        this.items = [];
    }

    create(item){
        this.items.push(item);
        console.log(`[${this.entityName.toUpperCase()}] -> Registro guardado exitosamente ...`);
        return item;
    }

    list(){
        console.log(`[${this.entityName.toUpperCase()}] -> Listando todos los registros ...`);
        return this.items;
    }

    findOne(id){
        console.log(`[${this.entityName.toUpperCase()}] -> Buscando el registro con id: ${id} ...`);
        return this.items.find(itm => itm.id === id) || null;
    }

    update(id, newRecord){
        console.log(`[${this.entityName.toUpperCase()}] -> Actualizando el registro con id: ${id} ...`);
        const index = this.items.findIndex(itm => itm.id === id);

        if(index !== -1){
            this.items[index] = { ...this.items[index], ...newRecord, id};
            return this.items[index];
        }else{
            return null
        }
    }

    delete(id){
        console.log(`[${this.entityName.toUpperCase()}] -> Eliminando el registro con id: ${id} ...`);
        const index = this.items.findIndex(itm => itm.id === id);

        if(index !== -1){
            return this.items.splice(index, 1)[0];
        }else{
            return null
        }
    }
}

export default BaseRepository;