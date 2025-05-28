const API_KEY = "pokeprice_free_8fac0c18430cf0ad9edfb0498290e4f05304ba2f4f0d9b3c"
const BASE_URL = "https://api.pokemonpricetracker.com/v1"

export const getSingleCardPrice = async (cardId) => {
    const url = new URL(BASE_URL  + "/prices");
    url.searchParams.append("id", cardId);
    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    });

    if(!response.ok) {
        throw new Error("Single Card Price API Error: " + response.statusText);
    }

    const result = await response.json();
    return result.data && result.data.length > 0 ? result.data[0] : null;
}