# Pilares de POO en TypeScript

Este README.md resume los 4 pilares de la Programación Orientada a Objetos (POO) en TypeScript con ejemplos prácticos.

---

## 1️⃣ Encapsulamiento
Ocultar detalles internos y proteger datos.

```ts
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(monto: number) {
    this.saldo += monto;
  }

  obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500
```

---

## 2️⃣ Abstracción
Mostrar solo lo necesario y definir un contrato.

```ts
abstract class Figura {
  abstract calcularArea(): number;
}

class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}

const c = new Cuadrado(4);
console.log(c.calcularArea()); // 16
```

---

## 3️⃣ Herencia
Permite que una clase hija reutilice y amplíe código de la clase padre.

```ts
class Persona {
  constructor(public nombre: string) {}

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

class Empleado extends Persona {
  constructor(nombre: string, public puesto: string) {
    super(nombre);
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando como ${this.puesto}`);
  }
}

const empleado = new Empleado("Gabi", "Desarrolladora");
empleado.saludar();   // Hola, soy Gabi
empleado.trabajar();  // Gabi está trabajando como Desarrolladora
```

---

## 4️⃣ Polimorfismo
Distintas clases responden distinto al mismo método.

```ts
interface Empleado {
  trabajar(): void;
}

class Programador implements Empleado {
  trabajar() {
    console.log("Escribiendo código 👩‍💻");
  }
}

class Diseñador implements Empleado {
  trabajar() {
    console.log("Diseñando interfaces 🎨");
  }
}

function mostrarTrabajo(e: Empleado) {
  e.trabajar();
}

mostrarTrabajo(new Programador()); // Escribiendo código 👩‍💻
mostrarTrabajo(new Diseñador());   // Diseñando interfaces 🎨
```

---

## 📌 Resumen visual rápido
| Pilar | Qué es | Modificadores / Herramientas | Ejemplo corto |
|-------|--------|------------------------------|---------------|
| Encapsulamiento | Ocultar detalles internos y proteger datos | `private`, `protected`, `public` | `class Cuenta { private saldo=0; depositar(m:number){this.saldo+=m;} obtenerSaldo(){return this.saldo;} }` |
| Abstracción | Mostrar solo lo necesario, definir contrato | `abstract class`, `interface` | `abstract class Figura { abstract area():number; } class Cuadrado extends Figura { constructor(private l:number){super();} area(){return this.l*this.l;} }` |
| Herencia | Crear clases hijas que reutilizan y amplían código de la clase padre | `extends`, `super()` | `class Persona{saludar(){}} class Empleado extends Persona{trabajar(){}}` |
| Polimorfismo | Diferentes clases responden distinto al mismo método | `interface`, `override` | `interface Empleado{trabajar():void;} class Prog implements Empleado{trabajar(){console.log("codigo")}} class Diseñador implements Empleado{trabajar(){console.log("diseño")}}` |

---

**Fin del resumen POO en TypeScript**

