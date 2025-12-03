// 1. Buscar coordenadas según la ciudad
async function getCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Ciudad no encontrada");
  }

  const info = data.results[0]; // tomamos el primer resultado útil

  return {
    latitude: info.latitude,
    longitude: info.longitude,
    name: info.name,
    country: info.country
  };
}

// 2. Obtener clima usando las coordenadas
async function getWeather(city) {
  try {
    // Paso 1 — Obtener latitud / longitud
    const { latitude, longitude, name, country } = await getCoordinates(city);

    // Paso 2 — Llamar a la API del clima
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const data = await response.json();

    const weather = data.current_weather;

    // Paso 3 — Mostrar info en consola
    console.log(`\n=== Clima en ${name} (${country}) ===`);
    console.log("🌡 Temperatura:", weather.temperature, "°C");
    console.log("💨 Viento:", weather.windspeed, "km/h");
    console.log("🌥 Código del clima:", weather.weathercode);
    console.log("=============================\n");

  } catch (error) {
    console.log("Error obteniendo clima:", error.message);
  }
}

// Ejemplos de prueba:
getWeather("Buenos Aires");
getWeather("Madrid");
getWeather("Tokyo");
