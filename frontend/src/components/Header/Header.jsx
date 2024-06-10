import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-mistico.jpg";
import logo2 from "../../assets/logo-transparente.png";
import MenuPhone from "../MenuPhone/MenuPhone";
import { IoMenu } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const products = useSelector((state) => state.orebiReducer.cartProducts);

  useEffect(() => {
    if (products.length === 0) {
      setMenuOpen(false);
    }
  }, [products]);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="z-40 fixed top-0 right-0 w-screen bg-black mx-auto flex items-center px-10 py-2 pt-2 justify-between lg:hidden"
        style={{ maxWidth: "1150px", height: "70px" }}
      >
        <div className="w-auto flex items-center">
          <a href="/">
            <img className="w-[65px]" src={logo2} alt="Logo" />
          </a>
        </div>
        <button
          className="w-1/2 flex justify-center items-center pl-20 relative"
          onClick={handleMenuToggle}
        >
          <IoCartOutline className="text-gray-200 w-10 h-10 " width={64} />
          {products.length > 0 ? (
            <div className="w-[20px] h-[20px] rounded-full bg-red-400 text-white absolute -top-2 right-0 flex justify-center items-center text-sm">
              {products.length === 1 ? "1" : products.length === 2 ? "2" : ""}
            </div>
          ) : (
            ""
          )}
        </button>
      </div>

      <div className="hidden lg:flex justify-between items-center fixed top-0 right-0 w-screen h-20 bg-black shadow-lg lg:px-20 xl:px-36 py-2 z-40">
        <div></div>
        <div className="flex justify-center items-center h-full">
          <img className="h-full" src={logo} alt="logo-galindosa" />
        </div>

        <button
          className="w-[110px] flex justify-center items-center pl-20 relative text-gray-50"
          onClick={handleMenuToggle}
        >
          <IoCartOutline className="text-gray-200 w-24 h-10 " width={64} />
          {products.length > 0 ? (
            <div className="w-[20px] h-[20px] rounded-full bg-red-400 text-white absolute -top-3 -right-3 flex justify-center items-center text-sm">
              {products.length === 1 ? "1" : products.length === 2 ? "2" : ""}
            </div>
          ) : (
            ""
          )}
        </button>
      </div>
      <div className="z-99 w-full flex justify-end ">
        {menuOpen && (
          <div
          
          >
            <MenuPhone handleMenuToggle={handleMenuToggle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
