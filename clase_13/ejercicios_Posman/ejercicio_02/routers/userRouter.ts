import { Router } from "express";

const userRouter = Router();

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Lucía" }
];

// GET /users
userRouter.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id
userRouter.get("/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  res.json(user || { message: "Usuario no encontrado" });
});

export default userRouter;
