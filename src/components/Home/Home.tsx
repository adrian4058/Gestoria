import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About Us/About";
import { FaWhatsappSquare } from "react-icons/fa";
import ContactFooter from "../ContactFooter/ContactFooter";

const Home = () => {
  return (
    <div className="w-screen">
      <section className="w-screen" id="home">
        <Navbar />
        <Slider />
      </section>
      <section className="pt-8" id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="budget"></section>
      <section id="contact">
        <ContactFooter />
      </section>
      <a href="https://wa.me/5493493416819/?text=Hola%20Adriana%20tengo%20una%20consulta%20sobre%20">
        <FaWhatsappSquare className="text-[#25D366] text-6xl fixed bottom-6 right-6" />
      </a>
    </div>
  );
};

export default Home;
