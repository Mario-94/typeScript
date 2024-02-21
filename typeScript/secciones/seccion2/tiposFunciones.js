// ejemplo de funcion que forzo para que me devuelva un numero 
function sumar(a, b) {
    return a + b;
}
var suma = sumar(2, 3);
console.log(suma);
// en este caso lo que hacemos es mostrar como declarar diferentes tipos de funciones, una que recibe parametros y otra que no
function mostrar(a) {
    console.log("funcion 1 con parametros ".concat(a));
}
var mostrar2 = function () {
    console.log('funcion 2');
};
mostrar("mario");
mostrar2();
// parametros opcionales asi es como lo ponemos valor "?:" tipo
var opcionales = function (nombre, apellido, edad) {
    if (!edad) {
        console.log("se llama ".concat(nombre, " su apellido es ").concat(apellido, " y su edad es ").concat(edad));
    }
    console.log("se llama ".concat(nombre, " su apellido es ").concat(apellido));
};
opcionales('Mario', 'Alberto', 30);
opcionales('Diana', 'Anaya');
// parametros por defecto
var parametrosDefecto = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 29; }
    return "se llama ".concat(nombre, " se apellida ").concat(apellido, " y su edad ").concat(edad);
};
console.log(parametrosDefecto('Mario', 'Garcia'));
/*  parametro rest, este nos ayuda para tener multiples tipos de datos a adjuntar de la siguiente manera
 De esta manera el primes valor se identifica como el valor que se quedara , mietras que los valores que siguen se asignaran al parametro frutas
 NOTE: Un aprametro rest debe ser el ultimo valor en la lista de parametros */
var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre ".concat(postre, " tiene \"").concat(frutas, "\""));
};
cartaPostres("postre 1", "durazno", "fresa", "avellanas", "yogurt");
