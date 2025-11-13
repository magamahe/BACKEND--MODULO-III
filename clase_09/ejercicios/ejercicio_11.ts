/* Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y 
Polimorfismo 
Crea un sistema de reservas para una peluquería. Define una clase Servicio con 
atributos comunes como nombre, duracion, y precio. Luego, crea clases 
concretas para diferentes servicios como CorteDeCabello y Manicura. 
Implementa una clase Cliente y una clase Reserva que asocie clientes con 
servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio 
y encapsulamiento para gestionar la disponibilidad de horarios. */
// Clase base: Servicio
class Servicio {
  nombre: string;
  duracion: number; // minutos
  precio: number;

  constructor(nombre: string, duracion: number, precio: number) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.precio = precio;
  }

  descripcion(): string {
    return `${this.nombre} | Duración: ${this.duracion}min | $${this.precio}`;
  }
}

// Clases concretas
class CorteDeCabello extends Servicio {
  constructor() {
    super("Corte de Cabello", 45, 2000);
  }
}

class Manicura extends Servicio {
  constructor() {
    super("Manicura", 60, 3000);
  }
}

// Clase Cliente
export class Cliente {
  nombre: string;
  telefono: string;

  constructor(nombre: string, telefono: string) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// Tipo para una reserva individual
type ReservaItem = {
  cliente: Cliente;
  servicio: Servicio;
  horario: string;
};

// Clase Reserva
class Reserva {
  private horariosOcupados: string[] = []; // Encapsulamiento
  private reservas: ReservaItem[] = [];

  estaDisponible(horario: string): boolean {
    return !this.horariosOcupados.includes(horario);
  }

  hacerReserva(cliente: Cliente, servicio: Servicio, horario: string): void {
    if (!this.estaDisponible(horario)) {
      console.log(`⛔ El horario ${horario} ya está reservado.`);
      return;
    }

    this.horariosOcupados.push(horario);
    this.reservas.push({ cliente, servicio, horario });

    console.log(`✅ Reserva confirmada:
- Cliente: ${cliente.nombre}
- Servicio: ${servicio.nombre}
- Horario: ${horario}`);
  }

  verReservas(): void {
    console.log("📋 Reservas actuales:");
    this.reservas.forEach(r => {
      console.log(`• ${r.horario} - ${r.cliente.nombre} (${r.servicio.descripcion()})`);
    });
  }
}

// ------------------------------
// EJEMPLO DE USO
// ------------------------------
const corte = new CorteDeCabello();
const mani = new Manicura();

const cliente1 = new Cliente("María", "1122334455");
const cliente2 = new Cliente("Lucía", "1199887766");

const sistema = new Reserva();

sistema.hacerReserva(cliente1, corte, "10:00");
sistema.hacerReserva(cliente2, mani, "10:00"); // horario ocupado
sistema.hacerReserva(cliente2, mani, "11:00");

sistema.verReservas();
