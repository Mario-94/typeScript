function mostrar(dato: string): string {
    return dato
}
console.log(mostrar("Mario"));
// <T> se refiere a tipo, el cual indica que es de cualquier tipo que tu le pases o tipo generico
function mostrarGenerica<T>(dato: T): T {
    return dato
}
console.log(mostrarGenerica("Generico"));
