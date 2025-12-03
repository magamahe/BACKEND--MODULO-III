import { Router } from "express";

const productRouter = Router();

const products = [
  { id: 1, title: "Mouse Gamer" },
  { id: 2, title: "Teclado Mecánico" }
];

// GET /products
productRouter.get("/", (req, res) => {
  res.json(products);
});

// GET /products/:id
productRouter.get("/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  res.json(product || { message: "Producto no encontrado" });
});

export default productRouter;
