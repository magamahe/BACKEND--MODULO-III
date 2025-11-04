import { log } from "node:console";

export class Avion{
    private _modelo: string;
    private _capacidad!:number;
    private _velocidad!: number;

    constructor(modelo:string, capacidad:number, velocidad:number){
        this._modelo = modelo;
        this._capacidad = capacidad;
        this._velocidad = velocidad;
    }

    // Getter y Setter de modelo
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(valor: string) {
        this._modelo = valor.trim();
    }

    // Getter y Setter de capacidad
    public get capacidad():number{
        return this._capacidad;
    }

    public set capacidad(capacidad:number){
        if (capacidad < 0){
            console.log(`❌ Error: la capacidad del avion es menor a 0, por favor ingrese una medida mayor a 0, Valor ingresado: ${capacidad}`); 
            return; 
        }else{
            this._capacidad = capacidad;
        }
    }

    // Getter y Setter de velocidad
    public get velocidad(): number {
        return this._velocidad;
    }

    public set velocidad(valor: number) {
        if (valor < 0) {
            console.log(`❌ Error: La velocidad no puede ser negativa (valor ingresado: ${valor})`);
        } else {
            this._velocidad = valor;
        }
    }

    // Método para mostrar info
    public mostrarInfo(): void {
        console.log(`🛩️  Modelo: ${this._modelo} | Capacidad: ${this._capacidad} pasajeros | Velocidad: ${this._velocidad} km/h`);
    }
}

// =====================
// PRUEBA
// =====================
const avion1 = new Avion("Boeing 737", 180, 850);
avion1.mostrarInfo();

avion1.capacidad = -10;  // ❌ mensaje de error
avion1.velocidad = 900;  // ✅ actualización correcta
avion1.mostrarInfo();