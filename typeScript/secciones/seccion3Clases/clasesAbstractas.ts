/* Se utiliza para definir la estructura y el comportamiento común que deben tener las clases hijas, pero no proporciona una implementación completa para todos los métodos.

Las características principales de una clase abstracta son:

No se puede instanciar: Una clase abstracta no se puede instanciar directamente, es decir, no se pueden crear objetos directamente de ella utilizando el operador new.

Puede contener métodos abstractos: Puede tener uno o más métodos abstractos. Un método abstracto es un método que se declara en la clase abstracta pero no tiene una implementación. En su lugar, las clases hijas deben proporcionar una implementación concreta para esos métodos.

Puede contener métodos concretos: También puede contener métodos concretos (métodos con implementación) que son heredados por las clases hijas. Estos métodos pueden ser utilizados directamente por las clases hijas o pueden ser sobrescritos si es necesario. */
abstract class Padre {
    abstract caminar(): void
    abstract gatear(): void

    saludar(saludar: string): string {
        return saludar;
    }
}

class Hijo extends Padre {
    caminar(): void {
        console.log("Caminando hijo...");
    }

    gatear(): void {
        console.log("Gateando...");
    }
}

class OtraClase extends Padre {
    caminar(): void {
        console.log("Caminando...");
    }

    gatear(): void {
        console.log("Gateando...");
    }
}

const nuevoHijo = new Hijo()
nuevoHijo.caminar()