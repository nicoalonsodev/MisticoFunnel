import React, { useState } from "react";
import logo from "../../assets/logo-mistico.jpg";
import logo2 from "../../assets/logo-transparente.png";
import MenuPhone from "../MenuPhone/MenuPhone";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="z-40 top-0 right-0 w-screen bg-black mx-auto flex items-center px-10 py-2 pt-2 justify-center lg:hidden"
        style={{ maxWidth: "1150px", height: "110px" }}
      >
        <div className="w-auto flex items-center">
          <a href="/">
            <img className="w-[105px]" src={logo2} alt="Logo" />
          </a>
        </div>
        {/* <button className="w-1/2 flex justify-center items-center pl-20" onClick={handleMenuToggle}>
          <IoMenu className="text-gray-200 w-16 h-16 " width={64} />
        </button> */}
      </div>
      <div className="hidden lg:flex justify-center items-center fixed top-0 right-0 w-screen h-20 bg-black shadow-lg lg:px-20 xl:px-36 py-2 z-40">
        <div className="flex justify-center items-center h-full">
          <img className="h-full" src={logo} alt="logo-galindosa" />
        </div>
      </div>
      <div>
        {menuOpen ? <MenuPhone handleMenuToggle={handleMenuToggle} /> : ""}
      </div>
    </div>
  );
};

export default Header;
