import React from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className={classes.product}>
      <Link to={`/pdp/${props?.id}`}>
        <img className={classes.productImg} src={props?.src} alt="" />
        <p>{props?.name}</p>
        <p>Price: {props?.price}</p>
      </Link>
    </div>
  );
};

export default Product;
