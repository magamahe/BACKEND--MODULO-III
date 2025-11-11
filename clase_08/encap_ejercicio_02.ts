/* 2. Ejercicio de Empleado
Crea una clase Empleado que contenga propiedades privadas para nombre,
salario, y departamento. Implementa métodos para cambiar el salario (que no
puede ser menor a 0) y obtener la información del empleado. Si se intenta
establecer un salario negativo, imprime un mensaje indicativo. */

// 💼 Ejercicio 2: Clase Empleado
// Tema: Encapsulamiento y validación de datos

export class Empleado {
    // Propiedades privadas
    private nombre: string;
    private salario: number;
    private departamento: string;

    constructor(nombre: string, salario: number, departamento: string) {
        this.nombre = nombre;
        this.salario = salario >= 0 ? salario : 0; // asegura que no sea negativo
        this.departamento = departamento;
    }

    // Método para cambiar el salario (con validación)
    public cambiarSalario(nuevoSalario: number): void {
        if (nuevoSalario < 0) {
            console.log(`⚠️ Error: No se puede asignar un salario negativo a ${this.nombre}.`);
            return;
        }
        console.log(`💰 El salario de ${this.nombre} cambió de $${this.salario} a $${nuevoSalario}.`);
        this.salario = nuevoSalario;
    }

    // Método para obtener la información del empleado
    public obtenerInformacion(): void {
        console.log(`👤 Empleado: ${this.nombre}`);
        console.log(`🏢 Departamento: ${this.departamento}`);
        console.log(`💵 Salario: $${this.salario}`);
        console.log('---------------------------');
    }

    // Getters para acceder si se necesita desde fuera (sin modificar)
    public getNombre(): string {
        return this.nombre;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getDepartamento(): string {
        return this.departamento;
    }
}

// 🧪 Ejemplo de uso
const empleado1 = new Empleado("María Pérez", 2500, "Recursos Humanos");
const empleado2 = new Empleado("Juan López", -500, "Ventas"); // salario inicial inválido

empleado1.obtenerInformacion();
empleado2.obtenerInformacion();

empleado1.cambiarSalario(3000);
empleado1.cambiarSalario(-200); // intento de salario negativo

empleado1.obtenerInformacion();
