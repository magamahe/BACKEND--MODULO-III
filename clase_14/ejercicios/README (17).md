# 📝 README -- Actividades Clase Nº 14 -- API REST con ExpressJS

## 📌 Introducción

En esta clase trabajamos con conceptos fundamentales para construir APIs
REST utilizando **ExpressJS**, incluyendo:

-   Endpoints
-   Parámetros dinámicos (`:id`)
-   Query parameters (`?name=...`)
-   Objeto `req` y `res`
-   Middleware `express.json()`
-   Manejo de listas y validaciones
-   Conexión con APIs externas

Los siguientes ejercicios permiten practicar cada uno de estos conceptos
desarrollando endpoints reales y probándolos con Postman o Thunder
Client.

------------------------------------------------------------------------

# 🚀 Actividades API REST

## ✅ Ejercicio 1: Actualizar datos de un usuario (PUT /users/:id)

Crea un endpoint PUT que permita actualizar un usuario existente.

### Requisitos:

-   Si el usuario no existe → **404**
-   Si faltan los campos `name` o `email` → **400**
-   Si todo es válido → devolver el usuario actualizado

------------------------------------------------------------------------

## 🗑️ Ejercicio 2: Eliminar un usuario (DELETE /users/:id)

Crea un endpoint DELETE para eliminar un usuario.

### Requisitos:

-   Si no existe → **404**
-   Si se elimina correctamente → enviar un mensaje de confirmación

------------------------------------------------------------------------

## 🔍 Ejercicio 3: Filtrar usuarios por nombre (GET /users?name=)

Crear un endpoint GET que filtre usuarios cuyo nombre coincida parcial o
totalmente con el valor de `name`.

-   Si no hay coincidencias → devolver `[]`

------------------------------------------------------------------------

## 📧 Ejercicio 4: Contar usuarios por dominio (GET /users/count?domain=)

Recibir un parámetro `domain` y contar cuántos usuarios tienen correo
con ese dominio.

### Requisitos:

-   Si falta `domain` → **400**
-   Si no hay coincidencias → devolver **0**

------------------------------------------------------------------------

## ➕ Ejercicio 5: Agregar múltiples usuarios (POST /users/bulk)

Recibir un arreglo de usuarios, cada uno con `name` y `email`.

### Requisitos:

-   Si algún usuario es inválido → **400** indicando cuál
-   Si todo es válido → agregar todos y devolver la lista completa

------------------------------------------------------------------------

## 🅰️ Ejercicio 6: Obtener usuarios ordenados (GET /users/sorted?order=)

Ordenar usuarios alfabéticamente por `name`.

-   Si `order=desc` → descendente
-   Si no se indica, o es cualquier otro valor → ascendente

------------------------------------------------------------------------

## 🎂 Ejercicio 7: Buscar usuarios por edad (GET /users/age?minAge=&maxAge=)

Filtrar usuarios cuya edad esté dentro del rango.

### Requisitos:

-   Si falta alguno de los parámetros → **400**
-   Si no hay coincidencias → devolver `[]`

------------------------------------------------------------------------

## 📊 Ejercicio 8: Estadísticas de usuarios (GET /users/stats)

El endpoint debe devolver:

1.  Cantidad total de usuarios\
2.  Edad promedio\
3.  Usuario más joven\
4.  Usuario más viejo

------------------------------------------------------------------------

## 🌐 Ejercicio 9: API externa -- Obtener usuarios (GET /external/users)

Debe solicitar datos desde: https://jsonplaceholder.typicode.com/users\
Y devolverlos al cliente.

------------------------------------------------------------------------

## 🎯 Ejercicio 10: Buscar usuario por nombre exacto en API externa (GET /external/users/search?name=)

### Requisitos:

-   Si falta `name` → **400**
-   Si no existe coincidencia exacta → **404**
-   Si existe → devolver el usuario encontrado
