// Definimos la interfaz base
export interface Empleado {
  trabajar(): void;
}

// Clase Programador que implementa la interfaz
class Programador implements Empleado {
  trabajar(): void {
    console.log("💻 El programador está escribiendo código TypeScript...");
  }
}

// Clase Diseñador que implementa la interfaz
class Disenador implements Empleado {
  trabajar(): void {
    console.log("🎨 El diseñador está creando un nuevo diseño en Figma...");
  }
}

// Función que recibe un objeto del tipo Empleado
function iniciarTrabajo(empleado: Empleado): void {
  empleado.trabajar();
}

// ======================
// PRUEBA
// ======================
const dev = new Programador();
const uiux = new Disenador();

iniciarTrabajo(dev);   // 💻 El programador está escribiendo código TypeScript...
iniciarTrabajo(uiux);  // 🎨 El diseñador está creando un nuevo diseño en Figma...
