export class Coche{
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _km: number;

    constructor(marca:string, modelo:string, anio:number, km:number){
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._km = km;
    }   
     // Getter y Setter de anio
    public get anio():number{
        return this._anio;
    }

    public set anio(valor:number){
        if (valor <1886){
            console.log(`❌ Error: El año no puede ser menor que 1886. Ingresaste: ${valor}`);
        }else{
            this._anio = valor;
        }
    }

     // Getter y Setter de km
    public get km(): number {
        return this._km;
    }


    public set km(valor:number){
        if(valor < 0){
            console.log(`❌ Error: Los kilómetros no pueden ser negativos. Ingresaste: ${valor} `);
        }else{
            this._km = valor;
        }
    }

     // Método para encender el coche
    encender():void{
        console.log(`el coche ${this._marca} ${this._modelo} está encendido.`);
    }
    
     // Método para simular un viaje
    viajar (km:number):void{
        if (km <= 0){
            console.log(`❌ Error: La distancia del viaje debe ser mayor que cero. Ingresaste ${km} km`);
            return;
        }
        this._km += km;
        console.log(`El coche ${this._marca} ${this._modelo} ha viajado ${km} km. Total de km: ${this._km}`);
    }
}

// Ejemplo de uso
const miCoche = new Coche("Toyota","Corola",2020, 150000);
miCoche.encender();
miCoche.viajar(150);
miCoche.anio = 1800; // Debería mostrar un error
miCoche.km = -500; // Debería mostrar un error  

miCoche.viajar(-15);