import React from "react";
import sizes from "../../utils/sizes";
 
const SizesSelector = ({ handleSize, selectedSize }) => {
  const handleSizeSelection = (size) => {
    handleSize(size);
  };

  const groupedSizes = [];
  for (let i = 0; i < sizes.length; i += 5) {
    groupedSizes.push(sizes.slice(i, i + 5));
  }

  return (
    <div className="overflow-x-auto w-full lg:w-1/2">
      <div className="grid grid-cols-4">
        {groupedSizes.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((size) => (
              <div key={size}>
                <div
                  className={`cursor-pointer border w-auto flex justify-center border-gray-300 overflow-hidden ${
                    selectedSize === size ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => handleSizeSelection(size)}
                >
                  <div className="p-1 px-2">{size}</div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SizesSelector;
