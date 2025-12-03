// getEpisodes.js

async function getEpisodes(serie) {
  try {
    // Llamada a la API
    const response = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${serie}&embed=episodes`
    );

    const data = await response.json();

    // Accedemos a la lista de episodios
    const episodes = data._embedded.episodes;

    console.log(`\n=== Episodios de ${serie} ===\n`);

    episodes.forEach(ep => {
      console.log(
        `📺 ${ep.name}  |  Temporada: ${ep.season}  Episodio: ${ep.number}`
      );
    });

    console.log("\n===============================\n");

  } catch (error) {
    console.log("Error obteniendo episodios:", error.message);
  }
}

// Ejemplo:
getEpisodes("Friends");
