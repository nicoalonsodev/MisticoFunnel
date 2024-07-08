import React from "react";
import StatementList from ".././ProgressBar/ProgressBar";
import { video_ugc } from "../../assets";
const DescriptionPercentage = () => {
  return (
    <div className="flex flex-wrap justify-center items-start h-auto lg:h-[550px] xl:space-x-0 ">
      <div className="w-full lg:w-[50%] flex flex-wrap justify-start items-start space-y-4">
        {/* <h2 className="w-full font-roboto-400 text-xl text-center lg:text-left text-yellow-700">
          Estudio Clinico
        </h2> */}
        <h1 className="font-sans-600 text-3xl lg:text-5xl text-center lg:text-left">
          Somos <span className="text-yellow-600">fabricantes</span> por eso
          podemos tener
        </h1>
        <div className="flex lg:hidden overflow-hidden ">
          <video
            src={video_ugc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl"
          ></video>
        </div>
        <p className="font-montserrat-400 ">
          En nuestra fábrica, cada prenda refleja nuestro compromiso con la
          calidad y el detalle. Al ser fabricantes directos, tenemos la ventaja
          de eliminar los intermediarios, lo que nos permite ofrecerte precios
          excepcionales sin sacrificar la calidad. Controlamos cada etapa del
          proceso de producción, desde la selección de las mejores telas hasta
          el último detalle en las costuras, asegurando productos duraderos y de
          alta calidad. Este enfoque nos permite brindarte una excelente
          relación calidad-precio en cada compra. Descubre la diferencia que
          marca nuestra dedicación y experiencia en cada prenda que adquieres.
        </p>
        <StatementList />
      </div>
      <div className="hidden lg:flex justify-center w-[50%] overflow-hidden h-full rounded-xl">
        <video
          src={video_ugc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full object-cover rounded-xl"
        ></video>
      </div>
    </div>
  );
};

export default DescriptionPercentage;
