import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiList } from "react-icons/fi";

import RoomButtons from "../components/RoomButtons";
import PlantCard from "../components/PlantCard";
import MyPlants from "../components/MyPlants";
import Modal from "../components/Modal";
import NewPlant from "../components/NewPlant";

function Home() {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center mt-6 p-6 gap-10 px-6 text-center">
      <span className="text-2xl text-[#52665A] text-left">
        Hello, <br />
        <span className="font-bold text-3xl">{name}!</span>
      </span>

      <span className="text-sm text-[#52665A] text-left">
        <strong>In which room</strong>
        <br />
        would you like to place your plant?
      </span>

      <RoomButtons />
      <PlantCard />

      <div className="text-gray-700 text-sm flex gap-4 justify-center items-center h-20 bg-white sticky bottom-0 z-50">
        <button
          className="flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlus size={20} className="text-[#9aa710]" />
          Add Plant
        </button>
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/my-plants")}
        >
          <FiList size={20} className="text-[#9aa710]" />
          My Plants
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NewPlant />
        </Modal>
      )}
    </div>
  );
}

export default Home;
