"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaramos un tipo literal que solo acepta ciertos valores
let dia;
dia = "Lunes"; // ✅ válido
console.log("Día seleccionado:", dia);
dia = "Martes"; // ✅ válido
console.log("Día seleccionado:", dia);
dia = "Miércoles"; // ✅ válido
console.log("Día seleccionado:", dia);
// dia = "Jueves"; // ❌ Error de TypeScript: no se puede asignar otro valor
//# sourceMappingURL=ejercicio_07.js.map