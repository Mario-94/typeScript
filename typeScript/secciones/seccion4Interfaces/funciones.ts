interface General {
    (nombre: string, apellido: string, edad: number): void
}
let funcionGeneral: General
funcionGeneral = function (nombre: string, apellido: string, edad: number): void {
    console.log(`${nombre} ${apellido} tiene ${edad}`);
}
funcionGeneral("Mario", "Garcia", 29)

interface OperacionMatematica {
    (x: number, y: number): number;
}
let sumar: OperacionMatematica;
sumar = function (x: number, y: number): number {
    return x + y
}
console.log(sumar(3, 5));
