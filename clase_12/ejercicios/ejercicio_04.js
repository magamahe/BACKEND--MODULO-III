/* Ejercicio 4: Manejo de rutas y errores con Express

Consigna:
Crea un servidor que:

1.  Devuelva un mensaje de bienvenida (**¡Bienvenida al servidor de
    Express!**) al acceder a la ruta raíz `/`.
2.  Devuelva un error 404 (**Ruta no encontrada**) para cualquier ruta
    que no esté definida.
 */

// -------------------------
// Ruta raíz /
// -------------------------
app.get('/', (req, res) => {
  res.send("¡Bienvenida al servidor de Express!");
});

// -------------------------
// Middleware de ruta no encontrada (404)
// SIEMPRE VA AL FINAL
// -------------------------
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});
