// ejercicio_04.ts
export {}; // archivo independiente
// 1️⃣ Declarar variables
let nombre: string = "María Gabriela";
let edad: number | undefined;  // simulamos parámetro opcional

// 2️⃣ Imprimir mensaje según si la edad está asignada
if (edad === undefined) {
  console.log(`Nombre: ${nombre}, Edad no proporcionada`);
} else {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

// 3️⃣ Probar asignando edad
edad = 35;

if (edad === undefined) {
  console.log(`Nombre: ${nombre}, Edad no proporcionada`);
} else {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
