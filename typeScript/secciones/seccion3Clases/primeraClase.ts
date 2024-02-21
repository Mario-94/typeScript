class Vehiculo {
    // Propiedades
    marca: string
    fecha: string
    puerta: number
    constructor(marca_: string, fecha_: string, puerta_: number) {
        this.marca = marca_
        this.fecha = fecha_
        this.puerta = puerta_
    }
    // Metodos
    acelerar(): void {
        console.log('Acelero');

    }
    frenar(): void {
        console.log('Freno');
    }
}
const coche = new Vehiculo('Ford', '1992', 4);
// accedemos a sus propiedades
console.log(`marca ${coche.marca}`)
console.log(`número de puertas ${coche.puerta}`)
// vemos sus metodos
coche.acelerar();
coche.frenar()