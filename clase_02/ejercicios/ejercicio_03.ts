type Deportista = {
    nombre: string;
    deporte: string;
    energia: number;
};

const deportista: Deportista = {
    nombre: "Ana",
    deporte: "Natación",
    energia: 100
};

function entrenar(d: Deportista, horas: number): void {
    d.energia -= horas * 5;
}

console.log("Ejercicio 3: Antes de entrenar", deportista);
entrenar(deportista, 3);
console.log("Ejercicio 3: Después de entrenar", deportista);
