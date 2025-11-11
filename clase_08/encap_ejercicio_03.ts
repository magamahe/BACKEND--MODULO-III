/* 3. Ejercicio de Playlist
Diseña una clase Playlist que contenga propiedades privadas para nombre y
canciones (un array de títulos de canciones). Implementa métodos para agregar
canciones, eliminar canciones y listar todas las canciones en la playlist.
Asegúrate de que se imprima un mensaje si se intenta agregar una canción
vacía o eliminar una canción que no existe. */


// 🎵 Ejercicio 3: Clase Playlist
// Tema: Encapsulamiento y validación de datos

export class Playlist {
    // Propiedades privadas
    private nombre: string;
    private canciones: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.canciones = [];
    }

    // Método para agregar una canción
    public agregarCancion(titulo: string): void {
        if (!titulo.trim()) {
            console.log("⚠️ No se puede agregar una canción vacía.");
            return;
        }
        this.canciones.push(titulo);
        console.log(`🎶 Canción "${titulo}" agregada a la playlist "${this.nombre}".`);
    }

    // Método para eliminar una canción
    public eliminarCancion(titulo: string): void {
        const indice = this.canciones.indexOf(titulo);
        if (indice === -1) {
            console.log(`⚠️ La canción "${titulo}" no se encuentra en la playlist.`);
            return;
        }
        this.canciones.splice(indice, 1);
        console.log(`🗑️ Canción "${titulo}" eliminada de la playlist "${this.nombre}".`);
    }

    // Método para listar las canciones
    public listarCanciones(): void {
        console.log(`🎧 Playlist: ${this.nombre}`);
        if (this.canciones.length === 0) {
            console.log("📭 No hay canciones en la playlist.");
            return;
        }
        this.canciones.forEach((cancion, index) => {
            console.log(`${index + 1}. ${cancion}`);
        });
        console.log('---------------------------');
    }

    // Getter opcional para obtener el nombre
    public getNombre(): string {
        return this.nombre;
    }
}

// 🧪 Ejemplo de uso
const miPlaylist = new Playlist("Favoritas de Gabi");

miPlaylist.agregarCancion("Cactus - Gustavo Cerati");
miPlaylist.agregarCancion("Luz de Día - Enanitos Verdes");
miPlaylist.agregarCancion(""); // intento vacío

miPlaylist.listarCanciones();

miPlaylist.eliminarCancion("Luz de Día - Enanitos Verdes");
miPlaylist.eliminarCancion("Tema inexistente");

miPlaylist.listarCanciones();
