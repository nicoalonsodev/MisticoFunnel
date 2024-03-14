import React from "react";

const ChatImages = () => {
  const chatImages = [
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-12.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-5.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-4.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-1.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-8.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-12.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-5.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-4.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-1.jpg&w=640&q=75",
    "https://www.agefit.com/_next/image?url=%2Freviews%2Freview-1.jpg&w=640&q=75",
  ];
  return (
    <div className="flex flex-wrap justify-center items-center space-y-10">
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="w-full text-center  text-yellow-700 font-roboto-400 text-xl">
          Personas reales, resultados reales
        </h1>
        <p className="w-full text-center text-gray-900 font-roboto-500 text-4xl">
          Lo que opinan nuestros clientes.
        </p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center space-y-2">
        <div className="w-full flex lg:hidden justify-center">
          <h1 className="text-gray-700 text-lg">
            Scroll para ver las opiniones
          </h1>
        </div>
        <div className="lg:hidden px-[1px] lg:px-0 h-[700px] overflow-y-auto lg:h-auto w-full grid grid-cols-1 gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-6">
          {chatImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Chat ${index}`}
              className="w-full h-auto border-2 border-black rounded-xl"
            />
          ))}
        </div>
        <div className="hidden lg:block gap-4 lg:gap-4 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-6">
          {chatImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Chat ${index}`}
              className="w-full h-auto border-2 border-black rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatImages;
