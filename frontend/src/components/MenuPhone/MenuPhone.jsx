import React from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo-mistico.jpg";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  const products = useSelector((state) => state.orebiReducer.cartProducts);
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`menu-phone ${
        menuOpen ? "slide-in" : ""
      } flex flex-wrap justify-start items-start ${
        products.length === 1
          ? "w-full lg:w-1/3"
          : products.length === 2
          ? "w-full lg:w-[38%]"
          : ""
      } h-full bg-white border-2 border-gray-400 fixed top-0 right-0  font-poppins-400 p-6`}
    >
      <div className="mx-auto flex items-center px-10 py-2 pt-2 justify-center lg:hidden">
        <div className="flex items-center">
          <a href="/">
            <img className="w-[90px] " src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="w-full py-2 flex justify-between">
        <h1 className=" text-gray-800 text-3xl font-sans-700">Carrito Promocional</h1>
        <div className="">
          <FaTimes
            onClick={() => handleMenuToggle()}
            className="text-gray-900 lg:ml-0 xl:ml-2 cursor-pointer text-2xl "
          />
        </div>
      </div>
      <div>
      <p className="text-yellow-600 mb-2">¡Aprovecha esta oferta exclusiva! Solo en este enlace, obtén tu segundo jean con un 30% de descuento.</p>
      </div>
      <div className="flex flex-wrap  gap-x-2">
        {products.map((item) => (
          <div className="w-full" key={item._id}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuPhone;
