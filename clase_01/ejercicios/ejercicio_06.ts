let dato: unknown;

dato = "Hola";
if (typeof dato === "string") {
  console.log("Es un string:", dato);
}

dato = 42;
if (typeof dato === "number") {
  console.log("Es un número:", dato);
}

dato = true;
if (typeof dato === "boolean") {
  console.log("Es un boolean:", dato);
}
