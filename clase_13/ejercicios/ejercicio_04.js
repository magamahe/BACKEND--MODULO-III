async function getCountry(name) {
  try {
    // 1. Hacemos la solicitud a la API
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    // 2. Convertimos la respuesta a JSON
    const data = await response.json();

    // 3. Accedemos al PRIMER país (data[0])
    const country = data[0];

    // 4. Extraemos datos importantes
    const nombre = country.name.common;
    const capital = country.capital ? country.capital[0] : "Sin capital";
    const region = country.region;

    // 5. Mostramos en consola
    console.log("Nombre:", nombre);
    console.log("Capital:", capital);
    console.log("Región:", region);

  } catch (error) {
    console.log("Error al obtener el país:", error);
  }
}

// Ejemplos de uso:
getCountry("Argentina");
getCountry("Spain");
getCountry("Brazil");
