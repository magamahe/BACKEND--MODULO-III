function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acum, num) => acum + num, 0);
}

console.log("Ejercicio 5:", sumarTodos(1, 2, 3, 4, 5)); // 15
console.log("Ejercicio 5:", sumarTodos(10, 20, 30));    // 60
