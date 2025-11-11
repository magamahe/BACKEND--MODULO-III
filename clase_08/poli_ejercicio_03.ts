/* Ejercicio 3: Encapsulamiento y Herencia con Protección de Datos
Crea una clase CuentaBancaria con métodos para depositar y retirar dinero,
pero protege el saldo para que solo pueda ser modificado dentro de la clase.
Crea una subclase CuentaAhorros que agregue interés al saldo. */

// 💰 Clase base: CuentaBancaria
export class CuentaBancaria {
    private saldo: number; // propiedad protegida mediante encapsulamiento

    constructor(private titular: string, saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`💵 Depósito de $${monto} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("⚠️ El monto a depositar debe ser mayor a 0.");
        }
    }

    retirar(monto: number): void {
        if (monto <= 0) {
            console.log("⚠️ El monto a retirar debe ser mayor a 0.");
        } else if (monto > this.saldo) {
            console.log("❌ Fondos insuficientes para realizar el retiro.");
        } else {
            this.saldo -= monto;
            console.log(`💸 Retiro de $${monto} realizado. Saldo restante: $${this.saldo}`);
        }
    }

    // Método para consultar el saldo
    obtenerSaldo(): number {
        return this.saldo;
    }

    mostrarInformacion(): void {
        console.log(`👤 Titular: ${this.titular} | Saldo actual: $${this.saldo}`);
    }
}

// 🏦 Clase derivada: CuentaAhorros
export class CuentaAhorros extends CuentaBancaria {
    constructor(titular: string, saldoInicial: number, private tasaInteres: number) {
        super(titular, saldoInicial);
    }

    // Método adicional que aplica interés al saldo
    aplicarInteres(): void {
        const saldoActual = this.obtenerSaldo();
        const interes = saldoActual * (this.tasaInteres / 100);
        this.depositar(interes); // usa el método protegido de la clase base
        console.log(`🏦 Interés aplicado del ${this.tasaInteres}%. Saldo actualizado.`);
    }
}

// 🧪 Ejemplo de uso:
const cuenta1 = new CuentaBancaria("María", 1000);
cuenta1.depositar(500);
cuenta1.retirar(300);
cuenta1.mostrarInformacion();

console.log("────────────────────────────");

const cuentaAhorro = new CuentaAhorros("Gabriela", 2000, 5);
cuentaAhorro.aplicarInteres();
cuentaAhorro.retirar(100);
cuentaAhorro.mostrarInformacion();
