/* 4. Redes Sociales: Notificaciones de Amigos 
Implementa un sistema de gestión de amigos en una red social. Cada amigo 
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un 
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una 
notificación si un amigo se pone en línea. */


// 1. Interfaz para tipar los amigos
interface Amigo {
  nombre: string;
  enLinea: boolean;
}

// 2. Clase RedSocial
class RedSocial {
  private amigos: Amigo[] = [];
  private intervalId: NodeJS.Timeout | null = null;

  // Añadir un amigo
  agregarAmigo(nombre: string, enLinea: boolean = false): void {
    this.amigos.push({ nombre, enLinea });
    console.log(`✅ Amigo agregado: ${nombre} (estado inicial: ${enLinea ? "En línea" : "Fuera de línea"})`);
  }

  // Cambiar manualmente el estado de un amigo (simulación)
  cambiarEstado(nombre: string, enLinea: boolean): void {
    const amigo = this.amigos.find(a => a.nombre === nombre);
    if (amigo) {
      amigo.enLinea = enLinea;
      console.log(`🔄 Estado actualizado: ${nombre} ahora está ${enLinea ? "En línea" : "Fuera de línea"}`);
    } else {
      console.log(`⚠️ No se encontró el amigo ${nombre}`);
    }
  }

  // Iniciar verificación de estados cada 5 segundos
  iniciarNotificaciones(): void {
    if (this.intervalId) {
      console.log("⚠️ La verificación ya está en marcha.");
      return;
    }

    console.log("▶️ Iniciando verificación de estados cada 5 segundos...");

    this.intervalId = setInterval(() => {
      this.amigos.forEach(amigo => {
        if (amigo.enLinea) {
          console.log(`📢 Notificación: ${amigo.nombre} está en línea ✅`);
        }
      });
    }, 5000);
  }

  // Detener verificación
  detenerNotificaciones(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("⏹️ Verificación detenida.");
    }
  }
}

// 3. Ejemplo de uso
const red = new RedSocial();

red.agregarAmigo("Ana", false);
red.agregarAmigo("Carlos", false);
red.agregarAmigo("Laura", true);

// Iniciamos las notificaciones
red.iniciarNotificaciones();

// Simulamos cambios de estado
setTimeout(() => red.cambiarEstado("Ana", true), 7000);   // Ana se conecta a los 7s
setTimeout(() => red.cambiarEstado("Carlos", true), 12000); // Carlos se conecta a los 12s

// Detenemos la verificación después de 20 segundos
setTimeout(() => red.detenerNotificaciones(), 20000);