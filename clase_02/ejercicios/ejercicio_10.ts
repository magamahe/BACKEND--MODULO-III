type LibroSimple = {
    titulo: string;
    autor: string;
};

function listarLibros(libros: LibroSimple[]): void {
    libros.forEach((libro, index) => {
        console.log(`Libro ${index + 1}: ${libro.titulo} - ${libro.autor}`);
    });
}

const biblioteca: LibroSimple[] = [
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }
];

console.log("Ejercicio 10:");
listarLibros(biblioteca);
