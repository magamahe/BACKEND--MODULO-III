/* Ejercicio 4: Sistema de Gestión de Biblioteca
Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una
clase abstracta Publicacion, clases concretas Libro y Revista, y una clase
Biblioteca que gestione el préstamo de publicaciones. */

// 📖 Ejercicio 4: Sistema de Gestión de Biblioteca
// Tema: Abstracción + Herencia + Composición + Métodos concretos

// Clase abstracta base que representa una publicación genérica
export abstract class Publicacion {
    constructor(protected titulo: string, protected autor: string, protected disponible: boolean = true) {}

    // Método abstracto: cada tipo de publicación debe implementar cómo mostrar sus datos
    abstract mostrarInfo(): void;

    // Métodos comunes
    estaDisponible(): boolean {
        return this.disponible;
    }

    prestar(): void {
        if (this.disponible) {
            this.disponible = false;
            console.log(`📚 "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`⚠️ "${this.titulo}" no está disponible para préstamo.`);
        }
    }

    devolver(): void {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`✅ "${this.titulo}" ha sido devuelto y está disponible nuevamente.`);
        } else {
            console.log(`ℹ️ "${this.titulo}" ya estaba disponible.`);
        }
    }

    obtenerTitulo(): string {
        return this.titulo;
    }
}

// Clase concreta para libros
export class Libro extends Publicacion {
    constructor(titulo: string, autor: string, private genero: string) {
        super(titulo, autor);
    }

    mostrarInfo(): void {
        console.log(`📘 Libro: "${this.titulo}" - Autor: ${this.autor} - Género: ${this.genero} - Disponible: ${this.disponible ? "Sí" : "No"}`);
    }
}

// Clase concreta para revistas
export class Revista extends Publicacion {
    constructor(titulo: string, autor: string, private numeroEdicion: number) {
        super(titulo, autor);
    }

    mostrarInfo(): void {
        console.log(`📰 Revista: "${this.titulo}" - Autor: ${this.autor} - Edición Nº ${this.numeroEdicion} - Disponible: ${this.disponible ? "Sí" : "No"}`);
    }
}

// Clase que representa la biblioteca
export class Biblioteca {
    private publicaciones: Publicacion[] = [];

    constructor(private nombre: string) {}

    // Agregar una publicación
    agregarPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
        console.log(`✅ "${publicacion.obtenerTitulo()}" agregada a la biblioteca "${this.nombre}".`);
    }

    // Listar todas las publicaciones
    listarPublicaciones(): void {
        console.log(`🏛️ Biblioteca: ${this.nombre} - Publicaciones:`);
        this.publicaciones.forEach((p, index) => {
            console.log(`${index + 1}. ${p.obtenerTitulo()}`);
        });
    }

    // Buscar publicación por título
    buscarPorTitulo(titulo: string): Publicacion | undefined {
        return this.publicaciones.find(p => p.obtenerTitulo().toLowerCase() === titulo.toLowerCase());
    }

    // Gestionar préstamos
    prestarPublicacion(titulo: string): void {
        const pub = this.buscarPorTitulo(titulo);
        if (pub) pub.prestar();
        else console.log(`❌ No se encontró "${titulo}" en la biblioteca.`);
    }

    devolverPublicacion(titulo: string): void {
        const pub = this.buscarPorTitulo(titulo);
        if (pub) pub.devolver();
        else console.log(`❌ No se encontró "${titulo}" en la biblioteca.`);
    }
}

// 🧪 Ejemplo de uso
const biblioteca = new Biblioteca("Biblioteca Central");

const libro1 = new Libro("Mi primer amor", "Gabriel García Márquez", "Realismo Mágico");
const libro2 = new Libro("El almohadon de plumas", "Antoine de Saint-Exupéry", "Fábula");
const revista1 = new Revista("National Geographic", "Varios", 202);

biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(libro2);
biblioteca.agregarPublicacion(revista1);

biblioteca.listarPublicaciones();

libro1.mostrarInfo();
revista1.mostrarInfo();

biblioteca.prestarPublicacion("Mi primer amor");
biblioteca.prestarPublicacion("mi primer amor"); // ya prestado
biblioteca.devolverPublicacion("el almohadon de plumas");
biblioteca.prestarPublicacion("Fugitivos");
