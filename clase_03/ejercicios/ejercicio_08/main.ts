// main.ts
import createMultiplier from './higherOrderFunctions';

const multiplyBy2 = createMultiplier(2); // crea una función que multiplica por 2
const multiplyBy5 = createMultiplier(5); // crea una función que multiplica por 5

console.log('5 x 2 =', multiplyBy2(5)); // 5 x 2 = 10
console.log('3 x 5 =', multiplyBy5(3)); // 3 x 5 = 15
