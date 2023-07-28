import Maps from "./Maps/Maps";
import { VscLocation } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <div className="flex content justify-between mt-28 mb-32">
      <div className="flex items-center w-full justify-between">
        <ul className="flex flex-col space-y-6 items-start justify-center">
          <h1 className="font-black text-[#1B9AAA] text-4xl underline">
            Contacto
          </h1>
          <li className="flex items-center">
            <VscLocation className=" text-[#1B9AAA] text-3xl mr-2" />
            <p className="text-gray-600 font-medium">
              Roque Sanez Peña 551, Sunchales, Santa Fe. <br />{" "}
              <b className="text-sm">
                (Pasillo interno, última casa a la izquierda)
              </b>
            </p>
          </li>
          <li className="flex items-center">
            <AiOutlineMail className=" text-[#1B9AAA] text-3xl mr-2" />
            <a
              href="mailto:gestoria.adriana81@gmail.com"
              className="text-gray-600 font-medium"
            >
              gestoria.adriana81@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <FiPhoneCall className=" text-[#1B9AAA] text-3xl mr-2" />
            <a href="tel:+5493493416819" className="text-gray-600 font-medium">
              +54 3493 416819
            </a>
          </li>
          <li className="flex items-center">
            <TbWorldWww className=" text-[#1B9AAA] text-3xl mr-2" />
            <a
              href="https://gestorautomotorortega.com.ar/contacto/"
              className="text-gray-600 font-medium"
            >
              www.gestoriaadriana.com
            </a>
          </li>
        </ul>
        <Maps />
      </div>
    </div>
  );
};

export default Contact;
