function caminando(persona) {
    var accion = persona.caminar();
    console.log("la persona: ".concat(persona.nombre, " esta ").concat(accion));
}
var nuevaPersona = {
    nombre: "Mario",
    caminar: function () {
        return "caminando";
    }
};
caminando(nuevaPersona);
