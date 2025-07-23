import { RiSuitcaseFill } from "react-icons/ri";
import { PiNotePencilThin } from "react-icons/pi";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { SlDocs } from "react-icons/sl";
import { FaCarCrash } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const animatedElement = document.getElementById("animated-content");
    if (!animatedElement) return;
    const elementPosition = animatedElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    const triggerPointInVh = window.innerHeight * 0.75; // Aparecerá cuando esté a la mitad de la ventana
    setIsVisible(scrollPosition > elementPosition - triggerPointInVh);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col content justify-start mt-10">
      {/* Título de sección moderno */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Nuestros <span className="text-[#1B9AAA]">Servicios</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Ofrecemos una amplia gama de servicios especializados en trámites automotores
        </p>
      </div>

      {/* Este es el enlace de scroll que activará la animación */}
      <ScrollLink to="animated-content" smooth duration={1000}></ScrollLink>
      <Element name="animated-content" id="animated-content">
        <div
          className={`${
            isVisible
              ? "animate-fade-down animate-once animate-duration-800 animate-delay-[300ms] opacity-100"
              : "opacity-0"
          }`}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <RiSuitcaseFill className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Trámites de Rentas
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Altas y Bajas por cambio de radicación.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Baja de patentes por Siniestro, Robo, Hurto o Destrucción.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Alta de patentes por Recupero.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Estado de Deudas, Impresión de Boletas para el pago y pedido de Plan de Facilidades.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Cambio de titularidad.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Presentación de la Denuncia de Venta ante Rentas y ante el Tribunal de Faltas.
                </li>
              </ul>
            </li>
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PiNotePencilThin className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Trámites de Usados
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Solicitud, renovación, revocación y pedido de duplicados de cédulas de identificación (verde) y
                  autorizados a conducir (azul o rosa).
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Duplicado de títulos.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Duplicado de chapas metálicas.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Transferencia por compraventa, sucesión, remate y otras operaciones.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Denuncia de compra.
                </li>
              </ul>
            </li>
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LiaCommentDollarSolid className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Venta de Vehículos
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Denuncia de venta.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Llenado de la Verificación Policial (formulario 12).
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Informes y certificados de dominio actuales e históricos para identificar a los titulares y si pesa
                  algún tipo de prenda sobre el vehículo o inhibición.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Consulta de infracciones de tránsito en la totalidad de las juridicciones adheridas (formulario 13 i).
                </li>
              </ul>
            </li>
          </ul>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SlDocs className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Otros trámites
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Confección de contratos de prendas, inscripción y cancelación de las mismas.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Emisión de CETA
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Emisión y pago de sellados para verificar su vehículo
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  R.U.T.A (emisión, renovación, y revocación) para Empresas y Particulares.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Altas y Bajas de motor
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Levantamiento de Embargos, Inhibición
                </li>
              </ul>
            </li>
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCarCrash className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Trámites ante el Seguro
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Bajas por Siniestro, Robo, Hurto, Destrucción y Altas por Recupero.
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Baja del vehículo ante la delegación tributaria correspondiente
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Consulta de infracciones en todo el país
                </li>
              </ul>
            </li>
            <li className="group flex flex-col items-start text-justify p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center w-full mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCar className="text-white text-4xl" />
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800 group-hover:text-[#1B9AAA] transition-colors">
                  Trámites de 0km
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Inscripción inicial (patentamientos) de su Automóvil, Motovehículo o Maquinaria agrícola
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B9AAA] mr-2">•</span>
                  Asesoramiento integral sobre la documentación vinculada a su Automotor
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Element>
    </div>
  );
};

export default Services;
