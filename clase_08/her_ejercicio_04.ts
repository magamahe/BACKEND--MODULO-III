/* Ejercicio 4: Sistema de Gestión de Empleados
Consigna: Crea una clase base Empleado con propiedades protegidas nombre y
salario, y un método calcularSalario(). Crea dos clases derivadas
EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben
sobrescribir el método calcularSalario() con sus propias lógicas (empleados de
tiempo completo tienen un salario fijo, mientras que los empleados de medio
tiempo cobran por hora).
Además, crea una interfaz BeneficiosLaborales que tenga el método
calcularBeneficios(). Solo los empleados de tiempo completo implementarán
esta interfaz. */

// 💼 Ejercicio 4: Sistema de Gestión de Empleados
// Tema: Herencia, Sobrescritura, e Implementación Selectiva de Interfaces

// Interfaz que define beneficios laborales
interface BeneficiosLaborales {
    calcularBeneficios(): number;
}

// Clase base Empleado
export abstract class Empleado {
    constructor(protected nombre: string, protected salario: number) {}

    // Método general que será sobrescrito en las clases derivadas
    abstract calcularSalario(): number;

    public mostrarDatos(): void {
        console.log(`👤 Empleado: ${this.nombre}`);
    }
}

// Clase derivada: Empleado de tiempo completo
export class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    constructor(nombre: string, salario: number) {
        super(nombre, salario);
    }

    // Sobrescritura del método calcularSalario
    override calcularSalario(): number {
        console.log(`💰 ${this.nombre} (Tiempo Completo) cobra un salario fijo de $${this.salario}`);
        return this.salario;
    }

    // Implementación de la interfaz de beneficios
    calcularBeneficios(): number {
        const beneficios = this.salario * 0.15; // 15% adicional por beneficios
        console.log(`🎁 Beneficios para ${this.nombre}: $${beneficios}`);
        return beneficios;
    }
}

// Clase derivada: Empleado de medio tiempo
export class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre: string, private horasTrabajadas: number, private pagoPorHora: number) {
        super(nombre, 0); // salario se calculará dinámicamente
    }

    // Sobrescritura del método calcularSalario
    override calcularSalario(): number {
        const salarioTotal = this.horasTrabajadas * this.pagoPorHora;
        console.log(`🕒 ${this.nombre} (Medio Tiempo) trabajó ${this.horasTrabajadas} horas y cobra $${salarioTotal}`);
        return salarioTotal;
    }
}

// 🧪 Ejemplo de uso
const empleado1 = new EmpleadoTiempoCompleto("Laura Gómez", 2500);
const empleado2 = new EmpleadoMedioTiempo("Carlos Ruiz", 80, 20);

empleado1.mostrarDatos();
empleado1.calcularSalario();
empleado1.calcularBeneficios();

empleado2.mostrarDatos();
empleado2.calcularSalario();
