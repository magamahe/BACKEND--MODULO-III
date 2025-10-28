// Clase Estudiante
class Estudiante {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
    }
}

// Clase RegistroEstudiantes
class RegistroEstudiantes {
    private estudiantes: Estudiante[] = [];

    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    mostrarTodos(): void {
        console.log('--- Lista de Estudiantes ---');
        this.estudiantes.forEach(est => est.mostrarInfo());
    }
}

// Ejemplo de uso
let registro = new RegistroEstudiantes();

let estudiante1 = new Estudiante('Sofia', 24, 'Front End');
let estudiante2 = new Estudiante('Leticia', 32, 'Back End');

registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);

registro.mostrarTodos();
