import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware de autenticación para proteger rutas
export default function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"]; // Espera el header en el formato "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1]; // Extrae el token

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const secret = process.env.TOKEN_SECRETO as string; // toma la clave secreta desde las variables de entorno
    const decoded = jwt.verify(token, secret); // Verifica el token

    // @ts-ignore
    req.user = decoded; // Adjunta la información del usuario decodificada al objeto de la solicitud

    next(); // Continúa al siguiente middleware o ruta
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
}
