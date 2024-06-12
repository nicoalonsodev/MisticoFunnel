import React, { useState, useEffect } from "react";
import "./OutfitCarousel.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const MyCarousel = () => {
  const images = [
    "https://acdn.mitiendanube.com/stores/471/341/themes/new_linkedman/2-slide-1710430918093-4899026018-63377159238ad5f5735ba665a9a197471710430920-1024-1024.webp?1492508367",
  ]
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="flex justify-center pt-0 pb-8 lg:py-8 w-[100%]">
          <div  className="flex justify-center">
            <img src={images[0]} alt="" className="rounded-lg" />
          </div>
      {/* <Slider {...settings} >
        {images?.map((image, index) => (
          <div key={index} className="">
            <img src={image} alt="" />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default MyCarousel;
