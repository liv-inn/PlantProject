const API_BASE_URL = "https://perenual.com/api";
const API_KEY = import.meta.env.VITE_PERENUAL_KEY;

export async function getPlants(page = 1) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/species-list?key=${API_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch plants:", error);
    throw error;
  }
}

export async function getPlantDetails(plantId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/species/details/${plantId}?key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch plant details:", error);
    throw error;
  }
}

export async function getAllPlants(){
    
}