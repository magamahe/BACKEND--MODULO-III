/* Ejercicio 4: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases
Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea
diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales.
Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP
pueden retirar sin comisiones. */

// Clase base: CuentaBancaria
class CuentaBancaria {
  protected saldo: number;

  constructor(saldoInicial: number = 0) {
    this.saldo = saldoInicial;
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      console.log("❌ El monto a depositar debe ser positivo.");
      return;
    }
    this.saldo += monto;
    console.log(`✅ Se depositaron $${monto}. Saldo actual: $${this.saldo}`);
  }

  retirar(monto: number): void {
    if (monto > this.saldo) {
      console.log("❌ Fondos insuficientes para realizar el retiro.");
      return;
    }
    this.saldo -= monto;
    console.log(`💸 Se retiraron $${monto}. Saldo actual: $${this.saldo}`);
  }

  obtenerSaldo(): number {
    return this.saldo;
  }
}

// Clase Cliente
class Cliente {
  protected nombre: string;
  protected cuenta: CuentaBancaria;

  constructor(nombre: string, cuenta: CuentaBancaria) {
    this.nombre = nombre;
    this.cuenta = cuenta;
  }

  depositar(monto: number): void {
    console.log(`👤 ${this.nombre} está depositando...`);
    this.cuenta.depositar(monto);
  }

  retirar(monto: number): void {
    console.log(`👤 ${this.nombre} está retirando...`);
    // Simula comisión del 2% por retiro
    const comision = monto * 0.02;
    const total = monto + comision;
    console.log(`Se aplica una comisión de $${comision.toFixed(2)}.`);
    this.cuenta.retirar(total);
  }

  verSaldo(): void {
    console.log(`💰 Saldo de ${this.nombre}: $${this.cuenta.obtenerSaldo()}`);
  }
}

// Clase ClienteVIP (hereda de Cliente)
class ClienteVIP extends Cliente {
  private beneficios: string[];

  constructor(nombre: string, cuenta: CuentaBancaria, beneficios: string[] = []) {
    super(nombre, cuenta);
    this.beneficios = beneficios;
  }

  // Sobrescribe el método retirar → sin comisión
  retirar(monto: number): void {
    console.log(`👑 ${this.nombre} (Cliente VIP) está retirando sin comisión...`);
    this.cuenta.retirar(monto);
  }

  mostrarBeneficios(): void {
    console.log(`🎁 Beneficios de ${this.nombre}: ${this.beneficios.join(", ") || "Ninguno"}`);
  }
}

// --- Ejemplo de uso ---
const cuentaNormal = new CuentaBancaria(1000);
const clienteNormal = new Cliente("Laura", cuentaNormal);

const cuentaVIP = new CuentaBancaria(5000);
const clienteVIP = new ClienteVIP("Mario", cuentaVIP, ["Retiros sin comisión", "Atención personalizada"]);

console.log("----- OPERACIONES -----");
clienteNormal.depositar(500);
clienteNormal.retirar(200);
clienteNormal.verSaldo();

console.log("\n----- OPERACIONES CLIENTE VIP -----");
clienteVIP.depositar(1000);
clienteVIP.retirar(300);
clienteVIP.verSaldo();
clienteVIP.mostrarBeneficios();
