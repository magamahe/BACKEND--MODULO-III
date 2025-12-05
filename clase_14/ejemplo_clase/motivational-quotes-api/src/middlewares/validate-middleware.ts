import { Request, Response, NextFunction } from "express"; // importamos Request, Response y NextFunction de express especial para middlewares

export const validateQuote = (req: Request, res: Response, next: NextFunction): void => { // definimos la funcion validateQuote
    const {text, author} = req.body // obtenemos text y author desde el body de la solicitud
    if (!text || typeof text !== 'string') { // validamos que text exista y sea una cadena
        res.status(400).json({error: 'El campo "text" es requerido y debe ser una cadena'}) // respondemos con un error 400 si no es valido
        return
    }
    if (!author || typeof author !== 'string') { // validamos que author exista y sea una cadena
        res.status(400).json({error: 'El campo "author" es requerido y debe ser una cadena'}) // respondemos con un error 400 si no es valido
        return
    }

    next()
}