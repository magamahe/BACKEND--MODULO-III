// ======================================================
// CLASE 20 - API COMPLETA (Express + Zod + JWT + CORS)
// ======================================================
// Todas las actividades están en este archivo
// Ideal para entender el flujo completo de una API
// ======================================================

// -----------------------------
// IMPORTS
// -----------------------------
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

// -----------------------------
// CONFIGURACIÓN INICIAL
// -----------------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// ======================================================
// ACTIVIDAD 3 (PARTE 2) - HABILITAR CORS
// Comentá esta línea para ver el error de CORS
// ======================================================
app.use(cors());

// ======================================================
// ACTIVIDAD 1 - ENDPOINT DE PRUEBA (GET /saludo)
// ======================================================
app.get('/saludo', (req, res) => {
  res.status(200).json({
    mensaje: '¡Hola, bienvenid@ a la API!'
  });
});

// ======================================================
// ACTIVIDAD 2 - VALIDAR DATOS CON ZOD (POST /usuarios)
// ======================================================
const usuarioSchema = z.object({
  nombre: z.string().min(3, 'El nombre debe tener al menos 3 letras'),
  edad: z.number().int().positive('La edad debe ser un número positivo')
});

app.post('/usuarios', (req, res) => {
  const resultado = usuarioSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      errores: resultado.error.issues
    });
  }

  res.status(201).json({
    mensaje: 'Usuario válido',
    data: resultado.data
  });
});

// ======================================================
// ACTIVIDAD 4 - LOGIN Y GENERACIÓN DE TOKEN JWT
// ======================================================
app.post('/login', (req, res) => {
  const { usuario, clave } = req.body;

  // Simulación de login
  if (usuario === 'admin' && clave === '1234') {
    const token = jwt.sign(
      { usuario, rol: 'admin' },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  }

  res.status(401).json({
    mensaje: 'Credenciales incorrectas'
  });
});

// ======================================================
// ACTIVIDAD 5 - MIDDLEWARE PARA VERIFICAR TOKEN
// ======================================================
const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // El token viene como: "Bearer TOKEN"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      mensaje: 'Token requerido'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // guardamos el usuario en la request
    next();
  } catch (error) {
    res.status(403).json({
      mensaje: 'Token inválido o expirado'
    });
  }
};

// ======================================================
// ACTIVIDAD 5 - RUTA PROTEGIDA (GET /perfil)
// ======================================================
app.get('/perfil', verificarToken, (req, res) => {
  res.json({
    mensaje: 'Acceso al perfil permitido',
    usuario: req.user
  });
});

// ======================================================
// ACTIVIDAD 6 - VARIABLES DE ENTORNO
// Usamos SECRET_KEY desde .env para JWT
// ======================================================
// PORT y SECRET_KEY vienen desde el archivo .env

// ======================================================
// ACTIVIDAD 7 - LOGIN VALIDADO CON ZOD
// ======================================================
const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
});

app.post('/login-zod', (req, res) => {
  const resultado = loginSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      errores: resultado.error.issues
    });
  }

  res.json({
    mensaje: 'Usuario autenticado correctamente'
  });
});

// ======================================================
// ACTIVIDAD 8 - RUTA SOLO PARA ADMIN
// ======================================================
const verificarAdmin = (req, res, next) => {
  if (req.user.rol !== 'admin') {
    return res.status(403).json({
      mensaje: 'Acceso denegado: solo administradores'
    });
  }
  next();
};

app.get('/admin', verificarToken, verificarAdmin, (req, res) => {
  res.json({
    mensaje: 'Bienvenid@ a la zona de administración'
  });
});

// ======================================================
// ACTIVIDAD 3 (PARTE 1) - API PARA PROBAR CORS
// ======================================================
app.get('/productos', (req, res) => {
  res.json(['Notebook', 'Mouse', 'Teclado']);
});

// ======================================================
// SERVIDOR
// ======================================================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
