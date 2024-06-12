import React, { useState, useEffect } from 'react';
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo-mistico.jpg";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import OrderResume from "../OrderResume/OrderResume";
import VariantPicker from '../VariantPicker/VariantPicker';
import { scrollToSection } from '../../utils/redirectHomeScroll';

const MenuPhone = ({ menuOpen, handleMenuToggle, handleVariant }) => {
  const products = useSelector((state) => state.orebiReducer.cartProducts);

  const handleCartVariant = (variantId) => {
    handleVariant(variantId)
    scrollToSection()
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`menu-phone ${
        menuOpen ? "slide-in" : ""
      } flex flex-wrap justify-center items-start ${
        products.length === 1
          ? "w-full lg:w-1/3"
          : products.length === 2
          ? "w-full lg:w-[34%]"
          : ""
      } h-full bg-white border-2 border-gray-400 fixed top-0 right-0 font-montserrat-400 p-2 lg:p-6 overflow-y-auto`}

    >
      <div className="w-full py-2 flex justify-between">
        <h1 className="text-gray-800 text-3xl font-montserrat-700">
          Carrito Promocional
        </h1>
        <div className="">
          <FaTimes
            onClick={() => handleMenuToggle()}
            className="text-gray-900 lg:ml-0 xl:ml-2 cursor-pointer text-2xl hover:text-gray-500 duration-200"
          />
        </div>
      </div>
      <div className="w-full bg-gray-300 text-center py-1 px-2 text-sm rounded-md text-black font-semibold flex justify-center">
        🚚 ENVÍO GRATIS 🚚
      </div>
      <div>
        <p className="text-yellow-600 mb-2 text-center text-balance font-semibold my-3 lg:my-2 text-sm lg:text-lg">
          ¡Aprovecha esta oferta exclusiva! Solo en este enlace, obtén tu segundo jean con un 30% de descuento.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-2">
        {products.map((item) => (
          <div className="w-full" key={item._id}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
      <a
        href='/payment'
        className='w-full rounded-xl bg-yellow-700 hover:bg-yellow-500 text-xl text-gray-100 font-montserrat-400 flex justify-center items-center py-2'>
        <p>{` 👉🏻 IR A PAGAR ${products.length === 1 ? "$60,000" : "$102,000"}`}</p>
      </a>
      {products.length !== 2 ? <VariantPicker cart={true} handleCartVariant={handleCartVariant} /> : ""}
      <OrderResume />
    </motion.div>
  );
};

export default MenuPhone;
