// Clase base Vehiculo
class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

// Clase Coche que hereda de Vehiculo
export class Coche extends Vehiculo {
    tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }

    mostrarInfoCompleta(): void {
        console.log(`Coche: ${this.marca} ${this.modelo}, Combustible: ${this.tipoCombustible}`);
    }
}

// Clase Motocicleta que hereda de Vehiculo
class Motocicleta extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    mostrarInfoCompleta(): void {
        console.log(`Motocicleta: ${this.marca} ${this.modelo}, Cilindrada: ${this.cilindrada}cc`);
    }
}

// Ejemplos de instanciación
let coche1 = new Coche('Toyota', 'Rav', 'Gasolina');
let moto1 = new Motocicleta('BMW', 'RS1300', 1300);

// Mostramos la información
coche1.mostrarInfoCompleta(); // Coche: Honda Civic, Combustible: Gasolina
moto1.mostrarInfoCompleta();  // Motocicleta: Yamaha R1, Cilindrada: 1000cc
