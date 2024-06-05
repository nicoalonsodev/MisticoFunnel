import React, { useState, useEffect } from "react";
import "./OutfitCarousel.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const MyCarousel = ({ images }) => {
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
    <div className=" pt-0 pb-8 lg:py-8 w-[100%]">
      <Slider {...settings} >
        {images?.map((image, index) => (
          <div key={index} className="">
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
