# 📘 Actividades – Clase Nº 13

¡Bienvenidas, chicas!

En esta serie de ejercicios vamos a poner en práctica todo lo aprendido sobre **fetch** y el consumo de datos desde una **API**.

Estos ejercicios están diseñados para practicar cómo manipular datos recibidos desde APIs públicas usando **solo Node.js**, sin frontend. Así van a fortalecer la comprensión de cómo el backend se comunica con otras aplicaciones en la web.

> 💡 **Desafío:** deberán aplicar toda su lógica. Si algo no se entiende, investiguen. En la próxima clase vemos todas las dudas.  
¡Manos a la obra y diviértanse programando!

---

# 📝 Actividades

## ⭐ Ejercicio 1: Consultar Información de una API Pública
### Descripción
1. Crea un archivo **index.js**.  
2. Usando **fetch** en Node.js, realiza una solicitud a la API de **Rick and Morty**.  
3. Extrae el **nombre del primer personaje** y muéstralo en consola.

### Pistas
- Usa `fetch(url)` para hacer la solicitud.  
- Procesá la respuesta con `.then(response => response.json())`.  
- Accedé al nombre con `results[0].name`.

---

## ⭐ Ejercicio 2: Obtener Información de un Pokémon Específico
### Descripción
1. Crea un archivo **getPokemon.js**.  
2. Usando fetch, solicita información del Pokémon **Bulbasaur** desde la PokeAPI.  
3. Extrae y muestra **nombre** y **tipos**.

### Pistas
- URL: `https://pokeapi.co/api/v2/pokemon/1`  
- Los tipos están dentro de `types`.

---

## ⭐ Ejercicio 3: Crear un Servicio de Búsqueda de Películas
### Descripción
1. Crea un archivo **searchMovie.js**.  
2. Escribe una función que reciba un título, busque en la API de **OMDb** y devuelva **título y año** de la primera coincidencia.  
3. Llama a la función y muestra el resultado en consola.  
   > Requiere API key gratuita.

### Pistas
- `fetch("https://www.omdbapi.com/?s=" + titulo + "&apikey=TU_API_KEY")`  
- La lista se encuentra en `Search`.  
- Primera película: `Search[0]`.

---

## ⭐ Ejercicio 4: Obtener Información de un País por Nombre
### Descripción
1. Crea **getCountry.js**.  
2. Escribe una función que reciba un país y devuelva **nombre, capital y región** desde REST Countries.  
3. Mostrá los datos en consola.

### Pistas
- URL: `https://restcountries.com/v3.1/name/{name}`  
- La respuesta es un arreglo → usar `[0]`.

---

## ⭐ Ejercicio 5: Información Meteorológica por Ciudad
### Descripción
1. Crea **getWeather.js**.  
2. Escribe una función que reciba una ciudad y consulte OpenWeatherMap.  
3. Muestra **temperatura** y **descripción del clima**.  
   > Requiere API key gratuita.

### Pistas
- `fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=TU_API_KEY")`  
- Temperatura: `main.temp`  
- Descripción: `weather[0].description`

---

## ⭐ Ejercicio 6: Buscar Canción por Título
### Descripción
1. Crea **searchSong.js**.  
2. Escribe una función que reciba un título y consulte la API de iTunes.  
3. Muestra **canción** y **artista**.

### Pistas
- URL: `https://itunes.apple.com/search?term={song_title}&limit=1`  
- Datos en el primer elemento del arreglo de resultados.

---

## ⭐ Ejercicio 7: Obtener Información de un Usuario por ID
### Descripción
1. Crea **getUser.js**.  
2. Usando fetch, consulta JSONPlaceholder por un usuario específico.  
3. Muestra **nombre**, **username** y **email**.

### Pistas
- URL: `https://jsonplaceholder.typicode.com/users/{id}`

---

## ⭐ Ejercicio 8: Lista de Episodios de una Serie
### Descripción
1. Crea **getEpisodes.js**.  
2. Consulta la API de **TVMaze** para obtener episodios de una serie (ejemplo: *Friends*).  
3. Muestra **títulos** y **número de temporada**.

### Pistas
- URL:  
  `https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embed=episodes`
- Episodios: `_embedded.episodes`.

---

## ⭐ Ejercicio 9: Buscar Repositorios de GitHub por Término
### Descripción
1. Crea **searchRepo.js**.  
2. Escribe una función que reciba un término de búsqueda.  
3. Muestra **nombre** y **descripción** de los primeros 5 resultados.

### Pistas
- URL: `https://api.github.com/search/repositories?q={query}&per_page=5`

---

## ⭐ Ejercicio 10: Obtener Precio de Criptomoneda
### Descripción
1. Crea **getCryptoPrice.js**.  
2. Escribe una función que reciba un símbolo (ej: BTC) y consulte CoinGecko.  
3. Muestra **nombre** y **precio en USD**.

### Pistas
- URL:  
  `https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currencies=usd`
- Usar el id en minúsculas (ej: `bitcoin` para BTC).
