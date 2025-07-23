import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Budgets: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm("service_cvwymo8", "template_vav5u2j", formRef.current, "oh8Emvyzsysk2h60a").then(
        (result) => {
          console.log(result.text);
          toast.success("🦄 Consulta enviada!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.warn("🦄 Error al enviar consulta, comunicate por WhatsApp!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
      e.currentTarget.reset(); // Utilizar e.currentTarget para resetear el formulario
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <h2 className="font-black text-[#1B9AAA] text-4xl underline mb-6">Presupuestos</h2>
        <div className="text-gray-600 font-medium space-y-4 leading-relaxed">
          <p>
            En <b>Gestoría Adriana</b>, entendemos lo importante que es tener una gestión adecuada de tus vehículos. Por
            eso, te ofrecemos presupuestos personalizados para cada uno de tus trámites automotores. Nuestro equipo de
            expertos en automóviles está aquí para ayudarte a simplificar y agilizar cualquier gestión relacionada con
            tus vehículos.
          </p>
          <p className="font-semibold">¿Por qué elegir nuestros presupuestos?</p>
          <ul className="space-y-3">
            <li>
              <b>Experiencia y Conocimiento:</b> Contamos con una sólida experiencia en el campo y está familiarizado
              con todas las leyes y normativas relacionadas con trámites automotores.
            </li>
            <li>
              <b>Asesoramiento Especializado:</b> Te brindamos asesoramiento personalizado, escuchando tus necesidades y
              diseñando un presupuesto acorde a los servicios que requieres.
            </li>
            <li>
              <b>Transparencia y Confianza:</b> Nuestros presupuestos son claros y detallados, sin costos ocultos.
              Queremos que tengas total confianza en nuestros servicios.
            </li>
            <li>
              <b>Eficiencia y Rapidez:</b> Trabajamos de manera ágil y eficiente para que tus trámites se realicen en el
              menor tiempo posible.
            </li>
            <li>
              <b>Protección de tu Patrimonio:</b> Conocemos la importancia de tu inversión en tus vehículos. Nuestro
              objetivo es proteger tu patrimonio y garantizar que todo esté en regla.
            </li>
            <li>
              <b>Compromiso con la Calidad:</b> Nos enorgullecemos de brindar un servicio de alta calidad en cada uno de
              nuestros trámites automotores.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 max-w-md lg:max-w-none">
        <form className="bg-white p-6 rounded-lg shadow-md" ref={formRef} onSubmit={sendEmail}>
          <h2 className="font-black text-[#1B9AAA] text-xl mb-6">CONSULTA TU PRESUPUESTO</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Nombre Completo</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent"
                type="text"
                placeholder="Nombre..."
                name="name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Número de teléfono</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent"
                type="tel"
                placeholder="Ej: 3492415231"
                name="phone"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Asunto de consulta</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent"
                type="text"
                placeholder="Ej: Cambio de titular"
                name="subject"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Detalla brevemente el problema</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent resize-none"
                required
                name="message"
                rows={5}
                placeholder="Describe tu consulta..."
              ></textarea>
            </div>

            <button
              className="w-full bg-[#1B9AAA] hover:bg-[#157a87] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200"
              type="submit"
            >
              Enviar Consulta
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Budgets;
