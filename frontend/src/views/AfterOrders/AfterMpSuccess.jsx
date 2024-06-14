import React from "react";
import { useParams } from "react-router-dom";
import PaymentHeader from "../../components/Header/PaymentHeader";
const AfterMp = () => {
  const { orden } = useParams();
  return (
    <div>
      <PaymentHeader />
      <div className="px-4 lg:px-20 flex justify-center">
        <div className="flex justify-center items-start py-20 w-full lg:w-2/3 gap-6">
          <div className="flex flex-col justify-start items-start space-y-6">
            <h1 className="order-purschase text-3xl font-normal">Orden de compra: #{orden}</h1>
            <h1 className="text-xl text-yellow-700 font-semibold">
              Su compra fue exitosa!
            </h1>
            <p>Muchas gracias por comprar en Mistico</p>

            <p>
              Cualquier consulta puede ser realizada al siguiente numero de
              Whatsapp{" "}
              <a
                className="underline hover:text-yellow-700"
                href="https://wa.me/+5493813624693"
                target="_blank"
              >
                (54 9 3813624693)
              </a>
              o a nuestro correo mistico.world@hotmail.com. También le pedimos amablemente que nos indique el número de
              orden de su compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterMp;
