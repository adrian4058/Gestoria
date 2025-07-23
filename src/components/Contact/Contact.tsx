import Maps from "./Maps/Maps";
import { VscLocation } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <div className="flex content justify-between mt-28 mb-52">
      <div className="flex flex-col lg:flex-row items-start w-full justify-between gap-8">
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="font-black text-[#1B9AAA] text-4xl mb-6">Contacto</h1>
          <ul className="space-y-6">
            <li className="flex items-start">
              <VscLocation className="text-[#1B9AAA] text-3xl mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-600 font-medium">
                Roque Sanez Peña 551, Sunchales, Santa Fe. <br />{" "}
                <b className="text-sm">(Pasillo interno, última casa a la izquierda)</b>
              </p>
            </li>
            <li className="flex items-start">
              <AiOutlineMail className="text-[#1B9AAA] text-3xl mr-3 flex-shrink-0" />
              <a
                href="mailto:gestoria.adriana81@gmail.com"
                className="text-gray-600 font-medium hover:text-[#1B9AAA] transition-colors"
              >
                gestoria.adriana81@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <FiPhoneCall className="text-[#1B9AAA] text-3xl mr-3 flex-shrink-0" />
              <a href="tel:+5493493416819" className="text-gray-600 font-medium hover:text-[#1B9AAA] transition-colors">
                +54 3493 416819
              </a>
            </li>
            <li className="flex items-start">
              <TbWorldWww className="text-[#1B9AAA] text-3xl mr-3 flex-shrink-0" />
              <a
                href="https://gestorautomotorortega.com.ar/contacto/"
                className="text-gray-600 font-medium hover:text-[#1B9AAA] transition-colors"
              >
                www.gestoriaadriana.com
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 h-80 lg:h-96">
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
