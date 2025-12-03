const URL = "https://pokeapi.co/api/v2/pokemon/1";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const types = data.types.map(t => t.type.name);
    console.log("Nombre:", name);
    console.log("Tipos:", types);
  })
  .catch(err => console.error("Error:", err));
