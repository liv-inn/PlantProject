import { useState, useEffect } from "react";
import RoomButtons from "../components/RoomButtons";
import PlantCard from "../components/PlantCard";

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center p-6 gap-10 px-6 text-center ">
      <span className="text-3xl text-[#52665A]  text-left">
        Hello, <br /> {name}!
      </span>

      <span className="text-sm text-[#52665A] mb-4 text-left  ">
        In which room would you like to place your plant?
      </span>

      <RoomButtons />
      <PlantCard/>
    </div>
  );
}

export default Home;