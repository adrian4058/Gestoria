import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Budgets: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_cvwymo8",
          "template_vav5u2j",
          formRef.current,
          "oh8Emvyzsysk2h60a"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset(); // Utilizar e.currentTarget para resetear el formulario
    }
  };

  return (
    <div className="md:flex ">
      <div className="px-6">
        <h2 className=" font-black text-[#1B9AAA] text-4xl underline">
          Presupuestos
        </h2>
        <p className=" text-gray-600 font-medium">
          En <b>Gestoría Adriana</b>, entendemos lo importante que es tener una
          gestión adecuada de tus vehículos. Por eso, te ofrecemos presupuestos
          personalizados para cada uno de tus trámites automotores. Nuestro
          equipo de expertos en automóviles está aquí para ayudarte a
          simplificar y agilizar cualquier gestión relacionada con tus
          vehículos. ¿Por qué elegir nuestros presupuestos? <br /> <br />
          {"-"}
          <b>Experiencia y Conocimiento:</b> Contamos con una sólida experiencia
          en el campo y está familiarizado con todas las leyes y normativas
          relacionadas con trámites automotores. <br />
          {"-"}
          <b>Asesoramiento Especializado:</b> Te brindamos asesoramiento
          personalizado, escuchando tus necesidades y diseñando un presupuesto
          acorde a los servicios que requieres. <br />
          {"-"}
          <b>Transparencia y Confianza:</b> Nuestros presupuestos son claros y
          detallados, sin costos ocultos. Queremos que tengas total confianza en
          nuestros servicios. <br />
          <b> -Eficiencia y Rapidez:</b> Trabajamos de manera ágil y eficiente
          para que tus trámites se realicen en el menor tiempo posible. <br />
          <b>-Protección de tu Patrimonio:</b> Conocemos la importancia de tu
          inversión en tus vehículos. Nuestro objetivo es proteger tu patrimonio
          y garantizar que todo esté en regla. <br />{" "}
          <b>-Compromiso con la Calidad:</b> Nos enorgullecemos de brindar un
          servicio de alta calidad en cada uno de nuestros trámites automotores.
        </p>
      </div>
      <form
        className="flex flex-col md:px-28 px-6"
        ref={formRef}
        onSubmit={sendEmail}
        action=""
      >
        <h2 className="font-black text-[#1B9AAA] text-xl max-md:pt-6 ">
          CONSULTA TU PRESUPUESTO
        </h2>
        <h2 className="text-gray-600 font-medium">Nombre Completo</h2>
        <input
          className="mb-3"
          type="text"
          placeholder="Nombre..."
          name="name"
          required
        />
        <h2 className="text-gray-600 font-medium">Número de teléfono</h2>
        <input
          className="mb-3"
          type="number"
          placeholder="Ej: 3492415231"
          name="phone"
          required
        />
        <h2 className="text-gray-600 font-medium">Asunto de consulta</h2>
        <input
          className="mb-3"
          type="text"
          placeholder="Ej: Cambio de titular"
          name="subject"
          required
        />
        <h2 className="text-gray-600 font-medium">
          Detalla brevemente el problema
        </h2>
        <textarea
          className="mb-3"
          required
          name="message"
          cols={30}
          rows={10}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          type="submit"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};

export default Budgets;
