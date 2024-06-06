import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
const QuestionsAnswersHome = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
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
        " Sí, ofrecemos cambios y devoluciones dentro de los 30 días posteriores a la recepción del pedido. La prenda debe estar en su estado original, sin usar y con todas las etiquetas adjuntas. Para iniciar un cambio o devolución, por favor contáctanos a través de nuestro formulario de contacto o envíanos un correo a mistico.world@hotmail.com.",
      answer_id: "2",
    },
    {
      question: "¿Cómo puedo saber qué talla elegir?",
      answer:
        "Cada producto tiene una guía de tallas específica disponible en la página del producto. Te recomendamos medir tu cuerpo y comparar tus medidas con nuestra guía para encontrar la talla que mejor te quede. Aca le dejo la GUIA DE TALLES ",
      answer_id: "3",
    },
    {
      question: "¿Ofrecen envíos gratuitos?",
      answer:
        "Sí, ofrecemos envíos gratuitos en pedidos superiores a $100 dentro del territorio nacional. Para pedidos internacionales, ofrecemos envío gratuito en compras superiores a $200. También ocasionalmente tenemos promociones especiales con envío gratuito, así que te recomendamos suscribirte a nuestro boletín para estar al tanto de nuestras ofertas.",
      answer_id: "4",
    },
  ];

  return (
    <div id="q&a" className={`w-full flex flex-wrap justify-center items-center gap-y-12 ${landing ? "py-10" : "py-0"}`}>
      { landing ? 
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="w-full text-center  text-yellow-700 font-roboto-400 text-xl">
          Respuestas a tus preguntas
        </h1>
        <p className="w-full text-center text-gray-900 font-roboto-500 text-4xl">
          Preguntas frecuentes
        </p>
      </div> : ""}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px]">
        {QAs?.map((qa) => (
          <>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                <span className="w-3/4 flex-grow text-left font-roboto-400 text-gray-700 text-lg lg:text-xl">
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
            >
              <span className="flex-grow text-left font-roboto-300 text-gray-500 text-lg lg:text-xl">
                {qa.answer}
              </span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[1.5px] border-gray-400" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersHome;
