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
/* Se utiliza para definir la estructura y el comportamiento común que deben tener las clases hijas, pero no proporciona una implementación completa para todos los métodos.

Las características principales de una clase abstracta son:

No se puede instanciar: Una clase abstracta no se puede instanciar directamente, es decir, no se pueden crear objetos directamente de ella utilizando el operador new.

Puede contener métodos abstractos: Puede tener uno o más métodos abstractos. Un método abstracto es un método que se declara en la clase abstracta pero no tiene una implementación. En su lugar, las clases hijas deben proporcionar una implementación concreta para esos métodos.

Puede contener métodos concretos: También puede contener métodos concretos (métodos con implementación) que son heredados por las clases hijas. Estos métodos pueden ser utilizados directamente por las clases hijas o pueden ser sobrescritos si es necesario. */
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function (saludar) {
        return saludar;
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.caminar = function () {
        console.log("Caminando hijo...");
    };
    Hijo.prototype.gatear = function () {
        console.log("Gateando...");
    };
    return Hijo;
}(Padre));
var OtraClase = /** @class */ (function (_super) {
    __extends(OtraClase, _super);
    function OtraClase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtraClase.prototype.caminar = function () {
        console.log("Caminando...");
    };
    OtraClase.prototype.gatear = function () {
        console.log("Gateando...");
    };
    return OtraClase;
}(Padre));
var nuevoHijo = new Hijo();
nuevoHijo.caminar();
