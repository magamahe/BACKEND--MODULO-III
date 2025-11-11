/* Ejercicio 3: Sistema de Gestión de Compras
Crea un sistema que gestione productos y órdenes de compra. Usa una clase
abstracta Producto, clases concretas Electrónico y Alimento, y una clase
OrdenCompra que contenga múltiples productos. */

// 🛍️ Ejercicio 3: Sistema de Gestión de Compras
// Tema: Abstracción + Herencia + Composición

// Clase abstracta base que representa un producto genérico
export abstract class Producto {
    constructor(protected nombre: string, protected precio: number) {}

    // Método abstracto: cada subclase debe implementar cómo mostrar los detalles
    abstract mostrarDetalles(): void;

    // Método para obtener el precio (encapsulación)
    obtenerPrecio(): number {
        return this.precio;
    }

    obtenerNombre(): string {
        return this.nombre;
    }
}

// Clase concreta para productos electrónicos
export class Electronico extends Producto {
    constructor(nombre: string, precio: number, private garantiaMeses: number) {
        super(nombre, precio);
    }

    mostrarDetalles(): void {
        console.log(`🔌 Electrónico: ${this.nombre} - Precio: $${this.precio} - Garantía: ${this.garantiaMeses} meses`);
    }
}

// Clase concreta para productos alimenticios
export class Alimento extends Producto {
    constructor(nombre: string, precio: number, private fechaVencimiento: string) {
        super(nombre, precio);
    }

    mostrarDetalles(): void {
        console.log(`🍎 Alimento: ${this.nombre} - Precio: $${this.precio} - Vence: ${this.fechaVencimiento}`);
    }
}

// Clase que representa una orden de compra con múltiples productos
export class OrdenCompra {
    private productos: Producto[] = [];

    constructor(private idOrden: string) {}

    // Agregar producto a la orden
    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`✅ Producto '${producto.obtenerNombre()}' agregado a la orden ${this.idOrden}.`);
    }

    // Mostrar todos los productos de la orden
    listarProductos(): void {
        console.log(`🧾 Orden ${this.idOrden} - Lista de productos:`);
        this.productos.forEach((p, index) => {
            console.log(`${index + 1}. ${p.obtenerNombre()} - $${p.obtenerPrecio()}`);
        });
    }

    // Calcular el total de la orden
    calcularTotal(): number {
        const total = this.productos.reduce((sum, p) => sum + p.obtenerPrecio(), 0);
        console.log(`💰 Total de la orden ${this.idOrden}: $${total}`);
        return total;
    }
}

// 🧪 Ejemplo de uso
const producto1 = new Electronico("Notebook Lenovo", 1500, 24);
const producto2 = new Alimento("Manzanas", 10, "15/12/2025");
const producto3 = new Alimento("Yogur Natural", 5, "20/11/2025");

const orden1 = new OrdenCompra("ORD-001");

producto1.mostrarDetalles();
producto2.mostrarDetalles();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

orden1.listarProductos();
orden1.calcularTotal();
