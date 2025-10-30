# Actividades Clase Número 6 - TypeScript

## Herencia y Abstracción

¡Bienvenidas, chicas!

En este documento encontrarás una serie de ejercicios avanzados de programación orientada a objetos (POO) en TypeScript, diseñados especialmente para aplicar y reforzar los conceptos que hemos visto en clase.

A lo largo de estos ejercicios, pondremos en práctica los siguientes temas:
- Herencia: Clases base y derivadas
- Interfaces: Definición y uso para herencia múltiple
- Sobrescritura de métodos: Modificación de comportamiento en clases derivadas
- Uso de extends y super: Para conectar clases base y derivadas
- Modificadores de acceso: (public, protected, private)
- Clases abstractas: Definición y uso de clases que no se pueden instanciar directamente
- Métodos abstractos: Definición de métodos en clases abstractas que deben ser implementados en las clases derivadas
- Modificadores de acceso: (public, protected, private) para controlar la visibilidad de las propiedades y métodos

Cada ejercicio tiene su propia temática y aumenta en complejidad a medida que avanzas. Desde sistemas de gestión de reservas hasta tiendas en línea, todos están diseñados para ayudarte a entender cómo aplicar estos conceptos en situaciones reales.

¡Espero que disfrutes desarrollando estos desafíos y que te ayuden a dominar la programación orientada a objetos en TypeScript!

---

## Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno.

Importante: ¡No olvides subir tus ejercicios a tu mochila en GitHub! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

---

## Actividades de Herencia

### Ejercicio 1: Herencia Simple
Consigna: Define una clase base `Torta` que tenga propiedades generales como `nombre` y `tipo`, y un método `hacerDescripcion()` que devuelva una descripción general de la torta. Luego, crea una clase derivada `TortaDeChocolate` que extienda de `Torta` y sobrescriba el método `hacerDescripcion()` para que devuelva "Soy una torta de chocolate, deliciosa y suave."

### Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base `Maestro` con propiedades protegidas `nombre` y `materia`, y un método `enseñar()`. Luego, crea una clase derivada `MaestroMatematicas` que extienda de `Maestro` y sobrescriba el método `enseñar()` para imprimir un mensaje específico de matemáticas.

### Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: `Volador` con el método `volar()` y `Transportable` con el método `transportar()`. Luego crea una clase `Avion` que implemente ambas interfaces y sobrescriba los métodos.

### Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base `Flor` con el método `describir()`, que imprime un mensaje general sobre la flor. Luego, crea dos clases derivadas `Rosa` y `Girasol`, cada una sobrescribiendo el método `describir()` con un mensaje específico.

### Ejercicio 5: Herencia con Modificadores de Acceso
Consigna: Crea una clase base `Compania` con un atributo privado `nombreCompania` y un atributo protegido `ingresosAnuales`. Crea una clase derivada `EmpresaTecnologia` que use el atributo protegido y agregue un método que calcule el doble de los ingresos anuales.

### Ejercicio 6: Herencia con Métodos Sobrescritos y super
Consigna: Crea una clase base `Zoologico` con el método `abrirPuertas()`, que indique que el zoológico está abierto. Crea una clase derivada `ZoologicoSafari` que sobrescriba el método `abrirPuertas()` pero llamando al método de la clase base con `super`.

---

## Actividades de Abstracción

### Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz `Bebida` que defina un método `preparar()`. Implementa esta interfaz en dos clases: `Cafe` y `Te`. Usa abstracción para que ambas bebidas oculten su lógica de preparación interna pero expongan un comportamiento común.

### Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta `Vehiculo` con una propiedad `velocidad` y un método abstracto `mover()`. Luego, implementa dos clases concretas: `Auto` y `Bicicleta`. Usa los modificadores de acceso para controlar la visibilidad de las propiedades.

### Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz `Usuario` que tenga las propiedades:
- `nombre` (obligatoria)
- `edad` (opcional)
- `readonly id` (solo lectura)

Implementa esta interfaz en una clase `UsuarioConcreto`. Luego, intenta modificar la propiedad `id` para mostrar cómo se aplican las restricciones de solo lectura.

### Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
Crea una interfaz `PagoOnline` con un método `procesarPago()`. Crea una clase abstracta `Pago` con un método concreto `validarMonto()` y un método abstracto `completarPago()`. Implementa ambas estructuras en una clase concreta `PagoConTarjeta`.

### Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
Diseña un sistema de transporte público. Define:
- Una interfaz `VehiculoElectrico` con el método `cargarBateria()`.
- Una clase abstracta `Transporte` con el método abstracto `mover()`.

Implementa ambas estructuras en una clase concreta `AutobusElectrico`.

### Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases
Crea un sistema de inventario que gestione diferentes tipos de productos. Define una clase abstracta `Producto` con:
- Propiedades protegidas: `nombre`, `precio`
- Un método abstracto `calcularDescuento()`

Implementa dos subclases: `Ropa` y `Electronica`:
- La subclase `Ropa` aplicará un 10% de descuento.
- La subclase `Electronica` tendrá un 5% de descuento.

Añade un método concreto en la clase abstracta para mostrar la información del producto.