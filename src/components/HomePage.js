import React from 'react'
import Slider from './Slider'
import ProductList from './ProductList'
import classes from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Slider />
      <hr />
      <ProductList />
    </div>
  );
}

export default HomePage