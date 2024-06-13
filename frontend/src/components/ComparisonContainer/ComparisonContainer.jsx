import React from "react";
import ComparisonSlider from "../ComparisonSlider/ComparisonSlider";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import Slider from "react-slick";
import reasons from "./reasons";
const ComparisonContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const comparisons = [
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-12">
      <div className="w-full flex flex-wrap justify-center space-y-4">
        <h1 className="w-full text-center  text-gray-700 font-sans-600 text-balance text-3xl lg:text-4xl px-0 lg:px-20">
          Las <span className="text-yellow-700">3 razones</span> por la que van
          a ser tendencia los pantalones anchos.
        </h1>
        <hr className="w-1/3 h-[2px] bg-yellow-700" />
      </div>
      <div className="block lg:hidden pt-0 pb-8 lg:py-8 w-[100%]">
        <Slider {...settings} className="">
          {reasons?.map((reason, index) => (
            <div className="px-2">
              <div
                key={index}
                className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden bg-gray-100 p-4 shadow-lg mb-3"
              >
                <h1 className="font-sans-800 text-center w-full text-2xl lg:text-3xl text-gray-800-700 ">
                  {reason.title}
                </h1>
                <img src={reason.img} alt="img_before" className="rounded-xl" />
                <p className="w-full text-center text-md font-montserrat-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden w-full lg:flex flex-wrap justify-center items-center">
        <div className="w-full flex justify-start lg:justify-center overflow-x-auto gap-x-10">
          {reasons?.map((reason, index) => (
            <div key={index} className="bg-gray-100 hover:bg-yellow-50 shadow-xl rounded-lg p-4 w-3/4 lg:w-[30%] flex-shrink-0 space-y-2">
              <h1 className="h-20 font-sans-800 text-center w-full text-2xl text-gray-800">
                {reason.title}
              </h1>
              <img className="rounded-xl" src={reason.img} alt="" />
              <p className="font-sans-400 text-gray-700 text-md">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden w-full justify-end text-right">
          <h1 className="text-gray-700 text-lg p-2 ">
            Deslizar para ver mas ⮕
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComparisonContainer;
