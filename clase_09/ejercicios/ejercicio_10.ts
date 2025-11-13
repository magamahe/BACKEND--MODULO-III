/* Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza 
Crea un sistema de gestión de productos en una tienda de belleza. Define una 
clase Producto con atributos como nombre, precio y categoria. Luego, crea una 
clase Inventario que gestione un conjunto de productos y tenga métodos para 
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para 
manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar, 
etc.  */

// Clase base
export class Producto {
  nombre: string;
  precio: number;
  categoria: string;

  constructor(nombre: string, precio: number, categoria: string) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  descripcion(): string {
    return `${this.nombre} - ${this.categoria} - $${this.precio}`;
  }
}

// Clases derivadas (Polimorfismo)
class Cosmetico extends Producto {
  constructor(nombre: string, precio: number) {
    super(nombre, precio, "Cosmético");
  }
}

class TratamientoCapilar extends Producto {
  constructor(nombre: string, precio: number) {
    super(nombre, precio, "Tratamiento Capilar");
  }
}

// Clase Inventario
class Inventario {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`✅ Producto agregado: ${producto.descripcion()}`);
  }

  eliminarProducto(nombre: string): void {
    const indice = this.productos.findIndex(p => p.nombre === nombre);

    if (indice === -1) {
      console.log(`⛔ No se encontró el producto "${nombre}".`);
      return;
    }

    this.productos.splice(indice, 1);
    console.log(`🗑️ Producto eliminado: ${nombre}`);
  }

  buscarPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria === categoria);
  }

  mostrarInventario(): void {
    console.log("📦 Inventario Actual:");
    this.productos.forEach(p => console.log(`• ${p.descripcion()}`));
  }
}

// -----------------------------
// EJEMPLO DE USO
// -----------------------------

const inventario = new Inventario();

// Productos
const base = new Cosmetico("Base Líquida Matte", 4500);
const labial = new Cosmetico("Labial Rosa Pastel", 3200);
const mascarilla = new TratamientoCapilar("Mascarilla Reparadora", 5800);

inventario.agregarProducto(base);
inventario.agregarProducto(labial);
inventario.agregarProducto(mascarilla);

inventario.mostrarInventario();

console.log("\n🔍 Buscando productos de categoría Cosmético:");
console.log(inventario.buscarPorCategoria("Cosmético"));

inventario.eliminarProducto("Labial Rosa Pastel");

console.log("\n📦 Inventario actualizado:");
inventario.mostrarInventario();
