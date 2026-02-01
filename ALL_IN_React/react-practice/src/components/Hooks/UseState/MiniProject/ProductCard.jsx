import React, { useState } from "react";

const ProductCard = ({ name, price, inStock }) => {
  const [added, setAdded] = useState(false);

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "16px",
        width: "250px",
        marginBottom: "16px",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>

      {inStock ? (
        <button onClick={() => setAdded(true)}>
          {added ? "Added" : "Add to Cart"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
