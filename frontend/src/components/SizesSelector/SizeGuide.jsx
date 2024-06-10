import React, { useState } from "react";
import { FaRulerHorizontal } from "react-icons/fa";
import { talles_cargo, talles_jean } from "../../assets/index";
const SizeGuide = ({cat}) => {
  const [viewSizeGuide, setViewSizeGuide] = useState(false);

  const handleViewSize = () => {
    setViewSizeGuide(!viewSizeGuide);
  };

  return (
    <div>
      <div className="hover:underline cursor-pointer flex items-center gap-1 "
      onClick={handleViewSize}
      >
        <FaRulerHorizontal className="rotate-180 text-xl text-yellow-700" />
        <p className="underline hover:text-yellow-700">Guia de talles</p>
      </div>
      {/* Modal */}
      {viewSizeGuide && (
        <div className="fixed -top-4 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md"
              onClick={handleViewSize}
            >
              Cerrar
            </button>
            <img src={cat === "cargo" ? talles_cargo :  talles_jean} alt="guia de talle" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeGuide;
