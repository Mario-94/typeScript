interface Persona<T> {
    nombre: T,


}
/* en las interfaces nos referimos a genericas de esta manera, ya yo le puedo pasar los valores que desee en cualquier parte */
let obj: Persona<string> = { nombre: 'Mario' }
let obj1: Persona<number> = { nombre: 123 }
console.log(obj);
console.log(obj1);

