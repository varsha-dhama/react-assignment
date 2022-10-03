import React from "react";
// import Slider from "./Slider";
import ProductList from "./ProductList";
import classes from "./HomePage.module.css";
import Carousel from "./Carousel";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Header pathname={window.location.pathname} />
      <Carousel />
      <hr />
      <ProductList />
    </div>
  );
};

export default HomePage;
