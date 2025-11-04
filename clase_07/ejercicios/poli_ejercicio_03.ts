/* Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser modificado a través de un método depositar y otro retirar, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para consultar el saldo. */

class Banco{
    private _saldo!: number;

    constructor(saldoInicial: number){
        this._saldo = saldoInicial;
    }
    
    public depositar(cantidad: number): void{
        if(cantidad > 0){
            this._saldo += cantidad;
            console.log(`✅ Depósito exitoso. Se han depositado $${cantidad}. Saldo actual: $${this._saldo}`);
        }else{
            console.log(`❌ Error: La cantidad a depositar debe ser positiva, ingresaste ${cantidad}.`);
            return;
        }
    }

    public retirar(cantidad: number): void{
        if(cantidad <= 0){
            console.log(`⚠️ El monto a retirar debe ser mayor que cero, ingresaste; $${cantidad}.`)
            return;
        }
        if (cantidad > this._saldo) {
            console.log(`⚠️  Fondos insuficientes. Queres retirar ${cantidad} y el Saldo actual: $${this._saldo}`);
            return;
        }

        this._saldo -= cantidad;
        console.log(`✅ Retiro exitoso. Se han retirado $${cantidad}. Saldo actual: $${this._saldo}`);
    }

    // Método público para consultar el saldo
    public consultarSaldo(): number {
        console.log(`📊 Saldo actual: $${this._saldo}`);
        return this._saldo;
  }
}


// ======================
// PRUEBA
// ======================
const cuenta1 = new Banco(1000);

cuenta1.consultarSaldo(); // 📊 Saldo actual: $1000
cuenta1.depositar(500);   // ✅ Depósito exitoso. Nuevo saldo: $1500
cuenta1.retirar(200);     // 💸 Retiro exitoso. Nuevo saldo: $1300
cuenta1.retirar(2000);    // ❌ Fondos insuficientes.
cuenta1.depositar(-50);   // ⚠️ El monto a depositar debe ser mayor que cero.