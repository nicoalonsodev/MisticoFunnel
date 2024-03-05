import React from "react";
import VideoMp4 from "../../components/VideoMp4/VideoMp4";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-start pt-8 lg:pt-32 space-x-14">
      <div className="w-full lg:w-[38%] flex flex-wrap justify-center items-start space-y-4">
        <p className="w-full text-blue-400 font-helvetica-400 text-lg text-left">Mistico</p>
        <div className="w-full">
          <h1 className="font-roboto-500 font-semibold text-3xl md:text-4xl lg:text-5xl text-left text-gray-300">¿Como usar tu Rutina Anti-Aging Infalible?</h1>
        </div>
        <div className="flex lg:hidden justify-center items-start ">
          <VideoMp4 />
        </div>
        <div>
          <QuestionsAnswersHome />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[55%] h-full justify-center items-start py-2">
        <VideoMp4 />
      </div>
    </div>
  );
};

export default Home;
