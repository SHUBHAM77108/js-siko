import React from "react";

const ProductCard = ({ items }) => {
  return (
    <ul>
      {items.map((product, index) => (
        /* Use ( ) here instead of { } */
        <li key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.stockStatus}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
