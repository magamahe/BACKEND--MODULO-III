// Clase abstracta: no se puede instanciar directamente
abstract class DispositivoElectronico {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Métodos abstractos: las clases hijas deben implementarlos
  abstract encender(): void;
  abstract apagar(): void;
}

// Clase concreta: Televisor
class Televisor extends DispositivoElectronico {
  private encendido: boolean = false;

  encender(): void {
    if (!this.encendido) {
      this.encendido = true;
      console.log(`📺 El televisor "${this.nombre}" está encendido.`);
    } else {
      console.log(`⚠️ El televisor "${this.nombre}" ya estaba encendido.`);
    }
  }

  apagar(): void {
    if (this.encendido) {
      this.encendido = false;
      console.log(`📺 El televisor "${this.nombre}" se apagó.`);
    } else {
      console.log(`⚠️ El televisor "${this.nombre}" ya estaba apagado.`);
    }
  }
}

// Clase concreta: Radio
class Radio extends DispositivoElectronico {
  private encendida: boolean = false;

  encender(): void {
    if (!this.encendida) {
      this.encendida = true;
      console.log(`📻 La radio "${this.nombre}" está encendida.`);
    } else {
      console.log(`⚠️ La radio "${this.nombre}" ya estaba encendida.`);
    }
  }

  apagar(): void {
    if (this.encendida) {
      this.encendida = false;
      console.log(`📻 La radio "${this.nombre}" se apagó.`);
    } else {
      console.log(`⚠️ La radio "${this.nombre}" ya estaba apagada.`);
    }
  }
}

// ======================
// PRUEBA
// ======================
const miTV = new Televisor("Samsung Smart TV");
const miRadio = new Radio("Sony FM");

miTV.encender();  // 📺 El televisor "Samsung Smart TV" está encendido.
miRadio.encender(); // 📻 La radio "Sony FM" está encendida.
miTV.apagar();    // 📺 El televisor "Samsung Smart TV" se apagó.
miRadio.apagar(); // 📻 La radio "Sony FM" se apagó.
