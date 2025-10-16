type Persona = {
    nombre: string;
    edad: number;
    pais: string;
};

function crearPersona(nombre: string, edad: number, pais: string): Persona {
    return { nombre, edad, pais };
}

const persona1 = crearPersona("Gabriela", 30, "Argentina");
console.log("Ejercicio 6:", persona1);
