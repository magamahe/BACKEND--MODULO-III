import express from "express";
import userRouter from "../ejercicio_01/router/router";
import productRouter from "../ejercicio_02/routers/productRouter";

const app = express();

// Middleware para leer JSON en requests
app.use(express.json());

// Conectar los routers
app.use("/users", userRouter);
app.use("/products", productRouter);

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("🚀 Servidor ejecutándose en http://localhost:3000");
});
