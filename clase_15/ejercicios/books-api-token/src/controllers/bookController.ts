import { Request, Response } from "express";
import { readDB, writeDB } from "../utils/db";
import { Book } from "../types/book";


export const getBooks = (req: Request, res: Response) => {
  const books = readDB();
  const { author } = req.query;

  if (author) {
    const authorQuery = (author as string).toLowerCase().trim();

    let filtered;

    if (authorQuery.includes(" ")) {
      // Nombre completo: coincidencia exacta
      filtered = books.filter(
        b => b.author.toLowerCase() === authorQuery
      );
    } else {
      // Nombre parcial: coincidencia que contenga la cadena
      filtered = books.filter(
        b => b.author.toLowerCase().includes(authorQuery)
      );
    }

    if (filtered.length === 0) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }

    return res.status(200).json(filtered);
  }

  // Si no se pasa author, devuelve todos los libros
  return res.status(200).json(books);
};



// GET /books/:id por ejemplo: GET http://localhost:3000/books/1
export const getBookById = (req: Request, res: Response) => {
  const books = readDB();
  const id = Number(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  res.status(200).json(book);
};

// POST /books ejemplo: POST http://localhost:3000/books para crear un libro
export const createBook = (req: Request, res: Response) => {
  const books: Book[] = readDB();
  const {
    title,
    author,
    genre,
    year,
    publisher,
    pages,
    language,
    isbn,
    available,
  } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // 🔍 Verificar si ya existe un libro igual
  const exists = books.some(
    b =>
      b.title.toLowerCase().trim() === title.toLowerCase().trim() &&
      b.author.toLowerCase().trim() === author.toLowerCase().trim()
  );

  if (exists) {
    return res.status(409).json({ error: "El libro ya existe" });
  }

  const newBook: Book = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    genre: genre || "",
    year: year || new Date().getFullYear(),
    publisher: publisher || "",
    pages: pages || 0,
    language: language || "Unknown",
    isbn: isbn || "",
    available: available !== undefined ? available : true,
  };

  books.push(newBook);
  writeDB(books);

  return res.status(201).json(newBook);
};

// PUT /books/:id ejemplo: PUT http://localhost:3000/books/1 para actualizar un libro
export const updateBook = (req: Request, res: Response) => {
  const books = readDB(); //lectura de la "base de datos"
  const id = Number(req.params.id); //obtener el id del libro a actualizar

  //extraer los campos a actualizar del cuerpo de la solicitud
  const {
    title,
    author,
    genre,
    year,
    publisher,
    pages,
    language,
    isbn,
    available
  } = req.body;

  //buscar el índice del libro a actualizar
  const index = books.findIndex(b => b.id === id);
  //si no se encuentra, devolver error 404
  if (index === -1) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  //actualizar los campos del libro, manteniendo los que no se envían
  books[index] = {
    ...books[index], //mantener los campos existentes
    title: title ?? books[index].title, //si title es undefined, mantener el valor actual
    author: author ?? books[index].author,
    genre: genre ?? books[index].genre,
    year: year ?? books[index].year,
    publisher: publisher ?? books[index].publisher,
    pages: pages ?? books[index].pages,
    language: language ?? books[index].language,
    isbn: isbn ?? books[index].isbn,
    available: available ?? books[index].available
  };

  writeDB(books);

  res.status(200).json(books[index]);
};

// DELETE /books/:id ejemplo: DELETE http://localhost:3000/books/1 para eliminar un libro
export const deleteBook = (req: Request, res: Response) => {
  const books = readDB();
  const id = Number(req.params.id);

  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  const deleted = books.splice(index, 1);
  writeDB(books);

  res.status(200).json({
    message: "Libro eliminado",
    deleted
  });
};
