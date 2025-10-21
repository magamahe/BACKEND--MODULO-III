// higherOrderFunctions.ts

// Función que devuelve otra función que multiplica por un factor dado
export default function createMultiplier(factor: number): (num: number) => number {
  return function(num: number): number {
    return num * factor;
  };
}
