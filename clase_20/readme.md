# Actividades Clase Numero 20:
## ¡Bienvenidas, chicas!

En esta serie de ejercicios vamos a poner en práctica lo que aprendimos en todas estas clases.

¡Manos a la obra y diviértanse programando! 

----

## Actividad 1: Testear una API con Postman

 Objetivo: Aprender a usar Postman para enviar peticiones a una API

 Consigna:

1.Crear un endpoint GET /saludo que devuelva un mensaje: "¡Hola, bienvenid@ a la API!".
2.Levantar el servidor Express.
3.Usar Postman para:
    - Enviar un GET a http://localhost:3000/saludo
    - Observar el resultado
    - Cambiar el método a POST y ver qué error devuelve
Guía:
    -  Mostrar cómo se selecciona el método HTTP en Postman.
    - Señalar dónde se ve la respuesta.
    - Observar los status (200, 404, etc).

---

## Actividad 2: Validar datos con Zod
 Objetivo: Validar entradas usando zod en un POST.
 Consigna:

1. Crear un endpoint POST /usuarios.
2. Usar zod para validar que el body tenga:
    - nombre: string, al menos 3 letras.
    - edad: número entero positivo.
3. Enviar datos correctos e incorrectos desde Postman y ver cómo responde la API.

---

## Actividad 3: Simular un error de CORS
 Objetivo: Observar el error de CORS y solucionarlo con Express.
 Consigna:
1. Crear una API que tenga GET /productos.
2. No usar cors al inicio.
3. Intentar consumir la API desde un archivo HTML en otro puerto (puede usarse un servidor simple como Live Server).
4. Observar el error en consola del navegador.
5. Luego, instalar cors y configurarlo para permitir el acceso.

----

## Actividad 4: Crear token con JWT
 Objetivo: Generar un token simple desde el backend.
 Consigna:
1. Crear un endpoint POST /login que reciba usuario y clave.
2. Si los datos son correctos (ej: usuario: "admin", clave: "1234"), generar un token.
3. Enviar ese token como respuesta.

---

## Actividad 5: Usar token en rutas protegidas
 Objetivo: Verificar tokens en rutas privadas
 Consigna:
1. Crear un middleware verificarToken.
2. Crear ruta GET /perfil protegida por este middleware.
3. Enviar el token en los headers desde Postman para acceder.

----
 
## Actividad 6: Usar variables de entorno
 Objetivo: Ocultar datos sensibles con .env
 Consigna:
1. Crear un archivo .env con:
    PORT=3000
    SECRET_KEY=claveultrasecreta
2. Usar dotenv para leer estas variables.
3. Usar SECRET_KEY para firmar los tokens.

---

## Actividad 7: Validar login con Zod
 Objetivo: Combinación de validación + lógica de login
 Consigna:
1. Crear un endpoint POST /login.
2. Validar que el body tenga:
    - email: string, debe ser email válido.
    - password: string, mínimo 6 caracteres.
3. Si la validación es exitosa, simular una respuesta de "usuario autenticado".

---

## Actividad 8: Crear ruta /admin solo accesible con token
 Objetivo: Simular una ruta protegida para administradores.
 Consigna:
1. En el token, incluir un campo rol: 'admin'.
2. Crear middleware que revise si el token existe y además el rol es 'admin'.
3. Si el rol no es admin, rechazar con status 403.

---

## Actividad 9: Crear y consumir una colección en Postman
Objetivo: Practicar el uso de colecciones en Postman
Consigna:
1. Crear una colección llamada "API Usuarios".
2. Agregar los endpoints de:
    - POST /login
    - GET /perfil con token
3. Guardar un token como variable de entorno en Postman y usarlo en los headers.

---

## Actividad 10: Proyecto Integrador Mini – API de Usuarios
Objetivo: Integrar todos los conceptos de la clase
Consigna:
1. Crear una pequeña API que tenga:
    - POST /registro: con validación Zod
    - POST /login: genera token
    - GET /perfil: requiere token
    - GET /admin: requiere token con rol 'admin'
2. Validar todo correctamente
3. Usar variables de entorno
4. Probar todo desde Postman