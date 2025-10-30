class Torta{
    nombre:string;
    tipo: string;

    constructor(nombre:string, tipo:string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerDescripcion():string{
        return `La torta es de ${this.tipo} y se llama ${this.nombre}.`;
    }
}

class TortaDeChocolate extends Torta{
    constructor(nombre: string) {
        super(nombre, "Chocolate"); // llama al constructor de la clase base
    }

    hacerDescripcion(): string {
        return `Soy una torta de chocolate, deliciosa y suave`
    }
}

const torta1 = new TortaDeChocolate("la mejor");
console.log(torta1.hacerDescripcion());