import FirstAnimation from "../components/FirstAnimation";
import { useNavigate } from "react-router-dom";

function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffff] px-6 text-center gap-6">
      <h2 className="text-[#52665A] text-2xl sm:text-3xl font-semibold">
        Gerencie suas plantas de forma fácil
      </h2>

      <FirstAnimation />

      <span className="text-[#52665A] text-base sm:text-lg">
        Não esqueça mais de regar suas plantas. <br />
        Nós cuidamos de lembrar você sempre que precisar.
      </span>

      <button
        onClick={() => navigate("/form-name")}
        className="bg-[#9AA710] hover:bg-[#88940f] text-white text-2xl sm:text-3xl rounded w-12 h-12 shadow-md transition"
        aria-label="Ir para próxima página"
      >
        &gt;
      </button>
    </div>
  );
}

export default InfoPage;
