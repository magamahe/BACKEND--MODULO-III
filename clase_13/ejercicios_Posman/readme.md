# Ejercitación Postman y Routers

Este documento resume todos los ejercicios de la práctica sobre
**Routers en Express** y **uso de Postman**.

## Ejercicio 1: Crear un router básico para usuarios

-   Crear `userRouter.ts`.
-   Definir rutas:
    -   `GET /users` → devuelve lista de usuarios.
    -   `GET /users/:id` → devuelve un usuario por ID.

## Ejercicio 2: Dividir Routers por Funcionalidad

-   Crear routers separados para **usuarios** y **productos**.
-   Importarlos en `app.ts` usando `app.use()`.

## Ejercicio 3: Crear archivo app.ts

-   Configurar servidor Express.
-   Importar routers creados.
-   Escuchar en el puerto **3000**.

------------------------------------------------------------------------

## Ejercicio 4: Consulta de Aeropuertos (GET)

-   API: AirportGap\
-   URL: `https://airportgap.com/api/v1/airports`
-   Método: **GET**

Hacer un GET y mostrar la lista en consola.

------------------------------------------------------------------------

## Ejercicio 5: Crear un Producto (POST)

-   API: Fake Store\
-   URL: `https://fakestoreapi.com/products`
-   Método: **POST**

JSON para enviar:

``` json
{
  "title": "Camiseta de Programador",
  "price": 19.99,
  "description": "Camiseta cómoda para programadores.",
  "category": "Ropa",
  "image": "https://fakestoreapi.com/img/1.jpg"
}
```

------------------------------------------------------------------------

## Ejercicio 6: Actualizar Precio de Producto (PATCH)

-   API: Fake Store\
-   URL: `https://fakestoreapi.com/products/1`
-   Método: **PATCH**

Actualizar solo el campo necesario, por ejemplo:

``` json
{ "price": 25.99 }
```

------------------------------------------------------------------------

## Ejercicio 7: Eliminar un Producto (DELETE)

-   API: Fake Store\
-   URL: `https://fakestoreapi.com/products/1`
-   Método: **DELETE**

------------------------------------------------------------------------

## Ejercicio 8: Obtener Información de un Usuario (GET)

-   API: JSONPlaceholder\
-   URL: `https://jsonplaceholder.typicode.com/users/1`
-   Método: **GET**

------------------------------------------------------------------------

## Ejercicio 9: Crear un Nuevo Post (POST)

-   API: JSONPlaceholder\
-   URL: `https://jsonplaceholder.typicode.com/posts`
-   Método: **POST**

------------------------------------------------------------------------

## Ejercicio 10: Eliminar un Post (DELETE)

-   API: JSONPlaceholder\
-   URL: `https://jsonplaceholder.typicode.com/posts/1`
-   Método: **DELETE**
