var persona = {
    altura: 175,
    peso: 83,
    nombre: "Mario"
};
function mostarPersona(persona) {
    // 
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene una media de  ").concat(mediaPeso);
    }
    else {
        return "No se quen eres pero tienes una media de ".concat(mediaPeso);
    }
}
console.log(mostarPersona(persona));
