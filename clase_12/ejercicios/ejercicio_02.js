/* 
Ejercicio 2: Crear un Endpoint POST para agregar usuarios

Consigna:
Ahora vamos a permitir que el cliente agregue nuevos usuarios a la
lista. Tu tarea es crear un endpoint POST que reciba los datos del
usuario desde el cuerpo de la solicitud en formato JSON. Los datos deben
incluir `name` y `email`.

Si alguno de estos datos falta, el servidor debe responder con un error
(código 400).

Recuerda usar `express.json()` como middleware para procesar los datos
del cuerpo de la solicitud. */

const express = require('express');
const app = express();
const port = 3000;

// Middleware para leer JSON
app.use(express.json());

// Lista de usuarios simulada
const users = [
  { name: "María", email: "maria@example.com" },
  { name: "Juan", email: "juan@example.com" },
  { name: "Lucía", email: "lucia@example.com" }
];

// -------------------------
// GET /users
// -------------------------
app.get('/users', (req, res) => {
  res.json(users);
});

// -------------------------
// POST /users
// -------------------------
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Validación de datos
  if (!name || !email) {
    return res.status(400).json({
      error: "Faltan datos. Debes enviar 'name' y 'email'."
    });
  }

  // Crear nuevo usuario
  const newUser = { name, email };
  users.push(newUser);

  // Respuesta exitosa
  res.status(201).json({
    message: "Usuario creado correctamente",
    user: newUser
  });
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
