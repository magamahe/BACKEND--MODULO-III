/* 2. Florería: Envío Programado de Pedidos 
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe 
contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
Implementa las siguientes funciones: 
• Añadir un pedido. 
• Programar el envío de un pedido utilizando setTimeout() para simular un 
retraso de 5 segundos. 
• Mostrar todos los pedidos pendientes.  */

type Pedido ={
    nombreCliente: string;
    cantFlores: number;
    tipoFlores: string
    enviado: boolean
};

class Floreria{
    private pedidos:Pedido[]=[];

    agregarPedido(nombreCliente:string, cantFlores:number, tipoFlores:string):void{
        const nuevoPeddido:Pedido={nombreCliente, cantFlores, tipoFlores, enviado:false}
        this.pedidos.push(nuevoPeddido);
        console.log(`✅ Pedido agregado: 😜 Cliente: ${nombreCliente} | Cantidad: ${cantFlores} | Tipo de flores: ${tipoFlores}`);
    }

    programarEnvio(cliente:string):void{
          console.log(`⏰ Programando envio para ${cliente}...`)
     
        setTimeout(() => {
            const proPedido = this.pedidos.find(p => p.nombreCliente === cliente && !p.enviado)
            if (proPedido) {
                proPedido.enviado = true;
                console.log(`🚚 Pedido enviado: 🌼${proPedido.cantFlores} ${proPedido.tipoFlores} para ${proPedido.nombreCliente}`);
            } else {
                console.log(`⚠️ No se encontró un pedido pendiente para ${cliente}`);
            }
        }, 2000)
    }

    mostrarPedidosPendientes():void{
        const pendientes = this.pedidos.filter(p=>!p.enviado);
        console.log("Pedidos pendientes:");
        pendientes.forEach(p=>{
            console.log(`Cliente: ${p.nombreCliente} | Cantidad: ${p.cantFlores} | Tipo de flores: ${p.tipoFlores}`);
        });
    }
}

// Ejemplo de uso
const floreria = new Floreria();
floreria.agregarPedido("Ana", 12, "Rosas");
floreria.agregarPedido("Luis", 8, "Tulipanes");
floreria.mostrarPedidosPendientes();
floreria.programarEnvio("Ana");
/* floreria.mostrarPedidosPendientes(); */
/* floreria.programarEnvio("Luis");*/
/* floreria.agregarPedido("Ana1", 12, "Rosas");
floreria.agregarPedido("Luis1", 8, "Tulipanes");
floreria.agregarPedido("Ana2", 12, "Rosas");
floreria.agregarPedido("Luis2", 8, "Tulipanes"); */
floreria.mostrarPedidosPendientes(); 

// Esperamos unos segundos antes de mostrar todo:
setTimeout(() => {
    floreria.mostrarPedidosPendientes();
}, 3000);