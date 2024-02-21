/* Con esto no nos referimos a que la clase en si sea de tipo generica sino que los atributos pueden ser de tipo genericos */
class Persona<T> {
    nombre: T
    apellido: string
    constructor(_nombre: T, _apellido: string) {
        this.nombre = _nombre
        this.apellido = _apellido
    }
    mostrar: (nombre: T) => T
}

const obj = new Persona(123, 'Garcia')
console.log(obj.nombre);
