•
Carrera Back End con NodeJs - 202504
•
Profesora: Sachetti Sofia
Actividades Clase Numero 16:
¡Bienvenidas, chicas!
En esta serie de ejercicios vamos a poner en práctica todo lo que hemos aprendido sobre HTTP y métodos de solicitud/respuesta, API REST, Modelo MVC y ExpressJs.
Ahora es el momento de dar un paso adelante y construir APIs REST utilizando Node.js y ExpressJS, una herramienta que nos permite crear servidores web de manera más rápida y eficiente.
Estos ejercicios están diseñados para que, paso a paso, puedan implementar endpoints funcionales y robustos, validando datos de entrada y configurando accesos seguros. Además, trabajaremos en manejar posibles errores y asegurar que nuestras APIs respondan adecuadamente a las solicitudes.
Recuerden: Este es un desafío diseñado para que apliquen todo lo que han aprendido hasta ahora y vayan desarrollando habilidades prácticas. Si encuentran dificultades, investiguen, prueben distintas soluciones y no tengan miedo de cometer errores. La próxima clase resolveremos todas las dudas y analizaremos sus soluciones para seguir avanzando.
¡Manos a la obra y diviértanse programando!
Actividades:
Ejercicio 1: GET y POST de usuarios:
Descripción:
1.
Crea un arreglo inicial de usuarios con propiedades id y name:
Por ejemplo: { id: 1, name: “Emma”}
2.
Implementa dos endpoints:
•
GET /users: Devuelve la lista de usuarios.
•
POST /users: Permite agregar un usuario enviando un objeto con id y name en el body.
3.
Si faltan datos, responde con un error adecuado.
Pistas:
•
Usa app.get() y app.post() para manejar las rutas.
•
Utiliza req.body para capturar los datos enviados en la solicitud POST.
•
Asegúrate de usar express.json() como middleware para procesar el cuerpo de la solicitud.
Ejercicio 2: GET y POST de productos:
Descripción:
1. Crea un arreglo inicial de productos con id y name.
Ejemplo: { id: 1, name: “Notebook”}
2. Implementa dos endpoints:
• GET /products: Devuelve la lista de productos.
• POST /products: Permite agregar un producto enviando id y name en el body.
3. Asegúrate de manejar errores si faltan datos.
Pistas:
• Usa estructuras similares a las del ejercicio de usuarios.
• El arreglo inicial puede contener al menos dos productos.
• Usa res.json() para devolver datos como respuesta.
Ejercicio 3: PATCH y DELETE para usuarios:
Descripción:
Implementa dos endpoints adicionales para el CRUD de usuarios:
•
PATCH /users/:id: Permite actualizar el name de un usuario.
•
DELETE /users/:id: Elimina un usuario por id.
Pistas:
•
Usa req.params para capturar el ID de la ruta.
•
Valida que el usuario exista antes de realizar la operación.
Ejercicio 4: PATCH y DELETE para productos:
Descripción:
Implementa dos endpoints adicionales para el CRUD de productos:
o
PATCH /products/:id: Permite actualizar el name de un producto.
o
DELETE /products/:id: Elimina un producto por id.
Pistas:
•
Usa las estructuras y lógica del ejercicio anterior como referencia.
•
Cambia el arreglo y los campos para adaptarlo a productos.
Ejercicio 5: Validar datos de usuarios con Zod:
Descripción:
1. Crea un esquema con Zod para validar que los datos de un usuario incluyan un id numérico y un name de tipo string.
2. Valida los datos enviados en un endpoint POST antes de agregarlos al arreglo.
Pistas:
•
Usa z.object() para definir el esquema de validación.
•
Emplea .parse() o .safeParse() para validar los datos.
Ejercicio 6: Validar productos con Zod
Descripción:
1.
Define un esquema con Zod para validar que los datos de un producto.
Cada producto debe tener:
•
id: Número obligatorio.
•
name: Cadena de texto obligatoria.
2.
Valida los datos antes de agregarlos al arreglo en un endpoint POST.
Pistas:
•
Usa el esquema del ejercicio 5 como referencia, adaptándolo a los productos.
•
Responde con un error 400 en caso de datos inválidos.
Ejercicio 7: Validación de Datos de una Tarea con Zod (POST):
Descripcion:
1.
Crea un esquema con Zod para validar los datos de una tarea.
2.
Los datos de la tarea deben incluir:
o
title de tipo string (obligatorio).
o
completed de tipo boolean (opcional, por defecto debe ser false).
3.
Valida los datos enviados en un endpoint POST antes de agregarlos a un arreglo temporal de tareas.
Pistas:
•
Usa z.object() para definir el esquema.
•
Utiliza .default() para establecer un valor por defecto para completed.
Ejercicio 8: Configuración básica de CORS:
Descripción:
1.
Configura un servidor para permitir solicitudes desde cualquier origen.
2.
Crea un endpoint GET /data que devuelva un objeto JSON con datos simples.
Ejercicio 9: Configuración de CORS para un dominio específico:
Descripción:
1.
Configura un servidor para permitir solicitudes solo desde http://localhost:3000.
2.
Crea un endpoint GET que devuelva un mensaje simple, accesible solo desde ese dominio.
Pistas:
•
Usa el paquete cors para configurar las políticas.
•
Define el origen permitido en la configuración de CORS.
Ejercicio 10: Middleware básico de autenticación
Descripción:
1.
Crea un middleware de autenticación que verifique si la solicitud incluye un token en el encabezado Authorization.
2.
Si el token está presente, permite que la solicitud continúe.
3.
Si no hay un token, responde con un código de estado 403 y un mensaje de "No autorizado".
Pista:
•
Usa req.headers.authorization para acceder al encabezado de autorización.