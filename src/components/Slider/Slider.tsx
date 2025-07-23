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
    <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[450ms] relative overflow-hidden">
      <SlickSlider {...settings}>
        <div className="relative">
          <img className="w-full h-screen object-cover" src={img1} alt="Gestoría Adriana - Servicios automotores" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        <div className="relative">
          <img className="w-full h-screen object-cover" src={img2} alt="Trámites automotores profesionales" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        <div className="relative">
          <img className="w-full h-screen object-cover" src={img3} alt="Mandataria del automotor certificada" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
      </SlickSlider>

      {/* Hero Content with Modern Design */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="main-container w-full px-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-2xl">
            <h1 className="font-black text-3xl md:text-4xl lg:text-6xl text-white mb-6 leading-tight">
              GESTIÓN Y <span className="text-[#06D6A0]">ASESORAMIENTO</span>
            </h1>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-white/90 mb-8">
              DE DOCUMENTACIÓN AUTOMOTRIZ
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Profesionales certificados en mandataria del automotor. Trámites seguros, rápidos y confiables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Servicios
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 text-center">Desliza</p>
      </div>
    </div>
  );
};

export default Slider;
