import SlickSlider from "react-slick";
import { SliderSettings } from "../../types";
// import "./Slider.css"
import img1 from "../img/audia4.jpg";
import img2 from "../img/audia4-2.jpg";
import img3 from "../img/audia4-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
      <SlickSlider {...settings}>
        <div className="relative">
          <img className="w-full h-[calc(100vh-5rem)] object-cover" src={img1} alt="Gestoría Adriana - Servicios automotores" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative">
          <img className="w-full h-[calc(100vh-5rem)] object-cover" src={img2} alt="Trámites automotores profesionales" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative">
          <img className="w-full h-[calc(100vh-5rem)] object-cover" src={img3} alt="Mandataria del automotor certificada" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
      </SlickSlider>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 text-center shadow-2xl">
            <h1 className="font-black text-4xl md:text-5xl lg:text-7xl text-white mb-4 leading-tight tracking-tight">
              GESTIÓN Y <span className="text-[#06D6A0] drop-shadow-lg">ASESORAMIENTO</span>
            </h1>
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white/90 mb-6 tracking-wide">
              DE DOCUMENTACIÓN AUTOMOTRIZ
            </h2>
            <p className="text-white/80 text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Profesionales certificados en mandataria del automotor. Trámites seguros, rápidos y confiables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="px-8 py-3 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
              >
                Ver Servicios
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 text-sm md:text-base"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-2 text-center font-medium">Desliza</p>
      </div>
    </div>
  );
};

export default Slider;
