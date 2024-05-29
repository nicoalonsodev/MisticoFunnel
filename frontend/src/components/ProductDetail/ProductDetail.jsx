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

const ProductDetail = 
  ({ homeVariant, handleVariantDetail }) => {
  const [images, setImages] = useState({
    img1: product,
    img2: product2,
    img3: product3,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState({
    id: 2,
    variant: "Double Pack",
    price:60, 
    compare_price:  83,
    link: "https://ifbeauty.com.au/cart/43602984206511:1",
  });
  const variants = [
    {
      id: 1,
      variant: "Single Pack",
      price: 35,
      compare_price: 41.5,
      free_shipping: false,
      link: "https://ifbeauty.com.au/cart/43602984173743:1",
    },
    {
      id: 2,
      variant: "Double Pack",
      price: 60, 
      compare_price: 83,
      free_shipping: false,
      link: "https://ifbeauty.com.au/cart/43602984206511:1",
    },
    // {
    //   id: 3,
    //   variant: "Triple Pack",
    //   price: 43,
    //   compare_price: 70,
    //   free_shipping: true,
    //   link: "https://ifbeauty.com.au/cart/43602984239279:1",
    // },
  ];

  useEffect(() => {
    if (homeVariant !== null) {
      handleSelectVariant(homeVariant);
      handleSelectedVariant(homeVariant);
    }
  }, [homeVariant]);

  // useEffect(() => {
  //   handleSetObjectVariant(selectedVariant, variants);
  // }, [selectedVariant, variants]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  // const handleSetObjectVariant = (selectedVariant, allVariants) => {
  //   const foundVariant = allVariants.find(
  //     (variant) => variant.id === selectedVariant
  //   );
  //   setObjectVariant(foundVariant);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleSelectedVariant = (variantId) => {
    handleVariantDetail(variantId);
    const selectedVariant = variants.find(
      (variant) => variant.id === variantId
    );
    setObjectVariant(selectedVariant);
  };

  const handleMetaEvent = () => {
    window.fbq('track', 'AddToCart');
  };
  return (
    <div className="bg-white flex flex-wrap lg:flex-nowrap">
      <div className="block lg:hidden pt-0 pb-8 lg:py-8 w-[100%]">
        <Slider {...settings} className="">
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product} alt="img_before" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product2} alt="img_before" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product3} alt="img_before" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="hidden lg:flex flex-col gap-6 lg:w-2/4">
        <div className="hidden lg:block sticky top-0">
          <img
            src={activeImg}
            alt=""
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
          <div className="h-24 flex justify-between">
            <div className="flex flex-row justify-center space-x-6 h-24 overflow-hidden">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-start items-start w-full lg:w-1/2 px-0 lg:px-10 space-y-2">
        <div className="w-full flex h-6 ">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <h1 className="text-gray-500 text-xl mx-2">(+1000’s Reviews)</h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <h1 className="text-4xl lg:text-5xl text-left text-gray-800 font-sans-700">
            Collagen Boost and Repair
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[12px]">
          New 🏆 Innovation in skin health 2024
        </div>
        <div className="w-full flex justify-start items-start py-4">
          <h1 className="text-gray-700 font-sans-500 text-left">
            If you are tired of serums that you don't know what ingredients are
            in them and that don't give you the results you expect, our skin
            repair is for you!
          </h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-md lg:text-xl">
            <li>💜 Guarantees healthy and youthful skin.</li>
            <li>🍑 Collagen repair Vit C, Peptides, Stem cells.</li>
            <li>✨ Refreshing citrus scent of pink grapefruit.</li>
            <li>🌱Not tested on animals and organic.</li>
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-[#1c4cfc]"></div>
            <div className="px-4 font-sans-400">Bundle and Save</div>
            <div className="flex-grow h-[2px] bg-[#1c4cfc]"></div>
          </div>
          {variants?.map((variant, index) => {
            const savings = variant.compare_price - variant.price;
            return (
              <div
                key={index}
                className={`${
                  variant.id === selectedVariant
                    ? "bg-gray-200  border-[#1c4cfc]"
                    : "bg-gray-100 border-gray-400 "
                } relative h-24 w-full  border-2 rounded-md flex gap-4 py-4 px-4 lg:px-8 cursor-pointer  hover:bg-gray-200`}
                onClick={() => handleSelectedVariant(variant.id)}
              >
                <div
                  className={`${
                    variant.id === selectedVariant ? "bg-[#1c4cfc]" : ""
                  } w-6 h-6  rounded-full border-gray-600 border-2 mt-[6px]`}
                ></div>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                      <p className="font-sans-500 text-gray-600 text-xl">
                        {variant.variant}
                      </p>
                      {variant.free_shipping ? (
                        <div className="p-2 py-1 border-[#1c4cfc] text-[#1c4cfc] text-sm font-sans-400 border-2 rounded-md">
                          Free Shipping
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="text-left">You Save ${savings}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-sans-500 text-gray-700">
                      ${variant.price}
                    </p>
                    <p className="font-sans-400 text-gray-600 line-through">
                      ${variant.compare_price}
                    </p>
                  </div>
                </div>
                {variant.id === 2 ? (
                  <div className="absolute w-10 lg:w-12 top-[-18px] lg:top-[-10px] right-[-14px] lg:right-[-23px]">
                    <img
                      src={best_seller}
                      alt="best-seller"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full ">
          <div className="flex space-x-2 justify-center items-center">
            <p className="font-sans-400 pb-2">
              Shipping 2 to 5 days from Melbourne, AU
            </p>
            <img src={au} alt="au" className="w-4 h-4" />
          </div>

          <a href={objectVariant.link}>
          <button
          onClick={handleMetaEvent}
            id="add-to-bag-button"
            className="w-full rounded-md bg-[#1c4cfc] text-2xl font-sans-500 text-gray-200 px-2 py-4"
          >
            {objectVariant ? ` 👉🏻 ADD TO BAG $${objectVariant.price}` : ""}
          </button>
          </a>
        </div>
        <div className="w-full flex justify-center items-center py-6  gap-2">
          <div className="flex justify-center flex-wrap w-[138px] gap-2 lg:gap-6">
            <div className="w-14 lg:w-20">
              <img src={shipping} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm" s>
              Free Shipping
            </h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-14 lg:w-20">
              <img src={calendar} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm">30-Day Returns</h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-14 lg:w-20">
              <img src={returning} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm">Easy Exchanges</h1>
          </div>
        </div>
        <div className="w-full">
         
          <QuestionsAnswersHome />
        </div>
        <div className="w-full text-center text-lg font-sans-500 text-[#1c4cfc]">
          + 1.000’s happy clients
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
