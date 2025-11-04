/* 6. Ejercicio de Supermercado
Crea una clase Producto que contenga propiedades privadas como nombre,
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea
negativo y que cantidad no sea menor que 0. */

export class Producto{
    private _nombre: string;
    private _precio:number;
    private _cantidad:number;

    constructor(nombre:string, precio:number, cantidad:number){
        this._nombre= nombre;
        this._precio! = precio;
        this._cantidad! = cantidad;
    }

    //getters
    public get nombre():string{
        return this._nombre;
    }

    public get precio():number{
        return this._precio;
    }

    public get cantidad():number{
        return this._cantidad;
    }

    //setters

    public set nombre(valor: string) {
        this._nombre = valor.trim();
    }

    public set precio(nuevoPrecio:number){
        if(nuevoPrecio < 0){
            console.log(`❌ Error: El precio no puede ser negativo, ingresaste $${nuevoPrecio}.`);
        } else {
            this._precio = nuevoPrecio;
        }   
    }
    public set cantidad(nuevaCantidad:number){
        if(nuevaCantidad < 0){
            console.log(`❌ Error: La cantidad no puede ser menor que 0, ingresaste: ${nuevaCantidad} unidades.`);
        } else {
            this._cantidad = nuevaCantidad;
        }   
    }

    // Método para mostrar información del producto
  public mostrarInfo(): void {
    console.log(`🧺 Producto: ${this._nombre} | Precio: $ ${this._precio} | Stock: ${this._cantidad} unidades`);
  }

  // Método para actualizar stock
  public vender(unidades: number): void {
    if (unidades > this._cantidad) {
      console.log(`⚠️ No hay suficiente stock para vender ${unidades} unidades de ${this._nombre}.`);
    } else if (unidades <= 0) {
      console.log(`❌ La cantidad a vender debe ser mayor que 0.`);
    } else {
      this._cantidad -= unidades;
      console.log(`✅ Venta realizada: ${unidades} unidades de ${this._nombre}. Stock restante: ${this._cantidad}.`);
    }
  }
}

// ======================
// PRUEBA
// ======================
const producto1 = new Producto("Yerba Mate", 2500, 50);
producto1.mostrarInfo();

producto1.precio = -100; // ❌ Error
producto1.cantidad = -5; // ❌ Error
producto1.vender(10);    // ✅
producto1.mostrarInfo();

producto1.vender(60);    // ⚠️ No hay suficiente stock

