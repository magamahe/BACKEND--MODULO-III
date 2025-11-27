/* Ejercicio 1: Creando un Endpoint GET para listar usuarios

Consigna:
Imagina que tienes una aplicación que necesita mostrar una lista de
usuarios. Tu tarea es crear un endpoint GET en Express que responda con
un listado de usuarios en formato JSON. Cada usuario debe tener un
nombre (`name`) y un correo electrónico (`email`).

Utiliza el método `res.json()` para enviar la respuesta. Asegúrate de
que el servidor funcione correctamente en el puerto 3000 y de imprimir
un mensaje en la consola al iniciarlo. */

const express = require('express');
const app = express();
const port = 3000;

// Lista de usuarios simulada
const users = [
  { name: "María", email: "maria@example.com" },
  { name: "Juan", email: "juan@example.com" },
  { name: "Lucía", email: "lucia@example.com" }
];

// Endpoint GET /users
app.get('/users', (req, res) => {
  res.json(users); // Devolvemos JSON
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
