import { Request, Response, NextFunction } from "express";

// Middleware de manejo de errores
export default function errorHandler(
  err: Error, //el primer parámetro es el error
  req: Request, //el segundo es la solicitud
  res: Response, //el tercero es la respuesta
  next: NextFunction //el cuarto es la siguiente función de middleware
) {
  console.error("Error:", err.message); // Loguea el error en la consola para depuración

  // Envía una respuesta genérica de error al cliente
  res.status(500).json({
    status: "error",
    message: err.message
  });
}
