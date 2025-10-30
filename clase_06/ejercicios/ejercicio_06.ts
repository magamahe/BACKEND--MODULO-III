class Zoologico{
    abrirPuertas(): void{
        console.log("Las puertas del zoológico están abiertas");
    }
}

class ZoologicoSafari extends Zoologico{
    abrirPuertas(){
        super.abrirPuertas();
        console.log("El zoológico safari está listo para recibir visitantes");
    }
}

const zoo = new ZoologicoSafari();
zoo.abrirPuertas();