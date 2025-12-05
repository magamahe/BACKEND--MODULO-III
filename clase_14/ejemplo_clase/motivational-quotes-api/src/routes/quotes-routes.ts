import {Router} from 'express' // importamos Router de express

import { // importamos los controladores de frases
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
} from '../controllers/quotes-controllers'

import {validateQuote} from '../middlewares/validate-middleware' // importamos el middleware de validacion, controla los datos de las frases entrantes

const router: Router = Router() // creo una instancia del enrutador de express

// RUTAS
router.get('/', getAllQuotes) // ruta para obtener todas las frases
router.get('/:id', getQuoteById) // ruta para obtener una frase por id
router.post('/', createQuote) // ruta para crear una nueva frase
router.patch('/:id', updateQuote) // ruta para actualizar una frase por id
router.delete('/:id', deleteQuote) //ruta para borrar una frase por id

export default router



