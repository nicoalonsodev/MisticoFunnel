import React, { useState } from "react";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import SizesTable from "../../components/SizesTable/SizesTable";
import { IoMdCloseCircle } from "react-icons/io";
import sizes from "../../assets/talles.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DescriptionAndPhotos = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  const handleFullScreen = (full) => {
    setFullScreen(full);
  };
  const handleSize = (size) => {
    setSize(size);
    if (size === "s") {
      setUrl(
        "https://articulo.mercadolibre.com.ar/MLA-1532599640-buzo-relax-summer-de-algodon-mujer-47-street-_JM?attributes=SIZE%3AMDI%3D&quantity=1"
      );
    }
    if (size === "m") {
      setUrl(
        "https://articulo.mercadolibre.com.ar/MLA-1330626238-buzo-relax-de-algodon-mujer-47-street-_JM#reco_item_pos=1&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=fa197c0c-7d14-4431-902d-caeff841c791"
      );
    }
    if (size === "l") {
      setUrl(
        "https://articulo.mercadolibre.com.ar/MLA-1542278818-buzo-de-mujer-crew-back-to-basic-oneill-_JM#polycard_client=recommendations_vip-pads-up&reco_backend=vip_pads_up_ranker_baseline_marketplace&reco_client=vip-pads-up&reco_item_pos=1&reco_backend_type=low_level&reco_id=e272dfd9-d8d2-46f1-9905-2db7ce9d3774&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=2&ad_click_id=NTI3NDE4ZDMtNzE4ZC00ZjE4LTlkOGUtOTBjNjI3ZTA1Y2Nl"
      );
    }
    if (size === "xl") {
      setUrl(
        "https://articulo.mercadolibre.com.ar/MLA-1370688819-buzo-de-mujer-mindtrip-oneill-_JM#polycard_client=recommendations_vip-pads-up&reco_backend=vip_pads_up_ranker_baseline_marketplace&reco_client=vip-pads-up&reco_item_pos=2&reco_backend_type=low_level&reco_id=9127647c-7b3e-48a0-8bfc-76a575a4a288&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=3&ad_click_id=MGM3YjJkMzYtMDVjMy00ZDUyLWExZmYtNGJmNTMwZTJlNzU4"
      );
    }
  };

  const handleNavigateButton = () => {
    if (size && url) {
      window.location.href = url;
    } else {
      toast.info("Debe escoger un talle");
    }
  };

  return (
    <div id="description" className="flex flex-wrap gap-y-6 lg:gap-y-0">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-start items-start">
        <ProjectGallery />
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap justify-start items-start h-full px-0 lg:px-10">
        <div className="flex flex-wrap items-start h-auto justify-start gap-y-2">
          <div className="w-full">
            <h1 className="text-yellow-700 font-roboto-400 text-xl">
              Estudio clínico
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-700 font-roboto-500 text-4xl">
              Tratamiento Anti-Aging Infalible: Crema + Serum
            </h1>
          </div>
          <div className="flex lg:hidden w-full flex-wrap justify-start items-start">
            <ProjectGallery />
          </div>
          <div className="w-full flex gap-x-2">
            <h1>⭐⭐⭐⭐⭐</h1>
            <a
              className="underline text-gray-400 hover:text-yellow-500"
              href="#reviews"
            >
              Reviews
            </a>
          </div>
          <div className="w-full">
            <h1 className="text-gray-800 font-helvetica-400 text-md lg:text-lg">
              El Tratamiento Anti-aging Infalible es la solución
              anti-envejecimiento más efectiva del mercado. Creado a base del
              principio activo patentado por el Dr Jorge Planas, el CMX6, un
              activo natural derivado de la Calendula Officinalis, está
              específicamente diseñado para prevenir eficazmente las arrugas,
              reparar los tejidos celulares de la piel y producir un efecto
              tensor inmediato. Ayuda también a mejorar la salud y calidad de la
              piel, y aliviar alteraciones epidérmicas.
            </h1>
          </div>
          <ul id="button-buy" className=" w-full space-y-2 list-disc pl-4 text-gray-500">
            <li className=" font-plus-400 text-md">
              Crema Anti-aging Reparadora 50ml
            </li>
            <li className="font-plus-400 text-md">Serum Anti-aging 30ml</li>
            <li className="font-plus-400 text-md">
              Aceite Reparador Corporal 100ml
            </li>
            <li className="font-plus-400 text-md">
              Crema Antifatiga para el Contorno de Ojos 15ml
            </li>
            <li className="font-plus-400 text-md">
              Regalo Asesora de Rejuvenecimiento VIP (Acceso directo)
            </li>
          </ul>
          <div  className="py-6 space-y-4">
            <SizesTable handleFullScreen={handleFullScreen} />
            <div className="flex justify-start items-center space-x-2">
              <button
                className={`${
                  size === "s"
                    ? "border-yellow-500 border-[3px]"
                    : "hover:border-yellow-400 border-2"
                } font-roboto-500  bg-white text-gray-500 shadow-sm w-10 h-10 rounded-xl text-xl`}
                onClick={() => handleSize("s")}
              >
                S
              </button>
              <button
                className={`${
                  size === "m"
                    ? "border-yellow-500 border-[3px]"
                    : "hover:border-yellow-400 border-2"
                } font-roboto-500  bg-white text-gray-500 shadow-sm w-10 h-10 rounded-xl text-xl`}
                onClick={() => handleSize("m")}
              >
                M
              </button>
              <button
                className={`${
                  size === "l"
                    ? "border-yellow-500 border-[3px]"
                    : "hover:border-yellow-400 border-2"
                } font-roboto-500  bg-white text-gray-500 shadow-sm w-10 h-10 rounded-xl text-xl`}
                onClick={() => handleSize("l")}
              >
                L
              </button>
              <button
                className={`${
                  size === "xl"
                    ? "border-yellow-500 border-[3px]"
                    : "hover:border-yellow-400 border-2"
                } font-roboto-500  bg-white text-gray-500 shadow-sm w-10 h-10 rounded-xl text-xl`}
                onClick={() => handleSize("xl")}
              >
                XL
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <h1 className="text-gray-600 text-lg">- Selecciona un talle para comprar -</h1>
          </div>
          <div className="w-full flex justify-center lg:justify-start items-center">
            <a
              className="flex justify-start items-center w-full"
              // href={url} target="_blank"
              onClick={() => handleNavigateButton()}
            >
              <button className="w-full lg:w-1/2 text-xl font-plus-600 border-2 rounded-md py-2 px-4 transition duration-400 button-buy">
                Comprar - $32.000
              </button>
            </a>
          </div>
        </div>
      </div>
      {fullScreen ? (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black z-50">
          <div
            className="absolute top-8 lg:top-4 right-4 lg:right-10 text-5xl lg:text-4xl hover:opacity-50 text-white cursor-pointer"
            onClick={() => handleFullScreen(false)}
          >
            <IoMdCloseCircle className="text-gray-200" />
          </div>
          <div className="w-[900px]">
            <img src={sizes} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
};

export default DescriptionAndPhotos;
