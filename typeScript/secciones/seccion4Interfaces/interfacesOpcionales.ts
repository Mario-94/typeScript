interface Persona {
    nombre?: string
    altura: number
    peso: number
}
let persona = {
    altura: 175,
    peso: 83,
    nombre: "Mario"
}

function mostarPersona(persona: Persona): string {
    // 
    let mediaPeso: number = persona.altura / persona.peso
    if (persona.nombre) {
        return `${persona.nombre} tiene una media de  ${mediaPeso}`
    }
    else {
        return `No se quen eres pero tienes una media de ${mediaPeso}`
    }
}
console.log(mostarPersona(persona))