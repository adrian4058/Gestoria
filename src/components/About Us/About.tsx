import penhand from "../img/PenHand.jpg";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const About: React.FC = () => {
  const [isVisibleAbout, setIsVisibleAbout] = useState<boolean>(false);

  const handleScroll = () => {
    const animatedElementabout = document.getElementById("animated-content-about");
    if (!animatedElementabout) return;
    const elementPosition = animatedElementabout.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    const triggerPointInVh = window.innerHeight * -0.5; // Aparecerá cuando esté a la mitad de la ventana
    setIsVisibleAbout(scrollPosition > elementPosition - triggerPointInVh);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full py-16">
      {/* Título de sección */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Sobre <span className="text-[#1B9AAA]">Nosotros</span>
        </h2>
        <div className="w-24 h-1 bg-[#1B9AAA] mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Profesionales certificados en mandataria del automotor
        </p>
      </div>

      {/* Este es el enlace de scroll que activará la animación */}
      <ScrollLink to="animated-content-about" smooth duration={2000}></ScrollLink>
      <Element name="animated-content-about" id="animated-content-about">
        <div
          className={`${
            isVisibleAbout
              ? "flex flex-col lg:flex-row items-center gap-12 animate-fade-down animate-once animate-duration-1200 animate-delay-[300ms] opacity-100"
              : "opacity-0"
          }`}
        >
          {/* Imagen */}
          <div className="lg:w-2/5 w-full max-w-md mx-auto lg:mx-0">
            <img className="w-full rounded-2xl shadow-lg" src={penhand} alt="Servicios profesionales" />
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1B9AAA] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Profesionales Certificados</h3>
              </div>

              <p className="text-justify text-gray-700 font-medium leading-relaxed mb-6">
                El Mandatario del Automotor es el profesional certificado por la Dirección Nacional de Registros de la
                Propiedad Automotor y Créditos Prendarios, que te guía al momento de llevar a cabo cualquier tipo de
                trámite relacionado con tus vehículos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-[#1B9AAA] mr-2">●</span>
                  Protección de tu patrimonio
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-[#1B9AAA] mr-2">●</span>
                  Transacciones seguras
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-[#1B9AAA] mr-2">●</span>
                  Asesoramiento personalizado
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-[#1B9AAA] mr-2">●</span>
                  Atención efectiva
                </div>
              </div>

              <p className="text-justify text-gray-700 font-medium leading-relaxed">
                Nuestro objetivo es garantizar que todas tus transacciones sean seguras, rápidas y confiables.
                Trabajamos incansablemente para brindarte el soporte adecuado en todo momento.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
