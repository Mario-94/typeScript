// Tipos de datos que tenemos
let numero: number = 10;
// numero=false en este caso no se puede ya que se indico que es de tipo número
console.log(numero);
let verdadFalso: boolean = false;
// verdadFalso=31 mismo caso com lo declare de tipo boolean este valor no se puede cambiar nunca su valor
console.log(verdadFalso);

let nombre: string = "Mario";
console.log(nombre);
// arrays 
let numeros: number[] = [1, 2, 3, 4, 5];
let coleccionNombres: string[] = ["mario", "alberto"];
let coleccionNumeros: Array<number> = [1, 2, 3, 4, 5];

// tuplas
let tupla: [number, string, boolean] = [1, "mario", true]
console.log("tupla" + tupla[2]);

