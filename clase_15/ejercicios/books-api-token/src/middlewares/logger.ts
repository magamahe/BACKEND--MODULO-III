import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Middleware global: solicitud a ${req.method} ${req.url}`);
  next();
};

export default logger;
