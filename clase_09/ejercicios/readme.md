# 🌸 Clase 9 – SetInterval() y SetTimeout()

¡Bienvenidas, chicas! 💻  
En esta clase trabajaremos con **temporizadores en TypeScript**, explorando el uso de `setTimeout()` y `setInterval()`, junto con ejercicios prácticos de lógica y programación orientada a objetos.

---

## 🧰 Requisitos

Antes de comenzar con los ejercicios, asegurate de tener instaladas las herramientas necesarias para **compilar y ejecutar TypeScript** en tu entorno.  
Podés seguir el paso a paso detallado de la instalación en el PDF de la clase.

> ⚠️ **Importante:**  
> ¡No olvides subir tus ejercicios a tu mochila en GitHub!  
> Son de vital importancia, ya que corresponden a parte de la nota de la cursada.

---

## 🧠 Actividades

### 1️⃣ Mueblería: Actualización de Precios

En una mueblería se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien.  
Cada mueble tiene un **nombre**, un **precio** y un **identificador único**.

**Requerimientos:**
- Añadir un nuevo mueble.  
- Actualizar el precio de un mueble después de **3 segundos** utilizando `setTimeout()`.  
- Mostrar el inventario de muebles.

---

### 2️⃣ Florería: Envío Programado de Pedidos

Crea un sistema que gestione el envío de pedidos de flores.  
Cada pedido debe contener el **nombre del cliente**, la **cantidad de flores** y el **tipo de flores**.

**Requerimientos:**
- Añadir un pedido.  
- Programar el envío de un pedido utilizando `setTimeout()` para simular un **retraso de 5 segundos**.  
- Mostrar todos los pedidos pendientes.

---

### 3️⃣ Compañía de Seguros: Renovación Automática de Pólizas

Desarrolla un sistema que gestione las pólizas de seguros de una compañía.  
Cada póliza debe tener un **identificador**, **nombre del cliente**, **monto asegurado** y una **fecha de renovación**.

**Requerimientos:**
- Añadir una póliza.  
- Programar la renovación de la póliza utilizando `setTimeout()`.  
- Mostrar todas las pólizas activas.

---

### 4️⃣ Redes Sociales: Notificaciones de Amigos

Implementa un sistema de gestión de amigos en una red social.  
Cada amigo debe tener un **nombre** y un **estado** (en línea o fuera de línea).

**Requerimientos:**
- Utilizar `setInterval()` para verificar el estado de los amigos cada **5 segundos**.  
- Enviar una notificación si un amigo se pone en línea.

---

### 5️⃣ Banco: Transferencias Programadas

Crea un sistema para gestionar cuentas bancarias en un banco.  
Cada cuenta debe tener un **nombre del propietario**, un **saldo** y un **estado** (activo o inactivo).

**Requerimientos:**
- Añadir una cuenta.  
- Realizar una **transferencia entre cuentas** después de un retraso de **8 segundos** utilizando `setTimeout()`.  
- Mostrar todas las cuentas.

---

## 💎 Ejercicio 6: Encapsulamiento en Clases

Crea una clase `CuentaBancaria` que tenga atributos privados como `saldo`  
y métodos públicos para **consultar el saldo** y **depositar dinero**.

---

## 💫 Ejercicio 7: Uso de Tuplas en una Función Genérica (Ejercicio de Entrevista)

Crea una función genérica que acepte una **tupla** con dos elementos de cualquier tipo  
y retorne una nueva tupla con los **elementos invertidos**.

> 🧩 Este ejercicio pone a prueba tu **lógica de programación**.

---

## 🚀 Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos

Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas.

**Requerimientos:**
- Definir una clase `NaveEspacial` con atributos como `combustible` y `capacidadDeCarga`.  
- Implementar métodos para **viajar entre planetas**, **recolectar recursos** (oxígeno, minerales, agua) y **gestionar el combustible**.  
- Usar **tuplas** para representar las **coordenadas espaciales** de los planetas.  
- Crear una **interfaz** para los tipos de recursos recolectados.

---

## 👾 Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo

Crea un sistema que represente el juego **Pac-Man** utilizando clases.

**Requerimientos:**
- Definir una clase base `Personaje` para `PacMan` y `Fantasma`.  
- Implementar métodos para **moverse por el mapa** y **realizar acciones**.  
- Definir una **interfaz `EntidadMovible`** con el método `moverse()`.  
- Usar **herencia** para compartir el comportamiento base.  
- Usar **polimorfismo** para que cada personaje tenga su propio movimiento.

---

## 💅 Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza

Crea un sistema para gestionar productos en una tienda de belleza.

**Requerimientos:**
- Clase `Producto` con atributos: `nombre`, `precio` y `categoría`.  
- Clase `Inventario` para agregar, eliminar y buscar productos por categoría.  
- Usar **polimorfismo** para manejar diferentes tipos de productos:  
  - `Cosmetico`  
  - `TratamientoCapilar`  
  - (otros tipos opcionales)

---

## 💇‍♀️ Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo

Crea un sistema de reservas para una peluquería.

**Requerimientos:**
- Clase `Servicio` con atributos: `nombre`, `duración` y `precio`.  
- Clases concretas: `CorteDeCabello`, `Manicura`, etc.  
- Clase `Cliente`.  
- Clase `Reserva` que asocie clientes con servicios.  
- Usar **polimorfismo** para permitir la reserva de cualquier tipo de servicio.  
- Usar **encapsulamiento** para gestionar la **disponibilidad de horarios**.

---

✨ **¡Buena práctica, chicas!**  
Estos ejercicios combinan conceptos de **temporizadores, POO, encapsulamiento, herencia, polimorfismo y genéricos**.  
Suban todos los resultados a GitHub para continuar con la cursada. 🚀
