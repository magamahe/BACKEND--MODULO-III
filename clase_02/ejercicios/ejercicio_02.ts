function saludar(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}!`;
}

console.log("Ejercicio 2:", saludar("Gabriela")); // Hola, Gabriela!
console.log("Ejercicio 2:", saludar("Gabriela", "Buen día")); // Buen día, Gabriela!
