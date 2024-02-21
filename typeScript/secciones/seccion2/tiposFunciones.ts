// ejemplo de funcion que forzo para que me devuelva un numero 
function sumar(a: number, b: number): number {
    return a + b
}
const suma: number = sumar(2, 3)
console.log(suma);
// en este caso lo que hacemos es mostrar como declarar diferentes tipos de funciones, una que recibe parametros y otra que no
function mostrar(a: string): void {
    console.log(`funcion 1 con parametros ${a}`);
}
const mostrar2 = (): void => {
    console.log('funcion 2');
}
mostrar("mario")
mostrar2();

// parametros opcionales asi es como lo ponemos valor "?:" tipo
const opcionales = (nombre: string, apellido: string, edad?: number) => {
    if (!edad) {
        console.log(`se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`)
    }
    console.log(`se llama ${nombre} su apellido es ${apellido}`)
}

opcionales('Mario', 'Alberto', 30)
opcionales('Diana', 'Anaya');

// parametros por defecto
const parametrosDefecto = (nombre: string, apellido: string, edad: number = 29) => {
    return `se llama ${nombre} se apellida ${apellido} y su edad ${edad}`
}
console.log(parametrosDefecto('Mario', 'Garcia'))

/*  parametro rest, este nos ayuda para tener multiples tipos de datos a adjuntar de la siguiente manera
 De esta manera el primes valor se identifica como el valor que se quedara , mietras que los valores que siguen se asignaran al parametro frutas
 NOTE: Un aprametro rest debe ser el ultimo valor en la lista de parametros */
const cartaPostres = (postre: string, ...frutas: string[]): void => {
    console.log(`El postre ${postre} tiene "${frutas}"`);
}
cartaPostres("postre 1", "durazno", "fresa", "avellanas", "yogurt")
