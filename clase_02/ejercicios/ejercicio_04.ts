type Libro = {
    titulo: string;
    autor: string;
    paginas: number;
};

function crearLibro(titulo: string, autor: string, paginas: number): Libro {
    return { titulo, autor, paginas };
}

const libro1 = crearLibro("El Principito", "Antoine de Saint-Exupéry", 96);
const libro2 = crearLibro("1984", "George Orwell", 328);

console.log("Ejercicio 4:", libro1);
console.log("Ejercicio 4:", libro2);
