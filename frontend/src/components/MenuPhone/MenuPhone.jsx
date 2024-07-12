import React, { useState, useEffect } from "react";
import "./MenuPhone.css";
import { TfiBackRight } from "react-icons/tfi";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import { motion } from "framer-motion";
import OrderResume from "../OrderResume/OrderResume";
import VariantPicker from "../VariantPicker/VariantPicker";
import { scrollToSection } from "../../utils/redirectHomeScroll";

const MenuPhone = ({ menuOpen, handleMenuToggle, handleVariant }) => {
  const products = useSelector((state) => state.orebiReducer.cartProducts);

  const handleCartVariant = (variantId) => {
    handleVariant(variantId);
    scrollToSection();
  };

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
      } h-full bg-white border-[1px] border-gray-400 fixed top-0 right-0 font-montserrat-400 p-2 lg:p-6 pb-24 lg:pb-0`}
    >
      <div>
        <div className="w-full py-2 flex justify-between">
          <div className="">
            <TfiBackRight
              onClick={() => handleMenuToggle()}
              className="text-gray-900 lg:ml-0 xl:ml-2 cursor-pointer text-2xl hover:text-gray-500 duration-200"
            />
          </div>
          <h1 className="text-gray-800 text-3xl font-montserrat-600">
            Carrito Promocional
          </h1>
        </div>
        <div className="w-full bg-gray-100 text-center py-1 px-2 text-sm rounded-md text-black font-semibold flex justify-center">
          🚚 ENVÍO GRATIS 🚚
        </div>
        <div className="w-full flex flex-wrap mt-4 border-b-[1px] border-t-[1px] border-t-gray-300 border-b-gray-300 my-4 py-1">
          {products.map((item, index) => (
            <div
              className={`w-full ${
                index !== products.length - 1
                  ? "border-b-[1px] border-gray-300"
                  : ""
              }`}
              key={item._id}
            >
              <ItemCard item={item} second={index === 1 ? "Second" : ""} />
            </div>
          ))}
        </div>
        <a
          href="/payment"
          className="checkout-button w-full rounded-xl bg-yellow-700 hover:bg-yellow-500 text-xl text-gray-100 font-montserrat-400 flex justify-center items-center py-2"
        >
          <p>{` 👉🏻 IR A PAGAR ${
            products.length === 1 ? "$56,000" : "$112,000"
          }`}</p>
        </a>
        {products.length === 2 ? <OrderResume /> : ""}
      </div>

      {products.length !== 2 ? (
        <VariantPicker cart={true} handleCartVariant={handleCartVariant} />
      ) : (
        ""
      )}
      {products.length === 1 ? <OrderResume /> : ""}
    </motion.div>
  );
};

export default MenuPhone;
