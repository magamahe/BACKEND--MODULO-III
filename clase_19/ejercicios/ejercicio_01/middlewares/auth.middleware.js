// ================================
// Actividad 5: Middleware de Autenticación
// ================================

// Token de ejemplo válido
const TOKEN_VALIDO = "12345";

function authMiddleware(req, res, next) {
  const token = req.headers['authorization']; // obtener header Authorization
  if (!token || token !== TOKEN_VALIDO) {
    return res.status(401).json({ error: "No autorizado. Token inválido o faltante" });
  }
  next(); // token válido, continuar
}

module.exports = authMiddleware;
