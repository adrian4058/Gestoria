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
    <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[450ms]">
      <SlickSlider {...settings}>
        <img className="h-screen" src={img1} />
        <img className="h-screen" src={img2} />
        <img className="h-screen" src={img3} />
      </SlickSlider>
      <h1 className="bg-[#05050596] absolute bottom-24 left-16 z-30 font-bold text-3xl p-2 rounded-lg text-white ">
        GESTIÓN Y ASESORAMIENTO DE DOCUMENTACIÓN AUTOMOTRIZ.
      </h1>
    </div>
  );
};

export default Slider;
