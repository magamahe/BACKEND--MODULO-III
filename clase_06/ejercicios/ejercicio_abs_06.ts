abstract class Producto{
    protected nombre: string;
    protected precio: number; 

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }
    
    abstract calcularDescuento(): number;
    
    obtenerPrecio():number{
        return this.precio;
    }

    obtenerPrecioConDesc():number{
        return this.precio - this.calcularDescuento();
    }
}

class Ropa extends Producto{
    calcularDescuento(): number {
        return this.precio * 0.10; // 10% de descuento
    }
}

class Electronica extends Producto{
    calcularDescuento(): number {
        return this.precio * 0.05; // 5% de descuento
    }
}


const ropa1 = new Ropa("Camisa", 100);
console.log('el precio original es:', ropa1.obtenerPrecio());
console.log('el descuento es:', ropa1.calcularDescuento());
console.log('el precio final con descuento es', ropa1.obtenerPrecioConDesc());

const elec = new Electronica("Televisor", 1000);
console.log('el precio original es:', elec.obtenerPrecio());
console.log('el descuento es:', elec.calcularDescuento());
console.log('el precio final con descuento es', elec.obtenerPrecioConDesc());