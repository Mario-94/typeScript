/* los tipos publicos no son más que aquellos metodos o datos los cuales se pueden modificar desde cualquier parte ya sea dentro de la clase o no */
class Animal {
    public nombre: string
    public tamano: number
    constructor(_nombre: string, _tamano: number) {
        this.nombre = _nombre
        this.tamano = _tamano
    }
    /**
     * moverse
     */
    public moverse(): void {
        console.log(`Me esto moviendo`);
    }
}
const obj = new Animal('Serpiente', 3)
console.log(obj.nombre)
console.log(obj.tamano)
obj.moverse()