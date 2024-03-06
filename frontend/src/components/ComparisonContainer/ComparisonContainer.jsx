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
      <div className="w-full flex justify-center items-center gap-x-10">
        {comparisons?.map((comp) => (
          <div className="w-1/4">
            <ComparisonSlider img1={comp.img1} img2={comp.img2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonContainer;
