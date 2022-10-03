import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";

import Slider from "react-slick";

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    fetch("https://node-sample-api.herokuapp.com/api/home")
      .then((response) => response.json())
      .then((data) => {
        setCarouselImages((data?.carousel).slice(0, 3));
      });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={classes.carousel}>
      <Slider {...settings}>
        {carouselImages?.length > 0 &&
          carouselImages.map((carouselImage) => (
            <img key={carouselImage?.title} src={carouselImage?.url} alt="" />
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
