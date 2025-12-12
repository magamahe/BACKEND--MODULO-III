import { Request, Response, NextFunction } from "express";

// Middleware global de logging, que registra cada solicitud entrante
export default function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Middleware global: se recibió una solicitud");
  next();
}
