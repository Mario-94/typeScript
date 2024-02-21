let permiso: Boolean = true
class Persona {
    public nombre: String
    constructor(_nombre: String) {
        this.nombre = _nombre
    }

    get getNombre(): String {
        return this.nombre
    }

    public set setNombre(nombre: String) {
        if (permiso) {
            this.nombre = nombre
        } else {
            console.log(`No tienes los permisos necesarios`);

        }
    }
}

const obj = new Persona('Mario')
console.log(obj.getNombre)
obj.setNombre = 'Alberto'
console.log(obj.getNombre)


