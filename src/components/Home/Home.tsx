import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About Us/About";
import { FaWhatsappSquare } from "react-icons/fa";
import Contact from "../Contact/Contact";
import Footer from "../Footer/FooterNew";
import Budgets from "../Budgets/Budgets";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white" id="home">
        <Navbar />
        <Slider />
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16" id="services">
        <div className="section-content">
          <Services />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16" id="about">
        <div className="section-content">
          <About />
        </div>
      </section>

      {/* Budget Section */}
      <section className="bg-gray-50 py-16" id="budget">
        <div className="section-content">
          <Budgets />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16" id="contact">
        <div className="section-content">
          <Contact />
        </div>
      </section>

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5493493416819/?text=Hola%20Adriana%20tengo%20una%20consulta%20sobre%20"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <FaWhatsappSquare className="text-[#25D366] text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </a>
    </div>
  );
};

export default Home;
