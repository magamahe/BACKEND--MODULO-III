import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.TOKEN;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (token === TOKEN) {
    next();
  } else {
    res.status(401).json({ error: "Token inválido o ausente" });
  }
};

export default verifyToken;
