class Padre {
    apellido: String
    constructor(_apellido: String,) {
        this.apellido = _apellido

    }
    // metodo
    mostrarApellidoP(): void {
        console.log(this.apellido);
    }
}
class Hijo extends Padre {
    nombre: String;
    edad: number
    constructor(_nombre: String, _edad: number, _apellido: String) {
        super(_apellido)
        this.nombre = _nombre
        this.edad = _edad
    }
    mostrarNombreH(): void {
        console.log(this.nombre);
    }
}

const nuevoHijo = new Hijo('Mario', 30, 'Garcia')
nuevoHijo.mostrarApellidoP()
nuevoHijo.mostrarNombreH()
console.log(`Edad: ${nuevoHijo.edad}`);
