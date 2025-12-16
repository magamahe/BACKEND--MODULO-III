import express from 'express';
import { z } from 'zod'; //a partir de ejercicio 5
import cors from 'cors'; // a partir de ejercicio 8



// Crear la aplicación Express
const app = express();
// Definir el puerto
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

/* ===========
    Ejercicio 1
============= */
// Arreglo inicial de usuarios
let users = [
  { id: 1, name: 'Emma' },
  { id: 2, name: 'Olivia' },
  { id: 3, name: 'Gabi' }
];

// GET /users -> devuelve todos los usuarios
app.get('/users', (req, res) => {
    // Si no hay usuarios, responder con un mensaje adecuado
    if (users.length === 0) {
        return res.status(200).json({ message: 'No hay usuarios disponibles.' });
    }
    // Devolver la lista de usuarios
    res.json(users);
});

// POST /users -> agrega un nuevo usuario
/* app.post('/users', (req, res) => {
    // Extraer datos del body
    const { id, name } = req.body;

    // Validación simple
    if (!id || !name) {
        return res.status(400).json({ error: 'Faltan datos: id y name son requeridos.' });
    }

    // Agregar usuario al arreglo
    users.push({ id, name });
    res.status(201).json({ message: 'Usuario agregado correctamente', user: { id, name } });
}); */


/* ===========
    Ejercicio 2
============= */
// Arreglo inicial de productos
let products = [
  { id: 1, name: 'Teclado' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Monitor' }
];

//Get /products -> devuelve todos los productos
app.get('/products', (req, res) => {
    // Si no hay productos, responder con un mensaje adecuado
    if (products.length === 0) {    
        return res.status(200).json({ message: 'No hay productos disponibles.' });
    }
    // Devolver la lista de productos
    res.json(products);
});

//Post /products -> agrega un nuevo producto
/* app.post('/products', (req, res) => {
    // Extraer datos del body
    const { id, name } = req.body;      
    // Validación simple
    if (!id || !name) {
        return res.status(400).json({ error: 'Faltan datos: id y name son requeridos.' });
    }   
    // Agregar producto al arreglo
    products.push({ id, name });
    res.status(201).json({ message: 'Producto agregado correctamente', product: { id, name } });
}
);
 */

/* ===========
    Ejercicio 3
============= */

//patch para users
app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;      
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
    }   
    if (name) {
        user.name = name;
    }   
    res.json({ message: 'Usuario actualizado correctamente', user });
});

//DELETE para users
app.delete('/users/:id', (req, res) => {
    // Extraer el id de los parámetros de la ruta
    const userId = parseInt(req.params.id);
    // Buscar el índice del usuario a eliminar
    const userIndex = users.findIndex(u => u.id === userId);
    // Si no se encuentra el usuario, responder con un error 404
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
    }   
    // Eliminar el usuario del arreglo
    users.splice(userIndex, 1);
    // Responder con un mensaje de éxito
    res.json({ message: 'Usuario eliminado correctamente' });
}); 


/* ===========
    Ejercicio 4
============= */
// PATCH para products
app.patch('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);  
    const { name } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    if (name) {
        product.name = name;
    }   
    res.json({ message: 'Producto actualizado correctamente', product });
});

//DELETE para products
app.delete('/products/:id', (req, res) => {
    // Extraer el id de los parámetros de la ruta
    const productId = parseInt(req.params.id);
    // Buscar el índice del producto a eliminar
    const productIndex = products.findIndex(p => p.id === productId);
    // Si no se encuentra el producto, responder con un error 404
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
    }   
    // Eliminar el producto del arreglo
    products.splice(productIndex, 1);
    // Responder con un mensaje de éxito
    res.json({ message: 'Producto eliminado correctamente' });
});

/* ===========
    Ejercicio 5 ZOD
============= */

const userSchema = z.object({
  id: z.number(),
  name: z.string()
});

app.post('/users', (req, res) => {
    // Validar el body usando Zod
    const result = userSchema.safeParse(req.body);

  // Si la validación falla
  if (!result.success) {
    return res.status(400).json({
      error: 'Datos inválidos',
      details: result.error.issues
    });
  }

  const newUser = result.data;
  users.push(newUser);

  res.status(201).json({
    message: 'Usuario agregado correctamente',
    user: newUser
  });
});


/* ===========
    Ejercicio 6
============= */
const productSchema = z.object({
  id: z.number(),
  name: z.string()
});

app.post('/products', (req, res) => {
    // Validar el body usando Zod
    const result = productSchema.safeParse(req.body);

  // Si la validación falla
  if (!result.success) {
    return res.status(400).json({
      error: 'Datos inválidos',
      details: result.error.issues
    });
  }

  const newProduct = result.data;
  products.push(newProduct);

  res.status(201).json({
    message: 'Producto agregado correctamente',
    product: newProduct
  });
});


/* ===========
    Ejercicio 7
============= */

//definir esquema para tareas con campo opcional "completed" con default false
let tasks = [];

//esquema Zod para tareas
const taskSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'),
  completed: z.boolean().optional().default(false)
});


//POST /tasks -> agrega una nueva tarea
app.post('/tasks', (req, res) => {
    // Validar el body usando Zod
    const result = taskSchema.safeParse(req.body);

    // Si la validación falla
    if (!result.success) {
        return res.status(400).json({
        error: 'Datos inválidos',
        details: result.error.issues
        });
    }

    // Crear la nueva tarea con un id único
    const newTask = {
        //secuencia simple para id
        id: tasks.length + 1,
        // Usar los datos validados y transformados por Zod
        ...result.data
    };

    // Agregar la nueva tarea al arreglo
    tasks.push(newTask);
    // Responder con la tarea creada
    res.status(201).json({
        message: 'Tarea creada correctamente',
        task: newTask
    });
});

/* ======================
    Ejercicio 8 CORS
======================= */

// Configurar CORS para permitir solicitudes desde cualquier origen
/* app.use(cors());
 */
//GET data de prueba para verificar CORS
app.get('/data', (req, res) => {
  res.json({
    message: 'CORS habilitado para cualquier origen',
    status: 'ok'
  });
});

/* ======================
    Ejercicio 9 CORS
======================= */

// Configurar CORS para permitir solicitudes solo desde http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

//GET data de prueba para verificar CORS con opciones específicas
app.get('/secure-data', (req, res) => {
  res.json({    
    message: 'CORS habilitado solo para http://localhost:3000',
    status: 'secure ok'
  });
});


/* ========================================= */
// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
