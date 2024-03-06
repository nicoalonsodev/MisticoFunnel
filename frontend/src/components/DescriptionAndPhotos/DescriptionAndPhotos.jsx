import React from "react";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
const DescriptionAndPhotos = () => {
  return (
    <div id="description" className="flex flex-wrap gap-y-6 lg:gap-y-0">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-start items-start">
        <ProjectGallery />
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap justify-start items-start h-full px-0 lg:px-10">
        <div className="flex flex-wrap items-start h-auto justify-start gap-y-2">
          <div className="w-full">
            <h1 className="text-yellow-700 font-roboto-400 text-xl">
              Estudio clínico
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-700 font-roboto-500 text-4xl">
              Tratamiento Anti-Aging Infalible: Crema + Serum 
            </h1>
          </div>
          <div className="flex lg:hidden w-full flex-wrap justify-start items-start">
            <ProjectGallery />
          </div>
          <div className="w-full flex gap-x-2">
            <h1>⭐⭐⭐⭐⭐</h1>
            <a
              className="underline text-gray-400 hover:text-yellow-500"
              href="#reviews"
            >
              Reviews
            </a>
          </div>
          <div className="w-full">
            <h1 className="text-gray-800 font-helvetica-400 text-md lg:text-lg">
              El Tratamiento Anti-aging Infalible es la solución
              anti-envejecimiento más efectiva del mercado. Creado a base del
              principio activo patentado por el Dr Jorge Planas, el CMX6, un
              activo natural derivado de la Calendula Officinalis, está
              específicamente diseñado para prevenir eficazmente las arrugas,
              reparar los tejidos celulares de la piel y producir un efecto
              tensor inmediato. Ayuda también a mejorar la salud y calidad de la
              piel, y aliviar alteraciones epidérmicas.
            </h1>
          </div>
          <ul className=" w-full space-y-2 list-disc pl-4 text-gray-500">
            <li className=" font-plus-400 text-md">
              Crema Anti-aging Reparadora 50ml
            </li>
            <li className="font-plus-400 text-md">Serum Anti-aging 30ml</li>
            <li className="font-plus-400 text-md">
              Aceite Reparador Corporal 100ml
            </li>
            <li className="font-plus-400 text-md">
              Crema Antifatiga para el Contorno de Ojos 15ml
            </li>
            <li className="font-plus-400 text-md">
              Regalo Asesora de Rejuvenecimiento VIP (Acceso directo)
            </li>
          </ul>
          <div className="w-full flex justify-center lg:justify-start items-center mt-4">
            <a
              className="flex justify-start items-center w-full"
              href="#calendly"
            >
              <button className="w-full lg:w-1/2 text-xl font-plus-600 border-2 rounded-md py-2 px-4 transition duration-400 button-calendly">
                Comprar - $32.000
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionAndPhotos;
