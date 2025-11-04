export class Vehiculo{
    protected marca: string;
    protected modelo:string;

    constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }

     // Método que será sobrescrito por las clases hijas
    public arrancar(): void {
          console.log(`🚘 El vehículo ${this.marca} ${this.modelo} está arrancando...`);
    }
}

// Clase derivada Coche
class Coche extends Vehiculo{
    public arrancar(): void {
        console.log(`🚗 El coche ${this.marca} ${this.modelo} está arrancando con un rugido potente!`);
    }
}

// Clase derivada Moto
class Moto extends Vehiculo{
    public arrancar(): void {
        console.log(`🏍️ La moto ${this.marca} ${this.modelo} está arrancando con un sonido agudo!`);
    }
}

// ======================
// PRUEBA
// ======================
const vehiculo1 = new Vehiculo("Genérico", "X1");
const coche1 = new Coche("Toyota", "Corolla");
const moto1 = new Moto("BMW", "1300 GS");

// Polimorfismo en acción:
const vehiculos: Vehiculo[] = [vehiculo1, coche1, moto1];

console.log("🔧 Prueba de polimorfismo:");
for (const v of vehiculos) {
  v.arrancar(); // cada objeto ejecuta su propia versión del método
}