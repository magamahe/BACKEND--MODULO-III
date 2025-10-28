// Definimos la interfaz
interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): void;
}

// Clase que implementa la interfaz
export class Persona implements IPersona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creamos una instancia
let persona1 = new Persona('Josefina', 22);

// Llamamos al método
persona1.presentarse(); 
