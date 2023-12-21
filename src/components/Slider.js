import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

const HeroSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="moving">
      <Carousel md={12}>
        <Carousel.Item interval={800}>
          <div
            className="parallax-image-container"
            style={{
              transform: `translateY(${scrollY * 80}px`,
              width: "35rem",
              marginLeft: "31rem",
            }}
          >
            <img
              className="d-block w-100 parallax-image"
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-web_banner_travel.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div
            className="parallax-image-container"
            style={{
              transform: `translateY(${scrollY * 80}px`,
              width: "35rem",
              marginLeft: "31rem",
            }}
          >
            <img
              className="d-block w-100 parallax-image"
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-we_know_sleep.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div
            className="parallax-image-container"
            style={{
              transform: `translateY(${scrollY * 80}px`,
              width: "35rem",
              marginLeft: "31rem",
            }}
          >
            <img
              className="d-block w-100 parallax-image"
              style={{ width: "25px" }}
              src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/333-2023_08_02-MC_WebBanner_AW23_1920x650_28.07.23_30__Revised_100.jpg"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
