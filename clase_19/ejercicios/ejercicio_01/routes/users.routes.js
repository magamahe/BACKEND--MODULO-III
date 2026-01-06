const express = require('express');
const router = express.Router();
let users = require('../data/users');
const validateUser = require('../middlewares/validation.middleware');

// ================================
// Actividad 2 + 6: CRUD con Validación
// ================================

// GET todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// POST crear usuario → aplica validación
router.post('/', validateUser, (req, res) => {
  const { nombre, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, nombre, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT actualizar usuario → aplica validación
router.put('/:id', validateUser, (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  user.nombre = req.body.nombre;
  user.email = req.body.email;
  res.json(user);
});

// DELETE usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const usuarioExistente = users.find(u => u.id === parseInt(id));
  if (!usuarioExistente) return res.status(404).json({ error: "Usuario no encontrado" });

  users = users.filter(u => u.id !== parseInt(id));
  res.json({ mensaje: "Usuario eliminado", usuario: usuarioExistente });
});

module.exports = router;
