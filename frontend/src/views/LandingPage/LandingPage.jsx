import React, {useState} from "react";
import Header from "../../components/Header/Header";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";
import DescriptionAndPhotos from "../../components/DescriptionAndPhotos/DescriptionAndPhotos";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ComparisonContainer from "../../components/ComparisonContainer/ComparisonContainer";
import Flyer from "../../components/Flyer/Flyer";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import ChatImages from "../../components/ChatImages/ChatImages";
import QuestionsAnswersHome from "../../components/QuestionsAnswersHome/QuestionsAnswersHome";
import OutfitCarousel from "../../components/OutfitCarousel/OutfitCarousel";
import img from "../../assets/img3.jpg";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img5.jpg";
import "./LandingPage.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {

  const [homeVariant, setHomeVariant] = useState(1);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };

  const images = [img, img2, img3];
  return (
    <div>
      <Header handleHomeVariant={handleHomeVariant} />
      <div className="px-4 md:px-6 lg:px-10 xl:px-24 space-y-16 bg-gray-50 pb-12 pt-8 lg:pt-32">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
        />
        <ComparisonContainer />
        <div className="w-full flex justify-center items-center">
          <OutfitCarousel images={images} />
        </div>
      </div>
      {/* <Flyer /> */}
      <div className="px-4 md:px-6 lg-px-0 xl:px-24 bg-gray-50 py-12 space-y-6">
        <DescriptionPercentage />
        <ChatImages />
      </div>
      <Footer />
      <CalendlyFooter />
    </div>
  );
};

export default LandingPage;
