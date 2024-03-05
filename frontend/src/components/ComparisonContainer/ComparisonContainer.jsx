import React from "react";
import ComparisonSlider from "../ComparisonSlider/ComparisonSlider";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
const ComparisonContainer = () => {
  const comparisons = [
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
    { img1: img1, img2: img2 },
  ];

  return (
    <div className="w-full flex justify-center items-center gap-x-10">
{      comparisons?.map((comp) => ( 
      <div className="w-1/4">
        <ComparisonSlider img1={comp.img1} img2={comp.img2} />
      </div>))}
    </div>
  );
};

export default ComparisonContainer;
