/* Ejercicio 5: Sistema de Gestión de Vehículos
Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo,
y un método detallesVehiculo(). Luego, crea dos clases derivadas: Automovil y
Moto, cada una con propiedades adicionales y sobrescribiendo el método
detallesVehiculo().
Crea también una interfaz Mantenimiento que tenga el método
calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta
interfaz, pero con lógicas distintas para calcular el costo del mantenimiento. */

// 🚗 Ejercicio 5: Sistema de Gestión de Vehículos
// Tema: Herencia, Sobrescritura e Implementación de Interfaces

// Interfaz para mantenimiento
interface Mantenimiento {
    calcularCostoMantenimiento(): number;
}

// Clase base Vehículo
export abstract class Vehiculo {
    constructor(protected marca: string, protected modelo: string, protected kilometraje: number) {}

    // Método que las clases hijas sobrescribirán
    abstract detallesVehiculo(): void;

    public mostrarMarcaModelo(): void {
        console.log(`🚘 Vehículo: ${this.marca} ${this.modelo}`);
    }
}

// Clase derivada: Automóvil
export class Automovil extends Vehiculo implements Mantenimiento {
    constructor(marca: string, modelo: string, kilometraje: number, private tipoCombustible: string) {
        super(marca, modelo, kilometraje);
    }

    override detallesVehiculo(): void {
        console.log(
            `🚗 Automóvil ${this.marca} ${this.modelo} - ${this.kilometraje} km - Combustible: ${this.tipoCombustible}`
        );
    }

    calcularCostoMantenimiento(): number {
        // Supongamos que el costo depende del kilometraje y tipo de combustible
        let costoBase = 200;
        if (this.tipoCombustible.toLowerCase() === "diesel") {
            costoBase += 100;
        }
        const costoFinal = costoBase + this.kilometraje * 0.05;
        console.log(`🔧 Mantenimiento del automóvil: $${costoFinal.toFixed(2)}`);
        return costoFinal;
    }
}

// Clase derivada: Moto
export class Moto extends Vehiculo implements Mantenimiento {
    constructor(marca: string, modelo: string, kilometraje: number, private cilindrada: number) {
        super(marca, modelo, kilometraje);
    }

    override detallesVehiculo(): void {
        console.log(
            `🏍️ Moto ${this.marca} ${this.modelo} - ${this.kilometraje} km - ${this.cilindrada}cc`
        );
    }

    calcularCostoMantenimiento(): number {
        // Costo depende del kilometraje y cilindrada
        const costoFinal = 100 + this.cilindrada * 0.02 + this.kilometraje * 0.03;
        console.log(`🛠️ Mantenimiento de la moto: $${costoFinal.toFixed(2)}`);
        return costoFinal;
    }
}

// 🧪 Ejemplo de uso
const auto = new Automovil("Toyota", "Corolla", 45000, "Nafta");
const moto = new Moto("Yamaha", "FZ25", 12000, 250);

auto.detallesVehiculo();
auto.calcularCostoMantenimiento();

moto.detallesVehiculo();
moto.calcularCostoMantenimiento();
