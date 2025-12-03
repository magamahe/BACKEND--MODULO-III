// getCryptoPrice.js

async function getCryptoPrice(symbol) {
  try {
    // Convertimos el símbolo a id válido
    const cryptoId = symbol.toLowerCase();

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`
    );

    const data = await response.json();

    // Si no existe ese ID, la API devuelve un objeto vacío
    if (!data[cryptoId]) {
      console.log(`❌ No se encontró la criptomoneda "${symbol}"`);
      return;
    }

    const price = data[cryptoId].usd;

    console.log(`\n💰 Precio de ${symbol.toUpperCase()}`);
    console.log(`USD ${price}`);
    console.log("===============================\n");

  } catch (error) {
    console.log("Error obteniendo precio:", error.message);
  }
}

// Ejemplos:
getCryptoPrice("bitcoin");
getCryptoPrice("ethereum");
getCryptoPrice("dogecoin");
