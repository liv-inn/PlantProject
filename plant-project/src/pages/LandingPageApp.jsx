import FirstAnimation from "../components/FirstAnimation";
import { useNavigate } from "react-router-dom";

function LandingPageApp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <h1 className="text-[#9AA710] text-4xl font-bold flex justify-center ">GreenThumb</h1>
       <FirstAnimation />

       <button onClick={() => navigate("/info-page")} className="bg-[#9AA710] text-white text-4xl rounded w-10">
         &gt;
       </button>
    </div>
  );
}

export default LandingPageApp;
