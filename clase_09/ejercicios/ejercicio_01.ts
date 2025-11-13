/* 1. Mueblería: Actualización de Precios 
En una mueblería, se requiere un sistema que permita actualizar los precios de 
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y 
un identificador único. Implementa las siguientes funciones: 
• Añadir un nuevo mueble. 
• Actualizar el precio de un mueble después de 3 segundos utilizando 
setTimeout(). 
• Mostrar el inventario de muebles.  */

//Type
type Mueble =[number,string,number];


//array donde guardaremos los muebles
let inventario : Mueble[]=[];

//funcion para agregar muebles
function agregarMueble(id:number, nombre: string, precio:number):void{
    const nuevoMueble: Mueble=[id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`✅Mueble: ${nombre} cuyo precio es : $${precio} agregado con exito.`)
}

//funcion para actualizar muebles
function actualizarMueble(id : number, precio : number):void {
    console.log(`⌛ Actualizando precio del mueble con ID ${id} en 3 segundos...`);
    
    setTimeout(() => {
        let mueble = inventario.find(m => m[0] === id);

        if (mueble) {
            mueble[2] = precio;
            console.log(`💰 Precio actualizado. El nuevo precio de "${mueble[1]}" es $${precio}.`);
        } else {
            console.log(`❌ No se encontró el mueble con ID ${id}.`);
        }
    }, 3000);
}

//funcion para mostrar muebles
function mostrarMuebles():void{
    console.log("🪑 Lista de Muebles:");
    inventario.forEach(mueble => {
        const [id, nombre, precio]= mueble;
        console.log(`- ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}

// ----------------- Pruebas -----------------
agregarMueble(1, "Rack TV", 50000);
agregarMueble(2, "sillon", 150000);

mostrarMuebles();

actualizarMueble(2, 180000); // se verá el cambio después de 3 segundos