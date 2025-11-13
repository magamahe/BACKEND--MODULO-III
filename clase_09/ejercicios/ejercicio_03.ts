/* 3. Compañía de Seguros: Renovación Automática de Pólizas 
Desarrolla un sistema que gestione las pólizas de seguros de una compañía. 
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y 
una fecha de renovación. Implementa las siguientes funciones: 
• Añadir una póliza. 
• Programar la renovación de la póliza utilizando setTimeout(). 
• Mostrar todas las pólizas activas. */


// 1. Definimos la interfaz para tipar las pólizas
interface Poliza {
  id: number;
  cliente: string;
  montoAsegurado: number;
  fechaRenovacion: Date;
  activa: boolean;
}

// 2. Creamos la clase Compañía de Seguros
class CompaniaSeguros {
  private polizas: Poliza[] = [];

  // Añadir una póliza
  agregarPoliza(id: number, cliente: string, monto: number, fechaRenovacion: Date): void {
    const nuevaPoliza: Poliza = { id, cliente, montoAsegurado: monto, fechaRenovacion, activa: true };
    this.polizas.push(nuevaPoliza);
    console.log(`✅ Póliza agregada: ID ${id}, Cliente: ${cliente}, Monto: $${monto}`);
  }

  // Programar la renovación de una póliza
  programarRenovacion(id: number, ms: number = 5000): void {
    console.log(`⌛ Renovación programada para la póliza ID ${id} en ${ms / 1000} segundos...`);

    setTimeout(() => {
      const poliza = this.polizas.find(p => p.id === id && p.activa);
      if (poliza) {
        // Extendemos la fecha de renovación en un año
        const nuevaFecha = new Date(poliza.fechaRenovacion);
        nuevaFecha.setFullYear(nuevaFecha.getFullYear() + 1);

        poliza.fechaRenovacion = nuevaFecha;
        console.log(`🔄 Póliza renovada: ID ${poliza.id}, Cliente: ${poliza.cliente}, Nueva fecha: ${poliza.fechaRenovacion.toDateString()}`);
      } else {
        console.log(`⚠️ No se encontró la póliza activa con ID ${id}`);
      }
    }, ms);
  }

  // Mostrar todas las pólizas activas
  mostrarPolizas(): void {
    console.log("📋 Pólizas activas:");
    const activas = this.polizas.filter(p => p.activa);
    if (activas.length === 0) {
      console.log("❌ No hay pólizas activas.");
    } else {
      activas.forEach(p => {
        console.log(`ID: ${p.id} | Cliente: ${p.cliente} | Monto: $${p.montoAsegurado} | Renovación: ${p.fechaRenovacion.toDateString()}`);
      });
    }
  }
}

// 3. Ejemplo de uso
const compania = new CompaniaSeguros();

// Añadimos pólizas
compania.agregarPoliza(1, "Laura", 150000, new Date("2025-08-29"));
compania.agregarPoliza(2, "Pedro", 200000, new Date("2025-12-01"));

compania.mostrarPolizas();

// Programamos la renovación de la póliza de Laura en 5 segundos
compania.programarRenovacion(1, 5000);

// Mostrar pólizas luego de 6 segundos para ver la actualización
setTimeout(() => {
  compania.mostrarPolizas();
}, 6000);