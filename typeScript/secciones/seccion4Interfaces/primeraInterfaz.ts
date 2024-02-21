interface Persona {
    //Atributos
    nombre: String
    // Metodos
    caminar(): String
}
function caminando(persona: Persona) {
    const accion = persona.caminar()
    console.log(`la persona: ${persona.nombre} esta ${accion}`);
}

let nuevaPersona: Persona = {
    nombre: "Mario",
    caminar: function () {
        return "caminando"
    }

}
caminando(nuevaPersona)