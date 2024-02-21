var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puerta_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puerta = puerta_;
    }
    // Metodos
    Vehiculo.prototype.acelerar = function () {
        console.log('Acelero');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('Freno');
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Ford', '1992', 4);
// accedemos a sus propiedades
console.log("marca ".concat(coche.marca));
console.log("n\u00FAmero de puertas ".concat(coche.puerta));
// vemos sus metodos
coche.acelerar();
coche.frenar();
