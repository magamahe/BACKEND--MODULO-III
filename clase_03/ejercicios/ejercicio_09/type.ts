// types.ts

// Tipo Person con propiedades name y age
export type Person = {
  name: string;
  age: number;
};

// Función que crea una persona
export function createPerson(name: string, age: number): Person {
  return { name, age };
}
