import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import booksRoutes from "./routes/booksRoutes";
import authRoutes from "./routes/authRoutes"; // <-- IMPORTAR tu router de login
import logger from "./middlewares/logger";
import errorHandler from "./middlewares/errHandler";
import verifyToken from "./middlewares/authJWT";

import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

// Middlewares globales
app.use(logger);
app.use(cors());
app.use(express.json());

// ----------------------
// Montar router de auth
// ----------------------
app.use("/auth", authRoutes);

// ----------------------
// Rutas protegidas
// ----------------------
app.use("/books", verifyToken, booksRoutes);

// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
