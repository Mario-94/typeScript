var permiso = true;
var Persona = /** @class */ (function () {
    function Persona(_nombre) {
        this.nombre = _nombre;
    }
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (nombre) {
            if (permiso) {
                this.nombre = nombre;
            }
            else {
                console.log("No tienes los permisos necesarios");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var obj = new Persona('Mario');
console.log(obj.getNombre);
obj.setNombre = 'Alberto';
console.log(obj.getNombre);
