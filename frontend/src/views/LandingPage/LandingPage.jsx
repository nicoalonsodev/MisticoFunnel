import React from "react";
import Header from "../../components/Header/Header";
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
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="px-4 md:px-6lg:px-10 xl:px-24 space-y-16 bg-gray-100">
        <Home />
        <DescriptionAndPhotos />
        <ItemsContainer />
        <ComparisonContainer />
      </div>
      <Flyer />
      <div className="px-4 md:px-6lg:px-10 xl:px-24 bg-gray-100">
        <DescriptionPercentage />
        <ChatImages />
        <QuestionsAnswersHome />
      </div>
      <Footer />
      <CalendlyFooter />
    </div>
  );
};

export default LandingPage;
