/* Ejercicio 2: Sistema de Gestión de Cursos
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
contenga los estudiantes y el profesor. */

// 🎓 Ejercicio 2: Sistema de Gestión de Cursos
// Tema: Abstracción + Clases concretas + Composición

// Clase abstracta base que representa a una persona
export abstract class Persona {
    constructor(protected nombre: string, protected edad: number) {}

    // Método abstracto: cada subclase debe implementar su propia presentación
    abstract presentarse(): void;
}

// Clase concreta que representa a un estudiante
export class Estudiante extends Persona {
    constructor(nombre: string, edad: number, private matricula: string) {
        super(nombre, edad);
    }

    presentarse(): void {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y mi matrícula es ${this.matricula}.`);
    }
}

// Clase concreta que representa a un profesor
export class Profesor extends Persona {
    constructor(nombre: string, edad: number, private especialidad: string) {
        super(nombre, edad);
    }

    presentarse(): void {
        console.log(`Hola, soy el profesor ${this.nombre}, especialista en ${this.especialidad}.`);
    }
}

// Clase que representa un curso, con su profesor y lista de estudiantes
export class Curso {
    private estudiantes: Estudiante[] = [];

    constructor(private nombreCurso: string, private profesor: Profesor) {}

    // Agrega un estudiante al curso
    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
        console.log(`✅ Estudiante ${estudiante['nombre']} agregado al curso ${this.nombreCurso}.`);
    }

    // Lista todos los estudiantes inscritos
    listarEstudiantes(): void {
        console.log(`👩‍🎓 Estudiantes en el curso ${this.nombreCurso}:`);
        this.estudiantes.forEach((e, index) => {
            console.log(`${index + 1}. ${e['nombre']}`);
        });
    }

    // Muestra información general del curso
    mostrarInfo(): void {
        console.log(`📘 Curso: ${this.nombreCurso}`);
        console.log(`👨‍🏫 Profesor: ${this.profesor['nombre']}`);
        console.log(`👩‍🎓 Total de estudiantes: ${this.estudiantes.length}`);
    }
}

// 🧪 Ejemplo de uso
const profesor1 = new Profesor("Laura García", 40, "Matemáticas");
const estudiante1 = new Estudiante("Ana Pérez", 20, "E001");
const estudiante2 = new Estudiante("Carlos López", 22, "E002");

const curso1 = new Curso("Álgebra Avanzada", profesor1);

profesor1.presentarse();
estudiante1.presentarse();
estudiante2.presentarse();

curso1.agregarEstudiante(estudiante1);
curso1.agregarEstudiante(estudiante2);
curso1.mostrarInfo();
curso1.listarEstudiantes();
