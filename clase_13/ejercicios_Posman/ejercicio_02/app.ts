import express from "express";
import userRouter from "./routers/userRouter";
import productRouter from "./routers/productRouter";

const app = express();
app.use(express.json());

// Rutas separadas por funcionalidad
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
