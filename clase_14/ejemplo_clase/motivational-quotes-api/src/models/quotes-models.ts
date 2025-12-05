import fs from 'fs' // módulo del sistema de archivos
import path from 'path' // módulo para manejar rutas de archivos

// definimos las ruta del archivo json que usamos de DB
const filePath = path.join(__dirname, '../database/quotes.json')

// interfaz que representa la estructura de una frase
interface Quote {
    id: string
    text: string
    author: string
}

// clase que encapsula las operaciones relacionadas con las frases
export class QuotesModel {

    // leer todas frases desde el archivo
    static getAllQuotes(): Quote[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.quotes
    }
    // Obtener una frase por id
    static getQuoteById(id: string): Quote | undefined {
        const data = this.getAllQuotes() //obtener todas las frases
        return data.find((quote) => quote.id === id) // buscar la frase por id
    }

    // crear una frase
    static addQuote(newQuote: Quote):Quote {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) //parseamos el archivo JSON
    const newId = (data.quotes.length + 1).toString() // generamos un nuevo id simple
    
    const quote = {...newQuote, id: newId} // creamos la nueva frase con el id, ... operador para copiar propiedades y agregar id, combinar objetos
    data.quotes.push(quote) // agregamos la nueva frase al array
    data.info.total += 1 // actualizamos el total de frases
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))   // escribimos los cambios en el archivo JSON
    return quote // retornamos la nueva frase creada
    }

    // Actualizar una frase
    static updateQuote(id: string, updatedData: Partial<Quote>): Quote | null { // Partial permite que los campos sean opcionales, id no ingresa
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) // leemos y parseamos el archivo JSON
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id) // buscamos el índice de la frase a actualizar
        if (index === -1) return null // si no se encuentra, retornamos null
        data.quotes[index] = {...data.quotes[index], ...updatedData} // actualizamos la frase con los nuevos datos
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)) // escribimos los cambios en el archivo JSON
        return data.quotes[index] // retornamos la frase actualizada
    }

    // Borrar una frase
    static deleteQuote(id:string): boolean { // retorna true si se borra, false si no se encuentra
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) // leemos y parseamos el archivo JSON
    const index = data.quotes.findIndex((quote: Quote) => quote.id === id) // buscamos el índice de la frase a borrar
    if (index === -1) return false // si no se encuentra, retornamos false
    data.quotes.splice(index, 1) // borramos la frase del array
    data.info.total -= 1 // actualizamos el total de frases
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)) // escribimos los cambios en el archivo JSON
    return true // retornamos true indicando que se borró correctamente
    }
}
