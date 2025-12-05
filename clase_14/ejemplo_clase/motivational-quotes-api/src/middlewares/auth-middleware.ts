import { Request, Response, NextFunction } from "express"; // importamos Request, Response y NextFunction de express especial para middlewares


export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => { // definimos la funcion authMiddleware
    const token = req.headers['authorization'] // obtenemos el token de autorizacion desde los headers
    if (!token || token !== 'Bearer my-secret-token') { // verificamos si el token es valido
        res.status(401).json({error: 'No autorizado'}) // respondemos con un error 401 si no es valido
        return  // salimos de la funcion
    }
    next() // llamamos a next para pasar al siguiente middleware o controlador si el token es valido
}