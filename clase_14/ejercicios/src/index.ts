// index.ts
import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';
import { getExternalUsers, searchExternalUserByName } from './controllers/userControllers';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

// Montar las rutas de usuarios en el prefijo /users
app.use('/users', userRoutes);

// Rutas para la API externa
app.get('/external/users', getExternalUsers);               // Ejercicio 9
app.get('/external/users/search', searchExternalUserByName); // Ejercicio 10

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
