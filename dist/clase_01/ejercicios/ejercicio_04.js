"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1️⃣ Declarar variables
let nombre = "María Gabriela";
let edad; // simulamos parámetro opcional
// 2️⃣ Imprimir mensaje según si la edad está asignada
if (edad === undefined) {
    console.log(`Nombre: ${nombre}, Edad no proporcionada`);
}
else {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
// 3️⃣ Probar asignando edad
edad = 35;
if (edad === undefined) {
    console.log(`Nombre: ${nombre}, Edad no proporcionada`);
}
else {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
//# sourceMappingURL=ejercicio_04.js.map