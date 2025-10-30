interface VehiculoElectrico{
    cargarBateria(): void;
}

abstract class Transporte  {
    abstract mover():void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{
     mover(): void {
        console.log("El autobús eléctrico se está moviendo");
    }

    cargarBateria(): void {
        console.log("La batería del autobús eléctrico se está cargando");
    }
}

const bus = new AutobusElectrico();
bus.mover();
bus.cargarBateria();