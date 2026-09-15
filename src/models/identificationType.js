class IdentificationType{
    constructor(id = null,code, name, description){
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }

    getIdtypes(){
        return`Código: ${this.code} - Nombre: ${this.name} - Descripción: ${this.description}`
    }
}

module.exports = IdentificationType ;