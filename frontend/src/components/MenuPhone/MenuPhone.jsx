import React from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo-mistico.jpg";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className={`menu-phone ${menuOpen ? "slide-in" : ""} flex flex-wrap justify-start items-start bg-black border-2 border-gray-400 fixed top-0 right-0 w-screen h-screen font-poppins-400 pb-8`}>
      <div className="mx-auto flex items-center px-10 py-2 pt-2 justify-center lg:hidden">
        <div className="flex items-center">
          <a href="/">
            <img className="w-[90px] " src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="w-full menu-container flex flex-wrap justify-start items-center px-6 text-left ">
        <a className="w-full text-gray-200" href="/" onClick={handleMenuToggle}>
          Home
        </a>
        <a
          className="w-full text-gray-200"
          href="#process"
          onClick={handleMenuToggle}
        >
          Our Process
        </a>
        <a
          className="w-full text-gray-200"
          href="#about"
          onClick={handleMenuToggle}
        >
          About Us
        </a>
        <a
          className="w-full text-gray-200"
          href="#calendly"
          onClick={handleMenuToggle}
        >
          Discovery a Call
        </a>
        <button className="w-full text-gray-200" onClick={handleMenuToggle}>
          <AiOutlineClose
            className=""
            style={{ height: "30px", width: "30px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuPhone;
