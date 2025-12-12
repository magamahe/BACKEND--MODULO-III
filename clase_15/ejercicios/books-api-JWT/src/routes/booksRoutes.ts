import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/bookController";

import auth from "../middlewares/authJWT";

const router = Router();

router.get("/", auth, getBooks); //GET localhost:3000/books
router.get("/:id", auth, getBookById);//GET localhost:3000/books/1
router.post("/", auth, createBook); //POST localhost:3000/books para crear un libro
router.put("/:id", auth, updateBook); //PUT localhost:3000/books/1 para actualizar un libro
router.delete("/:id", auth, deleteBook); //DELETE localhost:3000/books/1 para eliminar un libro

export default router;
