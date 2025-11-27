# Ejercitación Clase 12

Carrera Back End con NodeJs - 202504\
Profesora: Sachetti Sofia

## Actividades Clase Número 12

¡Bienvenidas, chicas!

En esta serie de ejercicios vamos a poner en práctica lo que aprendimos
sobre endpoints, el objeto `req` y `res`, la notación `:id` para
parámetros dinámicos, la desestructuración de objetos en JavaScript y el
uso de `express.json()`.

Estos ejercicios les permitirán construir y probar APIs REST básicas
utilizando ExpressJS, reforzando los conceptos clave mientras
desarrollan habilidades prácticas para crear servidores robustos.

Recuerden: Este es un desafío diseñado para que apliquen todo lo que han
aprendido hasta ahora y vayan desarrollando habilidades prácticas. Si
encuentran dificultades, investiguen, prueben distintas soluciones y no
tengan miedo de cometer errores. La próxima clase resolveremos todas las
dudas y analizaremos sus soluciones para seguir avanzando.

¡Manos a la obra y diviértanse programando!

------------------------------------------------------------------------

## Actividades

### Ejercicio 1: Creando un Endpoint GET para listar usuarios

**Consigna:**\
Imagina que tienes una aplicación que necesita mostrar una lista de
usuarios. Tu tarea es crear un endpoint GET en Express que responda con
un listado de usuarios en formato JSON. Cada usuario debe tener un
nombre (`name`) y un correo electrónico (`email`).

Utiliza el método `res.json()` para enviar la respuesta. Asegúrate de
que el servidor funcione correctamente en el puerto 3000 y de imprimir
un mensaje en la consola al iniciarlo.

------------------------------------------------------------------------

### Ejercicio 2: Crear un Endpoint POST para agregar usuarios

**Consigna:**\
Ahora vamos a permitir que el cliente agregue nuevos usuarios a la
lista. Tu tarea es crear un endpoint POST que reciba los datos del
usuario desde el cuerpo de la solicitud en formato JSON. Los datos deben
incluir `name` y `email`.

Si alguno de estos datos falta, el servidor debe responder con un error
(código 400).

Recuerda usar `express.json()` como middleware para procesar los datos
del cuerpo de la solicitud.

------------------------------------------------------------------------

### Ejercicio 3: Usar parámetros dinámicos con :id

**Consigna:**\
En este ejercicio, vamos a permitir que el cliente busque información de
un usuario por su ID. Crea un endpoint GET que reciba un parámetro
dinámico `:id` en la URL (por ejemplo, `/users/1`). Usa `req.params`
para capturar este valor y busca al usuario correspondiente en una
lista. Si no se encuentra el usuario, responde con un error 404.

------------------------------------------------------------------------

### Ejercicio 4: Manejo de rutas y errores con Express

**Consigna:**\
Crea un servidor que:

1.  Devuelva un mensaje de bienvenida (**¡Bienvenida al servidor de
    Express!**) al acceder a la ruta raíz `/`.
2.  Devuelva un error 404 (**Ruta no encontrada**) para cualquier ruta
    que no esté definida.
