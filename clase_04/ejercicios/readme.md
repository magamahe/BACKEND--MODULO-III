# 🧩 Clase Nº4 – Actividades de TypeScript

¡Bienvenidas, chicas! 💜  
En estas actividades pondrás en práctica conceptos clave como **estructuras de control de flujo**, **genéricos** y **aserciones de tipos**.  

TypeScript es un poderoso lenguaje tipado que extiende las funcionalidades de JavaScript, permitiendo un mejor control sobre los tipos de datos y proporcionando herramientas para escribir código más seguro y escalable.

A través de estas actividades, te familiarizarás con los bucles `for...in` y `for...of`, aprenderás a manejar genéricos y también usarás aserciones de tipo para asegurar que tu código sea robusto y confiable.  
Cada ejercicio está diseñado para que lo resuelvas, ¡y al final tendrás la solución en GitHub para comparar tu trabajo!

---

## 🧰 Requisitos

Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno.  
Para esto, seguí el paso a paso detallado en el PDF de la clase.

---

## ⚠️ Importante

📤 **No olvides subir tus ejercicios a tu repositorio en GitHub.**  
Son parte de la **nota de la cursada**, así que asegúrate de subirlos correctamente.

---

## ✨ Actividades

### 🟣 Actividad 1: Usar For...In para recorrer propiedades de un objeto

Crea un objeto con al menos 3 propiedades (`nombre`, `edad`, `ciudad`) y usa un bucle `for...in` para recorrer y mostrar cada propiedad y su valor.

```typescript
const persona = {
  nombre: "María",
  edad: 28,
  ciudad: "Buenos Aires"
};

for (const key in persona) {
  console.log(`${key}: ${persona[key as keyof typeof persona]}`);
}
```

---

### 🟣 Actividad 2: Usar For...Of para recorrer los valores de un arreglo

Crea un arreglo con al menos 5 números y usa un bucle `for...of` para imprimir cada número en consola.

```typescript
const numeros = [10, 20, 30, 40, 50];

for (const numero of numeros) {
  console.log(numero);
}
```

---

### 🟣 Actividad 3: Crear una función genérica

Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva.  
Prueba la función con diferentes tipos de datos.

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola TypeScript"));
console.log(identidad<number>(42));
console.log(identidad<boolean>(true));
```

---

### 🟣 Actividad 4: Usar aserciones de tipo

Declara una variable de tipo `any` y usa una aserción para tratarla como `string`, accediendo a la propiedad `.length`.

```typescript
let valor: any = "Aprendiendo TypeScript";
let longitud: number = (valor as string).length;

console.log(`La longitud del texto es: ${longitud}`);
```

---

### 🟣 Actividad 5: Usar aserciones dobles

Crea una variable de tipo `any` y haz una conversión con aserciones dobles para convertirla en un `number`.  
Muestra el resultado.

```typescript
let dato: any = "123";
let numeroConvertido: number = (<number><unknown>dato);

console.log(`Número convertido: ${numeroConvertido}`);
```

---

### 🟣 Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y Aserciones

Crea una función genérica llamada `filtrarElementos` que reciba un arreglo de valores mixtos  
(por ejemplo, `number | string | boolean`).  
Usando un bucle `for...of`, filtra solo los valores que sean **cadenas de texto (string)**.  
Utiliza aserciones de tipo para acceder a las propiedades específicas de string.

```typescript
function filtrarElementos<T>(array: (number | string | boolean)[]): string[] {
  const resultado: string[] = [];

  for (const elemento of array) {
    if (typeof elemento === "string") {
      resultado.push((elemento as string).toUpperCase());
    }
  }

  return resultado;
}

console.log(filtrarElementos([1, "Hola", true, "Mundo", 42]));
```

---

### 🟣 Actividad 7: Aserciones y genéricos con funciones y objetos

Crea una función genérica llamada `procesarObjeto` que reciba un objeto genérico y:

1. Use un bucle `for...in` para recorrer sus propiedades.  
2. Si el valor de una propiedad es una cadena de texto (`string`), conviértelo a **minúsculas**.  
3. Si es un número (`number`), elévalo al **cuadrado**.  
4. Si es un booleano, **invierte su valor**.  

Usa aserciones de tipo para realizar las transformaciones.

```typescript
function procesarObjeto<T extends Record<string, any>>(obj: T): T {
  const nuevoObj = { ...obj };

  for (const key in nuevoObj) {
    const valor = nuevoObj[key];

    if (typeof valor === "string") {
      nuevoObj[key] = (valor as string).toLowerCase() as any;
    } else if (typeof valor === "number") {
      nuevoObj[key] = (valor as number) ** 2 as any;
    } else if (typeof valor === "boolean") {
      nuevoObj[key] = !(valor as boolean) as any;
    }
  }

  return nuevoObj;
}

const ejemplo = {
  nombre: "GABRIELA",
  edad: 5,
  activa: true
};

console.log(procesarObjeto(ejemplo));
```

---

📘 **Consejo:**  
Usá `tsc archivo.ts` para compilar y `node archivo.js` para ejecutar el código compilado.  
También podés configurar tu `tsconfig.json` para automatizar el proceso.

---

✨ **¡Felicitaciones!**  
Completando estas actividades estás afianzando tus conocimientos en **TypeScript**, un paso clave para convertirte en una desarrolladora más sólida.
