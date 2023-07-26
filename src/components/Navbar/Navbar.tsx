import { useState } from "react";
import car from "../img/Car_Front.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };
  console.log(activeSection);

  return (
    <header className="bg-[#d8e2dc] flex fixed z-50 w-screen h-20 items-center content-center justify-between animate-fade-right animate-once animate-duration-1000 animate-delay-[450ms]">
      <nav className="ml-44 flex flex-row content-center items-center">
        <img className="w-28 h-28 " src={car} />
        <div className="flex flex-col justify-center content-evenly">
          <h1 className="fixed mb-6 ml-2 text-2xl font-semibold ">Gestoría</h1>
          <h1 className="fixed mt-6 ml-4 text-3xl font-extrabold text-[#eb5e28]">
            Adriana
          </h1>
        </div>
      </nav>
      <nav className="mr-44 flex">
        <ul className="flex space-x-12">
          <li>
            <a
              onClick={() => handleSectionClick("home")}
              className={`${
                activeSection === "home"
                  ? "text-xl text-[#eb5e28] font-semibold underline block py-2 pl-3 pr-4  rounded md:p-0 "
                  : "text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-[#ef8354] md:p-0 dark:text-black md:dark:hover:text-[#ef8354] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }`}
              href="#home"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              onClick={() => handleSectionClick("services")}
              className={`${
                activeSection === "services"
                  ? "text-xl text-[#eb5e28] font-semibold underline block py-2 pl-3 pr-4  rounded md:p-0 "
                  : "text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-[#ef8354] md:p-0 dark:text-black md:dark:hover:text-[#ef8354] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }`}
              href="#services"
            >
              Servicios
            </a>
          </li>
          <li>
            <a className="text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Nosotros
            </a>
          </li>
          <li>
            <a className="text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Datos útiles
            </a>
          </li>
          <li>
            <a onClick={() => handleSectionClick("presupuestos")}
              className={`${
                activeSection === "presupuestos"
                  ? "text-xl text-[#eb5e28] font-semibold underline block py-2 pl-3 pr-4  rounded md:p-0 "
                  : "text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:underline md:hover:bg-transparent md:border-0 md:hover:text-[#ef8354] md:p-0 dark:text-black md:dark:hover:text-[#ef8354] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }`}
              href="#">Presupuestos</a>
          </li>
          <li>
            <a className="text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
