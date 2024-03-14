import React from "react";
import ComparisonSlider from "../ComparisonSlider/ComparisonSlider";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
const ComparisonContainer = () => {
  const comparisons = [
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-12">
      <div className="w-full flex flex-wrap justify-center space-y-4">
        <h1 className="w-full text-center  text-yellow-700 font-roboto-400 text-xl">
          Antes y Despues
        </h1>
        <p className="w-full text-center text-gray-700 font-roboto-500 text-4xl">
          Preguntas frecuentes
        </p>
        <p className="w-full max-w-[750px] text-center text-gray-800 font-roboto-300 text-lg lg:text-xl">
          La calidad de nuestros productos es nuestra máxima prioridad. Cada
          prenda es cuidadosamente seleccionada y confeccionada con los mejores
          materiales para garantizar durabilidad y estilo incomparables.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="w-full flex justify-start lg:justify-center overflow-x-auto gap-x-10">
          {comparisons?.map((comp, index) => (
            <div key={index} className="w-3/4 lg:w-1/4 flex-shrink-0">
              {/* <ComparisonSlider img1={comp.img1} img2={comp.img2} /> */}
              <img src={comp.img1} alt="" />
            </div>
          ))}
        </div>
        <div className="flex lg:hidden w-full justify-end text-right">
          <h1 className="text-gray-700 text-lg p-2 ">
            Deslizar para ver mas ⮕
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComparisonContainer;
