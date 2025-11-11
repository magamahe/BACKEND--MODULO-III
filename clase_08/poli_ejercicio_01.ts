/* Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos
Sobrecargados
Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
instrumento de manera diferente. Además, agrega una sobrecarga del método
tocar en la clase base para permitir tocar con o sin acompañamiento. */

// 🎵 Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos Sobrecargados

/* // Clase abstracta base que representa un instrumento musical
export abstract class InstrumentoMusical {
    // Método abstracto que cada clase hija debe implementar
    abstract tocar(): void;

    // 🔁 Sobrecarga de método: permite tocar con o sin acompañamiento
    tocar(conAcompanamiento: boolean): void;
    tocar(): void;

    // Implementación del método con lógica polimórfica
    tocar(conAcompanamiento?: boolean): void {
        if (conAcompanamiento) {
            console.log("🎶 El instrumento se toca con acompañamiento.");
        } else {
            console.log("🎵 El instrumento se toca solo.");
        }
    }
}

// 🎸 Clase derivada que representa una guitarra
export class Guitarra extends InstrumentoMusical {
    // Sobrescritura del método tocar sin parámetros
    tocar(): void {
        console.log("🎸 Tocando la guitarra con un solo de rock.");
    }

    // Sobrecarga del método con acompañamiento
    tocar(conAcompanamiento: boolean): void {
        if (conAcompanamiento) {
            console.log("🎸🎶 Tocando la guitarra con acompañamiento de batería.");
        } else {
            console.log("🎸 Tocando la guitarra acústicamente.");
        }
    }
}

// 🎹 Clase derivada que representa un piano
export class Piano extends InstrumentoMusical {
    tocar(): void {
        console.log("🎹 Tocando el piano con una melodía suave.");
    }

    tocar(conAcompanamiento: boolean): void {
        if (conAcompanamiento) {
            console.log("🎹🎻 Tocando el piano acompañado de violín.");
        } else {
            console.log("🎹 Tocando el piano en solo.");
        }
    }
}

// 🧪 Ejemplo de uso:
const guitarra = new Guitarra();
const piano = new Piano();

guitarra.tocar();                  // sin acompañamiento
guitarra.tocar(true);              // con acompañamiento

piano.tocar();                     // sin acompañamiento
piano.tocar(true);                 // con acompañamiento
 */

//ERROR: TypeScript no permite combinar métodos abstractos con sobrecargas dentro de una misma definición, ni declarar múltiples implementaciones del mismo método en clases hijas.

//CORREGIDA

// 🎵 Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos Sobrecargados (versión corregida)

export abstract class InstrumentoMusical {
    // Método abstracto con parámetro opcional
    abstract tocar(conAcompanamiento?: boolean): void;
}

// 🎸 Clase derivada Guitarra
export class Guitarra extends InstrumentoMusical {
    tocar(conAcompanamiento?: boolean): void {
        if (conAcompanamiento) {
            console.log("🎸 Tocando la guitarra con acompañamiento de batería.");
        } else {
            console.log("🎸 Tocando la guitarra acústicamente.");
        }
    }
}

// 🎹 Clase derivada Piano
export class Piano extends InstrumentoMusical {
    tocar(conAcompanamiento?: boolean): void {
        if (conAcompanamiento) {
            console.log("🎹 Tocando el piano acompañado de violín.");
        } else {
            console.log("🎹 Tocando el piano en solo.");
        }
    }
}

// 🧪 Ejemplo de uso:
const guitarra = new Guitarra();
const piano = new Piano();

guitarra.tocar();        // 🎸 Tocando la guitarra acústicamente.
guitarra.tocar(true);    // 🎸 Tocando la guitarra con acompañamiento de batería.

piano.tocar();           // 🎹 Tocando el piano en solo.
piano.tocar(true);       // 🎹 Tocando el piano acompañado de violín.
