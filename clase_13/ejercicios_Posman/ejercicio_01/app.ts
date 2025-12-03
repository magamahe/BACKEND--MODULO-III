import express from "express";
import router from "./router/router";

const app = express();
app.use(express.json());

// conectar el router
app.use("/users", router);

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
