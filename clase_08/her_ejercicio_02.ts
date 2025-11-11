/* Ejercicio 2: Sistema de Reserva de Hotel
Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una
clase base Cliente con propiedades privadas como nombre, numeroHabitacion,
y un método reservar(). Luego, crea dos clases derivadas ClientePremium y
ClienteCorporativo que sobrescriban el método reservar() para añadir
funcionalidades adicionales.
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios().
Ambas clases derivadas deben implementar esta interfaz. En la clase
ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase
ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos. */



// 🏨 Ejercicio 2: Sistema de Reserva de Hotel
// Tema: Herencia, encapsulación, sobrescritura, e implementación de interfaces

// Interfaz que define beneficios especiales
interface Beneficios {
    accederBeneficios(): void;
}

// Clase base Cliente
export class Cliente {
    // Propiedades privadas: solo accesibles dentro de la clase
    constructor(
        private nombre: string,
        private numeroHabitacion: number
    ) {}

    // Método público para realizar una reserva
    public reservar(): void {
        console.log(`🏠 El cliente ${this.nombre} ha reservado la habitación ${this.numeroHabitacion}.`);
    }

    // Getter opcional para acceder al nombre (si se necesita)
    public obtenerNombre(): string {
        return this.nombre;
    }
}

// Clase ClientePremium que hereda de Cliente e implementa Beneficios
export class ClientePremium extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number) {
        super(nombre, numeroHabitacion);
    }

    // Sobrescribimos el método reservar
    override reservar(): void {
        console.log(`🌟 Reserva Premium confirmada para ${this.obtenerNombre()}.`);
    }

    // Implementación del método de la interfaz
    accederBeneficios(): void {
        console.log("💆 Acceso al spa y desayuno gratis incluidos.");
    }
}

// Clase ClienteCorporativo que hereda de Cliente e implementa Beneficios
export class ClienteCorporativo extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number, private empresa: string) {
        super(nombre, numeroHabitacion);
    }

    // Sobrescribimos el método reservar
    override reservar(): void {
        console.log(`🏢 Reserva corporativa confirmada para ${this.obtenerNombre()} (${this.empresa}).`);
    }

    // Implementación del método de la interfaz
    accederBeneficios(): void {
        console.log("📊 Acceso a salas de reuniones y descuentos especiales para empresas.");
    }
}

// 🧪 Ejemplo de uso
const cliente1 = new Cliente("Lucía Pérez", 101);
const premium = new ClientePremium("Carlos Gómez", 202);
const corporativo = new ClienteCorporativo("María López", 303, "TechCorp");

cliente1.reservar();

premium.reservar();
premium.accederBeneficios();

corporativo.reservar();
corporativo.accederBeneficios();
