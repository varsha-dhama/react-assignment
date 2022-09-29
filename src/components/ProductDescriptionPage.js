import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDescriptionPage.module.css";
import { FaStar } from "react-icons/fa";

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

  const star = Array(productDetail?.rating).fill(null);

  return (
    <div className={classes.productDescription}>
      <div>
        <img className={classes.productImage} src={productDetail?.img} alt="" />
      </div>
      <div className={classes.productDetails}>
        <p>
          <span>Product Name: </span>
          {productDetail?.name}
        </p>
        <p>
          <span>Rating: </span>
          {productDetail?.rating}
        </p>
        <p>
          <span>Rating :</span>{" "}
          {star.map((_, index) => (
            <React.Fragment key={index}>
              <FaStar color="FFD700" fontSize="16" />
            </React.Fragment>
          ))}
        </p>
        <p>
          <span>Price: </span>
          {productDetail?.price}
        </p>
        <p>
          <span>Description: </span>
          {productDetail?.description}
        </p>
        {/* <p>{params.productId}</p> */}
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
