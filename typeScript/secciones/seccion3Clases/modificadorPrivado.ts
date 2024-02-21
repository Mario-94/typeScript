/* 
los tipos de datos privados son aquellos que no se pueden modificar, solo se puede hacer esto dentro de la propia clase
*/
class Animal2 {
    private nombre: string
    private tamano: number
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
const obj = new Animal2('Serpiente', 3)
/* 
En este caso si intento hacer esto no me permite ya que estos dos valores son privados
obj.nombre
obj.tamano 
*/
obj.moverse()