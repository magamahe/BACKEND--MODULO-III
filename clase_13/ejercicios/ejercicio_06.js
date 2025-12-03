// getUsers.js

async function getUsers(n) {
  try {
    // Llamamos a la API para traer n usuarios
    const response = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await response.json();

    const users = data.results;

    console.log(`\n=== ${n} Usuarios Aleatorios ===`);

    // Recorremos los usuarios y mostramos información clave
    users.forEach((user, index) => {
      const nombre = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const pais = user.location.country;

      console.log(`\nUsuario ${index + 1}`);
      console.log("👤 Nombre:", nombre);
      console.log("📧 Email:", email);
      console.log("🌍 País:", pais);
    });

    console.log("\n==============================\n");
  } catch (error) {
    console.log("Error obteniendo usuarios:", error.message);
  }
}

// Ejemplos:
getUsers(1);
getUsers(3);
getUsers(5);

