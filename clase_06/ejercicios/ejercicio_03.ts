interface Volador{
    volar():void;
}

interface Trasportable{
    transportar():void;
}

class Avion implements Volador, Trasportable{
    volar(): void {
        console.log("El avión está volando");
    }   

    transportar(): void {
        console.log("El avión está transportando pasajeros");
    }
}
const miAvion = new Avion();
miAvion.volar();
miAvion.transportar();