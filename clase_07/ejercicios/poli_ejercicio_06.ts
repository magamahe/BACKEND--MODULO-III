// Primera interfaz
interface Volador {
  volar(): void;
}

// Segunda interfaz
interface Nadador {
  nadar(): void;
}

// Clase que implementa ambas interfaces
class Pato implements Volador, Nadador {
  volar(): void {
    console.log("🕊️ El pato está volando sobre el lago.");
  }

  nadar(): void {
    console.log("🌊 El pato está nadando en el agua.");
  }
}

// ======================
// PRUEBA
// ======================
const patoDonald = new Pato();

patoDonald.volar(); // 🕊️ El pato está volando sobre el lago.
patoDonald.nadar(); // 🌊 El pato está nadando en el agua.
