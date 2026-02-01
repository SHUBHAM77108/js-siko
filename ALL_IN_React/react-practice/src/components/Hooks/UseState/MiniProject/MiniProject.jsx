import React from "react";
import ProductCard from "./ProductCard";

const MiniProject = () => {
  const products = [
    { name: "Wireless Mouse", price: 25.99, stockStatus: "In Stock" },
    { name: "Mechanical Keyboard", price: 89.99, stockStatus: "In Stock" },
    { name: "Gaming Monitor", price: 299.5, stockStatus: "Low Stock" },
    { name: "USB-C Hub", price: 45.0, stockStatus: "In Stock" },
    {
      name: "Noise Cancelling Headphones",
      price: 199.99,
      stockStatus: "Out of Stock",
    },
    { name: "Webcam 1080p", price: 59.99, stockStatus: "In Stock" },
    { name: "Laptop Stand", price: 34.5, stockStatus: "In Stock" },
    { name: "External SSD 1TB", price: 120.0, stockStatus: "Low Stock" },
    { name: "Smartphone Tripod", price: 15.99, stockStatus: "In Stock" },
    { name: "Bluetooth Speaker", price: 49.99, stockStatus: "Out of Stock" },
  ];

  return (
    <div>
      <ProductCard name="Shoes" price={1999} inStock={true} />
      <ProductCard name="Watch" price={2999} inStock={false} />
    </div>
  );
};

export default MiniProject;
