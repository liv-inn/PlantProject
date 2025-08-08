import { useState, useEffect } from "react";
import RoomButtons from "../components/RoomButtons";

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen gap-10 px-6 text-center">
      <span className="text-3xl text-[#52665A] mb-10">
        Hello, <br /> {name}!
      </span>

      <span className="text-sm text-[#52665A] mb-4 text-left">
        In which room would you like to place your plant?
      </span>

      <RoomButtons />
    </div>
  );
}

export default Home;