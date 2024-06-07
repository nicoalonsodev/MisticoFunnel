import React, { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  calendar,
  shipping,
  returning,
  best_seller,
  product,
  product2,
  product3,
  au,
} from "../../assets/index";
import SizesSelector from "../SizesSelector/SizesSelector";
import variants from "../../utils/variants";

const ProductDetail = ({ homeVariant, handleVariantDetail }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695940/A7409562-Editar-2_11zon_xyyby4.webp",
    "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695903/A7409564-Editar-2_11zon_trstrg.webp",
    "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695766/A7409566-Editar-2_11zon_1_ebgvcd.webp",
  ]);

  const [activeImg, setActiveImage] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState({
    id: 1,
    name: "pedrito gonzales",
    images: [
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695940/A7409562-Editar-2_11zon_xyyby4.webp",
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695903/A7409564-Editar-2_11zon_trstrg.webp",
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695766/A7409566-Editar-2_11zon_1_ebgvcd.webp",
    ],
  });

  useEffect(() => {
    if (homeVariant !== null) {
      handleSelectVariant(homeVariant);
      handleSelectedVariant(homeVariant);
    }
  }, [homeVariant]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  const handleSelectedVariant = (variantId) => {
    setImages([]); // Vaciar imágenes temporalmente para forzar el re-renderizado
    handleVariantDetail(variantId);
    const selectedVariant = variants.find((variant) => variant.id === variantId);
    setObjectVariant(selectedVariant);
    
      setImages(selectedVariant.images);
      setActiveImage(selectedVariant.images[0]);
  };

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-50 flex flex-wrap justify-center lg:flex-nowrap mb-0 lg:mb-[130px]">
      <div className="hidden lg:flex flex-col space-y-2 lg:w-2/5">
        <div className="hidden lg:block sticky top-0">
          <img
            src={activeImg}
            alt=""
            className="w-[76%] h-full aspect-square object-cover rounded-xl"
          />
          <div className="h-24 flex justify-between mt-4">
            <div className="flex flex-row justify-center space-x-6 h-24 overflow-hidden">
              {images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-start items-start w-full lg:w-1/2 px-0 lg:px-10 space-y-2">
        {/* <div className="w-full flex h-6">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <h1 className="text-gray-500 text-xl mx-2">(+1000’s Reviews)</h1>
        </div> */}
        <div className="w-full flex justify-start items-start">
          <h1 className="text-5xl lg:text-5xl text-left text-gray-800 font-sans-800">
            Jean line
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[12px]">
          New 🏆 best clothing brand 2024
        </div>
        <div className="w-full flex justify-start items-start ">
          <h1 className="text-gray-700 font-sans-500 text-left text-xl">
            Si <span className="text-yellow-700">seleccionas</span> el jean,
            recibirás un cupón de{" "}
            <span className="text-yellow-700">descuento</span> del{" "}
            <span className="text-yellow-700">30% </span>en la segunda unidad{" "}
            <span className="text-yellow-700">en el checkout</span>.
          </h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-lg lg:text-md text-gray-600">
            <li>🍑 Buen calze</li>
            <li>✨ Última tendencia de la moda.</li>
            <li>🌱 Combina con todo.</li>
          </ul>
        </div>
        <div className="block lg:hidden pt-0 pb-8 lg:py-8 w-[100%]">
        {images.length > 0 ? (
          <Slider {...settings} key={images.join('-')} className="">
            {images?.map((img, index) => (
              <div className="px-2" key={index}>
                <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
                  <img src={img} alt="img_before" />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          ""
        )}
      </div>

        {variants ? (
          <div className="flex py-4 w-full gap-2">
            {variants?.map((variant) => (
              <div
                key={variant.id}
                className={`cursor-pointer border-gray-300 border-[1px] ${
                  variant.id !== selectedVariant
                    ? ""
                    : "border-b-2 border-yellow-700"
                }`}
                onClick={() => handleSelectedVariant(variant.id)}
              >
                <img className="w-20" src={variant.images[0]} alt="variant" />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
         <p className="text-left font-sans-500"> Elegí un talle</p>
          <SizesSelector handleSize={handleSize} selectedSize={selectedSize} />
        </div>
       
        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-yellow-700"></div>
            <div className="px-2 lg:px-4 font-sans-400 text-sm lg:text-md">Comprá y ahorrá un 30% en el 2do Jean</div>
            <div className="flex-grow h-[2px] bg-yellow-700"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex space-x-2 justify-center items-center">
            <p className="font-sans-400 pb-2">
              Shipping 2 to 5 days from Buenos Aires, AR
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
              alt="arg"
              className="w-4 h-4 mb-1"
            />
          </div>

          <a href={objectVariant.link}>
            <button
              id="add-to-bag-button"
              className="w-full rounded-md bg-gray-800 hover:bg-yellow-700 duration-300 text-2xl font-sans-500 text-gray-200 px-2 py-4"
            >
              {objectVariant ? ` 👉🏻 ADD TO BAG $56,500` : ""}
            </button>
          </a>
        </div>
        <div className="w-full flex justify-center items-center py-6 gap-2">
          <div className="flex justify-center flex-wrap w-[138px] gap-2 lg:gap-6">
            <div className="w-14 lg:w-20">
              <img src={shipping} alt="shipping" className="w-full" />
            </div>
            <h1 className="text-center text-sm">Envio gratis</h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-14 lg:w-20">
              <img src={calendar} alt="calendar" className="w-full" />
            </div>
            <h1 className="text-center text-sm">30-Dias devolución</h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-14 lg:w-20">
              <img src={returning} alt="returning" className="w-full" />
            </div>
            <h1 className="text-center text-sm">Facilidad en cambios</h1>
          </div>
        </div>
        <div className="w-full">
          <QuestionsAnswersHome />
        </div>
        <div className="w-full text-center text-lg font-sans-500 text-yellow-600">
          + 1.000’s clientes felices
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
