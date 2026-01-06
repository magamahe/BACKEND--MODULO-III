// ================================
// Actividad 6: Middleware de Validación de Datos
// ================================

function validateUser(req, res, next) {
  const { nombre, email } = req.body;

  if (!nombre || nombre.trim() === "") {
    return res.status(400).json({ error: "El campo 'nombre' es obligatorio" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "El campo 'email' debe ser un correo válido" });
  }

  next(); // datos válidos, continuar
}

module.exports = validateUser;
