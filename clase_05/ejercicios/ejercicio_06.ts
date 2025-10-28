class Mariposa{
    nombre:string;
    color:string;

    constructor(nombre:string, color:string){
        this.nombre=nombre;
        this.color=color;
    }

    volar(): void{
        console.log(`La mariposa ${this.nombre} de color ${this.color} está volando.`);
    }
}

const mariposa1 = new Mariposa("Violeta", "azul");
mariposa1.volar();

const mariposa2 = new Mariposa("Sol", "amarillo");
mariposa2.volar();