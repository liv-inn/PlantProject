import { useState, useEffect } from "react";
import { getAllPlants } from "../api/plantApi";
import { useNavigate } from "react-router-dom";

function NewPlant() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("");
  const [reminder, setReminder] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [annotation, setAnnotation] = useState("");
  const [plants, setPlants] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getAllPlants();
        setPlants(data);
      } catch (error) {
        console.error("Erro ao buscar plantas:", error);
      }
    };
    fetchPlants();
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPlant) {
      localStorage.setItem("newPlantName", selectedPlant);
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 rounded-lg p-4">
      <form
        className="flex flex-col gap-6 p-6 bg-white max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <label htmlFor="plantSearch" className="font-semibold">
          Search Plant <span className="text-red-500">*</span>
        </label>
        <input
          id="plantSearch"
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 text-center"
        />

        <label htmlFor="plantName" className="font-semibold mt-2">
          Select Plant
        </label>
        <select
          id="plantName"
          value={selectedPlant}
          onChange={(e) => setSelectedPlant(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 text-center"
        >
          <option value="">Select a plant</option>
          {filteredPlants.map((plant) => (
            <option key={plant.id} value={plant.name}>
              {plant.name}
            </option>
          ))}
        </select>

        <label htmlFor="plantNote" className="font-light text-gray-700">
          Annotation
        </label>
        <input
          type="text"
          id="plantNote"
          placeholder="Note"
          value={annotation}
          onChange={(e) => setAnnotation(e.target.value)}
          className="font-bold text-center border-b border-gray-300 outline-none text-[#333] rounded placeholder:font-light py-1"
        />

        <fieldset className="flex gap-6 items-center justify-center">
          <legend className="font-semibold">Do you want a reminder?</legend>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Yes"
              name="reminder"
              value="yes"
              checked={reminder === "yes"}
              onChange={() => setReminder("yes")}
            />
            <label htmlFor="Yes">Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="No"
              name="reminder"
              value="no"
              checked={reminder === "no"}
              onChange={() => setReminder("no")}
            />
            <label htmlFor="No">No</label>
          </div>
        </fieldset>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="favoritePlant"
            checked={favorite}
            onChange={() => setFavorite(!favorite)}
            className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
          />
          <label htmlFor="favoritePlant" className="select-none">
            Favorite Plant
          </label>
        </div>

        <button
          type="submit"
          disabled={!selectedPlant}
          className={`text-white rounded-full h-10 font-extralight transition-colors duration-300 ${
            selectedPlant
              ? "bg-[#9aa710] hover:bg-[#88940f]"
              : "bg-[#9aa71071] cursor-not-allowed"
          }`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default NewPlant;
