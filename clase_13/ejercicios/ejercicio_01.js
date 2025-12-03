/* import fetch from "node-fetch"; */

const URL = "https://rickandmortyapi.com/api/character";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log("Primer personaje:", data.results[0].name);
  })
  .catch(err => console.error("Error:", err));
