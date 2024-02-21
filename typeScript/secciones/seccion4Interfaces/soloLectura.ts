interface Persona {
    readonly nombre: string //con readonly estamos indicando que es solo lectura, su valor no se puede sobre escribir ni nada por el estilo
    readonly apellido: string
}
/* Aqui si puedo asignarle un valor, pero una vez que se asigna el valor ya no se puede modificar despues */
let persona: Persona = { nombre: "Mario", apellido: "Garcia" }

/*
como en este caso solo es de lectura me marca error al momento de querer asignarlo
 persona.nombre ="Alberto" 
 */
console.log(persona);
