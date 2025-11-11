/* 4. Ejercicio de Taller de Reparaciones
Diseña una clase Taller que tenga propiedades privadas para nombre, direccion,
servicios (un array de objetos con nombreServicio, precio, y descripcion), y
calificaciones (un array para almacenar las calificaciones de los clientes).
Implementa métodos para agregar servicios, eliminar servicios, listar los
servicios disponibles, agregar calificaciones y calcular el promedio de
calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime
un mensaje informativo. También imprime un mensaje si se intenta agregar una
calificación que no está entre 1 y 5. */

// 🔧 Ejercicio 4: Taller de Reparaciones
// Tema: Clases, encapsulamiento, validaciones y manejo de arrays

export class Taller {
    // Propiedades privadas
    private nombre: string;
    private direccion: string;
    private servicios: { nombreServicio: string; precio: number; descripcion: string }[];
    private calificaciones: number[];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.servicios = [];
        this.calificaciones = [];
    }

    // Método para agregar un servicio
    public agregarServicio(nombreServicio: string, precio: number, descripcion: string): void {
        if (precio < 0) {
            console.log("⚠️ No se puede agregar un servicio con precio negativo.");
            return;
        }
        this.servicios.push({ nombreServicio, precio, descripcion });
        console.log(`🧰 Servicio "${nombreServicio}" agregado correctamente.`);
    }

    // Método para eliminar un servicio
    public eliminarServicio(nombreServicio: string): void {
        const index = this.servicios.findIndex(s => s.nombreServicio === nombreServicio);
        if (index === -1) {
            console.log(`⚠️ El servicio "${nombreServicio}" no existe.`);
            return;
        }
        this.servicios.splice(index, 1);
        console.log(`🗑️ Servicio "${nombreServicio}" eliminado correctamente.`);
    }

    // Método para listar todos los servicios
    public listarServicios(): void {
        console.log(`🏠 Taller: ${this.nombre} - Dirección: ${this.direccion}`);
        if (this.servicios.length === 0) {
            console.log("📭 No hay servicios disponibles actualmente.");
            return;
        }
        console.log("🛠️ Servicios disponibles:");
        this.servicios.forEach((s, i) => {
            console.log(`${i + 1}. ${s.nombreServicio} - $${s.precio} | ${s.descripcion}`);
        });
        console.log('---------------------------');
    }

    // Método para agregar una calificación (entre 1 y 5)
    public agregarCalificacion(valor: number): void {
        if (valor < 1 || valor > 5) {
            console.log("⚠️ La calificación debe estar entre 1 y 5.");
            return;
        }
        this.calificaciones.push(valor);
        console.log(`⭐ Calificación ${valor} agregada con éxito.`);
    }

    // Método para calcular el promedio de calificaciones
    public calcularPromedioCalificaciones(): void {
        if (this.calificaciones.length === 0) {
            console.log("📭 No hay calificaciones disponibles para calcular el promedio.");
            return;
        }
        const promedio =
            this.calificaciones.reduce((acc, val) => acc + val, 0) / this.calificaciones.length;
        console.log(`📊 Promedio de calificaciones: ${promedio.toFixed(2)} / 5`);
    }
}

// 🧪 Ejemplo de uso:
const taller = new Taller("ReparaTodo", "Av. Siempre Viva 742");

taller.agregarServicio("Cambio de aceite", 5000, "Incluye filtro y revisión general");
taller.agregarServicio("Alineación y balanceo", 8000, "Servicio completo para neumáticos");
taller.agregarServicio("Lavado completo", -2000, "No debería agregarse"); // inválido

taller.listarServicios();

taller.eliminarServicio("Lavado completo"); // inexistente
taller.eliminarServicio("Cambio de aceite");

taller.listarServicios();

taller.agregarCalificacion(5);
taller.agregarCalificacion(4);
taller.agregarCalificacion(0); // fuera de rango

taller.calcularPromedioCalificaciones();
