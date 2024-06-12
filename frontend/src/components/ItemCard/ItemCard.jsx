import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import { useSelector } from "react-redux";
import formatPrice from "../../utils/formatPrice";
import { RiDeleteBin5Fill } from "react-icons/ri";
const ItemCard = ({ item }) => {

  const products = useSelector((state) => state.orebiReducer.cartProducts);
  const dispatch = useDispatch();
  return (
    <div className="w-full mb-4 border">
      <div className="flex justify-between col-span-3 gap-2">
        <div className="flex gap-4 text-gray-70">
          <img
            className="w-auto h-[120px] lg:h-[120px] object-cover"
            src={item.image}
            alt="productImage"
          />
          <div className="py-0">
            <div className="flex items-start ">
              <h1 className="font-light uppercase text-md lg:text-lg font-montserrat-400">
                {item.name}
              </h1>
            </div>
            <div className="flex items-start ">
              <h1 className="font-light uppercase text-sm">
                {item.color}
              </h1>
            </div>
            <div className="flex w-2/3 items-center justify-start text-sm font-normal">
                Talle {item.size}
              </div>
            <div className="flex-col items-center text-left justify-start lg:justify-start  font-montserrat-400  gap-y-6 mdl:gap-0">
              <div className="flex w-1/3 items-center text-lg font-bold">
                ${formatPrice(item.quantity * item.price)}
              </div>
           
              {/* <div className="w- border-gray-500 flex items-center justify-start gap-4 text-lg my-4">
                <p>{item.quantity}</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex text-gray-600 items-start py-4 px-4">
          <RiDeleteBin5Fill
            onClick={() =>
              dispatch(deleteItem({ id: item.id, size: item.size }))
            }
            className="text-gray-400 text-xl hover:text-gray-500 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
