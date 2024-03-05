import React from "react";
import Item from "../Item/Item";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineHighQuality } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
const ItemsContainer = () => {
  const items = [
    {
      text: "Mas de 3k Clientes",
      img: <MdOutlinePersonAddAlt  style={{ fontSize: "38px" }} />,
    },
    {
      text: "10 Años en el Mundo",
      img: <TbWorld style={{ fontSize: "38px" }} />,
    },
    {
      text: "Calidad Highstream",
      img: <MdOutlineHighQuality  style={{ fontSize: "38px" }} />,
    },
    {
      text: "Envíos a todo el País",
      img: <FaTruckFast style={{ fontSize: "38px" }}  />,
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-y-0 justify-center items-start">
        {items?.map((item) => (
          <div className="w-1/3 lg:w-1/5 h-32 flex flex-wrap justify-center items-start">
            <div className="">{item.img}</div>
            <div className="h-1/2 flex items-start justify-center">
              <h1 className="font-roboto-400 text-center text-xl lg:text-2xl">{item.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
