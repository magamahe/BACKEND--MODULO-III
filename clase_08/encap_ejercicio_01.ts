/* 1. Ejercicio de Bodega
Diseña una clase Bodega que tenga propiedades privadas para nombre,
direccion, y inventario (un array de objetos con producto y cantidad).
Implementa métodos para agregar productos al inventario, eliminar productos,
y listar el inventario. Si se intenta agregar un producto con una cantidad
negativa, imprime un mensaje informativo. */

// 🍇 Ejercicio 1: Clase Bodega
// Tema: Encapsulamiento, validaciones y manejo de inventario

export class Bodega {
    // Propiedades privadas
    private nombre: string;
    private direccion: string;
    private inventario: { producto: string; cantidad: number }[];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.inventario=[];
    }

    // Método para agregar productos
    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log(`⚠️ No se puede agregar una cantidad negativa o cero de "${producto}".`);
            return;
        }

        const existente = this.inventario.find(p => p.producto === producto);

        if (existente) {
            existente.cantidad += cantidad;
            console.log(`✅ Se agregó ${cantidad} unidades de "${producto}" al inventario.`);
        } else {
            this.inventario.push({ producto, cantidad });
            console.log(`🆕 Producto "${producto}" agregado al inventario con ${cantidad} unidades.`);
        }
    }

    // Método para eliminar productos
    public eliminarProducto(producto: string): void {
        const index = this.inventario.findIndex(p => p.producto === producto);
        if (index !== -1) {
            this.inventario.splice(index, 1);
            console.log(`🗑️ Producto "${producto}" eliminado del inventario.`);
        } else {
            console.log(`⚠️ No se encontró el producto "${producto}" en el inventario.`);
        }
    }

    // Método para listar el inventario
    public listarInventario(): void {
        console.log(`🏢 Inventario de la Bodega "${this.nombre}" (${this.direccion}):`);
        if (this.inventario.length === 0) {
            console.log("📦 El inventario está vacío.");
        } else {
            this.inventario.forEach(item => {
                console.log(`• ${item.producto}: ${item.cantidad} unidades`);
            });
        }
    }
}

// 🧪 Ejemplo de uso
const bodega1 = new Bodega("Bodega San Martín", "Ruta 7, Mendoza");

bodega1.agregarProducto("Vino Malbec", 50);
bodega1.agregarProducto("Aceite de Oliva", 30);
bodega1.agregarProducto("Vino Malbec", -5); // cantidad inválida
bodega1.listarInventario();

bodega1.eliminarProducto("Aceite de Oliva");
bodega1.eliminarProducto("Queso"); // producto inexistente
bodega1.listarInventario();
