// Clase base Animal
export class Animal {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo(): void {
        console.log(`Animal: ${this.nombre}, Tipo: ${this.tipo}`);
    }
}

// Clase Mascota que hereda de Animal
class Mascota extends Animal {
    duenio: string;

    constructor(nombre: string, tipo: string, duenio: string) {
        super(nombre, tipo);
        this.duenio = duenio;
    }

    mostrarInfo(): void {
        console.log(`Mascota: ${this.nombre}, Tipo: ${this.tipo}, Dueño: ${this.duenio}`);
    }
}

// Clase MascotaExotica que hereda de Animal
class MascotaExotica extends Animal {
    habitat: string;

    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo);
        this.habitat = habitat;
    }

    mostrarInfo(): void {
        console.log(`Mascota Exótica: ${this.nombre}, Tipo: ${this.tipo}, Habitat: ${this.habitat}`);
    }
}

// Ejemplos de instanciación
let perro = new Mascota('Cumba', 'Perro', 'Gabriela');
let iguana = new MascotaExotica('Iguana', 'Reptil', 'Selva Amazónica');

// Mostramos información
perro.mostrarInfo(); 
iguana.mostrarInfo(); 