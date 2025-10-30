abstract class Vehiculo{
    protected velocidad:Number;

    constructor(velocidad:Number){
        this.velocidad = velocidad;
    }

    abstract mover():void;
}

class Auto extends Vehiculo{
    mover(): void {
        console.log(`El auto se mueve a una velocidad de ${this.velocidad} km/h`);
    }
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log(`La bicicleta se mueve a una velocidad de ${this.velocidad} km/h`);
    }   
}

const miAuto = new Auto(120);
miAuto.mover();

const miBicicleta = new Bicicleta(25);
miBicicleta.mover();