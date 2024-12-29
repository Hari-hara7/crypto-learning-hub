import axios from "axios";

const BASE_URL = "https://api.gemini.com/v1";

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pricefeed`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Gemini data:", error);
    throw error;
  }
};
