//<T> indica un tipo genérico
function identidad<T>(valor: T): T { //La función recibe un valor de tipo T y devuelve un valor del mismo tipo T.
  return valor;
}

console.log(identidad<string>("Hola TypeScript"));
console.log(identidad<number>(42));
console.log(identidad<boolean>(true));
