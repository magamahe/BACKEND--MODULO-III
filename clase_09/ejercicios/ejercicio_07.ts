/* Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista) 
Crea una función genérica que acepte una tupla con dos elementos de cualquier 
tipo y retorne una nueva tupla con los elementos invertidos. 
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica 
de programacion */

function invertirTupla<A, B>(tupla: [A, B]): [B, A] {
  return [tupla[1], tupla[0]];
}

const resultado = invertirTupla(["Flor", 15]);
console.log(resultado); // → [15, "Flor"]
