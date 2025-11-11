/* Ejercicio 2: Polimorfismo y Herencia con Abstracción Compleja
Implementa una clase abstracta Empleado con un método abstracto
calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo,
que calculen el salario de acuerdo a las horas trabajadas y salario fijo
respectivamente. */

// 💼 Clase abstracta Empleado
export abstract class Empleado {
    constructor(protected nombre: string) {}

    // Método abstracto que debe ser implementado por las subclases
    abstract calcularSalario(): number;

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre} | Salario: $${this.calcularSalario()}`);
    }
}

// 👷‍♀️ Clase derivada EmpleadoPorHora
export class EmpleadoPorHora extends Empleado {
    constructor(nombre: string, private horasTrabajadas: number, private pagoPorHora: number) {
        super(nombre);
    }

    calcularSalario(): number {
        return this.horasTrabajadas * this.pagoPorHora;
    }
}

// 👩‍💼 Clase derivada EmpleadoFijo
export class EmpleadoFijo extends Empleado {
    constructor(nombre: string, private salarioFijo: number) {
        super(nombre);
    }

    calcularSalario(): number {
        return this.salarioFijo;
    }
}

// 🧪 Ejemplo de uso
const empleado1 = new EmpleadoPorHora("María", 120, 20);  // 120 horas * $20
const empleado2 = new EmpleadoFijo("Gabriela", 5000);      // salario fijo

empleado1.mostrarInformacion(); // Empleado: María | Salario: $2400
empleado2.mostrarInformacion(); // Empleado: Gabriela | Salario: $5000
