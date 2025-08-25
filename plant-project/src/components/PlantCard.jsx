import { getPlants } from "../api/plantApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PlantCard() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants(); // getPlants já retorna um array
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="flex gap-4 mt-2">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {plants.map((plant) => (
          <li
            key={plant.id}
            className="rounded-lg text-gray-700 text-sm bg-gray-100 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/plant-details/${plant.id}`)}
            aria-label={`View details for ${plant.common_name || "plant"}`}
          >
            {plant.default_image?.medium_url ? (
              <img
                src={plant.default_image.medium_url}
                alt={plant.common_name || "Plant Image"}
                className="mb-2 w-full h-32 object-cover rounded-t-lg"
              />
            ) : (
              <div className="mb-2 w-full h-32 bg-gray-300 flex items-center justify-center rounded-t-lg">
                <span className="text-gray-500 text-xs">No image</span>
              </div>
            )}
            <span className="px-2 py-2 text-center">
              {plant.common_name || "Unnamed Plant"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantCard;
