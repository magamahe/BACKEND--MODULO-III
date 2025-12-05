import { Request, Response } from "express"; // importamos Request y Response de express
import {QuotesModel} from "../models/quotes-models" // importamos el modelo de frases

// controlador para obtener todas las frases
export const getAllQuotes = (req: Request, res:Response):void => { // definimos la funcion getAllQuotes
    const quotes = QuotesModel.getAllQuotes()   // obtenemos todas las frases del modelo
    res.json(quotes)    // respondemos con las frases en formato json
}

// controlador para obtener frases por id
export const getQuoteById = (req: Request, res:Response):void => {
    const {id} = req.params
    const quote = QuotesModel.getQuoteById(id)
    if (!quote) {
        res.status(404).json({error: 'Frase no encontrada'})
        return
    }
    res.json(quote)
}

// controlador para crear frase   
export const createQuote = (req: Request, res:Response):void => {
    const newQuote = QuotesModel.addQuote(req.body)
    res.status(201).json(newQuote)
}

// controlador para actualizar
export const updateQuote = (req: Request, res:Response):void => {
    const {id} = req.params
    const updateQuote = QuotesModel.updateQuote(id, req.body)
    if (!updateQuote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(updateQuote)
}

//controlador para borrar
export const deleteQuote = (req: Request, res:Response):void => {
    const {id} = req.params
    const isDeleted = QuotesModel.deleteQuote(id)
    if (!isDeleted) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.status(204).send()
}