import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { useParams, useLocation } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import PaymentHeader from "../../components/Header/PaymentHeader";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const AfterTransfer = () => {
  const { orden } = useParams();
  const query = useQuery();
  const precio = query.get("monto");

  return (
    <div>
      <PaymentHeader />
      <div className="px-4 lg:px-20 flex justify-center">
        <div className="flex flex-col justify-center items-start py-20 w-full lg:w-2/3 gap-6">
          <h1 className="text-3xl font-normal">
            Orden de compra: <span className="order-purschase text-yellow-700">#{orden}</span>
          </h1>
          <div className="flex justify-center items-start">
            <div>
              <GiSandsOfTime className="text-5xl text-yellow-700" />
            </div>
            <div className="flex flex-col justify-start items-start space-y-6">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                En espera de pago por el monto de ${formatPrice(precio)} ars.
              </h1>
              <p>Hola como estas?</p>
              <p>
                Podes hacer la trasnferencia o depósito en la siguiente cuenta.
              </p>
              <div>
                <p>TITULAR: Mi Estilo Indumentaria Sas</p>
                <p>CVU: 000003100050407011174</p>
                <p>ALIAS: MISTICO.ROPA</p>
                <p>CUIT: 30-71709153-8</p>
              </div>
              <p>
                Por favor enviar comprobante mediante WhatsApp{" "}
                <a href="https://wa.me/+5493812227982" target="_blank">
                  (+54 9 3812 22-7982)
                </a>
                , hasta no enviar el comprobante no es computada la compra. (Por
                favor si es posible enviar en formato documento, es necesario
                que se vea el código de operación, fecha, importe y destino).
                También le pedimos amablemente que nos indique el número de
                orden de su compra.
              </p>
              <p>Gracias por tu compra!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterTransfer;
