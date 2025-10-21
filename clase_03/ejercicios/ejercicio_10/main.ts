// main.ts
import { add, subtract, capitalize, reverse, createUser } from './utils';

console.log('Suma:', add(7, 3));                     // Suma: 10
console.log('Resta:', subtract(7, 3));               // Resta: 4
console.log('Capitalizado:', capitalize('typescript')); // Capitalizado: Typescript
console.log('Invertido:', reverse('typescript'));       // Invertido: tpircsypt

const usuarioConsolidado = createUser('Laura', 30);
console.log('Usuario creado:', usuarioConsolidado); // Usuario creado: { name: 'Laura', age: 30 }
