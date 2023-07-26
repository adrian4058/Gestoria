import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About Us/About";

const Home = () => {
  return (
    <div className="w-screen">
      <section className="w-screen" id="home">
        <Navbar  />
        <Slider />
      </section>
      <section className="pt-8" id="services">
        <Services />
      </section>
      <section>
        <About/>
      </section>
    </div>
  );
};

export default Home;
