class Maestro{
    protected nombre: string;
    protected materia:string;

    constructor(nombre:string, materia:string){
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar():string{
        return `El maestro ${this.nombre} está enseñando ${this.materia}.`;
    }
}

class MaestroDeMatematicas extends Maestro{
    constructor(nombre: string) {
        super(nombre, "Matemáticas"); // llama al constructor de la clase base
    }

    enseñar(): string {
        return `Soy el maestro de matemáticas ${this.nombre}, listo para resolver ecuaciones y problemas.`;
    }
}

const maestromat = new MaestroDeMatematicas("Gabriela");
console.log(maestromat.enseñar());