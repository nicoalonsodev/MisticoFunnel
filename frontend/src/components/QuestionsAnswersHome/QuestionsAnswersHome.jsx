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
      question: "¿Como utilizo los productos?",
      answer:
        "Tras limpiar la piel, aplica 4 gotas del serum antiarrugas. Posteriormente, aplica la crema antiedad reparadora.",
      answer_id: "1",
    },
    {
      question: "¿Esta rutina de pieles es buena para cualquier tipo?",
      answer:
        "Si, está recomendada para todo tipo de pieles, incluidas las sensibles y propensas al acné.",
      answer_id: "2",
    },
    {
      question: "¿Cuando se comienzan a notar los resultados?",
      answer:
        "Podrás comenzar a ver resultados en una semana, con resultados completos que generalmente aparecen después de 14-30 días de uso. Con el tiempo, los resultados serán aún más notables.",
      answer_id: "3",
    },
    {
      question: "¿Cuando se comienzan a notar los resultados?",
      answer:
        "Podrás comenzar a ver resultados en una semana, con resultados completos que generalmente aparecen después de 14-30 días de uso. Con el tiempo, los resultados serán aún más notables.",
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
