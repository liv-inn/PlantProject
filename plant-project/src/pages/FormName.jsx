function FormName() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <span className="text-5xl">🌱</span>
      <h1 className="text-[#52665A] text-base sm:text-lg font-bold ">Como podemos chamar você?</h1>
      <form action="" className="flex flex-col gap-8" >
        <input type="text" placeholder="Digite seu nome" className=" font-bold text-center border-b-2  border-gray-300 outline-none  text-gray-500 rounded placeholder:font-light" />
        <button type="submit" className="bg-[#9AA710] hover:bg-[#88940f] text-white rounded-full h-10">
          Enviar
        </button>
      </form>
    </div>
  );
}
export default FormName;