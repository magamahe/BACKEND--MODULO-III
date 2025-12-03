import { Router, Request, Response } from "express";

const router = Router();

// Simulación de datos (luego se puede reemplazar por BD)
const users = [
  { id: 1, name: "Maria Gabriela", email: "magamahe@mail.com" },
  { id: 2, name: "Lucía", email: "lucia@mail.com" },
  { id: 3, name: "María", email: "maria@mail.com" }
];

/**
 * GET /users
 * Devuelve la lista completa de usuarios
 */
router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

/**
 * GET /users/:id
 * Devuelve un usuario según su ID
 */
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(user);
});

export default router;
