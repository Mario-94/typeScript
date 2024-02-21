/* el modificador protected permite acceder y modificar el valor desde las clases hijas que extienden la clase base. */
class Padre {
    protected nombre: String
    constructor(_nombre: String) {
        this.nombre = _nombre
    }

}
class Hijo extends Padre {
    public apellido: String
    constructor(_nombre: String, _apellido: String) {
        super(_nombre)
        this.apellido = _apellido
    }

    public mostrarNombre(): void {
        console.log(this.nombre);
    }
}
const obj = new Hijo('Mario', 'Garcia');
obj.mostrarNombre()