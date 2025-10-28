# Actividades Clase Numero 5: Introducción a POO

¡Bienvenidas, chicas! Estamos a punto de embarcarnos en un emocionante viaje por el mundo de la Programación Orientada a Objetos (POO) utilizando TypeScript. En este módulo, aprenderemos a construir clases, crear objetos, definir atributos y métodos, y utilizar modificadores de acceso. Además, exploraremos el uso de interfaces y entenderemos la diferencia entre la POO y la programación estructurada. Prepárense para desarrollar habilidades que les permitirán crear aplicaciones más organizadas y eficientes, haciendo uso de conceptos fundamentales de la POO. ¡Así que vamos a comenzar! ¡A programar se ha dicho!

## Requisitos
Antes de comenzar con los ejercicios, asegúrate de tener instaladas las herramientas necesarias para compilar y ejecutar TypeScript en tu entorno. Para esto puedes seguir el paso a paso detallado de la instalación que te brinde en el pdf de la clase.

**Importante:** ¡No olvides subir tus ejercicios a tu mochila en github! Son de vital importancia ya que corresponden a parte de la nota de la cursada.

## Actividades

### Ejercicio 1: Operaciones básicas con Arrays
1. Declara un array de números con los valores [5, 10, 15, 20, 25].
2. Imprime el tercer elemento del array.
3. Añade el número 30 al final del array.
4. Elimina el primer número del array.
5. Muestra por consola la longitud actual del array.

### Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.

### Ejercicio 3: Métodos en Objetos
1. Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.

### Ejercicio 4: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método.

### Ejercicio 5: Interfaz
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y proporciona la implementación del método presentarse().

### Ejercicio 6: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un método volar() que use this para referirse a las propiedades de la instancia.
2. Crea una instancia de la clase y llama al método.

### Ejercicio 7: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y precio (privada).
2. Implementa un método para mostrar la información del coche que acceda a las propiedades públicas y no a la privada directamente.

**¡Atención!** Los siguientes ejercicios integran todos los conceptos. Para realizarlos deberán investigar un poco más. Por ejemplo, el concepto de super().

### Ejercicio 8: Integramos contenidos - Animales
1. Crea un pequeño sistema de gestión de Animales que incluya las clases Animal, Mascota, y MascotaExotica.
   - La clase Animal debe tener propiedades como nombre y tipo.
   - La clase Mascota debe extender Animal e incluir una propiedad para dueño.
   - La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.

### Ejercicio 9: Sistema de Gestión de Vehículos
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
   - Vehiculo: Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo.
   - Coche: Clase que extiende Vehiculo e incluye una propiedad para tipoCombustible y un método para mostrar la información completa del coche.
   - Motocicleta: Clase que extiende Vehiculo e incluye una propiedad para cilindrada y un método para mostrar la información completa de la motocicleta.

### Ejercicio 10: Registro de Estudiantes
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
   - Estudiante: Clase que incluye propiedades como nombre, edad y curso, además de un método que muestre la información del estudiante.
   - RegistroEstudiantes: Clase que maneje una lista de estudiantes, con métodos para agregar un estudiante y mostrar todos los estudiantes registrados.

