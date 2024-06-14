import React, { useState } from "react";
import { FaRulerHorizontal } from "react-icons/fa";
import {
  talles_cargo,
  talles_jean,
  talle_enigma,
  talle_william,
} from "../../assets/index";

const SizeGuide = ({ cat }) => {
  const [viewSizeGuide, setViewSizeGuide] = useState(false);

  const handleViewSize = () => {
    setViewSizeGuide(!viewSizeGuide);
  };

  return (
    <div>
      <div
        className="hover:underline cursor-pointer flex items-center gap-1"
        onClick={handleViewSize}
      >
        <FaRulerHorizontal className="rotate-180 text-xl text-yellow-700" />
        <p className="underline hover:text-yellow-700">Guia de talles</p>
      </div>
      {/* Modal */}
      {viewSizeGuide && (
        <div className="fixed -top-4 left-0 w-screen h-screen  flex justify-center items-center z-50">
          <div className="flex flex-wrap bg-white p-8 rounded-lg space-y-2 max-h-[100vh] overflow-y-auto">
            <div className="w-full">
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md"
                onClick={handleViewSize}
              >
                Cerrar
              </button>
             <h1 className="text-xl font-montserrat-500 underline"> Guia de Talles</h1>
            </div>
            <img className="w-full lg:w-1/3 mr-0 lg:mr-6" src={talles_cargo} alt="guia de talle" />
            <img className="w-full lg:w-1/3" src={talle_enigma} alt="guia de talle" />
            <img className="w-full lg:w-1/3 mr-0 lg:mr-6" src={talle_william} alt="guia de talle" />
            <img className="w-full lg:w-1/3" src={talles_jean} alt="guia de talle" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeGuide;
