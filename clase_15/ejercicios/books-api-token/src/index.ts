import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import booksRoutes from "./routes/booksRoutes";
import authRoutes from "./routes/authRoutes";
import logger from "./middlewares/logger";
import verifyToken from "./middlewares/auth";
import errorHandler from "./middlewares/errHandler";

dotenv.config();

const app = express();

// Middlewares globales
app.use(logger);
app.use(cors());
app.use(express.json());

// Rutas públicas
app.use("/auth", authRoutes);

// Rutas protegidas
app.use("/books", verifyToken, booksRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
