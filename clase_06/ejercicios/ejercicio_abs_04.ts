interface PagoOnline{
    procesarPago(monto:number): void;
}

abstract class Pago {
    validarMonto(monto:number): boolean {
        if (monto<=0){
            console.log("Monto inválido");
            return false;}
        return true;
    }
    
    abstract completarPago(monto:number): void;
}

class PagoConTarjeta extends Pago  implements PagoOnline{
    procesarPago(monto: number): void { 
        if (this.validarMonto(monto)){
            this.completarPago(monto);
        }
    }

    completarPago(monto: number): void {
        console.log(`Pago con tarjeta de $${monto} completado.`);
    }
}

const pagoTarj = new PagoConTarjeta();
pagoTarj.procesarPago(150); // Pago con tarjeta de $150 completado.
pagoTarj.procesarPago(-50); // Monto inválido