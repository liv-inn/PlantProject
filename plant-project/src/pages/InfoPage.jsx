import FirstAnimation from "../components/FirstAnimation";
import { useNavigate } from "react-router-dom";

function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center gap-2">
      <h2 className="text-[#52665A] text-2xl sm:text-3xl font-semibold">
        Manage your plants easily
      </h2>

      <FirstAnimation />

      <span className="text-[#52665A] text-base sm:text-lg">
        Never forget to water your plants again. <br />
        We'll remind you whenever it's needed.
      </span>

      <button
        onClick={() => navigate("/form-name")}
        className="bg-[#9AA710] hover:bg-[#88940f] text-white text-2xl sm:text-3xl rounded-lg w-12 h-12 shadow-md transition flex items-center justify-center"
        aria-label="Go to next page"
      >
        &gt;
      </button>
    </div>
  );
}

export default InfoPage;