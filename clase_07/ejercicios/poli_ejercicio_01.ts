class Calculadora {

    // ===== Sobrecargas =====
    public sumar(a: number, b: number): number;
    public sumar(a: number, b: number, c: number): number;
    public sumar(a: string, b: string): string;

      // ===== Implementación única =====
    public sumar(a: any, b: any, c?: any): any {
    
        // Caso: suma de tres números
        if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
            return a + b + c;
        }
        // Caso: suma de dos números
        if(typeof a === "number" && typeof b === "number") {
            return a + b;
        }

        // Caso: concatenación de dos cadenas
        if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }

        // Caso no válido
        throw new Error("❌ Tipos de datos no compatibles para la operación sumar.");
    }
}


// ======================
// PRUEBA
// ======================
const calc = new Calculadora();

console.log("🧮 Suma de dos números:", calc.sumar(5, 10)); // 15
console.log("🧮 Suma de tres números:", calc.sumar(1, 2, 3)); // 6
console.log("🔤 Concatenación de cadenas:", calc.sumar("Hola ", "Mundo")); // "Hola Mundo"

// Descomenta para ver el error
 //console.log(calc.sumar(5, "hola"));