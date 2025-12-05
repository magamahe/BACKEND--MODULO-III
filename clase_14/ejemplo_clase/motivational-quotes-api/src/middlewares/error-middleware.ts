import { Request, Response, NextFunction } from "express"; // importamos Request, Response y NextFunction de express especial para middlewares

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void => {// definimos la funcion errorMiddleware
    console.error('Error:', err.message); // logueamos el error en la consola
    res.status(500).json({error: 'Ha ocurrido un error en el servidor'}) // respondemos con un error 500
}