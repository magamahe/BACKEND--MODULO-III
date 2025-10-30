interface Usuario{
    nombre: string;
    edad?:number;
    readonly id: number;
}

class UsuarioConcreto implements Usuario{
    nombre: string;
    edad?: number;
    readonly id: number;

    constructor(nombre: string, id: number, edad?: number) {
        this.nombre = nombre;
        this.id = id;
        this.edad = edad;
    }

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, ID: ${this.id}, Edad: ${this.edad ?? "No indicada"}`);
    }
}

const usuario1 = new UsuarioConcreto("María", 101, 25);
usuario1.mostrarInfo(); // Nombre: María, ID: 101, Edad: 25

const usuario2 = new UsuarioConcreto("Juan", 102);
usuario2.mostrarInfo(); // Nombre: Juan, ID: 102, Edad: No indicada
