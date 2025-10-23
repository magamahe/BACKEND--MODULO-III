function filtrarElementos<T>(array: (number | string | boolean)[]): string[] {
  const resultado: string[] = [];

  for (const elemento of array) {
    if (typeof elemento === "string") {
      resultado.push((elemento as string).toUpperCase()); //Se usa (elemento as string) para acceder a métodos de texto (toUpperCase()).
    }
  }

  return resultado;
}

console.log(filtrarElementos([1, "Hola", true, "Mundo", 42]));
