import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Footer from "../../components/Footer/Footer";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ComparisonContainer from "../../components/ComparisonContainer/ComparisonContainer";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import ChatImages from "../../components/ChatImages/ChatImages";
import OutfitCarousel from "../../components/OutfitCarousel/OutfitCarousel";
import "./LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const [homeVariant, setHomeVariant] = useState(1);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };

  return (
    <div className="bg-gray-50">
      <Header handleHomeVariant={handleHomeVariant} />
      <div className="px-4 md:px-6 lg:px-10 xl:px-24 space-y-8 lg:space-y-16 bg-gray-50 pt-8 lg:pt-32">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
        />
      </div>
      <div className="px-4 md:px-6 lg-px-0 xl:px-24 bg-gray-50 space-y-6 lg:space-y-20">
        <DescriptionPercentage />
        <ChatImages />
      </div>
      <div className="px-4 md:px-6 lg:px-10 xl:px-24 space-y-8 lg:space-y-16 bg-gray-50 pb-12 pt-8 lg:pt-32">
        <div className="w-full flex justify-center items-center">
          <OutfitCarousel />
        </div>
        <ComparisonContainer />
      </div>
      <Footer />
      <CalendlyFooter />
    </div>
  );
};

export default LandingPage;
