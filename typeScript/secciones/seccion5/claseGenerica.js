/* Con esto no nos referimos a que la clase en si sea de tipo generica sino que los atributos pueden ser de tipo genericos */
var Persona = /** @class */ (function () {
    function Persona(_nombre, _apellido) {
        this.nombre = _nombre;
        this.apellido = _apellido;
    }
    return Persona;
}());
var obj = new Persona(123, 'Garcia');
console.log(obj.nombre);
