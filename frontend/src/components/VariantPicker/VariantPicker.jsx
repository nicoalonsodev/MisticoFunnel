import React from "react";
import variants from "../../utils/variants";
import Slider from "react-slick";
import SampleNextArrow from "../Arrows/SampleNextArrow";
import SamplePrevArrow from "../Arrows/SamplePrevArrow";
const VariantPicker = ({
  handleSelectedVariant,
  selectedVariant,
  cart,
  handleCartVariant,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSelect = (variantId) => {
    if (cart) {
      handleCartVariant(variantId);
    } else {
      handleSelectedVariant(variantId);
    }
  };

  return (
    <div className="w-full">
      {variants ? (
        <>
          {cart ? (
           <div className="block my-4 py-4 w-[100%] border-t-[1px] border-yellow-600 text-center font-montserrat-300 text-balance">
            <p className="text-yellow-600 mb-2 text-center text-balance font-bold my-3 lg:my-2 text-xl">Usar mi cupón de 30% DE DESCUENTO en la segunda unidad!</p>
              <Slider {...settings} >
                {variants.map((variant, index) => (
                  <div className="px-2">
                    <div
                      key={index}
                      className="flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden p-1 shadow-lg mb-3 cursor-pointer"
                      onClick={() => handleSelect(variant.id)}
                    >
                      <img
                        src={variant.images[0]}
                        alt="img_before"
                        className="rounded-xl w-20"
                      />
                      <p className="text-md hover:underline hover:text-yellow-600 duration-200">Usar 30%</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="flex py-4 w-full gap-2">
              {variants.map((variant) => (
                <div
                  key={variant.id}
                  className={`cursor-pointer border-gray-300 border-[1px] ${
                    variant.id !== selectedVariant
                      ? ""
                      : "border-b-2 border-yellow-700"
                  }`}
                  onClick={() => handleSelect(variant.id)}
                >
                  <img className="w-20" src={variant.images[0]} alt="variant" />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default VariantPicker;
