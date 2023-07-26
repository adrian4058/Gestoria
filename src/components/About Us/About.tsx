import penhand from "../img/PenHand.jpg";

const About = () => {
  return (
    <div className="flex mt-10 p-28">
      <img className="w w-[700px]" src={penhand} />
      <div className="flex flex-col space-y-6 justify-center items-center">
        <h1 className="t font-black text-[#1B9AAA] text-4xl underline">Sobre Nosotros</h1>
        <p className="ml-14 text-justify text-gray-600 font-medium">
          El Mandatario del Automotor es el profesional certificado por la
          Dirección Nacional de Registros de la Propiedad Automotor y Créditos
          Prendarios, que te guía al momento de llevar a cabo cualquier tipo de
          trámite relacionado con tus vehículos. Gracias a su conocimiento
          profundo de las leyes y regulaciones aplicables, se asegura de
          proteger tu patrimonio y la inversión realizada en tu automóvil.
          Nuestro objetivo es garantizar que todas tus transacciones sean
          seguras, rápidas y confiables. Estamos comprometidos a ofrecerte un
          servicio de asesoramiento personalizado y atendemos todas tus
          inquietudes de manera efectiva. Trabajamos incansablemente para
          brindarte el soporte adecuado en todo momento.
        </p>
      </div>
    </div>
  );
};

export default About;
