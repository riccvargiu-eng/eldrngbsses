//API



export async function apiCall(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("API Success", `Dati ricevuti da ${endpoint}`);
    return data;
  } catch (error) {
    console.log("API Error", `Errore per ${endpoint}: ${error.message}`);
    return null;
  }
}
