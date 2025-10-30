interface Bebida{
    preparar(): void
}

class Cafe implements Bebida{
    preparar(): void {
        console.log("Preparando café: moliendo granos, hirviendo agua y sirviendo.");
    }
}

class Te implements Bebida{
    preparar(): void {
        console.log("Preparando té: calentando agua, infusionando hojas y sirviendo.");
    }
}

const miCafe: Bebida = new Cafe();
const miTe: Bebida = new Te();

miCafe.preparar(); 
miTe.preparar();