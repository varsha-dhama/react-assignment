import React, { useEffect, useState } from "react";
import classes  from "./Slider.module.css"
import "antd/dist/antd.css";
import { Carousel } from "antd";

const Slider = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    fetch("https://node-sample-api.herokuapp.com/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.carousel);
        setCarouselImages(data.carousel);
      });
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className={classes.carousel}>
      <Carousel afterChange={onChange} autoplay>
        {carouselImages.map((carouselImage) => (
          <img key={carouselImage.title} src={carouselImage.url} alt="" />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
