import { getPlants } from "../api/plantApi";
import { useState, useEffect } from "react";

function PlantCard() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants();
        setPlants(data.data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <>
      <div className="flex gap-4 mt-2">
   <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {plants.map((plant) => (
    <li
      key={plant.id}
      className="p-2 text-gray-700 text-sm  bg-gray-100 rounded-lg flex flex-col items-center"
    >
      {plant.default_image?.medium_url && (
        <img
          src={plant.default_image.medium_url}
          alt={plant.common_name}
          width={100}
          className="mb-2 rounded-lg"
        />
      )}
      {plant.common_name}
    </li>
  ))}
</ul>
      </div>
    </>
  );
}


export default PlantCard;
