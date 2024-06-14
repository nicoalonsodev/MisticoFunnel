import React, { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
import { useSelector } from "react-redux";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
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
import SizeGuide from "../SizesSelector/SizeGuide";
import VariantPicker from "../VariantPicker/VariantPicker";

const ProductDetail = ({ homeVariant, handleVariantDetail }) => {
  const products = useSelector((state) => state.orebiReducer.cartProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
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
    name: "Cargo Carpinter Negro",
    images: [
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695940/A7409562-Editar-2_11zon_xyyby4.webp",
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695903/A7409564-Editar-2_11zon_trstrg.webp",
      "https://res.cloudinary.com/dtf3dfpnw/image/upload/v1717695766/A7409566-Editar-2_11zon_1_ebgvcd.webp"
    ],
    color: "Negro",
    cat: "cargo"
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

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

const updatedObjectVariant = {
      ...objectVariant,
      size: selectedSize, 
      variant: {
        imgUrl: objectVariant.images[0]
      },
      price: 60000,
      quantity: 1,
      image: objectVariant.images[0],                                            
      
    };
    const newSelectedItems = [...selectedItems, updatedObjectVariant];
    dispatch(
      addToCart({
        id: objectVariant.id,
        name: objectVariant.name,
        quantity: 1,
        size: selectedSize,
        image: objectVariant.images[0],
        price: 60000,
        color: objectVariant.color,
      })
    );
    setSelectedItems(newSelectedItems);
  };

  const handlePaymentGateway = () => {
    history.push({
      pathname: '/payment',

    });
  };

  return (
    <div className="bg-gray-50 flex flex-wrap justify-center lg:flex-nowrap mb-0 lg:mb-[130px] mt-14 lg:mt-0 overflow-hidden">
      <div id="targetSection" className="hidden lg:flex flex-col space-y-2 lg:w-2/5">
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
          <h1 className="text-3xl lg:text-5xl text-left text-gray-800 font-montserrat-700">
            {objectVariant.name}
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[12px]">
          New 🏆 best clothing brand 2024
        </div>
      
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-md lg:text-md text-gray-600 font-montserrat-400">
            <li>🍑 Buen calze</li>
            <li>✨ Última tendencia de la moda.</li>
            <li>🌱 Combina con todo.</li>
          </ul>
        </div>
        <div id="#button-buy" className="block lg:hidden pt-0 pb-8 lg:py-8 w-[100%]">
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

        <VariantPicker handleSelectedVariant={handleSelectedVariant} selectedVariant={selectedVariant} />
        <div className="w-full flex flex-wrap">
         <div className="w-full flex justify-start items-center gap-x-3 mb-2">
         <p className="text-left font-sans-500"> Elegí un talle</p>
         <SizeGuide cat={objectVariant.cat}  />
          </div>
          <SizesSelector handleSize={handleSize} selectedSize={selectedSize} />
        </div>
       
        <div className="w-full flex justify-start items-start ">
          <h1 className="text-gray-700 font-montserrat-600 text-left text-xl">
          <span className="text-yellow-700">OFERTA:</span>  Llevando dos pantalones te ahorras un <span className="text-yellow-700">30% de descuento</span> en la 2da unidad!
          </h1>
        </div>

        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-yellow-700"></div>
            <div className="px-2 lg:px-4 font-montserrat-400 text-sm lg:text-md">Comprá y ahorrá un 30% en el 2do Jean</div>
            <div className="flex-grow h-[2px] bg-yellow-700"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex space-x-2 justify-center items-center">
            <p className="font-montserrat-400 pb-2">
            Envio de 2 a 5 Dias desde Buenos Aires
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
              alt="arg"
              className="w-4 h-4 mb-1"
            />
          </div>

  
           {products.length < 2 ? <button
              id="add-to-bag-button"
              className="add-to-bag-button w-full rounded-md bg-gray-800 hover:bg-yellow-700 duration-300 text-xl lg:text-2xl font-montserrat-500 text-gray-200 px-2 py-4"
              onClick={handleAddToCart}
         
            >
              {products.length === 0 ? `AGREGAR AL CARRITO` : products.length === 1 ? `30% DE DESCUENTO EN EL 2DO!` : ""}
            </button> : ""}

            <AnimatePresence>
            {showAlert && (
              <motion.div
                className="alert font-montserrat-500 border flex justify-start text-center rounded-md bg-yellow-700 text-white p-2 text-sm lg:text-lg mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Por favor, selecciona un talle.
              </motion.div>
            )}
          </AnimatePresence>
       
            {products.length > 0 ? <button
              id="checkout-button"
              className="checkout-button w-full rounded-md bg-gray-800 hover:bg-yellow-700 mt-3 duration-300 text-2xl font-montserrat-500 text-gray-200 px-2 py-4"
           onClick={handlePaymentGateway}
            >
              {objectVariant ? ` 👉🏻 IR A PAGAR ${products.length === 1 ? "$60,000" : "$102,000"}` : ""}
            </button> : ""}

        </div>
        <div className="w-full flex justify-center items-start py-6 gap-2 font-montserrat-300">
          <div className="flex justify-center items-start flex-wrap w-[138px] gap-2 lg:gap-6">
            <div className="w-14 lg:w-20">
              <img src={shipping} alt="shipping" className="w-full" />
            </div>
            <div className="flex items-start justify-center">
            <h1 className="text-center text-sm">Envio gratis</h1>
            </div>
            
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
          <QuestionsAnswersHome cat={objectVariant.cat} />
        </div>
        <div className="w-full text-center text-lg font-montserrat-500 text-yellow-600">
          + 1.000’s clientes felices
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
