// ejercicio_07.ts
export {}; // Esto evita conflictos de variables globales

// Declaramos un tipo literal que solo acepta ciertos valores
let dia: "Lunes" | "Martes" | "Miércoles";

dia = "Lunes";     // ✅ válido
console.log("Día seleccionado:", dia);

dia = "Martes";    // ✅ válido
console.log("Día seleccionado:", dia);

dia = "Miércoles"; // ✅ válido
console.log("Día seleccionado:", dia);

// dia = "Jueves"; // ❌ Error de TypeScript: no se puede asignar otro valor
