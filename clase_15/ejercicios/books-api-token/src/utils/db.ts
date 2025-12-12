import fs from "fs";
import path from "path";
import { Book } from "../types/book";

const dbPath = path.join(__dirname, "../database/books.json");

export const readDB = (): Book[] => {
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data) as Book[];
};

export const writeDB = (data: Book[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

};
