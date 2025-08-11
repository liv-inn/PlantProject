import { useState, useEffect } from "react";
import RoomButtons from "../components/RoomButtons";
import PlantCard from "../components/PlantCard";
import { getPlants } from "../api/plantApi";

function Home() {
  const [name, setName] = useState("");

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
        <strong>In which room </strong><br />
         would you like to place your plant?
      </span>

      <RoomButtons />
      <PlantCard/>

      <div>
    
  

    </div>
    </div>
  );
}

export default Home;