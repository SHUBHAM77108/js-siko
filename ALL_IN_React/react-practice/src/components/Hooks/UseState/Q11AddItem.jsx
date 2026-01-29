import React, { useState } from "react";

const Q11AddItem = () => {
  const [value, getValue] = useState("");
  const [product, setProduct] = useState([]);
  function AddProductInlist() {
    if (value.trim() === "") return;

    setProduct((prev) => [...prev, value]);
    setValue("");
  }
  return (
    <div>
      <input type="text" onChange={(e) => getValue(e.target.value)} />
      <button onClick={AddProductInlist}>Add Product</button>
      <ul>
        {product.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q11AddItem;
