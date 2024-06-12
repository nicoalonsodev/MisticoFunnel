import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
import { talles_cargo, talles_jean } from "../../assets";
const QuestionsAnswersHome = ({ landing, cat }) => {
  const [answer, setAnswer] = useState("");
  const [viewSizeGuide, setViewSizeGuide] = useState(false);

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const handleViewSize = () => {
    setViewSizeGuide((prev) => !prev);
  };

  const QAs = [
    {
      question: "¿Cuál es el tiempo estimado de entrega de mi pedido?",
      answer:
        "El tiempo de entrega varía según tu ubicación. Generalmente, los pedidos nacionales tardan entre 3 a 7 días hábiles en llegar.",
      answer_id: "1",
    },
    {
      question: "¿Puedo realizar cambios o devoluciones de mi compra?",
      answer:
        "Sí, ofrecemos cambios y devoluciones dentro de los 30 días posteriores a la recepción del pedido. La prenda debe estar en su estado original, sin usar y con todas las etiquetas adjuntas. Para iniciar un cambio o devolución, por favor contáctanos a través de nuestro formulario de contacto o envíanos un correo a mistico.world@hotmail.com.",
      answer_id: "2",
    },
    {
      question: "¿Cómo puedo saber qué talla elegir?",
      answer:
        "Cada producto tiene una guía de tallas específica disponible en la página del producto. Te recomendamos medir tu cuerpo y comparar tus medidas con nuestra guía para encontrar la talla que mejor te quede. <span class='size-guide-link'>Aca le dejo la <a href='#' onClick='return false;' style='text-decoration: underline;'>GUIA DE TALLES</a></span>",
      answer_id: "3",
    },
    {
      question: "¿Ofrecen envíos gratuitos?",
      answer:
        "Sí, ofrecemos envíos gratuitos a todo el país atravez de OCCA 🇦🇷",
      answer_id: "4",
    },
  ];

  return (
    <div id="q&a" className={`w-full flex flex-wrap justify-center items-center gap-y-12 ${landing ? "py-10" : "py-0"}`}>
      { landing ? 
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="w-full text-center  text-yellow-700 font-montserrat-400 text-xl">
          Respuestas a tus preguntas
        </h1>
        <p className="w-full text-center text-gray-900 font-montserrat-500 text-4xl">
          Preguntas frecuentes
        </p>
      </div> : ""}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px]">
        {QAs?.map((qa) => (
          <React.Fragment key={qa.answer_id}>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                <span className="w-3/4 flex-grow text-left font-montserrat-400 text-gray-700 text-lg lg:text-xl">
                  {qa.question}
                </span>
                <IoIosArrowDown
                  className="w-1/4 md:w-auto text-gray-700"
                  style={{
                    transform: `rotate(${
                      answer === qa.answer_id ? 180 : 0
                    }deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full answer text-xl ${
                answer === qa.answer_id ? "show" : ""
              }`}
              dangerouslySetInnerHTML={{__html: qa.answer}}
              onClick={(e) => {
                if (e.target.tagName === 'A') {
                  handleViewSize();
                }
              }}
            >
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[1.5px] border-gray-400" />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {viewSizeGuide && (
        <div className="fixed -top-4 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md"
              onClick={handleViewSize}
            >
              Cerrar
            </button>
            <img src={cat === "cargo" ? talles_cargo : talles_jean} alt="guia de talle" />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsAnswersHome;
