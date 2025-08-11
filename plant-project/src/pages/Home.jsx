import { useState, useEffect } from "react";
import RoomButtons from "../components/RoomButtons";
import PlantCard from "../components/PlantCard";
import NewPlant from "../components/NewPlant";
import MyPlants from "../components/MyPlants";
import { FiPlus, FiList } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center mt-6 p-6 gap-10 px-6 text-center ">
      <span className="text-2xl text-[#52665A]  text-left">
        Hello, <br />
        <span className="font-bold text-3xl">{name}!</span>
      </span>

      <span className="text-sm text-[#52665A]  text-left  ">
        <strong>In which room </strong>
        <br />
        would you like to place your plant?
      </span>

      <RoomButtons />
  <PlantCard />
      <div className=" text-gray-700 text-sm flex gap-4 justify-center items-center p-0 text-center h-20 bg-white sticky bottom-0 z-50">
        <button className="flex items-center gap-2" 
         onClick={() => navigate("/new-plant")}>
          <FiPlus size={20} className="text-[#9aa710]" />
          <NewPlant />
        </button>
        <button className="flex items-center gap-2 " onClick={() => navigate("/my-plants")}>
          <FiList size={20} className="text-[#9aa710]" />
      
          <MyPlants />
        </button>
      </div>
    </div>
  );
}

export default Home;
