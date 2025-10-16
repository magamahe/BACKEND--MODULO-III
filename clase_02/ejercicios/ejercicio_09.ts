type Coche = {
    marca: string;
    modelo: string;
    encendido: boolean;
};

const coche: Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
};

function encenderCoche(c: Coche): void {
    c.encendido = true;
}

console.log("Ejercicio 9: Antes", coche);
encenderCoche(coche);
console.log("Ejercicio 9: Después", coche);
