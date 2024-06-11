import React from "react";
import { logo } from "../../assets";
const PaymentHeader = () => {
  return (
    <div className="bg-black h-32 w-screen flex justify-center items-center">
      <a className="w-20" href="/">
        <img className="w-full" src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default PaymentHeader;
