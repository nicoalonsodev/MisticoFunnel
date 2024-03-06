import React from "react";
import StatementList from ".././ProgressBar/ProgressBar";
const DescriptionPercentage = () => {
  return (
    <div className="flex flex-wrap justify-between items-start h-auto lg:h-[550px] xl:space-x-0">
      <div className="w-full lg:w-[50%] flex flex-wrap justify-start items-start space-y-4">
        <h2 className="w-full font-roboto-400 text-xl text-center lg:text-left text-yellow-700">
          Estudio Clinico
        </h2>
        <h1 className="font-roboto-400 text-3xl lg:text-5xl text-center lg:text-left">
          Resultados demostrados al cabo de 90 días
        </h1>
        <div className="flex lg:hidden overflow-hidden px-10">
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
      <div className="hidden lg:flex justify-end w-[50%] overflow-hidden h-full rounded-xl">
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
