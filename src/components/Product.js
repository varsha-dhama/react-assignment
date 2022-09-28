import React from 'react'
import classes from './Product.module.css'

const Product = (props) => {
  return (
      <div className={classes.product}>
        <img
          className={classes.productImg}
          src={props.src}
          key={props.key}
          alt=""
        />
        <p>{props.name}</p>
        <p>Price: {props.price}</p>
      </div>
  );
}

export default Product