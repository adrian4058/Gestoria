import car from "../img/Car_Front.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[300px] flex flex-col justify-between pt-6 pb-6 bg-[#e5e6e4] border-t border-gray-400">
      <div className="flex h-3/4 justify-between items-center">
        <div className="flex flex-col space-y-4 justify-evenly">
          <a href="#home" className="flex ml-40 w-fit items-center">
            <img className="w-20 h-20 " src={car} />
            <div className="flex flex-col items-center justify-center">
              <h1 className="absolute mb-5 text-1xl font-semibold ">
                Gestoría
              </h1>
              <h1 className="ml-6 mt-5 text-2xl font-extrabold text-[#eb5e28]">
                Adriana
              </h1>
            </div>
          </a>
          <ul className="flex space-x-7 ml-40 w-fit ">
            <a href="">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%]">
                <AiFillInstagram className="text-[#E4405F] text-3xl hover:text-[#e4405fbb] " />
              </li>
            </a>
            <a href="">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%]">
                <AiFillFacebook className="text-[#1877F2] text-3xl hover:text-[#1877f2bb]" />
              </li>
            </a>
            <a href="mailto:gestoria.adriana81@gmail.com">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%] ">
                <IoMdMail className="text-[#0078D4] text-3xl hover:text-[#0078d4bb]" />
              </li>
            </a>
          </ul>
        </div>
        <ul className="flex flex-col mr-44 items-start justify-center content-center space-y-1 ">
          <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
            <a href="#home">INICIO</a>
          </li>
          <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
            <a href="#services">SERVICIOS</a>
          </li>
          <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
            <a href="#about">NOSOTROS</a>
          </li>
          <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
            <a href="#budget">PRESUPUESTOS</a>
          </li>
          <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between border-t border-gray-600 pt-6">
        <h1 className="ml-40 text-gray-600">
          ©2023 Gestoría Adriana. Todos los derechos reservados
        </h1>
        <h1 className="text-cyan-600 mr-40 underline">
          <a
            href="https://www.linkedin.com/in/adrian4058"
            className="flex text-base  hover:text-cyan-500 items-center"
          >
            Realizado por
            <AiFillLinkedin className="text-[#0A66C2] hover:text-cyan-500 text-lg ml-2" />
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
