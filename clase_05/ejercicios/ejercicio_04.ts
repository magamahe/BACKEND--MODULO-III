class Animal{
    nombre:string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido(): void{
         console.log(`Mi mascota, ${this.nombre} , es un ${this.tipo} y hace ruido molesto.`);
    }

}

let gato = new Animal('Cumba', 'felino');
gato.hacerSonido();

let loro = new Animal('Cacatua', 'pajaro');
loro.hacerSonido();