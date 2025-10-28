export class Coche{
    public marca: string;
    public modelo:string;
    private precio: number;

    constructor(marca:string, modelo:string, precio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    public getInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }    

}

// Creamos una instancia
let miCoche = new Coche('Toyota', 'Corolla', 20000);

console.log(miCoche.getInfo());