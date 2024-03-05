import React from "react";
import StatementList from ".././ProgressBar/ProgressBar";
const DescriptionPercentage = () => {
  return (
    <div className="flex flex-wrap justify-between items-start space-x-8 h-[558px] my-8 ">
      <div className="w-full lg:w-[47%] flex flex-wrap justify-start items-start space-y-4">
        <h2 className="font-roboto-300 text-xl text-left text-blue-500">
          Estudio Clinico
        </h2>
        <h1 className="font-roboto-400 text-5xl text-left">
          Resultados demostrados al cabo de 90 días
        </h1>
        <div className="flex lg:hidden overflow-hidden">
        <img
          src="https://www.agefit.com/_next/image?url=%2Fproduct-serum-planas-2.png&w=750&q=75"
          alt=""
          className="w-full rounded-xl"
        />
      </div>
        <p>
          Hemos desarrollado y registrado la fórmula Anti-aging Infalible con la
          Caléndula Marigold® que ha sido científicamente comprobada con
          estudios clínicos realizados por dermatólogos del Hospital
          Universitario Sagrado Corazón (Barcelona, España). Estos fueron los
          resultados:
        </p>
        <StatementList />
      </div>
      <div className="hidden lg:flex w-[47%] overflow-hidden h-full rounded-xl">
        <img
          src="https://www.agefit.com/_next/image?url=%2Fproduct-serum-planas-2.png&w=750&q=75"
          alt=""
          className="h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default DescriptionPercentage;
