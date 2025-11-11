# Actividades Clase Número 8 - TypeScript – Los 4 pilares de POO

## Actividades de Abstracción:

### Ejercicio 1: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público.

• Crea una clase abstracta Transporte con un método abstracto mover().  
• Define dos interfaces:  
  o Electrico con el método cargarBateria().  
  o Combustible con el método llenarTanque().  
• Implementa dos clases:  
  o AutobusElectrico: Extiende de Transporte e implementa Electrico.  
  o Taxi: Extiende de Transporte e implementa Combustible.

### Ejercicio 2: Sistema de Gestión de Cursos  
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que contenga los estudiantes y el profesor.

### Ejercicio 3: Sistema de Gestión de Compras  
Crea un sistema que gestione productos y órdenes de compra. Usa una clase abstracta Producto, clases concretas Electrónico y Alimento, y una clase OrdenCompra que contenga múltiples productos.

### Ejercicio 4: Sistema de Gestión de Biblioteca  
Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una clase abstracta Publicacion, clases concretas Libro y Revista, y una clase Biblioteca que gestione el préstamo de publicaciones.


## Actividades de Herencia:

### Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso  
Consigna: Define una clase base Negocio con un método protegido operar(). Define otra clase Consultoria que herede de Negocio y sobrescriba el método operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría.

### Ejercicio 2: Sistema de Reserva de Hotel  
Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una clase base Cliente con propiedades privadas como nombre, numeroHabitacion, y un método reservar(). Luego, crea dos clases derivadas ClientePremium y ClienteCorporativo que sobrescriban el método reservar() para añadir funcionalidades adicionales.

Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios().  
Ambas clases derivadas deben implementar esta interfaz.  
En la clase ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.

### Ejercicio 3: Sistema de Tienda en Línea  
Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base Producto que tenga propiedades como nombre, precio, y un método detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas deben sobrescribir el método detallesProducto() con información más específica.

Crea una interfaz Envio que defina el método calcularEnvio(). La clase Electronico debe implementar esta interfaz y el cálculo del envío será un 10% del precio del producto.

### Ejercicio 4: Sistema de Gestión de Empleados  
Consigna: Crea una clase base Empleado con propiedades protegidas nombre y salario, y un método calcularSalario(). Crea dos clases derivadas EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben sobrescribir el método calcularSalario() con sus propias lógicas (empleados de tiempo completo tienen un salario fijo, mientras que los empleados de medio tiempo cobran por hora).

Además, crea una interfaz BeneficiosLaborales que tenga el método calcularBeneficios(). Solo los empleados de tiempo completo implementarán esta interfaz.

### Ejercicio 5: Sistema de Gestión de Vehículos  
Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo, y un método detallesVehiculo(). Luego, crea dos clases derivadas: Automovil y Moto, cada una con propiedades adicionales y sobrescribiendo el método detallesVehiculo().

Crea también una interfaz Mantenimiento que tenga el método calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta interfaz, pero con lógicas distintas para calcular el costo del mantenimiento.


## Actividades de Encapsulamiento

### 1. Ejercicio de Bodega  
Diseña una clase Bodega que tenga propiedades privadas para nombre, direccion, y inventario (un array de objetos con producto y cantidad). Implementa métodos para agregar productos al inventario, eliminar productos, y listar el inventario. Si se intenta agregar un producto con una cantidad negativa, imprime un mensaje informativo.

### 2. Ejercicio de Empleado  
Crea una clase Empleado que contenga propiedades privadas para nombre, salario, y departamento. Implementa métodos para cambiar el salario (que no puede ser menor a 0) y obtener la información del empleado. Si se intenta establecer un salario negativo, imprime un mensaje indicativo.

### 3. Ejercicio de Playlist  
Diseña una clase Playlist que contenga propiedades privadas para nombre y canciones (un array de títulos de canciones). Implementa métodos para agregar canciones, eliminar canciones y listar todas las canciones en la playlist. Asegúrate de que se imprima un mensaje si se intenta agregar una canción vacía o eliminar una canción que no existe.

### 4. Ejercicio de Taller de Reparaciones  
Diseña una clase Taller que tenga propiedades privadas para nombre, direccion, servicios (un array de objetos con nombreServicio, precio, y descripcion), y calificaciones (un array para almacenar las calificaciones de los clientes). Implementa métodos para agregar servicios, eliminar servicios, listar los servicios disponibles, agregar calificaciones y calcular el promedio de calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime un mensaje informativo. También imprime un mensaje si se intenta agregar una calificación que no está entre 1 y 5.


## Actividades de Polimorfismo

### Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos Sobrecargados  
Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el instrumento de manera diferente. Además, agrega una sobrecarga del método tocar en la clase base para permitir tocar con o sin acompañamiento.

### Ejercicio 2: Polimorfismo y Herencia con Abstracción Compleja  
Implementa una clase abstracta Empleado con un método abstracto calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo, que calculen el salario de acuerdo a las horas trabajadas y salario fijo respectivamente.

### Ejercicio 3: Encapsulamiento y Herencia con Protección de Datos  
Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, pero protege el saldo para que solo pueda ser modificado dentro de la clase. Crea una subclase CuentaAhorros que agregue interés al saldo.

### Ejercicio 4: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases  
Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales. Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP pueden retirar sin comisiones.
