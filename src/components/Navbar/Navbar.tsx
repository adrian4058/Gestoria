import { useState } from "react";
import car from "../img/Car_Front.png";
import { Link } from "../../types";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const Links: Link[] = [
    {
      name: "Inicio",
      link: "#home",
    },
    {
      name: "Servicios",
      link: "#services",
    },
    {
      name: "Nosotros",
      link: "#about",
    },
    {
      name: "Presupuestos",
      link: "#budget",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 z-50 w-full border-b border-gray-100">
      <div className="main-container">
        <nav className="flex w-full justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <img className="w-16 h-16 mr-3" src={car} alt="Gestoría Adriana" />
            <div>
              <h1 className="text-lg text-gray-600 font-semibold">Gestoría</h1>
              <h1 className="text-2xl font-bold text-[#1B9AAA]">Adriana</h1>
            </div>
          </a>

          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <AiOutlineClose className="text-2xl text-gray-700" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-gray-700" />
            )}
          </div>

          <ul
            className={`lg:flex lg:items-center absolute lg:static bg-white lg:bg-transparent left-0 w-full lg:w-auto transition-all duration-300 ease-in-out max-lg:shadow-lg max-lg:border-t max-lg:border-gray-200 ${
              open ? "top-20 py-4" : "top-[-400px]"
            }`}
          >
            {Links.map((link, index) => (
              <li key={index} className="lg:ml-6">
                <a
                  onClick={() => handleSectionClick(`${link.name}`)}
                  className={`block px-4 py-3 lg:py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === `${link.name}`
                      ? "text-[#1B9AAA] font-semibold border-b-2 border-[#1B9AAA] lg:border-b-2"
                      : "text-gray-700 hover:text-[#1B9AAA]"
                  }`}
                  href={`${link.link}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
