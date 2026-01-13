const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/tasks', tasksRoutes);

// Prueba rápida
app.get('/', (req, res) => {
  res.send('API de Tareas funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
