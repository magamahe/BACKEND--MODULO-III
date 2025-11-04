class Vacaciones{
    private _destino:string;
    private _duracion:number;
    private _presupuesto:number;

    constructor(destino:string, duracion:number, presupuesto:number){
        this._destino = destino;
        this._duracion = duracion;
        this._presupuesto = presupuesto;
    }

    //Getters
    public get destino():string{
        return this._destino;
    }

    public get duracion():number{
        return this._duracion;
    }   
    public get presupuesto():number{
        return this._presupuesto;
    }   

    //Setters
    public set destino(destino:string){
        this._destino = destino;
    }   
    
    public set duracion(duracion:number){
        if(duracion<1){
            console.log(`❌ Error: la  duracion debe ser mayor a 1 dia, ingresaste: ${duracion} dias`);
            return;
        }else{
            this._duracion = duracion;
        }
    }

    public set presupuesto(presupuesto:number){
        if(presupuesto <= 0){
            console.log(`❌ Error: el presupuesto no puede ser negativo, ingresaste: $${presupuesto}`);
            return;
        }else{
            this._presupuesto = presupuesto;
        }
    }

      // Método para mostrar la información
  public mostrarInfo(): void {
    console.log(`🏖️ Destino: ${this._destino} | Duración: ${this._duracion} días | Presupuesto: $${this._presupuesto}`);
  }

}


// =====================
// PRUEBA
// =====================
const vacacion1 = new Vacaciones("Bariloche", 7, 250000);
vacacion1.mostrarInfo();

vacacion1.duracion = 0; // ❌ Error
vacacion1.presupuesto = -5000; // ❌ Error
vacacion1.presupuesto = 300000; // ✅
vacacion1.mostrarInfo();