import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ token: process.env.TOKEN });
  } else {
    res.status(400).json({ error: "Faltan datos de login" });
  }
};
