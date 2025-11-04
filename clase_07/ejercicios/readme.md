# Actividades Clase Número 7: TypeScript -- Encapsulamiento y Polimorfismo

¡Bienvenidas, chicas! 👩💻✨\
En este documento encontrarás una serie de ejercicios avanzados de
**programación orientada a objetos (POO)** en **TypeScript**, diseñados
especialmente para aplicar y reforzar los conceptos de
**encapsulamiento** y **polimorfismo**. 📝🔒

A lo largo de estos ejercicios, pondremos en práctica los siguientes
temas: - **Modificadores de acceso:** 🔐 Uso de `public`, `protected` y
`private` para controlar la visibilidad de las propiedades y métodos de
las clases.\
- **Getters y Setters:** ✏️ Implementación de métodos para acceder y
modificar las propiedades privadas de una clase de manera controlada.\
- **Clases y objetos:** 🏗️ Creación de clases que encapsulan datos y
comportamientos relacionados, fomentando la cohesión y reduciendo el
acoplamiento.

Cada ejercicio tiene su propia temática y aumenta en complejidad a
medida que avanzas. ⚙️\
Desde sistemas de gestión de inventario hasta aplicaciones de reservas,
todos están diseñados para ayudarte a entender cómo aplicar estos
conceptos en situaciones reales. 💼🌍

------------------------------------------------------------------------

## 🧩 Requisitos

Antes de comenzar con los ejercicios, asegúrate de tener instaladas las
herramientas necesarias para compilar y ejecutar **TypeScript** en tu
entorno.\
Sigue el paso a paso detallado de instalación del PDF de la clase.

**Importante:**\
¡No olvides subir tus ejercicios a tu mochila en GitHub! 📂\
Son de vital importancia ya que corresponden a parte de la nota de la
cursada.

------------------------------------------------------------------------

## 🔒 Actividades de Encapsulamiento

### 1️⃣ Ejercicio de Coche

Diseña una clase `Coche` que represente un vehículo.\
Esta clase debe tener propiedades **privadas** para `marca`, `modelo`,
`año`, y `kilometraje`.\
Implementa métodos para **encender el coche** y **realizar un viaje**,
que incrementen el kilometraje.\
Valida que el año no sea menor que 1886 y que el kilometraje no pueda
ser negativo.

------------------------------------------------------------------------

### 2️⃣ Ejercicio de Libro

Crea una clase `Libro` que represente un libro en una biblioteca.\
Debe tener propiedades **privadas**: `titulo`, `autor`,
`anioPublicacion`, `disponible`.\
Implementa métodos para **prestar** y **devolver** el libro, controlando
su disponibilidad.

------------------------------------------------------------------------

### 3️⃣ Ejercicio de Estudiante

Diseña una clase `Estudiante` con propiedades privadas: `nombre`,
`edad`, y `calificaciones`.\
Implementa métodos para **agregar calificaciones** y **calcular el
promedio**.\
Valida que las calificaciones estén entre 0 y 100.

------------------------------------------------------------------------

### 4️⃣ Ejercicio de Aviones

Crea una clase `Avion` con propiedades privadas: `modelo`, `capacidad`,
`velocidad`.\
Usa **getters y setters** con validaciones:\
- `capacidad >= 0`\
- `velocidad >= 0`

Usa el operador de afirmación no nula (`!`) para las propiedades
inicializadas mediante los setters.

------------------------------------------------------------------------

### 5️⃣ Ejercicio de Vacaciones

Crea una clase `Vacacion` con propiedades privadas: `destino`,
`duracion`, `presupuesto`.\
Valida:\
- `duracion >= 1`\
- `presupuesto > 0`

------------------------------------------------------------------------

### 6️⃣ Ejercicio de Supermercado

Crea una clase `Producto` con propiedades privadas: `nombre`, `precio`,
`cantidad`.\
Valida:\
- `precio >= 0`\
- `cantidad >= 0`

------------------------------------------------------------------------

## ⚙️ Actividades de Polimorfismo

### 1️⃣ Polimorfismo con Sobrecarga de Funciones

Clase `Calculadora` con método `sumar`:\
- Dos números enteros.\
- Tres números enteros.\
- Dos cadenas (concatenación).

------------------------------------------------------------------------

### 2️⃣ Polimorfismo con Sobreescritura de Métodos

Jerarquía de clases `Vehiculo`, `Coche`, `Moto`.\
Cada una sobrescribe el método `arrancar()` con su propia
implementación.

------------------------------------------------------------------------

### 3️⃣ Encapsulamiento con Métodos Privados

Clase `Banco` con propiedad privada `saldo`.\
Métodos públicos:\
- `depositar()` y `retirar()` con validación.\
- `consultarSaldo()` para obtener el saldo actual.

------------------------------------------------------------------------

### 4️⃣ Abstracción con Clases Abstractas

Clase abstracta `DispositivoElectronico` con métodos abstractos
`encender()` y `apagar()`.\
Clases derivadas: `Televisor` y `Radio` implementan los métodos.

------------------------------------------------------------------------

### 5️⃣ Uso de Interfaces para Polimorfismo

Interfaz `Empleado` con método `trabajar()`.\
Clases: `Programador` y `Disenador` implementan su propia lógica.\
Función que recibe un `Empleado` y ejecuta `trabajar()`.

------------------------------------------------------------------------

### 6️⃣ Herencia Múltiple Simulada con Interfaces

Interfaces `Volador` y `Nadador` con métodos `volar()` y `nadar()`.\
Clase `Pato` implementa ambas interfaces, mostrando cómo se puede
combinar comportamientos.

------------------------------------------------------------------------

🧠 ¡Disfruta de los desafíos y sigue fortaleciendo tus habilidades en
TypeScript! 🚀
