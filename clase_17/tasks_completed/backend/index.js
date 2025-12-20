import dotenv from 'dotenv';
dotenv.config(); // 👈 SIEMPRE PRIMERO

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Debug (dejalo hasta que conecte)
console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err.message));

// Rutas
import taskRoutes from './routes/taskRoute.js';
app.use('/api/tasks', taskRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
