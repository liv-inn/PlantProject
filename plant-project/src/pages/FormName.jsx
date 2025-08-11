import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", name);

    if (name.trim()) {
      localStorage.setItem("userName", name);
      window.location.href = "/home";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <span className="text-5xl">🌱</span>
      <h1 className="text-[#52665A] text-base sm:text-lg font-bold">
        What should we call you?
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="font-bold text-center border-b border-gray-300 outline-none text-gray-500 rounded placeholder:font-light"
        />

        <button
          type="submit"
          disabled={!name.trim()}
          className={`text-white rounded-full h-10 font-extralight transition-colors duration-300 ${
            name.trim()
              ? "bg-[#9aa710] text-white hover:bg-[#88940f]"
              : "bg-[#9aa71071] text-white cursor-not-allowed" 
          }`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default NameForm;