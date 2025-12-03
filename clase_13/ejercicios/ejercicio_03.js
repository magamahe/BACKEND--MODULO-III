const API_KEY = "6dd46077";

async function searchMovie(title) {
  const url = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.Search) {
    console.log("No se encontraron películas");
    return;
  }

  const movie = data.Search[0];
  console.log("Título:", movie.Title);
  console.log("Año:", movie.Year);
}

searchMovie("Shrek");
searchMovie("The Patriot");
searchMovie("sing");