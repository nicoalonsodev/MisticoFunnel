import React from "react";
import logo from "../../assets/logo-mistico.jpg";
import "./Flyer.css";
const Flyer = () => {
  return (
    <div className="w-full md:px-0 py-10 md:py-20 lg:py-32 flex flex-wrap justify-center items-center space-x-4 px-4 bg-black">
      <div className="w-1/4 md:w-1/4 flex justify-center items-center">
        <div className="w-[180px] h-[80px] lg:w-[235px] lg:h-[125px] flex justify-center items-center rounded-full bg-transparent pr-2">
          <img className="w-[155px] lg:w-full" src={logo} alt="logo" />
        </div>
      </div>
      <div className="w-[65%] flex justify-center items-center">
        <h1
          className="text-gray-200 font-helvetica-600 text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{ lineHeight: "1.3" }}
        >
          Grantía de reembolso por 40 días
        </h1>
      </div>
    </div>
  );
};

export default Flyer;
