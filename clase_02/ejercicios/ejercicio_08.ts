function calcularArea(figura: "circulo", radio: number): number;
function calcularArea(figura: "rectangulo", largo: number, ancho: number): number;
function calcularArea(figura: string, a: number, b?: number): number {
    if (figura === "circulo") {
        return Math.PI * a * a; // área = π * r^2
    } else if (figura === "rectangulo" && b !== undefined) {
        return a * b; // área = largo * ancho
    }
    return 0;
}

console.log("Ejercicio 8: Área círculo", calcularArea("circulo", 5));
console.log("Ejercicio 8: Área rectángulo", calcularArea("rectangulo", 4, 6));
