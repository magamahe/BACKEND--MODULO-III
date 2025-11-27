/*  Ejercicio 3: Usar parámetros dinámicos con :id

Consigna:
En este ejercicio, vamos a permitir que el cliente busque información de
un usuario por su ID. Crea un endpoint GET que reciba un parámetro
dinámico `:id` en la URL (por ejemplo, `/users/1`). Usa `req.params`
para capturar este valor y busca al usuario correspondiente en una
lista. Si no se encuentra el usuario, responde con un error 404.
 */

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Lista de usuarios simulada con ID
const users = [
  { id: 1, name: "María", email: "maria@example.com" },
  { id: 2, name: "Juan", email: "juan@example.com" },
  { id: 3, name: "Lucía", email: "lucia@example.com" }
];

// -------------------------
// GET /users
// -------------------------
app.get('/users', (req, res) => {
  res.json(users);
});

// -------------------------
// GET /users/:id
// -------------------------
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // capturamos el parámetro

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  res.json(user);
});
