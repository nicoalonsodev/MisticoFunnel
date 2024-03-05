import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ComparisonSlider = ({img1, img2}) => {
  return (
    <div className='w-full h-full'>
      <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={img1} />}
      itemTwo={<ReactCompareSliderImage src={img2} />}
    />
    </div>
  )
}

export default ComparisonSlider
