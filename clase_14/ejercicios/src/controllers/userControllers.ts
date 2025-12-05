// src/controllers/userController.ts
import { Request, Response } from 'express';
import userModel, { User } from '../models/userModels';

// ---------------------------------------------------------------------------
// GET ALL USERS
// ---------------------------------------------------------------------------
export const getAllUsers = async (req: Request, res: Response) => {
    const users: User[] = await userModel.readUsers();
    res.json(users);
};

// ---------------------------------------------------------------------------
// EJ 1 → PUT /users/:id – Actualizar usuario
// ---------------------------------------------------------------------------
export const updateUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) return res.status(400).json({ error: "ID inválido" });

    const { name, email, age } = req.body as Partial<User>;

    if (!name || !email) {
        return res.status(400).json({ error: 'Faltan los campos obligatorios name o email' });
    }

    let users = await userModel.readUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    users[userIndex] = {
        ...users[userIndex],
        name,
        email,
        age: age ?? users[userIndex].age
    };

    await userModel.writeUsers(users);
    res.json(users[userIndex]);
};

// ---------------------------------------------------------------------------
// EJ 2 → DELETE /users/:id – Eliminar usuario
// ---------------------------------------------------------------------------
export const deleteUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) return res.status(400).json({ error: "ID inválido" });

    let users = await userModel.readUsers();
    const initialLength = users.length;

    users = users.filter(u => u.id !== userId);

    if (users.length === initialLength) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await userModel.writeUsers(users);
    res.json({ message: `Usuario con ID ${userId} eliminado correctamente` });
};

// ---------------------------------------------------------------------------
// EJ 3 → GET /users?name= – Filtrar por nombre
// ---------------------------------------------------------------------------
export const filterUsersByName = async (req: Request, res: Response) => {
    const name = req.query.name?.toString();
    const users = await userModel.readUsers();

    if (name) {
        const filtered = users.filter(u =>
            u.name.toLowerCase().includes(name.toLowerCase())
        );
        return res.json(filtered);
    }

    res.json(users);
};

// ---------------------------------------------------------------------------
// EJ 4 → GET /users/count?domain= – Contar usuarios por dominio
// ---------------------------------------------------------------------------
export const countUsersByDomain = async (req: Request, res: Response) => {
    const domain = req.query.domain?.toString();

    if (!domain) {
        return res.status(400).json({ error: 'Parámetro "domain" requerido' });
    }

    const users = await userModel.readUsers();
    const count = users.filter(u => u.email.endsWith(`@${domain}`)).length;

    res.json({ domain, count });
};

// ---------------------------------------------------------------------------
// EJ 5 → POST /users/bulk – Crear varios usuarios
// ---------------------------------------------------------------------------
export const addBulkUsers = async (req: Request, res: Response) => {
    const newUsers = req.body as Omit<User, 'id'>[];

    if (!Array.isArray(newUsers)) {
        return res.status(400).json({ error: 'Se espera un array de usuarios' });
    }

    let users = await userModel.readUsers();

    for (const user of newUsers) {
        if (!user.name || !user.email) {
            return res.status(400).json({ error: `Usuario inválido: ${JSON.stringify(user)}` });
        }

         // Validación de edad
        if (typeof user.age !== 'number' || user.age < 0) {
            return res.status(400).json({ error: `Edad inválida para el usuario: ${JSON.stringify(user)}` });
        }
    }

    const added: User[] = newUsers.map(u => {
        const id = userModel.generateId(users);
        const userCreated = { ...u, id };
        users.push(userCreated);
        return userCreated;
    });

    await userModel.writeUsers(users);
    res.status(201).json(added);
};

// ---------------------------------------------------------------------------
// EJ 6 → GET /users/sorted?order=asc|desc
// ---------------------------------------------------------------------------
export const getSortedUsers = async (req: Request, res: Response) => {
    const order = req.query.order === 'desc' ? 'desc' : 'asc';
    const users = await userModel.readUsers();

    const sorted = users.sort((a, b) => {
        return order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    res.json(sorted);
};

// ---------------------------------------------------------------------------
// EJ 7 → GET /users/age?minAge=8&maxAge=30
// ---------------------------------------------------------------------------
export const getUsersByAgeRange = async (req: Request, res: Response) => {
    const min = Number(req.query.minAge);
    const max = Number(req.query.maxAge);

    if (isNaN(min) || isNaN(max)) {
        return res.status(400).json({ error: 'minAge y maxAge deben ser números' });
    }

    const users = await userModel.readUsers();
    const filtered = users.filter(u => u.age >= min && u.age <= max);

    res.json(filtered);
};

// ---------------------------------------------------------------------------
// EJ 8 → GET /users/stats – Estadísticas
// ---------------------------------------------------------------------------
export const getUserStats = async (req: Request, res: Response) => {
    const users = await userModel.readUsers();

    if (users.length === 0) {
        return res.status(404).json({ error: 'No hay usuarios para calcular estadísticas' });
    }

    const total = users.length;
    const sum = users.reduce((acc, u) => acc + u.age, 0);
    const averageAge = +(sum / total).toFixed(2);

    const sorted = [...users].sort((a, b) => a.age - b.age);
    const youngest = sorted[0];
    const oldest = sorted[sorted.length - 1];

    res.json({
        totalUsers: total,
        averageAge,
        youngestUser: youngest,
        oldestUser: oldest
    });
};

// ---------------------------------------------------------------------------
// EJ 9 → GET /external/users – API externa
// ---------------------------------------------------------------------------
export const getExternalUsers = async (req: Request, res: Response) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error en la API externa');

        const data = await response.json();
        res.json(data);

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// ---------------------------------------------------------------------------
// EJ 10 → GET /external/users/search?name=
// ---------------------------------------------------------------------------
export const searchExternalUserByName = async (req: Request, res: Response) => {
    const name = req.query.name?.toString();

    if (!name) {
        return res.status(400).json({ error: 'Parámetro "name" requerido' });
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error en la API externa');

        const users = await response.json();
        const found = users.find((u: any) =>
            u.name.toLowerCase() === name.toLowerCase()
        );

        if (!found) {
            return res.status(404).json({ error: `No existe "${name}"` });
        }

        res.json(found);

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
