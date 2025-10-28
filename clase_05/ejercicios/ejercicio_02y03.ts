// Definimos la clase Libro
export class Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;

    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
    descripcion():string{
        return `${this.titulo}, escrito por ${this.autor} en el año ${this.anioPublicacion}.`;
    }
}

// Creamos una instancia del objeto Libro
let miLibro = new Libro('El Principito', 'Antoine de Saint-Exupéry', 1943);

// Mostramos las propiedades en consola
console.log(miLibro.descripcion()); 