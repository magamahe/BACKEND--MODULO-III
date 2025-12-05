// src/routes/userRoutes.ts
import { Router } from 'express';
import { 
    filterUsersByName, 
    updateUser, 
    deleteUser, 
    countUsersByDomain,
    addBulkUsers,
    getSortedUsers,
    getUsersByAgeRange,
    getUserStats,
    getExternalUsers,
    searchExternalUserByName
} from '../controllers/userControllers';

const router = Router();

// Rutas ESPECÍFICAS primero
router.get('/count', countUsersByDomain);  // Ejercicio 4  => GET http://localhost:3000/users/count?domain=gmail.com
router.post('/bulk', addBulkUsers);        // Ejercicio 5 => POST http://localhost:3000/users/bulk [
                                            /*   { "name": "Ana Torres", "email": "ana@gmail.com", "age": 25},
                                            { "name": "Luis Perez", "email": "luis@gmail.com", "age": 30},
                                            { "name": "Carla Díaz", "email": "carla@yahoo.com", "age": 28}] */
router.get('/sorted', getSortedUsers);     // Ejercicio 6 => GET http://localhost:3000/users/sorted?order=asc
router.get('/age', getUsersByAgeRange);    // Ejercicio 7 => GET http://localhost:3000/users/age?minAge=20&maxAge=30
router.get('/stats', getUserStats);        // Ejercicio 8 => GET http://localhost:3000/users/stats


// Rutas de API externa (EJ 9 y 10)
router.get('/external/users', getExternalUsers); // Ejercicio 9 => GET http://localhost:3000/external/users
router.get('/external/users/search', searchExternalUserByName); // Ejercicio 10 => GET http://localhost:3000/external/users/search?name=Clementine Bauch


// Ruta de listado general y búsqueda por nombre
router.get('/', filterUsersByName); // Ejercicio 3 + listado // Ejercicio 3 (filtro por nombre) y base (getAllUsers) => GET http://localhost:3000/users?name=David

// Rutas dinámicas al final
router.put('/:id', updateUser);     // Ejercicio 1 => PUT http://localhost:3000/users/1   {"name": "Juan David", "email": "david@gmail.com"}
router.delete('/:id', deleteUser);  // Ejercicio 2  => DELETE http://localhost:3000/users/1

export default router;



