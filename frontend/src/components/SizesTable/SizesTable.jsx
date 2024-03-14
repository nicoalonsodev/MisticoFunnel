import React, { useState } from "react";
import arrowdown from "../../assets/arrow-down.svg";
import sizes from "../../assets/talles.jpg";
import "./SizesTable.css";
const SizesTable = ({ handleFullScreen }) => {
  const [openDiv, setOpenDiv] = useState(false);

  const handleOpenDiv = () => {
    setOpenDiv(!openDiv);
  };

  const handleClick = (full) => {
    handleFullScreen(full);
  };

  return (
    <div className="flex flex-wrap justify-start items-start">
      <div
        className={` w-auto flex justify-start flex-wrap items-start text-left overflow-hidden  transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`antDiv ${
            openDiv ? "show" : ""
          } justify-center flex-wrap items-start text-left flex w-[73%] space-y-4 border-b-2 border-gray-400 cursor-pointer text-xl text-gray-800`}
        >
          <p className="w-full text-black" onClick={() => handleOpenDiv()}>
            Haz click para ver los talles.
          </p>
          <div onClick={() => handleFullScreen(true)}>
            <img className="z-10" src={sizes} alt="sizes" />
          </div>
        </div>
        <div
          className={`w-auto flex items-start justify-center cursor-pointer antDiv ${
            openDiv ? "show" : ""
          }  border-b-2 border-gray-400`}
        >
          <img
            src={arrowdown}
            alt="arrow"
            className={`${
              openDiv ? "rotate-180" : "rotate-0"
            } w-8 transition-transform duration-500 ease-in-out`}
            onClick={() => handleOpenDiv()}
          />
        </div>
      </div>
    </div>
  );
};

export default SizesTable;
