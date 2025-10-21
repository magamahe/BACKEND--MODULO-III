// main.ts
import { add, subtract, capitalize, reverse } from './index';

console.log('Suma (re-export):', add(10, 5));          // Suma (re-export): 15
console.log('Resta (re-export):', subtract(10, 5));    // Resta (re-export): 5
console.log('Capitalizado (re-export):', capitalize('typescript')); // Typescript
console.log('Invertido (re-export):', reverse('typescript'));       // tpircsypt
