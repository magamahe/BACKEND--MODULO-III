/* Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso
Consigna: Define una clase base Negocio con un método protegido operar().
Define otra clase Consultoria que herede de Negocio y sobrescriba el método
operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría. */

// 💼 Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso
// Tema: herencia, método protegido, y sobreescritura

// Clase base que representa un negocio genérico
export class Negocio {
    constructor(protected nombre: string) {}

    // Método protegido: solo accesible desde la clase o sus subclases
    protected operar(): void {
        console.log(`🏪 El negocio "${this.nombre}" está operando de forma genérica.`);
    }

    // Método público para mostrar cómo se opera (llama internamente al protegido)
    public iniciarOperacion(): void {
        this.operar();
    }
}

// Subclase que hereda de Negocio
export class Consultoria extends Negocio {
    constructor(nombre: string, private especialidad: string) {
        super(nombre);
    }

    // Sobrescribimos el método protegido
    protected override operar(): void {
        console.log(`💼 La consultoría "${this.nombre}" opera ofreciendo servicios de ${this.especialidad}.`);
    }

    // Método público adicional para mostrar su modo de operación
    public mostrarOperacion(): void {
        this.operar(); // accedemos al método protegido sobrescrito
    }
}

// 🧪 Ejemplo de uso
const miConsultoria = new Consultoria("TechSol", "asesoría tecnológica");
miConsultoria.mostrarOperacion(); // Accede al método sobrescrito
miConsultoria.iniciarOperacion(); // Llama al método original de la base desde la subclase
