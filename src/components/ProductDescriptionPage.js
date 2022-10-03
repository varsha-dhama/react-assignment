import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDescriptionPage.module.css";
import { Rate } from "antd";
import "antd/dist/antd.css";
import Header from "./Header";

const ProductDescriptionPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://node-sample-api.herokuapp.com/api/products/${params?.productId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProductDetail(data);
      });
  }, [params]);

  return (
    <>
      <Header pathname={window.location.pathname} />
      <div className={classes.productDescription}>
        <div className={classes.productImageContainer}>
          <img
            className={classes.productImage}
            src={productDetail?.img}
            alt="T-Mart Product"
          />
        </div>
        <div className={classes.productDetails}>
          <h1>Product Name: </h1>
          {productDetail?.name}
          <h1>Rating :</h1>
          <Rate disabled value={productDetail?.rating} />
          <h1>Price: </h1>
          {productDetail?.price}{"/-"}
          <h1>Description:</h1>
          <p className={classes.productDescriptionText}>
            {productDetail?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptionPage;
