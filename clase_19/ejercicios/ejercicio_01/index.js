const express = require('express');
const app = express();
const PORT = 3000;

const usersRoutes = require('./routes/users.routes');
const authMiddleware = require('./middlewares/auth.middleware'); // Actividad 5: autenticación

// ================================
// Actividad 1: Configuración básica y endpoint de prueba
// ================================

// Middleware para parsear JSON
app.use(express.json());

// ================================
// Actividad 3: Middleware personalizado
// ================================
// Registra en consola cada solicitud: método y URL
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ================================
// Actividad 1: Endpoint GET /api/message
// ================================
app.get('/api/message', (req, res) => {
  res.json({ mensaje: "¡API funcionando correctamente!" });
});

// ================================
// Actividad 2 + 6: Rutas de usuarios con validación
// ================================
app.use('/api/users', usersRoutes);

// ================================
// Actividad 5: Ruta protegida con middleware de autenticación
// ================================
app.get('/api/secure-data', authMiddleware, (req, res) => {
  res.json({
    mensaje: "Datos confidenciales",
    data: { secret: "123ABC", info: "Solo usuarios autorizados pueden ver esto" }
  });
});

// ================================
// Iniciar servidor
// ================================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
