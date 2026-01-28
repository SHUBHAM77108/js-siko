import React from "react";

const Q8Product = ({ productName, price, inStock }) => {
  return (
    <div>
      <h1>{productName}</h1>
      <span>{inStock ? price : "Out of Stock"}</span>
    </div>
  );
};

export default Q8Product;
