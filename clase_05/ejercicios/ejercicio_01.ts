//1. Declaro array
export let numeros : Number[] =  [5, 10, 15, 20, 25];
console.log('Array original:', numeros);

// 2. Imprime el tercer elemento
console.log('Tercer elemento:', numeros[2]);

// 3. Añade 30 al final
numeros.push(30);
console.log('Array después de añadir 30:', numeros);

// 4. Elimina el primer número
numeros.shift();
console.log('Array después de eliminar el primer elemento:', numeros);

// 5. Longitud actual
console.log('Longitud actual del array:', numeros.length);