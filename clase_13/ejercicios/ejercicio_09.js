// searchRepo.js

async function searchRepo(query) {
  try {
    // Llamada a la API de GitHub
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&per_page=5`
    );

    const data = await response.json();

    const repos = data.items;

    console.log(`\n=== Resultados para: "${query}" ===\n`);

    repos.forEach(repo => {
      console.log(`📁 Nombre: ${repo.name}`);
      console.log(`📝 Descripción: ${repo.description || "Sin descripción"}`);
      console.log(`🌐 URL: ${repo.html_url}`);
      console.log("------------------------------");
    });

    console.log("\n===============================\n");

  } catch (error) {
    console.log("Error buscando repositorios:", error.message);
  }
}

// Ejemplos:
searchRepo("react");
searchRepo("node");
searchRepo("magamahe");
