import express from 'express';
import type { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3000;

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token || token !== 'Bearer secreto123') {
    return res.status(403).json({ error: 'No autorizado' });
  }

  next();
};

app.get('/secure-data', checkAuth, (req: Request, res: Response) => {
  res.json({ message: 'Acceso permitido' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
