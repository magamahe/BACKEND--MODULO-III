import { Router } from "express";
import jwt from "jsonwebtoken";

// Ruta para simular el login y generar un token JWT
const router = Router();

//  GET /login, devuelve un token JWT para un usuario simulado
router.get("/login", (req, res) => {
  const user = {
    id: 1,
    name: "Gabriela",
    email: "magamahe@gmail.com",
    role: "admin",
  };
  // Genera un token JWT con la información del usuario
  const token = jwt.sign(user, process.env.TOKEN_SECRETO as string, {
    expiresIn: "1h",
  });
  // Envía el token al cliente
  res.json({
    message: "Inicio de sesión exitoso",
    token,
  });
});

export default router;
