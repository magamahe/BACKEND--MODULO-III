
# Clase: Fundamentos de TypeScript – Funciones, Variables y Objetos

En la clase de hoy continuaremos profundizando en los fundamentos de **TypeScript**, con especial énfasis en tres temas clave:

✅ **Funciones**  
✅ **Variables y constantes**  
✅ **Objetos**

Estos conceptos son esenciales para organizar y estructurar nuestro código de manera clara y eficiente.

## 🎯 Objetivos de la clase

- Aprender a declarar funciones que operen con diferentes tipos de datos y objetos.
- Reforzar el uso correcto de **variables** y **constantes**.
- Trabajar con **objetos**, para manejar estructuras más complejas.

## ✅ Al finalizar…
Deberás resolver una serie de **ejercicios prácticos** diseñados para aplicar los conceptos aprendidos.

## 🛠 Requisitos previos
Antes de comenzar con los ejercicios, asegúrate de tener instalado y configurado correctamente **TypeScript** en tu entorno.

👉 Puedes seguir el paso a paso del **PDF de la clase**.

## 🚨 Importante
**¡No olvides subir tus ejercicios a tu mochila en GitHub!**  
Estos ejercicios forman parte de **tu nota de la cursada**.

# 🧪 Actividades

## ✅ Ejercicio 1: Declarar y usar funciones con tipos
**Consigna:**  
Crea una función llamada `multiplicarNumeros` que acepte dos parámetros, ambos de tipo `number`, y retorne el producto de ambos números. Luego, muestra el resultado en la consola llamando a la función.

## ✅ Ejercicio 2: Uso de funciones con parámetros opcionales
**Consigna:**  
Define una función llamada `saludar` que acepte un parámetro `nombre: string` y otro opcional `saludo: string`.  
Si `saludo` no es proporcionado, la función debe usar **"Hola"** por defecto.  
Retorna el saludo y muéstralo en la consola.

## ✅ Ejercicio 3: Creación y manipulación de objetos
**Consigna:**  
Crea un objeto llamado `deportista` con las propiedades:
- `nombre: string`
- `deporte: string`
- `energia: number`

Define una función `entrenar` que acepte el objeto `deportista` y un número de horas de entrenamiento.  
La función debe **disminuir la energía en 5 por cada hora**.  
Muestra el estado final del deportista en la consola.

## ✅ Ejercicio 4: Función que devuelve un objeto
**Consigna:**  
Crea una función llamada `crearLibro` que acepte:
- `titulo: string`
- `autor: string`
- `paginas: number`

La función debe devolver un **objeto libro** con esas propiedades.  
Luego, crea **dos libros** usando la función y muestra sus detalles en la consola.

## ✅ Ejercicio 5: Función con parámetros rest
**Consigna:**  
Crea una función llamada `sumarTodos` que acepte una **cantidad indefinida de números** (rest parameters) y devuelva su suma.  
Luego, llama a la función con varios números y muestra el resultado.

## ✅ Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
**Consigna:**  
Crea una función llamada `crearPersona` que acepte:
- `nombre: string`
- `edad: number`
- `pais: string`

La función debe devolver un **objeto persona** con esas propiedades.  
Imprime el objeto retornado en la consola.

## ✅ Ejercicio 7: Función que modifica propiedades de un objeto
**Consigna:**  
Crea una función llamada `aumentarSalario` que acepte:
- un objeto `empleado` con `nombre: string` y `salario: number`
- un número que represente el **porcentaje de aumento**

La función debe **aumentar el salario del empleado** y devolver el nuevo salario.  
Muestra el resultado en la consola.

## ✅ Ejercicio 8: Funciones con diferentes tipos de retorno
**Consigna:**  
Crea una función llamada `calcularArea` que acepte el tipo de figura:
- `"circulo"` o `"rectangulo"`

Dependiendo del tipo, debe aceptar:
- `radio` (círculo)
- `largo` y `ancho` (rectángulo)

La función debe retornar el **área de la figura** usando **tipos específicos para cada caso**.

## ✅ Ejercicio 9: Funciones con retorno void y manipulación de objetos
**Consigna:**  
Crea un objeto llamado `coche` con:
- `marca`
- `modelo`
- `encendido: boolean`

Define una función `encenderCoche` que acepte el objeto `coche` y cambie `encendido` a `true`.

Muestra el estado del coche **antes y después** de llamar a la función.

## ✅ Ejercicio 10: Funciones y arrays de objetos
**Consigna:**  
Crea una función llamada `listarLibros` que acepte un array de objetos `libro`, donde cada libro tiene:
- `titulo: string`
- `autor: string`

La función debe recorrer el array y mostrar los detalles de cada libro en la consola.
