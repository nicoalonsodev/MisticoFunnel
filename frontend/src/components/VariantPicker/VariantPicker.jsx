import React, { useState, useEffect } from "react";
import variants from "../../utils/variants";
import Slider from "react-slick";
import SampleNextArrow from "../Arrows/SampleNextArrow";
import SamplePrevArrow from "../Arrows/SamplePrevArrow";
import { addToCart } from "../../redux/orebiSlice";
import { useDispatch } from "react-redux";

const VariantPicker = ({
  handleSelectedVariant,
  selectedVariant,
  cart,
  handleCartVariant,
}) => {
  const dispatch = useDispatch();
  const [activeVariant, setActiveVariant] = useState(null);
  const sizes = [38, 40, 42, 44, 46, 48];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSelect = (variantId) => {
    if (cart) {
      setActiveVariant(variantId === activeVariant ? null : variantId); // Toggle active state
    } else {
      handleSelectedVariant(variantId);
    }
  };

  const handleSelectSize = (variantId, size, variant) => {
    handleCartVariant(variantId, size);
    setActiveVariant(null); // Close the size selector after selection
    dispatch(
      addToCart({
        id: variant.id,
        name: variant.name,
        quantity: 1,
        size: size,
        image: variant.images[0],
        price: 60000,
        color: variant.color,
      })
    );
  };

  const getFilteredSizes = (variantId) => {
    if (variantId === 3) {
      return sizes.filter(size => [38, 46, 48].includes(size));
    }
    return sizes;
  };

  return (
    <div className="w-full overflow-y-auto">
      {variants ? (
        <>
          {cart ? (
            <div className="block my-4 py-4 w-[100%] border-t-[1px] border-yellow-600 text-center font-montserrat-300 text-balance">
              <p className="text-gray-700 mb-2 text-center text-balance font-bold my-3 lg:my-2 text-xl">
                Usar mi <span className="text-red-500 uppercase">cupón de 30% DE DESCUENTO</span> en la segunda unidad!
              </p>
              <Slider {...settings}>
                {variants.map((variant, index) => (
                  <div className="px-2" key={index}>
                    <div
                      className="flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden p-1 shadow-lg  cursor-pointer"
                      onClick={() => handleSelect(variant.id)}
                    >
                      <div className="flex w-full justify-center items-center">
                        <img
                          src={variant.images[0]}
                          alt={variant.name}
                          className="rounded-xl w-24"
                        />
                      </div>
                      <p className="text-md hover:underline hover:text-yellow-600 duration-200">
                        Usar 30%
                      </p>
                      {activeVariant === variant.id && (
                        <div className="bg-white shadow-lg px-2 rounded-xl flex flex-wrap justify-center">
                          {getFilteredSizes(variant.id).map((size) => (
                            <button
                              key={size}
                              className="m-1 px-3 py-1 border rounded-lg hover:bg-gray-100 focus:outline-none"
                              style={{ flex: "1 0 30%" }} // Asegura que cada botón tome alrededor del 30% del espacio, ajustando para que la primera fila tenga 3 y la segunda fila 2 botones.
                              onClick={() => handleSelectSize(variant.id, size, variant)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      )}
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
