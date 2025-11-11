/* Ejercicio 1: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un
transporte público.
 Crea una clase abstracta Transporte con un método abstracto mover().
 Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
 Implementa dos clases:
o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible. */

// 🚌 Ejercicio 1: Sistema de Transporte Público
// Tema: Abstracción + Interfaces + Herencia en TypeScript


// Interfaz para vehículos eléctricos
export interface Electrico {
    cargarBateria(): void;
}

// Interfaz para vehículos a combustible
export interface Combustible {
    llenarTanque(): void;
}

// Clase abstracta base que representa un medio de transporte
export abstract class Transporte {/* 
    constructor(protected pasajeros: number[]){} */

    // Método abstracto: debe ser implementado por cada clase hija
    abstract mover(): void;

    //metodo describir
    describir(): void{
        console.log(`este transporte lleva ${this.pasajeros} pasajeros`)
    }
}


// Clase concreta que extiende de Transporte e implementa la interfaz Electrico
export class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log("El autobús eléctrico está en movimiento.");
    }

    cargarBateria(): void {
        console.log("La batería del autobús eléctrico se está cargando.");
    }
}

// Clase concreta que extiende de Transporte e implementa la interfaz Combustible
export class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log("El taxi está en movimiento.");
    }

    llenarTanque(): void {
        console.log("El tanque del taxi se está llenando.");
    }
}

// 🧪 Pruebas del sistema de transporte
const autobus = new AutobusElectrico();
autobus.mover();
autobus.cargarBateria();

const taxi = new Taxi();
taxi.mover();
taxi.llenarTanque();
