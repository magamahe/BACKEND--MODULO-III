// getPokemon.js

async function getPokemon(id) {
  try {
    // Hacemos la solicitud
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    // Datos principales
    const name = data.name;
    const height = data.height;
    const weight = data.weight;

    // 🔥 ACA ESTÁ LO IMPORTANTE:
    // El array "types" está dentro de data.types
    const types = data.types.map(t => t.type.name);

    console.log(`\n=== Pokémon ID ${id} ===`);
    console.log("🐾 Nombre:", name);
    console.log("📏 Altura:", height);
    console.log("⚖ Peso:", weight);
    console.log("🔮 Tipos:", types.join(", "));
    console.log("=========================\n");

  } catch (error) {
    console.log("Error obteniendo Pokémon:", error.message);
  }
}

// Ejemplos:
getPokemon(1);   // Bulbasaur
getPokemon(4);   // Charmander
getPokemon(7);   // Squirtle
