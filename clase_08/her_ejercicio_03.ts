/* Ejercicio 3: Sistema de Tienda en Línea
Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base
Producto que tenga propiedades como nombre, precio, y un método
detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas
deben sobrescribir el método detallesProducto() con información más
específica.
Crea una interfaz Envio que defina el método calcularEnvio(). La clase
Electronico debe implementar */

// 🛍️ Ejercicio 3: Sistema de Tienda en Línea
// Tema: Herencia, Sobrescritura, e Implementación de Interfaces

// Interfaz que define un método para calcular el costo de envío
interface Envio {
    calcularEnvio(): number;
}

// Clase base Producto
export class Producto {
    constructor(protected nombre: string, protected precio: number) {}

    // Método genérico para mostrar detalles
    public detallesProducto(): void {
        console.log(`📦 Producto: ${this.nombre} - Precio: $${this.precio}`);
    }

    public obtenerPrecio(): number {
        return this.precio;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }
}

// Clase derivada: Electrónico
export class Electronico extends Producto implements Envio {
    constructor(nombre: string, precio: number, private pesoKg: number) {
        super(nombre, precio);
    }

    // Sobrescritura del método detallesProducto()
    override detallesProducto(): void {
        console.log(`🔌 Electrónico: ${this.nombre} - Precio: $${this.precio} - Peso: ${this.pesoKg} kg`);
    }

    // Implementación de la interfaz Envio
    calcularEnvio(): number {
        const costo = this.pesoKg * 5; // costo según el peso
        console.log(`🚚 Envío del electrónico "${this.nombre}": $${costo}`);
        return costo;
    }
}

// Clase derivada: Ropa
export class Ropa extends Producto implements Envio {
    constructor(nombre: string, precio: number, private talla: string) {
        super(nombre, precio);
    }

    // Sobrescritura del método detallesProducto()
    override detallesProducto(): void {
        console.log(`👕 Prenda: ${this.nombre} - Precio: $${this.precio} - Talla: ${this.talla}`);
    }

    // Implementación de la interfaz Envio
    calcularEnvio(): number {
        const costo = 10; // tarifa fija para ropa
        console.log(`🚚 Envío de la prenda "${this.nombre}": $${costo}`);
        return costo;
    }
}

// 🧪 Ejemplo de uso
const laptop = new Electronico("Laptop HP", 1200, 2.5);
const remera = new Ropa("Remera Oversize", 30, "M");

laptop.detallesProducto();
laptop.calcularEnvio();

remera.detallesProducto();
remera.calcularEnvio();

const totalCompra = laptop.obtenerPrecio() + remera.obtenerPrecio();
console.log(`💰 Total de productos: $${totalCompra}`);
