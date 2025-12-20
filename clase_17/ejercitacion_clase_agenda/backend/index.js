// Importamos las dependencias
const express = require('express');
const path = require('path');
const cors = require('cors');
const contactsRoutes = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Para que el front se pueda comunicar con el servidor
app.use(express.json()); // Para lectura de datos en formato JSON

// Para servir archivos estaticos del frontend
app.use(express.static(path.join(__dirname, '../public')));

// Rutas API
app.use('/api/contacts', contactsRoutes);

// Ruta para manejar cualquier otra solicitud
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});