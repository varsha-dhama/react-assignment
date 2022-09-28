import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://node-sample-api.herokuapp.com/api/products?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);


  return (
    <div>
        <h2>Products</h2>
      {products.map((product) => (
        <Product src={product.img} name={product.name} price={product.price} />
      ))}
      <button>Load More</button>
    </div>
  );
};

export default ProductList;
