import React from "react";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import logo from '../../assets/logo-mistico.jpg'
const Footer = () => {
  return (
    <div
      className="w-full flex flex-wrap justify-center items-center py-6 pb-20 bg-black"
    >
      <div className="w-full flex flex-wrap justify-center items-start px-10 sm:px-10 md:px-20 lg:px-28 py-10 space-x-0 lg:space-x-14 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[30%] flex flex-wrap justify-center items-center space-y-6">
          <img
            src={logo}
            alt="logo"
            className="w-1/3"
          />

        </div>
        {/* <div className="w-full lg:w-[40%] flex flex-wrap justify-center items-center space-y-6">
          <div className="w-full flex justify-start items-center text-left text-3xl text-gray-300">
            <h1>Contacto</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-500 space-y-4">
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <AiTwotonePhone className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+3814455678</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <IoMailOutline className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>mistico.world@hotmail.com</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <BsPinMapFill className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1> Tucumáns, Argentina</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <FaWhatsapp className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+3814455678</h1>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
