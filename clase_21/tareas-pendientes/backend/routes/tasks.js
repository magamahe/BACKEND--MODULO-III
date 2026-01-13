const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/tasks.json');

// Funciones auxiliares
const readTasks = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks → listar
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// POST /tasks → crear
router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title,
    description: description || '',
    completed: false
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

// PUT /tasks/:id → editar
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id == id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title ?? tasks[taskIndex].title,
    description: description ?? tasks[taskIndex].description,
    completed: completed ?? tasks[taskIndex].completed
  };

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id → eliminar
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  let tasks = readTasks();
  const newTasks = tasks.filter(t => t.id != id);

  if (tasks.length === newTasks.length) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  writeTasks(newTasks);
  res.json({ message: 'Tarea eliminada correctamente' });
});

module.exports = router;
