import { log } from "console";

class Libro{
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number){
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true;
    }

      // Getter y Setter para título
    public get titulo(): string{
        return this._titulo;
    }

    public set titulo(valor:string){
        if(valor.trim().length === 0){
            console.log("El título no puede estar vacío.");
        }else{
            this._titulo = valor;
        }
    
    
    }

    // Getter para saber si está disponible
    public get disponible(): boolean{
        return this._disponible;
    }

    // Método para prestar el libro
    public prestar(): void {
        if (this._disponible){
            this._disponible = false;
            console.log(`✅ Has prestado el libro: ${this._titulo}`);
        }else{
            console.log(`❌ El libro: ${this._titulo} no está disponible para prestar.`);
        }
    }

     // Método para devolver el libro
     public devolver():void{
        if (!this._disponible){
            this._disponible = true;
            console.log(`✅ Has devuelto el libro: ${this._titulo}`);
        }else{
            console.log(`❌ El libro: ${this._titulo} ya está disponible en la biblioteca.`);
        }   
     }

    // Método para mostrar la información del libro
    public mostrarInfo():void{
        console.log(`📚Libro:  "${this._titulo}" de ${this._autor} (${this._anioPublicacion}) - Disponible: ${this._disponible}`);         
     }
}

const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967);
miLibro.mostrarInfo(); // Mostrar información inicial
miLibro.prestar(); // Prestar el libro
miLibro.mostrarInfo();
miLibro.devolver(); // Devolver el libro
miLibro.mostrarInfo();
miLibro.titulo = " "; // Intentar establecer un título vacío
miLibro.titulo = "El Amor en los Tiempos del Cólera"; // Establecer un título válido
miLibro.mostrarInfo(); // Mostrar información actualizada
miLibro.devolver(); // Intentar devolver un libro ya disponible