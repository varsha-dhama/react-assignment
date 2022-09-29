import React, { useEffect, useState } from "react";
import Product from "./Product";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetch(`https://node-sample-api.herokuapp.com/api/products?page=${pageNum}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, ...data.data]);
      });
  }, [pageNum]);

  const loadMoreProducts = () => {
    setPageNum((pageNum) => pageNum + 1);
  };

  return (
    <div className={classes.productList}>
      <h2>Products</h2>
      {products?.length > 0 &&
        products.map((product, index) => (
          <Product
            key={product?.id}
            id={product?.id}
            src={product?.img}
            name={product?.name}
            price={product?.price}
          />
        ))}
      <button className={classes.btn} onClick={loadMoreProducts}>
        Load More
      </button>
    </div>
  );
};

export default ProductList;
