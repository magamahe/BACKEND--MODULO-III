# Ejercicios Clase 14 – API REST con Express

## Introducción
En esta serie de ejercicios pondrás en práctica el trabajo con endpoints, parámetros dinámicos, desestructuración, express.json() y creación de APIs REST con ExpressJS.

---

## Ejercicio 1: Actualizar datos de un usuario (PUT)
Crear endpoint **PUT /users/:id** para actualizar un usuario.
- Si el usuario no existe → **404**
- Si faltan `name` o `email` → **400**
- Si todo está correcto → devolver usuario actualizado

---

## Ejercicio 2: Eliminar un usuario (DELETE)
Crear endpoint **DELETE /users/:id**
- Si no existe → **404**
- Si se elimina → devolver mensaje de confirmación

---

## Ejercicio 3: Filtrar usuarios por nombre (GET)
Crear endpoint que reciba `?name=` y devuelva usuarios cuyo nombre coincida parcial o totalmente.
- Si no hay coincidencias → arreglo vacío

---

## Ejercicio 4: Contar usuarios por dominio de email (GET)
Recibe `?domain=`
- Si falta domain → **400**
- Si no hay usuarios → **0**

---

## Ejercicio 5: Agregar múltiples usuarios (POST)
Recibe un arreglo de objetos `{name, email}`.
- Si algún usuario es inválido → **400** indicando cuál
- Si todo está ok → devolver lista actualizada

---

## Ejercicio 6: Obtener usuarios ordenados (GET)
Orden alfabético por nombre.
- Si `?order=desc` → descendente
- Si no, ascendente

---

## Ejercicio 7: Buscar usuarios por edad mínima y máxima (GET)
Recibe `?minAge=&maxAge=`
- Si falta alguno → **400**
- Si no hay usuarios → arreglo vacío

---

## Ejercicio 8: Estadísticas de usuarios (GET /users/stats)
Debe devolver:
1. Cantidad total de usuarios  
2. Edad promedio  
3. Usuario más joven  
4. Usuario más viejo  

---

## Ejercicio 9: API externa – Obtener usuarios (GET /external/users)
Debe hacer fetch a:  
https://jsonplaceholder.typicode.com/users  
y devolver los datos al cliente.

---

## Ejercicio 10: Buscar usuario por nombre exacto en API externa (GET /external/users/search)
Usa parámetro `?name=`
- Si falta name → **400**
- Si no existe coincidencia → **404**

---

¡Éxitos programando!
