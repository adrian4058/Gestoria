import React from "react";
import car from "../img/Car_Front.png";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from "../../types";

const Footer: React.FC = () => {
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
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="main-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center mb-6">
                <img className="w-16 h-16 mr-3" src={car} alt="Gestoría Adriana" />
                <div>
                  <h1 className="text-lg text-gray-600 font-semibold">Gestoría</h1>
                  <h1 className="text-2xl font-bold text-[#1B9AAA]">Adriana</h1>
                </div>
              </a>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Profesionales certificados en mandataria del automotor. Brindamos servicios de gestión vehicular con más
                de 10 años de experiencia.
              </p>
              <div className="flex space-x-4">
                <a
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-[#1B9AAA] hover:text-white transition-colors duration-200"
                  href="#"
                  aria-label="Instagram"
                >
                  <AiFillInstagram className="text-lg" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-[#1B9AAA] hover:text-white transition-colors duration-200"
                  href="#"
                  aria-label="Facebook"
                >
                  <AiFillFacebook className="text-lg" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-[#1B9AAA] hover:text-white transition-colors duration-200"
                  href="mailto:gestoria.adriana81@gmail.com"
                  aria-label="Email"
                >
                  <IoMdMail className="text-lg" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h3>
              <nav className="space-y-3">
                {Links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="block text-gray-600 hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MdLocationPin className="text-[#1B9AAA] text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    Roque Sanez Peña 551, Sunchales, Santa Fe.<br />
                    (Pasillo interno, última casa a la izquierda)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <IoMdCall className="text-[#1B9AAA] text-lg flex-shrink-0" />
                  <a
                    href="tel:+543493416819"
                    className="text-gray-600 hover:text-[#1B9AAA] transition-colors duration-200 text-sm"
                  >
                    +54 3493 416819
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <IoMdMail className="text-[#1B9AAA] text-lg flex-shrink-0" />
                  <a
                    href="mailto:gestoria.adriana81@gmail.com"
                    className="text-gray-600 hover:text-[#1B9AAA] transition-colors duration-200 text-sm"
                  >
                    gestoria.adriana81@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 Gestoría Adriana. Todos los derechos reservados.</p>
            <a
              href="https://www.linkedin.com/in/adrian4058"
              className="flex items-center text-sm text-gray-500 hover:text-[#1B9AAA] transition-colors duration-200"
            >
              <span className="mr-2">Desarrollado por</span>
              <AiFillLinkedin className="text-[#0A66C2] text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
