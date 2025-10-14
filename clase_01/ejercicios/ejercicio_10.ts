// ejercicio_10.ts
export {}; // Evita conflictos de variables globales

// Declaramos un objeto con propiedades de distintos tipos
let persona: { nombre: string; edad: number; esActivo: boolean } = {
  nombre: "Gabriela",
  edad: 43,
  esActivo: true
};

// Accedemos e imprimimos las propiedades
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Activo:", persona.esActivo);
