var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_apellido) {
        this.apellido = _apellido;
    }
    // metodo
    Padre.prototype.mostrarApellidoP = function () {
        console.log(this.apellido);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_nombre, _edad, _apellido) {
        var _this = _super.call(this, _apellido) || this;
        _this.nombre = _nombre;
        _this.edad = _edad;
        return _this;
    }
    Hijo.prototype.mostrarNombreH = function () {
        console.log(this.nombre);
    };
    return Hijo;
}(Padre));
var nuevoHijo = new Hijo('Mario', 30, 'Garcia');
nuevoHijo.mostrarApellidoP();
nuevoHijo.mostrarNombreH();
console.log("Edad: ".concat(nuevoHijo.edad));
