import React, { useState, useEffect } from "react";
import { scrollToSection } from "../../utils/redirectHomeScroll";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const CalendlyFooter = () => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const products = useSelector((state) => state.orebiReducer.cartProducts);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 1.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigatePayment = () => {
    history.push({
      pathname: "/payment",
    });
  };

  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen h-[90px] bg-gray-200 flex justify-center border-t border-gray-400 items-center transition-all duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-center items-center gap-x-6">
        <div>
          <button
            onClick={
              products.length === 0 ? scrollToSection : handleNavigatePayment
            }
            className="text-xl font-poppins-400 border-2 border-gray-800 rounded-xl py-2 px-4 bg-gray-200 hover:bg-yellow-700 hover:text-gray-100 duration-300 hover:border-yellow-700"
          >
            {products.length === 0
              ? "Seleccionar un talle"
              : products.length === 1
              ? "Ir a Comprar $60,000"
              : "Ir a Comprar $102,000"}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
