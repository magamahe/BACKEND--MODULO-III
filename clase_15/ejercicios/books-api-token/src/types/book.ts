// Definición de la interfaz Book para tipar los objetos libro
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  publisher: string;
  pages: number;
  language: string;
  isbn: string;
  available: boolean;
}
