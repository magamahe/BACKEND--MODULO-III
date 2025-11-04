import { log } from "node:console";

export class Estudiante{
    private _nombre: string;
    private _edad: number;
    private _calificaciones:number[];

    constructor(nombre:string, edad:number, calificaciones:number[]){
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = calificaciones;
    }

     // Getter para nombre
     public get nombre():string{
        return this._nombre;
     }

     // Getter y Setter para edad
     public get edad():number{
        return this._edad;
     }

     public set edad (valor:number){
        if (valor >= 0){
            this._edad = valor;
        }else{
            console.log(`❌ Error: La edad debe ser mayor a 0. Ingresaste ${valor}`);
            
        }
    }

    public agregarCalificacion(n: number):void{
        if (n < 0 || n > 100){
           console.log(`❌ Error: La calificación debe estar entre 0 y 100. Ingresaste ${n}`);
        }
         this._calificaciones.push(n);
             console.log(`✅ Calificación ${n} agregada para ${this._nombre}.`);

    }

    // Método para calcular promedio
    public calcularPromedio():number | null{
        if (this._calificaciones.length === 0){
            console.log(`⚠️ No hay calificaciones para calcular el promedio de ${this._nombre}.`);
            return null;
        }
        const suma = this._calificaciones.reduce((acc, curr) => acc + curr, 0);
        const promedio =  suma / this._calificaciones.length;
        console.log(`📊 Promedio de ${this._nombre}: ${promedio.toFixed(2)}`);
        return promedio;
    }

    // Método para mostrar info del estudiante
  public mostrarInfo(): void {
    console.log(`👩‍🎓 ${this._nombre}, Edad: ${this._edad}, Calificaciones: [${this._calificaciones.join(", ")}]`);
  }
}

// Ejemplo de uso
const estudiante1 = new Estudiante("Ana", 20, [85, 90, 78]);
estudiante1.mostrarInfo();  
estudiante1.agregarCalificacion(95);
estudiante1.calcularPromedio();
estudiante1.edad = 21;
estudiante1.mostrarInfo();
const estudiante2 = new Estudiante("Luis", 22, []);
estudiante2.mostrarInfo();
estudiante2.calcularPromedio();
estudiante2.agregarCalificacion(88);
estudiante2.calcularPromedio();
