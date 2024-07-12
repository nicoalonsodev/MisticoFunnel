import React, { useState, useEffect } from "react";
import formatPrice from "../../utils/formatPrice";
import { useSelector } from "react-redux";

const OrderResume = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const products = useSelector((state) => state.orebiReducer.cartProducts);

  useEffect(() => {
    switch (products.length) {
      case 1:
        setSubtotal(70000);
        setTotal(56000);
        setDiscount(14000);
        break;
      case 2:
        setSubtotal(140000);
        setTotal(112000);
        setDiscount(28000);
        break;
      default:
        setSubtotal(0);
        setTotal(0);
        setDiscount(0);
        break;
    }
  }, [products]);

  return (
    <div className="flex relative w-full p-4 gap-4">
      <div className="sticky top-0 border-gray-700 w-full flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-left">Resumen Del Pedido</h1>
        <div>
          <p className="flex items-center justify-between border-b-0 py-1.5 text-lg font-medium">
            Subtotal
            <span className="font-semibold tracking-wide font-montserrat-500">
              ${formatPrice(subtotal)}
            </span>
          </p>
          <p className="flex items-center justify-between py-1.5 text-lg font-medium">
            Costo de envío
            <span className="font-semibold tracking-wide font-montserrat-500">
              Gratis
            </span>
          </p>
          {discount > 0 && (
            <p className="flex items-center justify-between border-b-0 py-1.5 text-lg font-medium">
              Descuento
              <span className="font-semibold tracking-wide font-montserrat-500">
                -${formatPrice(discount)}
              </span>
            </p>
          )}
          <p className="flex items-center justify-between text-yellow-700 py-1.5 text-xl font-bold">
            Total
            <span className="font-bold tracking-wide text-xl font-montserrat-500">
              ${formatPrice(total)}
            </span>
          </p>
          {/* <p className="text-sm">(IVA incluido ${ivaAmount})</p> */}
        </div>
      </div>
    </div>
  );
};

export default OrderResume;
