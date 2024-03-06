import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img from "../../assets/img3.jpg";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img5.jpg";
const ProjectGallery = () => {
  const [showNav, setShowNav] = useState(false);
  const images = [
    {
      original:
        img,
      thumbnail:
      img,
    },
    {
      original:
      img2,
      thumbnail:
      img2,
    },
    {
      original:
      img3,
      thumbnail:
      img3,
    },
  ];


  return (
    <div className="w-full">
      <div
        onMouseOver={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className="hidden lg:block w-full rounded-lg overflow-hidden cursor-pointer"
      >
        <ImageGallery
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          showNav={showNav}
        />
      </div>
      <div
        onMouseOver={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className="lg:hidden w-full rounded-lg overflow-hidden cursor-pointer"
      >
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showNav={showNav}
        />
      </div>
    </div>
  );
};

export default ProjectGallery;
